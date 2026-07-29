'use strict';

/* ============================================================
   SYSTEM PROMPT
   Returns JSON: { answer, imageKeyword, activity }
   ============================================================ */

const SYSTEM_PROMPT = `You are the Why's That? — a place where children aged 4 to 10 come to get honest, clear answers about the world.

You MUST respond with raw valid JSON only — no markdown, no code fences, no extra text. Use this exact format:
{"answer": "Your answer here.", "imageKeyword": "wikipedia article title", "activity": "Your activity here."}

Rules for 'answer':
1. Only answer questions about: science, nature, animals, the human body, space, food, weather, geography, history, or how things in the real world work.
2. If the question is outside that scope, set answer to: "I only know about how the world works. Try asking me why the sky changes colour, or how fish breathe underwater — those are good ones." and set imageKeyword to "library" and activity to "".
3. 3 to 5 sentences maximum.
4. Use simple, vivid language. If you use a long word, explain it in the same breath. Use comparisons to things a young child already knows — like magnets, or how water feels, or how food tastes.
5. Do NOT open with "Great question!" or any praise. Start directly with the answer.
6. Do NOT be patronising. You are talking to a curious, capable person who simply has not encountered this information yet.
7. If scientists do not fully know the answer, say so simply and honestly.
8. End with one short sentence that opens a new door of curiosity — a connected fact or a wonder to chase next.

Rules for 'imageKeyword':
- A single English noun or very short phrase (2 to 3 words max)
- Choose the main concrete subject of the answer — something that has a clear, visual Wikipedia article
- Examples: "photosynthesis", "blue whale", "solar system", "rainbow", "digestive system", "volcano", "honey bee"
- Avoid abstract terms. Prefer the most concrete, visual noun in your answer.

Rules for 'activity':
- A single hands-on activity a child can do right now using only everyday household items (water, salt, vinegar, paper, a torch, ice, food colouring, a glass, etc.)
- 1 to 2 sentences. Start with an action verb. Be specific about quantities and steps.
- The activity must directly demonstrate or explore the science in the answer — not just be vaguely related.
- It must be completely safe for a child to do unsupervised or with minimal adult help.
- If no meaningful activity exists for the topic (e.g. questions about the deep ocean or distant galaxies), set activity to "".
- Examples: "Fill a glass with water and put a pencil in it — look at how the pencil appears to bend where it enters the water. That bending is refraction, the same thing that splits sunlight into a rainbow."`;

const MODEL           = 'claude-haiku-4-5-20251001';
const API_URL         = 'https://api.anthropic.com/v1/messages';
const WIKI_URL        = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

/* ============================================================
   STATE
   ============================================================ */

let currentQuestion = '';
let currentAnswer   = '';
let recognition     = null;
const synth = window.speechSynthesis;


/* ============================================================
   UTILITIES
   ============================================================ */

function $(id) { return document.getElementById(id); }

function getApiKey()     { return localStorage.getItem('why_api_key') || ''; }
function saveApiKey(k)   { localStorage.setItem('why_api_key', k.trim()); }
function clearApiKey()   { localStorage.removeItem('why_api_key'); }

function cacheKey(q)     { return 'why_q_' + q.toLowerCase().trim().replace(/\s+/g, ' '); }
function getCached(q)    { try { const r = localStorage.getItem(cacheKey(q)); return r ? JSON.parse(r) : null; } catch { return null; } }
function setCached(q, d) { try { localStorage.setItem(cacheKey(q), JSON.stringify(d)); } catch { /* storage full */ } }

function showState(id) {
  ['idle-state','listening-state','loading-state','answer-state','error-state']
    .forEach(s => $(s).classList.toggle('hidden', s !== id));
}

const NATIVE_TTS = 'http://localhost:8081';

function cancelNative() {
  fetch(NATIVE_TTS + '/cancel', { method: 'POST' }).catch(() => {});
}

