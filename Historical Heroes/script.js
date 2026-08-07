'use strict';

/* ============================================================
   DATA
   One unit so far — Unit 1. Add future units to the `units`
   array; the render code already loops over it, so a new unit
   only needs a data entry, never a render change.

   Photo credits (all downloaded once and stored locally in
   images/ — see tech constraints: no external requests):
     garrett-morgan.jpg   — US Dept. of Transportation, public domain
     gw-carver.jpg        — Tuskegee University Archives, public domain
     jesse-owens.jpg      — Acme News Photos, 1936, public domain
     louis-armstrong.jpg  — National Portrait Gallery / Smithsonian, public domain
     nelson-mandela.jpg   — Kingkongphoto & www.celebrity-photos.com (Flickr),
                             CC BY-SA 2.0 — attribution kept here and in the UI
   Mark Dean has no freely-licensed photo available — falls back to emoji.

   Quotes are only included where a wording could be verified against a
   credible source. Garrett Morgan is skipped rather than guessed —
   most "quotes" attributed to him online trace back to an unrelated
   person of the same name.
   ============================================================ */

const units = [
  {
    id: 'unit1',
    label: 'Unit 1 · Black Men & Boys in History',
    title: 'Unit 1: Amazing Black Men & Boys in History',
    desc: "Tap a hero to find out what they did — then play their game to win a star!",
    heroes: [
      {
        id: 'garrett-morgan',
        name: 'Garrett Morgan',
        tag: 'Inventor',
        emoji: '🚦',
        photo: 'images/garrett-morgan.jpg',
        photoCredit: 'US Department of Transportation · public domain',
        accent: 'var(--h1)', tint: 'var(--h1-lt)',
        achievement: 'Garrett invented the traffic light, so cars and people could cross the road safely.',
        funFact: 'He also invented a safety hood that firefighters used to breathe in smoky buildings.',
        quote: null,
        youtubeId: 'FPzYRO4Tbww', // "Deeper Than Read", Ep.1 — https://www.youtube.com/watch?v=FPzYRO4Tbww
        match: '🚦', distractors: ['🍕', '🐘']
      },
      {
        id: 'gw-carver',
        name: 'George Washington Carver',
        tag: 'Scientist',
        emoji: '🥜',
        photo: 'images/gw-carver.jpg',
        photoCredit: 'Tuskegee University Archives · public domain',
        accent: 'var(--h2)', tint: 'var(--h2-lt)',
        achievement: 'George was a scientist who found over 300 clever new ways to use peanuts and plants.',
        funFact: 'He taught farmers how to grow healthier soil by planting different crops each year.',
        quote: { text: 'Education is the key to unlock the golden door of freedom.' },
        youtubeId: null,
        match: '🥜', distractors: ['🚀', '🎸']
      },
      {
        id: 'jesse-owens',
        name: 'Jesse Owens',
        tag: 'Athlete',
        emoji: '🏅',
        photo: 'images/jesse-owens.jpg',
        photoCredit: 'Acme News Photos, 1936 · public domain',
        accent: 'var(--h3)', tint: 'var(--h3-lt)',
        achievement: 'Jesse ran faster than everyone else in the whole world and won four gold medals!',
        funFact: 'He won all four medals at one Olympic Games, in Berlin in 1936.',
        quote: { text: 'We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.' },
        youtubeId: null,
        match: '🏅', distractors: ['🎨', '🧁']
      },
      {
        id: 'mark-dean',
        name: 'Mark Dean',
        tag: 'Inventor',
        emoji: '💻',
        photo: null,
        photoCredit: null,
        accent: 'var(--h4)', tint: 'var(--h4-lt)',
        achievement: 'Mark helped invent parts inside computers, so computers could show colour pictures.',
        funFact: 'He holds three of the very first patents for the personal computer.',
        quote: { text: "A lot of kids growing up today aren't told that you can be whatever you want to be. There may be obstacles, but there are no limits." },
        youtubeId: null,
        match: '💻', distractors: ['🚗', '🐳']
      },
      {
        id: 'louis-armstrong',
        name: 'Louis Armstrong',
        tag: 'Musician',
        emoji: '🎺',
        photo: 'images/louis-armstrong.jpg',
        photoCredit: 'National Portrait Gallery, Smithsonian · public domain',
        accent: 'var(--h5)', tint: 'var(--h5-lt)',
        achievement: 'Louis played the trumpet so wonderfully that people all over the world loved his music.',
        funFact: 'His nickname was "Satchmo", and his gravelly singing voice was just as famous as his trumpet.',
        quote: { text: 'What we play is life.' },
        youtubeId: null,
        match: '🎺', distractors: ['⚽', '📚']
      },
      {
        id: 'nelson-mandela',
        name: 'Nelson Mandela',
        tag: 'Leader',
        emoji: '🕊️',
        photo: 'images/nelson-mandela.jpg',
        photoCredit: 'Kingkongphoto & celebrity-photos.com (Flickr) · CC BY-SA 2.0',
        accent: 'var(--h6)', tint: 'var(--h6-lt)',
        achievement: 'Nelson worked hard for fairness and became the very first president chosen by everyone in South Africa.',
        funFact: 'His clan name was Madiba, and people all over the world still call him that today.',
        quote: { text: "It always seems impossible until it's done." },
        youtubeId: null,
        match: '🕊️', distractors: ['🍩', '🚂']
      }
    ]
  }
  // Future units go here, e.g. { id: 'unit2', label: 'Unit 2 · ...', heroes: [...] }
];

