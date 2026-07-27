'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */

const VEHICLES = [
  { id: 'car',        emoji: '🚙', sw: 'gari',             en: 'car',         type: 'road'  },
  { id: 'truck',      emoji: '🚛', sw: 'lori',             en: 'truck',       type: 'road'  },
  { id: 'bus',        emoji: '🚌', sw: 'basi',             en: 'bus',         type: 'road'  },
  { id: 'firetruck',  emoji: '🚒', sw: 'gari la zimamoto', en: 'fire engine', type: 'road'  },
  { id: 'motorbike',  emoji: '🏍️', sw: 'pikipiki',         en: 'motorbike',   type: 'road'  },
  { id: 'bike',       emoji: '🚲', sw: 'baiskeli',         en: 'bicycle',     type: 'road'  },
  { id: 'plane',      emoji: '✈️', sw: 'ndege',            en: 'plane',       type: 'air'   },
  { id: 'helicopter', emoji: '🚁', sw: 'helikopta',        en: 'helicopter',  type: 'air'   },
  { id: 'rocket',     emoji: '🚀', sw: 'roketi',           en: 'rocket',      type: 'air'   },
  { id: 'sailboat',   emoji: '⛵', sw: 'mashua',           en: 'sailboat',    type: 'water' },
  { id: 'ship',       emoji: '🚢', sw: 'meli',             en: 'ship',        type: 'water' },
  { id: 'train',      emoji: '🚂', sw: 'treni',            en: 'train',       type: 'rail'  },
];

const ANIMALS = [
  { id: 'lion',      emoji: '🦁', sw: 'simba',      en: 'lion'      },
  { id: 'elephant',  emoji: '🐘', sw: 'tembo',      en: 'elephant'  },
  { id: 'giraffe',   emoji: '🦒', sw: 'twiga',      en: 'giraffe'   },
  { id: 'zebra',     emoji: '🦓', sw: 'punda milia',en: 'zebra'     },
  { id: 'monkey',    emoji: '🐒', sw: 'nyani',      en: 'monkey'    },
  { id: 'cow',       emoji: '🐄', sw: "ng'ombe",    en: 'cow'       },
  { id: 'dog',       emoji: '🐕', sw: 'mbwa',       en: 'dog'       },
  { id: 'horse',     emoji: '🐎', sw: 'farasi',     en: 'horse'     },
  { id: 'pig',       emoji: '🐷', sw: 'nguruwe',    en: 'pig'       },
  { id: 'sheep',     emoji: '🐑', sw: 'kondoo',     en: 'sheep'     },
  { id: 'dolphin',   emoji: '🐬', sw: 'pomboo',     en: 'dolphin'   },
  { id: 'shark',     emoji: '🦈', sw: 'papa',       en: 'shark'     },
  { id: 'whale',     emoji: '🐋', sw: 'nyangumi',   en: 'whale'     },
  { id: 'chicken',   emoji: '🐔', sw: 'kuku',       en: 'chicken'   },
  { id: 'eagle',     emoji: '🦅', sw: 'tai',        en: 'eagle'     },
  { id: 'parrot',    emoji: '🦜', sw: 'kasuku',     en: 'parrot'    },
];

const COLOURS = [
  { id: 'red',    sw: 'nyekundu',            en: 'red',    hex: '#ef4444', vehicleEmoji: '🚗' },
  { id: 'blue',   sw: 'bluu',               en: 'blue',   hex: '#3b82f6', vehicleEmoji: '🚙' },
  { id: 'green',  sw: 'kijani',             en: 'green',  hex: '#22c55e', vehicleEmoji: '🚌' },
  { id: 'yellow', sw: 'njano',              en: 'yellow', hex: '#eab308', vehicleEmoji: '🚕' },
  { id: 'white',  sw: 'nyeupe',             en: 'white',  hex: '#e2e8f0', vehicleEmoji: '🚑' },
  { id: 'black',  sw: 'nyeusi',             en: 'black',  hex: '#1e293b', vehicleEmoji: '🚓' },
  { id: 'orange', sw: 'rangi ya machungwa', en: 'orange', hex: '#f97316', vehicleEmoji: '🚒' },
  { id: 'purple', sw: 'zambarau',           en: 'purple', hex: '#a855f7', vehicleEmoji: '🏎️' },
];