/* Load voices, waiting for the async voiceschanged event if needed */
function getVoices() {
  return new Promise(resolve => {
    const v = synth.getVoices();
    if (v.length) { resolve(v); return; }
    const handler = () => resolve(synth.getVoices());
    synth.addEventListener('voiceschanged', handler, { once: true });
    setTimeout(() => { synth.removeEventListener('voiceschanged', handler); resolve(synth.getVoices()); }, 600);
  });
}

async function speakBrowser(text) {
  if (!synth) return;
  synth.cancel();
  const voices = await getVoices();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-GB';
  utt.rate = 0.88;
  const v = voices.find(v => v.lang.startsWith('en-GB') && !v.name.includes('Compact'))
         || voices.find(v => v.lang.startsWith('en-GB'))
         || voices.find(v => v.lang.startsWith('en'));
  if (v) utt.voice = v;
  await new Promise(resolve => {
    utt.onend  = resolve;
    utt.onerror = resolve;
    synth.speak(utt);
  });
}

async function speakNative(text, onEnd) {
  let ok = false;
  try {
    const res = await fetch(NATIVE_TTS + '/speak', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ text })
    });
    ok = res.ok;
    if (!ok) console.warn('[TTS] server returned', res.status);
  } catch (e) {
    console.warn('[TTS] native unreachable, falling back to browser voice:', e.message);
  }
  if (!ok) await speakBrowser(text);
  if (onEnd) onEnd();
}

function speak(text, onEnd) {
  speakNative(text, onEnd);
}

/* ============================================================
   SETUP (first run)
   ============================================================ */

function initApp() {
  if (!getApiKey()) {
    $('setup-screen').classList.remove('hidden');
    $('main-screen').classList.add('hidden');
  } else {
    $('setup-screen').classList.add('hidden');
    $('main-screen').classList.remove('hidden');
    showState('idle-state');
  }
}

$('save-key-btn').addEventListener('click', () => {
  const key = $('api-key-input').value.trim();
  if (!key.startsWith('sk-ant-')) {
    alert('That doesn\'t look right — the key should start with sk-ant-');
    return;
  }
  saveApiKey(key);
  initApp();
});

$('api-key-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') $('save-key-btn').click();
});

$('settings-btn').addEventListener('click', () => {
  if (confirm('Reset API key? You\'ll need to enter it again.')) {
    clearApiKey();
    synth.cancel();
    initApp();
  }
});

/* ============================================================
   SPEECH RECOGNITION
   ============================================================ */

function startListening() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    showError('Voice input isn\'t supported here. Use "Type instead" below, or open this in Chrome.');
    return;
  }
  showState('listening-state');

  recognition = new SR();
  recognition.lang            = 'en-GB';
  recognition.interimResults  = false;
  recognition.maxAlternatives = 1;
  recognition.continuous      = false;

  recognition.onresult = e => {
    const text = e.results[0][0].transcript.trim();
    if (!text) { showState('idle-state'); return; }
    currentQuestion = text;
    fetchAnswer();
  };

  recognition.onerror = e => {
    if (e.error === 'no-speech' || e.error === 'aborted') {
      showState('idle-state');
    } else {
      showError('Couldn\'t hear that clearly. Try again, or use the type option.');
    }
  };

  recognition.start();
}

$('mic-btn').addEventListener('click', startListening);

$('stop-btn').addEventListener('click', () => {
  if (recognition) { recognition.stop(); recognition = null; }
  showState('idle-state');
});

/* ── Type fallback ── */

$('type-toggle-btn').addEventListener('click', () => {
  $('type-input-area').classList.toggle('hidden');
  if (!$('type-input-area').classList.contains('hidden')) $('type-input').focus();
});

function submitTyped() {
  const text = $('type-input').value.trim();
  if (!text) return;
  currentQuestion = text;
  $('type-input').value = '';
  $('type-input-area').classList.add('hidden');
  fetchAnswer();
}

$('type-submit-btn').addEventListener('click', submitTyped);
$('type-input').addEventListener('keydown', e => { if (e.key === 'Enter') submitTyped(); });