const FUTURE_UNITS = [
  { label: '🔒 Unit 2 · Coming soon' },
  { label: '🔒 Unit 3 · Coming soon' }
];


/* ============================================================
   CONFIG
   ============================================================ */

const STORAGE_KEY = 'historicalHeroes_progress'; // { [unitId]: [heroId, ...] } — no personal data, just badge progress


/* ============================================================
   STATE
   ============================================================ */

const state = {
  currentUnit: units[0],
  earned: loadProgress(),   // { unitId: Set(heroId) }
  openIndex: -1,
  answered: false,
  lastFocused: null
};


/* ============================================================
   UTILITY
   ============================================================ */

function $(id) { return document.getElementById(id); }

/** Safely insert data strings into innerHTML */
function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadProgress() {
  const result = {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    units.forEach(u => { result[u.id] = new Set(parsed[u.id] || []); });
  } catch (_) {
    units.forEach(u => { result[u.id] = new Set(); });
  }
  return result;
}

function saveProgress() {
  try {
    const plain = {};
    Object.keys(state.earned).forEach(unitId => { plain[unitId] = [...state.earned[unitId]]; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plain));
  } catch (_) { /* private browsing / storage full — progress just won't persist */ }
}

function heroesOfCurrentUnit() {
  return state.currentUnit.heroes;
}

function earnedSet() {
  return state.earned[state.currentUnit.id];
}


/* ============================================================
   RENDER
   ============================================================ */

function renderUnitStrip() {
  const inner = $('unit-strip-inner');
  const chips = units.map(u => {
    const isActive = u.id === state.currentUnit.id;
    return `<button type="button" class="unit-chip ${isActive ? 'active' : ''}"
        data-unit="${safeText(u.id)}" aria-pressed="${isActive}">
      ${safeText(u.label)}
    </button>`;
  }).join('');
  const futureChips = FUTURE_UNITS.map(u => `
    <button type="button" class="unit-chip" disabled>${safeText(u.label)}</button>
  `).join('');
  inner.innerHTML = chips + futureChips;
}

function renderGallery() {
  $('unit-title').textContent = state.currentUnit.title;
  $('unit-desc').textContent = state.currentUnit.desc;

  const earned = earnedSet();
  const grid = $('hero-grid');
  grid.innerHTML = heroesOfCurrentUnit().map((h, i) => `
    <button type="button" class="hero-card" data-index="${i}"
      style="--accent:${h.accent};--tint:${h.tint}"
      aria-label="${safeText(h.name)}, ${safeText(h.tag)}${earned.has(h.id) ? ' — star earned' : ''}">
      <span class="hero-star-badge ${earned.has(h.id) ? 'earned' : ''}" aria-hidden="true">⭐</span>
      ${photoWrapHTML(h, 'sm')}
      <span class="hero-card-name">${safeText(h.name)}</span>
      <span class="hero-card-role">${safeText(h.tag)}</span>
    </button>
  `).join('');

  renderProgress();
}