const NUMBERS = [
  { id: 'one',   sw: 'moja',  en: 'one',   num: 1  },
  { id: 'two',   sw: 'mbili', en: 'two',   num: 2  },
  { id: 'three', sw: 'tatu',  en: 'three', num: 3  },
  { id: 'four',  sw: 'nne',   en: 'four',  num: 4  },
  { id: 'five',  sw: 'tano',  en: 'five',  num: 5  },
  { id: 'six',   sw: 'sita',  en: 'six',   num: 6  },
  { id: 'seven', sw: 'saba',  en: 'seven', num: 7  },
  { id: 'eight', sw: 'nane',  en: 'eight', num: 8  },
  { id: 'nine',  sw: 'tisa',  en: 'nine',  num: 9  },
  { id: 'ten',   sw: 'kumi',  en: 'ten',   num: 10 },
];

/* ═══════════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════════ */

const CAT_CFG = {
  vehicles: { labelSw: 'Magari',   labelEn: 'Vehicles', emoji: '🚙', quizPrompt: 'Gari hili linaitwa nini?' },
  animals:  { labelSw: 'Wanyama',  labelEn: 'Animals',  emoji: '🦁', quizPrompt: 'Mnyama huyu ni nani?'    },
  colours:  { labelSw: 'Rangi',    labelEn: 'Colours',  emoji: '🎨', quizPrompt: 'Rangi hii ni nini?'      },
  numbers:  { labelSw: 'Nambari',  labelEn: 'Numbers',  emoji: '🔢', quizPrompt: 'Nambari hii ni nani?'    },
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

let state = {
  screen:      'home',
  category:    null,
  cardIndex:   0,
  quizItems:   [], quizIndex: 0, quizScore: 0, quizAnswered: false,
  modalItem:   null, modalCat: null, lastFocused: null,
};

/* ═══════════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════════ */

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function $(id) { return document.getElementById(id); }

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getAllItems(cat) {
  if (cat === 'vehicles') return VEHICLES;
  if (cat === 'animals')  return ANIMALS;
  if (cat === 'colours')  return COLOURS;
  if (cat === 'numbers')  return NUMBERS;
  return [];
}

/* ═══════════════════════════════════════════════════════════════
   AUDIO — Web Speech API
═══════════════════════════════════════════════════════════════ */

let _voices = [];
if (window.speechSynthesis) {
  _voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    _voices = window.speechSynthesis.getVoices();
  });
}