/* ============================================================
   WIKIPEDIA IMAGE
   ============================================================ */

async function fetchWikipediaImage(keyword) {
  const tryTerm = async (term) => {
    try {
      const res = await fetch(WIKI_URL + encodeURIComponent(term), {
        headers: { 'Api-User-Agent': 'LibraryOfWhys/1.0 (educational child app)' }
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.thumbnail?.source || null;
    } catch { return null; }
  };

  /* try full keyword, then first word only as fallback */
  return (await tryTerm(keyword)) || (await tryTerm(keyword.split(' ')[0])) || null;
}

/* ============================================================
   API CALL
   ============================================================ */

async function fetchAnswer() {
  /* serve from cache instantly — no loading screen, no API cost */
  const cached = getCached(currentQuestion);
  if (cached) {
    showAnswer(cached.answer, cached.imageUrl, cached.imageKeyword, cached.activity || '');
    return;
  }

  showState('loading-state');

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type':                              'application/json',
        'x-api-key':                                 getApiKey(),
        'anthropic-version':                         '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model:      MODEL,
        max_tokens: 400,
        system:     SYSTEM_PROMPT,
        messages:   [{ role: 'user', content: currentQuestion }]
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      if (res.status === 401) throw new Error('API key not recognised. Check it in settings.');
      throw new Error(errData?.error?.message || `HTTP ${res.status}`);
    }

    const data    = await res.json();
    const raw     = data.content?.[0]?.text || '';
    const parsed  = parseResponse(raw);

    const imageUrl = parsed.imageKeyword
      ? await fetchWikipediaImage(parsed.imageKeyword)
      : null;

    const entry = {
      answer:       parsed.answer,
      imageKeyword: parsed.imageKeyword,
      activity:     parsed.activity || '',
      imageUrl
    };
    setCached(currentQuestion, entry);

    /* Log to localStorage (parent view offline fallback) */
    try {
      const log = JSON.parse(localStorage.getItem('why_questions_log') || '[]');
      log.push({
        timestamp:    new Date().toISOString(),
        question:     currentQuestion,
        answer:       parsed.answer,
        activity:     parsed.activity || '',
        imageKeyword: parsed.imageKeyword || ''
      });
      localStorage.setItem('why_questions_log', JSON.stringify(log));
    } catch {}

    /* Log to TTS server (persists across browser clears) */
    fetch('http://localhost:8081/log', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        question:     currentQuestion,
        answer:       parsed.answer,
        activity:     parsed.activity || '',
        imageKeyword: parsed.imageKeyword || ''
      })
    }).catch(() => {});

    showAnswer(parsed.answer, imageUrl, parsed.imageKeyword, parsed.activity || '');

  } catch (err) {
    console.error("[Why's That?]", err);
    showError(err.message || 'Couldn\'t get an answer. Check your connection and try again.');
  }
}

function parseResponse(raw) {
  /* strip markdown code fences if Claude wraps in them */
  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  try {
    const obj = JSON.parse(cleaned);
    if (obj.answer) return obj;
  } catch { /* fall through */ }
  /* graceful fallback: treat entire response as the answer */
  return { answer: raw, imageKeyword: null };
}

/* ============================================================
   PARTICLES
   ============================================================ */

let particleRAF = null;

function stopParticles() {
  if (particleRAF) { cancelAnimationFrame(particleRAF); particleRAF = null; }
  const c = $('particle-canvas');
  if (c) c.getContext('2d').clearRect(0, 0, c.width, c.height);
}