/** Inner markup only — an <img> with an emoji fallback, or just the emoji when there's no photo. */
function photoInnerHTML(hero) {
  if (!hero.photo) {
    return `<span class="hero-photo-fallback">${hero.emoji}</span>`;
  }
  return `<img class="hero-photo" src="${hero.photo}" alt=""
      onerror="this.parentElement.classList.add('no-photo');this.style.display='none';this.nextElementSibling.style.display='';">
    <span class="hero-photo-fallback" style="display:none">${hero.emoji}</span>`;
}

/** Full wrapper div, for markup built as a string (gallery cards). */
function photoWrapHTML(hero, size) {
  const sizeClass = size === 'lg' ? 'hero-photo-wrap--lg' : 'hero-photo-wrap--sm';
  const noPhotoClass = hero.photo ? '' : ' no-photo';
  const bgStyle = hero.photo ? ` style="--bg-img:url('${hero.photo}')"` : '';
  return `<div class="hero-photo-wrap ${sizeClass}${noPhotoClass}"${bgStyle} aria-hidden="true">${photoInnerHTML(hero)}</div>`;
}

/** Updates the existing #hero-avatar element in place (used by the modal, which keeps a fixed id). */
function setHeroAvatar(hero) {
  const el = $('hero-avatar');
  el.className = 'hero-photo-wrap hero-photo-wrap--lg' + (hero.photo ? '' : ' no-photo');
  el.style.setProperty('--accent', hero.accent);
  el.style.setProperty('--tint', hero.tint);
  if (hero.photo) el.style.setProperty('--bg-img', `url('${hero.photo}')`);
  else el.style.removeProperty('--bg-img');
  el.innerHTML = photoInnerHTML(hero);
}

function renderProgress() {
  const total = heroesOfCurrentUnit().length;
  const n = earnedSet().size;
  $('progress-label').textContent = `You've met ${n} of ${total} heroes!`;
  $('progress-fill').style.width = (n / total * 100) + '%';
  $('progress-track').setAttribute('aria-valuemax', total);
  $('progress-track').setAttribute('aria-valuenow', n);
}

function renderHeroModal(index) {
  const heroes = heroesOfCurrentUnit();
  const h = heroes[index];
  const earned = earnedSet();

  $('hero-counter').textContent = `Hero ${index + 1} of ${heroes.length}`;
  setHeroAvatar(h);

  const credit = $('hero-photo-credit');
  if (h.photoCredit) {
    credit.textContent = `Photo: ${h.photoCredit}`;
    credit.classList.remove('hidden');
  } else {
    credit.classList.add('hidden');
  }

  $('hero-modal-name').textContent = h.name;
  const tagEl = $('hero-modal-tag');
  tagEl.textContent = h.tag;
  tagEl.style.setProperty('--accent', h.accent);
  tagEl.style.setProperty('--tint', h.tint);

  const box = document.querySelector('.achievement-box');
  box.style.setProperty('--tint', h.tint);
  $('hero-achievement').textContent = h.achievement;
  $('hero-listen-btn').style.background = h.accent;

  $('hero-funfact').textContent = h.funFact;

  const quoteBox = $('hero-quote');
  if (h.quote) {
    $('hero-quote-text').textContent = h.quote.text;
    $('hero-quote-cite').textContent = `— ${h.name}`;
    quoteBox.style.setProperty('--accent', h.accent);
    quoteBox.style.setProperty('--tint', h.tint);
    quoteBox.classList.remove('hidden');
  } else {
    quoteBox.classList.add('hidden');
  }

  renderVideo(h);

  renderGame(h, earned.has(h.id));

  $('hero-prev-btn').disabled = index === 0;
  $('hero-next-btn').disabled = index === heroes.length - 1;
}

/**
 * Video slot — click-to-load poster so nothing is requested from YouTube
 * just by opening a hero's card. Only renders anything when hero.youtubeId
 * is set (see "Known edge cases" in the directive for the lockdown approach
 * and its limits).
 */