function speak(text) {
  if (!text || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'sw-KE';
  utt.rate = 0.82;
  utt.pitch = 1.05;
  const swVoice = _voices.find(v => v.lang.startsWith('sw'));
  if (swVoice) utt.voice = swVoice;
  utt.onstart = () => pulseSpeakerBtn();
  window.speechSynthesis.speak(utt);
}

function pulseSpeakerBtn() {
  const btn = $('card-speaker') || document.querySelector('.modal-speaker');
  if (!btn) return;
  btn.classList.remove('playing');
  void btn.offsetWidth;
  btn.classList.add('playing');
  setTimeout(() => btn.classList.remove('playing'), 650);
}

/* ── Star burst (quiz correct) ── */
function burstStars(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top  + rect.height / 2;
  for (let i = 0; i < 12; i++) {
    const star = document.createElement('span');
    star.textContent = i % 3 === 0 ? '✨' : '⭐';
    star.setAttribute('aria-hidden', 'true');
    const dx = (Math.random() - 0.5) * 220;
    const dy = -55 - Math.random() * 130;
    star.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;` +
      `font-size:${0.85 + Math.random() * 1.1}rem;pointer-events:none;z-index:9999;` +
      `transform:translate(-50%,-50%);--dx:${dx}px;--dy:${dy}px;` +
      `animation:starFly 0.85s ease-out forwards;`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 950);
  }
}

/* ── Web Audio helpers (scene interactions) ── */
function playDing() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'sine'; o.frequency.value = 660;
    g.gain.setValueAtTime(0.28, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.5);
    o.start(); o.stop(c.currentTime + 0.5);
  } catch(e) {}
}

function playWhoosh() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(80, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(420, c.currentTime + 0.14);
    o.frequency.exponentialRampToValueAtTime(28, c.currentTime + 0.48);
    g.gain.setValueAtTime(0.13, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.48);
    o.start(); o.stop(c.currentTime + 0.5);
  } catch(e) {}
}

function playPop() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'sine';
    o.frequency.setValueAtTime(320, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(80, c.currentTime + 0.12);
    g.gain.setValueAtTime(0.22, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.18);
    o.start(); o.stop(c.currentTime + 0.2);
  } catch(e) {}
}

/* ── Scene interactions ── */
function sunFlash() {
  const sun = document.querySelector('.h-sun');
  if (!sun) return;
  sun.style.transition = 'transform 0.12s ease-out, box-shadow 0.12s ease-out';
  sun.style.transform  = 'scale(1.45)';
  sun.style.boxShadow  = '0 0 0 28px rgba(255,255,255,0.45), 0 0 120px 60px rgba(251,191,36,0.95)';
  setTimeout(() => {
    sun.style.transition = 'transform 0.45s ease-out, box-shadow 0.45s ease-out';
    sun.style.transform  = ''; sun.style.boxShadow  = '';
    setTimeout(() => { sun.style.transition = ''; }, 500);
  }, 160);
  playDing();
  const r = sun.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('span');
    s.textContent = '✨'; s.setAttribute('aria-hidden', 'true');
    const angle = (i / 8) * Math.PI * 2;
    const dist  = 48 + Math.random() * 44;
    s.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;font-size:1rem;pointer-events:none;z-index:9999;` +
      `transform:translate(-50%,-50%);--dx:${Math.cos(angle)*dist}px;--dy:${Math.sin(angle)*dist}px;` +
      `animation:starFly 0.72s ease-out forwards;`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 780);
  }
}

function cloudPuff(el) {
  if (!el) return;
  el.style.transition = 'transform 0.1s ease-out';
  el.style.transform  = 'scale(1.55)';
  setTimeout(() => {
    el.style.transition = 'transform 0.38s cubic-bezier(0.34,1.56,0.64,1)';
    el.style.transform  = 'scale(1)';
    setTimeout(() => { el.style.transition = ''; el.style.transform = ''; }, 400);
  }, 110);
  playPop();
}

function heroTap() {
  const hero = document.querySelector('.h-hero');
  if (!hero) return;
  hero.style.transition = 'transform 0.15s ease-out';
  hero.style.transform  = 'scale(1.35) rotate(-8deg)';
  setTimeout(() => {
    hero.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    hero.style.transform  = 'scale(1) rotate(0deg)';
    setTimeout(() => { hero.style.transition = ''; hero.style.transform = ''; }, 550);
  }, 170);
  playWhoosh();
  speak('twiga'); // say "giraffe" in Swahili as a reward
}

function planeDip() {
  const plane = document.querySelector('.h-plane');
  if (!plane) return;
  plane.style.transition = 'transform 0.18s ease-out';
  plane.style.transform  = 'rotate(22deg) scale(1.25)';
  setTimeout(() => {
    plane.style.transition = 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1)';
    plane.style.transform  = 'rotate(0deg) scale(1)';
    setTimeout(() => { plane.style.transition = ''; plane.style.transform = ''; }, 450);
  }, 220);
  playWhoosh();
}