function getCategory(keyword) {
  const k = (keyword || '').toLowerCase();
  if (/space|star|planet|moon|solar|galaxy|universe|comet|meteor|orbit|nebula/.test(k)) return 'space';
  if (/rain|cloud|storm|lightning|thunder|snow|ice|wind|weather|tornado|hurricane|rainbow/.test(k)) return 'weather';
  if (/ocean|sea|wave|fish|whale|shark|dolphin|coral|underwater|tide|reef/.test(k)) return 'ocean';
  if (/fire|volcano|lava|magma|flame|combustion|explosion/.test(k)) return 'fire';
  if (/tree|leaf|plant|flower|forest|jungle|nature|grass|pollen|photosynthesis|seed/.test(k)) return 'nature';
  if (/animal|bird|bee|butterfly|insect|dinosaur|lion|tiger|elephant|reptile|bacteria|cell/.test(k)) return 'nature';
  return 'sparkle';
}

function buildParticles(category, w, h) {
  const rnd = (a, b) => a + Math.random() * (b - a);
  const ps  = [];

  if (category === 'space') {
    for (let i = 0; i < 50; i++) ps.push({
      x: rnd(0,w), y: rnd(0,h), vx: rnd(-.06,.06), vy: rnd(-.04,.04),
      r: rnd(.8,2.2), ph: rnd(0,Math.PI*2),
      tick(w,h){ this.x=(this.x+this.vx+w)%w; this.y=(this.y+this.vy+h)%h; this.ph+=.035; },
      draw(ctx){ ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${.3+.45*Math.sin(this.ph)})`; ctx.fill(); }
    });

  } else if (category === 'weather') {
    for (let i = 0; i < 38; i++) ps.push({
      x: rnd(0,w), y: rnd(0,h), vx: rnd(.4,.9), vy: rnd(4,9),
      len: rnd(8,18), a: rnd(.15,.4),
      tick(w,h){ this.x+=this.vx; this.y+=this.vy;
        if(this.y>h){this.y=-this.len; this.x=rnd(0,w);} },
      draw(ctx){ ctx.beginPath(); ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x-this.vx*1.5,this.y-this.len);
        ctx.strokeStyle=`rgba(160,210,255,${this.a})`; ctx.lineWidth=1.2; ctx.stroke(); }
    });

  } else if (category === 'ocean') {
    for (let i = 0; i < 32; i++) ps.push({
      x: rnd(0,w), y: rnd(0,h), vy: rnd(.4,1.4),
      r: rnd(2,7), a: rnd(.12,.38),
      tick(w,h){ this.y-=this.vy; this.a-=.0015;
        if(this.y<-10||this.a<=0){this.y=h+rnd(0,20); this.x=rnd(0,w); this.a=rnd(.12,.38);} },
      draw(ctx){ ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.strokeStyle=`rgba(100,200,255,${this.a})`; ctx.lineWidth=1.5; ctx.stroke(); }
    });

  } else if (category === 'fire') {
    for (let i = 0; i < 45; i++) ps.push({
      x: rnd(0,w), y: rnd(h*.5,h), vx: rnd(-.4,.4), vy: rnd(1.5,3.5),
      r: rnd(2,5), life: rnd(0,1), decay: rnd(.008,.02), hue: rnd(10,45),
      tick(w,h){ this.x+=this.vx+Math.sin(this.life*3)*.4; this.y-=this.vy;
        this.life-=this.decay; this.r*=.997;
        if(this.life<=0||this.y<0){this.x=rnd(0,w); this.y=rnd(h*.55,h);
          this.life=rnd(.5,1); this.r=rnd(2,5);} },
      draw(ctx){ ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillStyle=`hsla(${this.hue},90%,58%,${this.life*.65})`; ctx.fill(); }
    });

  } else if (category === 'nature') {
    for (let i = 0; i < 28; i++) ps.push({
      x: rnd(0,w), y: rnd(0,h), vx: rnd(-.25,.25), vy: rnd(.25,.7),
      ang: rnd(0,Math.PI*2), spin: rnd(-.02,.02),
      sw: rnd(5,10), sh: rnd(2.5,5), a: rnd(.2,.45), hue: rnd(90,145),
      tick(w,h){ this.x+=this.vx+Math.sin(this.ang)*.25; this.y+=this.vy;
        this.ang+=this.spin;
        if(this.y>h+10){this.y=-10; this.x=rnd(0,w);} },
      draw(ctx){ ctx.save(); ctx.translate(this.x,this.y); ctx.rotate(this.ang);
        ctx.beginPath(); ctx.ellipse(0,0,this.sw,this.sh,0,0,Math.PI*2);
        ctx.fillStyle=`hsla(${this.hue},65%,42%,${this.a})`; ctx.fill(); ctx.restore(); }
    });

  } else {
    /* sparkle — gold/purple drifting upward */
    for (let i = 0; i < 38; i++) ps.push({
      x: rnd(0,w), y: rnd(0,h), vx: rnd(-.18,.18), vy: rnd(.2,.55),
      r: rnd(1,2.4), ph: rnd(0,Math.PI*2), hue: rnd(265,310),
      tick(w,h){ this.x+=this.vx; this.y-=this.vy; this.ph+=.055;
        if(this.y<-5){this.y=h+5; this.x=rnd(0,w);} },
      draw(ctx){ ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillStyle=`hsla(${this.hue},80%,72%,${.25+.45*Math.abs(Math.sin(this.ph))})`; ctx.fill(); }
    });
  }
  return ps;
}

function startParticles(keyword) {
  stopParticles();
  const canvas = $('particle-canvas');
  if (!canvas) return;
  const card    = canvas.parentElement;
  canvas.width  = card.offsetWidth;
  canvas.height = card.offsetHeight;
  const ctx     = canvas.getContext('2d');
  const ps      = buildParticles(getCategory(keyword), canvas.width, canvas.height);
  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ps.forEach(p => { p.tick(canvas.width, canvas.height); p.draw(ctx); });
    particleRAF = requestAnimationFrame(loop);
  })();
}

/* ============================================================
   SHOW ANSWER
   ============================================================ */

function showAnswer(answer, imageUrl, imageKeyword, activity) {
  currentAnswer = answer;
  showState('answer-state');
  $('answer-question').textContent = currentQuestion;

  /* card spring entrance */
  const card = document.querySelector('.answer-card');
  card.classList.remove('card-reveal');
  void card.offsetWidth;
  card.classList.add('card-reveal');

  /* particles */
  startParticles(imageKeyword);

  /* image */
  const img = $('answer-img');
  img.classList.add('hidden');
  if (imageUrl) {
    img.src    = imageUrl;
    img.alt    = currentQuestion;
    img.onload  = () => img.classList.remove('hidden');
    img.onerror = () => img.classList.add('hidden');
  }

  /* animated word reveal */
  const el = $('answer-text');
  el.innerHTML = '';
  answer.split(' ').forEach((word, i) => {
    if (i > 0) el.appendChild(document.createTextNode(' '));
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = word;
    span.style.animationDelay = `${i * 65}ms`;
    el.appendChild(span);
  });

  /* activity box */
  const box = $('activity-box');
  if (activity) {
    $('activity-text').textContent = activity;
    box.classList.remove('hidden');
  } else {
    box.classList.add('hidden');
  }

  /* speak answer then activity */
  setTimeout(() => {
    speak(answer, () => {
      if (activity) setTimeout(() => speak('Here is something you can try. ' + activity), 400);
    });
  }, 600);
}

/* replay */
$('replay-btn').addEventListener('click', () => {
  if (!currentAnswer) return;
  synth.cancel();
  setTimeout(() => speak(currentAnswer), 250);
});

$('ask-again-btn').addEventListener('click', () => {
  synth.cancel();
  cancelNative();
  stopParticles();
  currentQuestion = '';
  currentAnswer   = '';
  showState('idle-state');
});

/* ============================================================
   ERROR
   ============================================================ */

function showError(msg) {
  $('error-message').textContent = msg;
  showState('error-state');
}

$('retry-btn').addEventListener('click', () => {
  synth.cancel();
  currentQuestion = '';
  showState('idle-state');
});

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', initApp);