function renderVideo(hero) {
  const box = $('hero-video');
  if (!hero.youtubeId) {
    box.classList.add('hidden');
    box.innerHTML = '';
    return;
  }
  box.classList.remove('hidden');
  box.style.setProperty('--tint', hero.tint);
  const firstName = safeText(hero.name.split(' ')[0]);

  // YouTube's embedded player rejects file:// pages (no valid page origin to check) and shows
  // its own cryptic "Error 153 / configuration error" instead of the video. Rather than let a
  // child hit that, detect it up front and point to the launcher that already solves it.
  if (location.protocol === 'file:') {
    box.innerHTML = `
      <div class="video-poster">
        <p class="video-note-main">🎬 ${firstName}'s video needs Alpha School's launcher.</p>
        <p class="video-note">Open <strong>"Start Alpha School"</strong> on the Desktop, then come back to this hero to watch it.</p>
      </div>`;
    return;
  }

  box.innerHTML = `
    <div class="video-poster">
      <button type="button" class="video-watch-btn" style="background:${hero.accent}" data-yt="${safeText(hero.youtubeId)}">
        ▶ Watch ${firstName}'s video
      </button>
      <p class="video-note">Opens a video — needs the internet, stays on this page</p>
    </div>`;
}

function loadVideo(youtubeId) {
  const box = $('hero-video');
  const params = 'rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&controls=1';
  box.innerHTML = `
    <iframe
      src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?${params}"
      title="Hero video"
      referrerpolicy="strict-origin-when-cross-origin"
      loading="lazy"
      allow="encrypted-media; picture-in-picture"
      frameborder="0"></iframe>`;
}

function renderGame(hero, alreadyEarned) {
  state.answered = alreadyEarned;
  $('game-question').textContent = `Which picture matches what ${hero.name.split(' ')[0]} did?`;

  const opts = shuffle([hero.match, ...hero.distractors]);
  $('game-options').innerHTML = opts.map(e => `
    <button type="button" class="game-opt" data-emoji="${safeText(e)}" ${alreadyEarned ? 'disabled' : ''}
      aria-label="${alreadyEarned && e === hero.match ? 'Correct answer' : 'Answer option'}">
      ${e}
    </button>
  `).join('');

  if (alreadyEarned) {
    $('game-options').querySelectorAll('.game-opt').forEach(b => {
      if (b.dataset.emoji === hero.match) b.classList.add('correct');
    });
  }

  $('game-feedback').textContent = '';
  $('game-earned').classList.toggle('hidden', !alreadyEarned);
}


/* ============================================================
   ACTIONS
   ============================================================ */

function openHero(index) {
  state.openIndex = index;
  state.lastFocused = document.activeElement;
  renderHeroModal(index);
  $('hero-overlay').classList.remove('hidden');
  $('hero-close-btn').focus();
  document.addEventListener('keydown', onModalKeydown);
}

function closeHero() {
  $('hero-overlay').classList.add('hidden');
  cancelSpeech();
  $('hero-video').innerHTML = ''; // stops any playing video — hiding the overlay alone wouldn't
  document.removeEventListener('keydown', onModalKeydown);
  if (state.lastFocused) state.lastFocused.focus();
}

function goHero(dir) {
  const heroes = heroesOfCurrentUnit();
  const next = state.openIndex + dir;
  if (next < 0 || next >= heroes.length) return;
  cancelSpeech();
  openHero(next);
}

function handleAnswer(btn, hero) {
  if (state.answered) return;
  const right = btn.dataset.emoji === hero.match;

  if (right) {
    state.answered = true;
    btn.classList.add('correct');
    $('game-feedback').textContent = '⭐ Yes! Well done!';
    $('game-options').querySelectorAll('.game-opt').forEach(b => { b.disabled = true; });
    burstStars(btn);
    playDing();

    const earned = earnedSet();
    if (!earned.has(hero.id)) {
      earned.add(hero.id);
      saveProgress();
      $('game-earned').classList.remove('hidden');
      renderGallery(); // refreshes star badges + progress bar behind the modal

      if (earned.size === heroesOfCurrentUnit().length) {
        setTimeout(showCelebration, 700);
      }
    }
  } else {
    btn.classList.add('wrong');
    $('game-feedback').textContent = 'Try again!';
    setTimeout(() => btn.classList.remove('wrong'), 400);
  }
}