/* ── Parent settings ── */
function openParentSettings() {
  if (document.getElementById('parent-panel')) return;
  const panel = document.createElement('div');
  panel.id = 'parent-panel';
  panel.className = 'parent-panel-overlay';
  panel.innerHTML = `
    <div class="parent-panel-card" role="dialog" aria-label="About Swahili Explorer" aria-modal="true">
      <div class="pp-header">
        <span class="pp-title">⚙️ About this app</span>
        <button class="pp-close" aria-label="Close">✕</button>
      </div>
      <p class="pp-info">Swahili Explorer teaches basic Swahili vocabulary across 4 topic areas. Audio uses your browser's built-in speech engine.</p>
      <p class="pp-info" style="margin-top:10px;color:rgba(255,255,255,0.45);font-size:0.78rem;">Swahili (Kiswahili) is spoken by over 200 million people across East and Central Africa.</p>
    </div>
  `;
  panel.addEventListener('click', e => {
    if (e.target.closest('.pp-close')) { panel.remove(); return; }
    if (!e.target.closest('.parent-panel-card')) panel.remove();
  });
  document.body.appendChild(panel);
  requestAnimationFrame(() => { const c = panel.querySelector('.pp-close'); if (c) c.focus(); });
  function ppEsc(e) { if (e.key === 'Escape') { panel.remove(); document.removeEventListener('keydown', ppEsc); } }
  document.addEventListener('keydown', ppEsc);
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════════════ */

function renderHome() {
  state.screen = 'home';
  $('app').innerHTML = `
    <div class="home-scene">

      <button class="parent-settings-btn" data-action="open-parent-settings" aria-label="About this app">⚙️</button>

      <div class="h-sun scene-tap" data-action="tap-sun" aria-hidden="true"></div>
      <div class="h-cloud c1 scene-tap" data-action="tap-cloud" aria-hidden="true">☁️</div>
      <div class="h-cloud c2 scene-tap" data-action="tap-cloud" aria-hidden="true">☁️</div>
      <div class="h-plane scene-tap" data-action="tap-plane" aria-hidden="true">✈️</div>

      <button class="h-hero" data-action="tap-hero" aria-label="Tap the giraffe!">🦒</button>

      <div class="home-content">
        <div class="home-heading">
          <span class="home-flag" aria-hidden="true">🌍</span>
          <h1 class="home-title">Safari ya Kiswahili</h1>
          <p class="home-tagline">Gusa mada — tuanze safari!</p>
        </div>

        <nav class="home-cards" aria-label="Choose a topic">
          <button class="home-cat-btn vehicles" data-action="open-cat" data-cat="vehicles" aria-label="Magari — vehicles">
            <span class="home-cat-icon" aria-hidden="true">🚙</span>
            <div class="home-cat-name">Magari</div>
            <div class="home-cat-sub">Vehicles</div>
          </button>
          <button class="home-cat-btn animals" data-action="open-cat" data-cat="animals" aria-label="Wanyama — animals">
            <span class="home-cat-icon" aria-hidden="true">🦁</span>
            <div class="home-cat-name">Wanyama</div>
            <div class="home-cat-sub">Animals</div>
          </button>
          <button class="home-cat-btn colours" data-action="open-cat" data-cat="colours" aria-label="Rangi — colours">
            <span class="home-cat-icon" aria-hidden="true">🎨</span>
            <div class="home-cat-name">Rangi</div>
            <div class="home-cat-sub">Colours</div>
          </button>
          <button class="home-cat-btn numbers" data-action="open-cat" data-cat="numbers" aria-label="Nambari — numbers">
            <span class="home-cat-icon" aria-hidden="true">🔢</span>
            <div class="home-cat-name">Nambari</div>
            <div class="home-cat-sub">Numbers</div>
          </button>
        </nav>
      </div>

      <div class="h-horizon" aria-hidden="true">
        <span class="h-tree">🌴</span><span class="h-tree-s">🌿</span>
        <span class="h-tree">🌴</span><span class="h-tree-s">🌾</span>
        <span class="h-tree">🌴</span><span class="h-tree-s">🌿</span>
        <span class="h-tree">🌴</span>
      </div>

      <div class="road-strip" aria-hidden="true">
        <div class="road-dashes">
          ${Array(30).fill('<div class="road-dash"></div>').join('')}
        </div>
        <span class="road-vehicle rv-car"   aria-hidden="true">🚙</span>
        <span class="road-vehicle rv-truck" aria-hidden="true">🚛</span>
        <span class="road-vehicle rv-bike"  aria-hidden="true">🏍️</span>
      </div>

      <div class="h-grass" aria-hidden="true"></div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — CATEGORY
═══════════════════════════════════════════════════════════════ */

function renderCategory(cat) {
  state.screen   = 'category';
  state.category = cat;
  const cfg   = CAT_CFG[cat];
  const items = getAllItems(cat);
  const total = items.length;
  const idx   = state.cardIndex;

  $('app').innerHTML = `
    <div class="cat-screen">
      <header class="cat-header ${cat}">
        <button class="back-btn" data-action="go-home" aria-label="Back to home">←</button>
        <h2 class="cat-title">${cfg.emoji} ${safeText(cfg.labelSw)}</h2>
        <button class="quiz-btn" data-action="start-quiz" aria-label="Start quiz">Quiz ⚡</button>
      </header>

      <div class="card-stage" id="card-stage">
        <button class="nav-arrow" id="nav-prev" data-action="card-prev"
          aria-label="Previous word" ${idx === 0 ? 'disabled' : ''}>◀</button>
        <div class="card-display" id="card-display">
          ${buildSingleCard('none')}
        </div>
        <button class="nav-arrow" id="nav-next" data-action="card-next"
          aria-label="Next word" ${idx >= total - 1 ? 'disabled' : ''}>▶</button>
      </div>

      <div class="card-footer">
        <div class="progress-track" role="progressbar"
          aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${idx + 1}">
          <div class="progress-fill" id="progress-fill"
            style="width:${((idx + 1) / total * 100).toFixed(1)}%"></div>
        </div>
        <div class="card-counter" id="card-counter" aria-live="polite">${idx + 1} of ${total}</div>
      </div>
    </div>
  `;

  const stage = $('card-stage');
  let _tx = 0;
  stage.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = _tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) goCard(diff > 0 ? 1 : -1);
  }, { passive: true });

  setTimeout(() => speakCurrentCard(), 150);
}

function buildSingleCard(slideDir) {
  const items = getAllItems(state.category);
  if (!items.length) return '<p style="color:rgba(255,255,255,0.4);text-align:center">Hakuna maneno.</p>';

  const item    = items[state.cardIndex];
  const cat     = state.category;
  const animCls = slideDir === 'right' ? 'from-right' : slideDir === 'left' ? 'from-left' : '';

  let visual = '';
  if (cat === 'colours') {
    visual = `<div class="card-colour-swatch" style="background:${item.hex};"
      aria-label="${safeText(item.en)} colour"></div>
      <div class="card-vehicle-row" aria-hidden="true">${item.vehicleEmoji}</div>`;
  } else if (cat === 'numbers') {
    visual = `<div class="card-numeral" aria-label="${safeText(item.en)}">${item.num}</div>`;
  } else {
    const imgSrc = `../French Explorer/images/${safeText(item.id)}.jpg`;
    visual = `<div class="card-img-wrap" style="--bg-img:url('${imgSrc}')">
      <img class="card-photo" src="${imgSrc}" alt="${safeText(item.en)}"
        onerror="this.closest('.card-img-wrap').classList.add('no-img');this.style.display='none';this.nextElementSibling.style.display='block'">
      <div class="card-emoji-fallback" style="display:none" aria-hidden="true">${item.emoji}</div>
    </div>`;
  }

  return `
    <div class="card-inner ${animCls}" aria-label="${safeText(item.sw)} — ${safeText(item.en)}">
      ${visual}
      <button class="card-speaker-btn in-card" id="card-speaker"
        data-action="replay-card" aria-label="Hear the word again">
        <span aria-hidden="true">🔊</span>
        <span class="speaker-label" aria-hidden="true">tap to hear</span>
      </button>
      <div class="card-sw-word">${safeText(item.sw)}</div>
      <div class="card-en-word">${safeText(item.en)}</div>
    </div>
  `;
}

function speakCurrentCard() {
  const items = getAllItems(state.category);
  if (!items.length) return;
  speak(items[state.cardIndex].sw);
}

function goCard(dir) {
  const items = getAllItems(state.category);
  const next  = state.cardIndex + dir;
  if (next < 0 || next >= items.length) return;
  state.cardIndex = next;

  const display = $('card-display');
  if (display) display.innerHTML = buildSingleCard(dir > 0 ? 'right' : 'left');

  const total = items.length;
  const pct   = ((next + 1) / total * 100).toFixed(1);
  const fill    = $('progress-fill');
  const counter = $('card-counter');
  const bar     = document.querySelector('[role="progressbar"]');
  if (fill)    fill.style.width = pct + '%';
  if (counter) counter.textContent = `${next + 1} of ${total}`;
  if (bar)     bar.setAttribute('aria-valuenow', next + 1);

  const prev = $('nav-prev');
  const nxt  = $('nav-next');
  if (prev) prev.disabled = next === 0;
  if (nxt)  nxt.disabled  = next >= total - 1;

  speakCurrentCard();
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — QUIZ
═══════════════════════════════════════════════════════════════ */

function startQuiz() {
  state.quizItems    = shuffle(getAllItems(state.category));
  state.quizIndex    = 0;
  state.quizScore    = 0;
  state.quizAnswered = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const cat   = state.category;
  const cfg   = CAT_CFG[cat];
  const items = state.quizItems;
  const total = items.length;

  if (state.quizIndex >= total) { renderQuizComplete(); return; }

  const correct = items[state.quizIndex];
  const pool    = getAllItems(cat).filter(i => i.id !== correct.id);
  const choices = shuffle([correct, ...shuffle(pool).slice(0, 2)]);

  let visualHTML = '';
  if (cat === 'colours') {
    visualHTML = `<div class="quiz-visual" aria-label="${safeText(correct.en)} colour" style="background:${correct.hex}33;border:3px solid ${correct.hex}66;">
      <span style="font-size:3.5rem" aria-hidden="true">${correct.vehicleEmoji}</span>
    </div>`;
  } else if (cat === 'numbers') {
    visualHTML = `<div class="quiz-visual" aria-label="${safeText(correct.en)}">
      <span style="font-size:5rem;font-weight:900;color:#fff;line-height:1">${correct.num}</span>
    </div>`;
  } else {
    visualHTML = `<div class="quiz-visual" aria-hidden="true">${correct.emoji}</div>`;
  }

  $('app').innerHTML = `
    <div class="quiz-screen">
      <header class="quiz-header ${cat}">
        <button class="back-btn" data-action="exit-quiz" aria-label="Exit quiz">←</button>
        <h2 class="cat-title">${cfg.emoji} Quiz!</h2>
        <div class="quiz-score-pill" aria-live="polite">⭐ ${state.quizScore} / ${state.quizIndex}</div>
      </header>
      <div class="quiz-body">
        <p class="quiz-prompt">${safeText(cfg.quizPrompt)}</p>
        ${visualHTML}
        <div class="quiz-choices" role="group" aria-label="Choose the Swahili word">
          ${choices.map(c => `
            <button class="quiz-choice" data-action="quiz-answer"
              data-id="${safeText(c.id)}" data-correct="${safeText(correct.id)}">
              ${safeText(c.sw)}
            </button>`).join('')}
        </div>
        <p class="quiz-feedback" id="quiz-feedback" aria-live="polite" aria-atomic="true"></p>
        <button class="next-btn" id="quiz-next" data-action="quiz-next">Endelea ! →</button>
      </div>
    </div>
  `;

  setTimeout(() => speak(correct.sw), 380);
}

function renderQuizComplete() {
  const total = state.quizItems.length;
  const score = state.quizScore;
  const pct   = Math.round((score / total) * 100);
  const medal = pct >= 80 ? '🏆' : pct >= 50 ? '🥈' : '🌟';
  const msg   = pct >= 80 ? 'Vizuri sana! Hongera!' : pct >= 50 ? 'Nzuri! Endelea!' : 'Jaribu tena!';

  $('app').innerHTML = `
    <div class="quiz-screen">
      <div class="quiz-complete">
        <div class="complete-medal" aria-hidden="true">${medal}</div>
        <h2 class="complete-title">${safeText(msg)}</h2>
        <p class="complete-score">${score} / ${total} correct</p>
        <button class="complete-btn" data-action="retry-quiz">Jaribu tena 🔄</button>
        <button class="complete-btn ghost" data-action="exit-quiz">Rudi 🏠</button>
      </div>
    </div>
  `;
  setTimeout(() => speak('Vizuri sana'), 300);
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ ANSWER HANDLER
═══════════════════════════════════════════════════════════════ */

function handleQuizAnswer(btn) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const chosen  = btn.dataset.id;
  const correct = btn.dataset.correct;
  const right   = chosen === correct;

  if (right) {
    state.quizScore++;
    btn.classList.add('correct');
    $('quiz-feedback').textContent = '⭐ Vizuri sana!';
    speak('Vizuri sana');
    burstStars(btn);
  } else {
    btn.classList.add('wrong');
    const correctBtn = document.querySelector(`.quiz-choice[data-id="${correct}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
    const current = state.quizItems[state.quizIndex];
    $('quiz-feedback').textContent = `💛 Jibu ni: ${current.sw}`;
    speak(current.sw);
  }

  document.querySelectorAll('.quiz-choice').forEach(b => { b.disabled = true; });
  const nextBtn = $('quiz-next');
  if (nextBtn) nextBtn.classList.add('show');
}

/* ═══════════════════════════════════════════════════════════════
   EVENT DELEGATION
═══════════════════════════════════════════════════════════════ */

function handleClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  switch (btn.dataset.action) {
    case 'tap-sun':    sunFlash();       break;
    case 'tap-cloud':  cloudPuff(btn);   break;
    case 'tap-plane':  planeDip();       break;
    case 'tap-hero':   heroTap();        break;
    case 'open-parent-settings': openParentSettings(); break;
    case 'open-cat':
      state.cardIndex = 0;
      renderCategory(btn.dataset.cat);
      break;
    case 'go-home':
      renderHome();
      break;
    case 'card-prev':  goCard(-1); break;
    case 'card-next':  goCard(1);  break;
    case 'replay-card': speakCurrentCard(); break;
    case 'start-quiz': startQuiz(); break;
    case 'exit-quiz':
      state.cardIndex = 0;
      renderCategory(state.category);
      break;
    case 'quiz-answer': handleQuizAnswer(btn); break;
    case 'quiz-next':
      state.quizIndex++;
      state.quizAnswered = false;
      renderQuizQuestion();
      break;
    case 'retry-quiz': startQuiz(); break;
  }
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  $('app').addEventListener('click', handleClick);

  document.addEventListener('keydown', e => {
    if (state.screen !== 'category') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goCard(-1); }
    if (e.key === ' ')          { e.preventDefault(); speakCurrentCard(); }
  });
});