function showCelebration() {
  $('celebration-overlay').classList.remove('hidden');
  $('celebration-close-btn').focus();
  document.addEventListener('keydown', onCelebrationKeydown);
}

function closeCelebration() {
  $('celebration-overlay').classList.add('hidden');
  document.removeEventListener('keydown', onCelebrationKeydown);
}

function onModalKeydown(e) {
  if (e.key === 'Escape') closeHero();
}

function onCelebrationKeydown(e) {
  if (e.key === 'Escape') closeCelebration();
}


/* ── Effects (WebAudio + emoji burst — no audio files needed) ── */

function burstStars(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
  for (let i = 0; i < 10; i++) {
    const star = document.createElement('span');
    star.textContent = i % 2 === 0 ? '✨' : '⭐';
    star.setAttribute('aria-hidden', 'true');
    const dx = (Math.random() - 0.5) * 200, dy = -50 - Math.random() * 120;
    star.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;font-size:${0.9 + Math.random()}rem;` +
      `pointer-events:none;z-index:999;transform:translate(-50%,-50%);--dx:${dx}px;--dy:${dy}px;` +
      `animation:starFly 0.8s ease-out forwards;`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 850);
  }
}

function playDing() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'sine'; o.frequency.value = 660;
    g.gain.setValueAtTime(0.25, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.5);
    o.start(); o.stop(c.currentTime + 0.5);
    o.onended = () => c.close(); // each correct answer opened a fresh AudioContext — close it once done, don't leak
  } catch (_) { /* AudioContext unavailable — silently skip the chime */ }
}


/* ── Speech (browser TTS — dynamic text, per Alpha School audio pattern) ── */

if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {}, { once: true });
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const doSpeak = () => {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-GB';
    utt.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith('en'));
    if (match) utt.voice = match;
    window.speechSynthesis.speak(utt);
  };
  const voices = window.speechSynthesis.getVoices();
  if (voices.length) doSpeak();
  else window.speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
}

function cancelSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderUnitStrip();
  renderGallery();

  // Unit strip — switches state.currentUnit once a second unit exists
  $('unit-strip-inner').addEventListener('click', e => {
    const btn = e.target.closest('[data-unit]');
    if (!btn) return;
    const unit = units.find(u => u.id === btn.dataset.unit);
    if (unit && unit.id !== state.currentUnit.id) {
      state.currentUnit = unit;
      renderUnitStrip();
      renderGallery();
    }
  });

  // Gallery — event delegation
  $('hero-grid').addEventListener('click', e => {
    const btn = e.target.closest('.hero-card');
    if (btn) openHero(Number(btn.dataset.index));
  });

  // Video — click-to-load poster (event delegation: the button is re-created per hero)
  $('hero-video').addEventListener('click', e => {
    const btn = e.target.closest('.video-watch-btn');
    if (btn) loadVideo(btn.dataset.yt);
  });

  // Hero modal controls
  $('hero-close-btn').addEventListener('click', closeHero);
  $('hero-prev-btn').addEventListener('click', () => goHero(-1));
  $('hero-next-btn').addEventListener('click', () => goHero(1));
  $('hero-listen-btn').addEventListener('click', () => {
    const h = heroesOfCurrentUnit()[state.openIndex];
    if (!h) return;
    const parts = [h.achievement, h.funFact];
    speakText(parts.join(' '));
    const btn = $('hero-listen-btn');
    btn.classList.remove('playing');
    void btn.offsetWidth;
    btn.classList.add('playing');
  });

  // Game — event delegation (options are re-rendered per hero)
  $('game-options').addEventListener('click', e => {
    const btn = e.target.closest('.game-opt');
    if (!btn) return;
    const h = heroesOfCurrentUnit()[state.openIndex];
    if (h) handleAnswer(btn, h);
  });

  // Click outside the modal card closes it
  $('hero-overlay').addEventListener('click', e => {
    if (e.target === $('hero-overlay')) closeHero();
  });
  $('celebration-overlay').addEventListener('click', e => {
    if (e.target === $('celebration-overlay')) closeCelebration();
  });

  $('celebration-close-btn').addEventListener('click', closeCelebration);
});
