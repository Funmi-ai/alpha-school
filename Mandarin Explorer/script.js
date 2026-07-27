'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */

const VEHICLES = [
  { id: 'car',        emoji: '🚙', zh: '汽车',     py: 'qìchē',           en: 'car',         type: 'road'  },
  { id: 'truck',      emoji: '🚛', zh: '卡车',     py: 'kǎchē',           en: 'truck',       type: 'road'  },
  { id: 'bus',        emoji: '🚌', zh: '公共汽车', py: 'gōnggòng qìchē', en: 'bus',         type: 'road'  },
  { id: 'firetruck',  emoji: '🚒', zh: '消防车',   py: 'xiāofáng chē',   en: 'fire engine', type: 'road'  },
  { id: 'motorbike',  emoji: '🏍️', zh: '摩托车',   py: 'mótuō chē',      en: 'motorbike',   type: 'road'  },
  { id: 'bike',       emoji: '🚲', zh: '自行车',   py: 'zìxíng chē',     en: 'bicycle',     type: 'road'  },
  { id: 'plane',      emoji: '✈️', zh: '飞机',     py: 'fēijī',           en: 'plane',       type: 'air'   },
  { id: 'helicopter', emoji: '🚁', zh: '直升机',   py: 'zhíshēng jī',    en: 'helicopter',  type: 'air'   },
  { id: 'rocket',     emoji: '🚀', zh: '火箭',     py: 'huǒjiàn',         en: 'rocket',      type: 'air'   },
  { id: 'sailboat',   emoji: '⛵', zh: '帆船',     py: 'fānchuán',        en: 'sailboat',    type: 'water' },
  { id: 'ship',       emoji: '🚢', zh: '轮船',     py: 'lúnchuán',        en: 'ship',        type: 'water' },
  { id: 'train',      emoji: '🚂', zh: '火车',     py: 'huǒchē',          en: 'train',       type: 'rail'  },
];

const ANIMALS = [
  { id: 'lion',      emoji: '🦁', zh: '狮子',   py: 'shīzi',       en: 'lion'     },
  { id: 'elephant',  emoji: '🐘', zh: '大象',   py: 'dàxiàng',     en: 'elephant' },
  { id: 'giraffe',   emoji: '🦒', zh: '长颈鹿', py: 'chángjǐnglù', en: 'giraffe'  },
  { id: 'zebra',     emoji: '🦓', zh: '斑马',   py: 'bānmǎ',       en: 'zebra'    },
  { id: 'monkey',    emoji: '🐒', zh: '猴子',   py: 'hóuzi',       en: 'monkey'   },
  { id: 'panda',     emoji: '🐼', zh: '熊猫',   py: 'xióngmāo',    en: 'panda'    },
  { id: 'dog',       emoji: '🐕', zh: '狗',     py: 'gǒu',         en: 'dog'      },
  { id: 'cat',       emoji: '🐱', zh: '猫',     py: 'māo',         en: 'cat'      },
  { id: 'horse',     emoji: '🐎', zh: '马',     py: 'mǎ',          en: 'horse'    },
  { id: 'pig',       emoji: '🐷', zh: '猪',     py: 'zhū',         en: 'pig'      },
  { id: 'sheep',     emoji: '🐑', zh: '羊',     py: 'yáng',        en: 'sheep'    },
  { id: 'dolphin',   emoji: '🐬', zh: '海豚',   py: 'hǎitún',      en: 'dolphin'  },
  { id: 'shark',     emoji: '🦈', zh: '鲨鱼',   py: 'shāyú',       en: 'shark'    },
  { id: 'whale',     emoji: '🐋', zh: '鲸鱼',   py: 'jīngyú',      en: 'whale'    },
  { id: 'chicken',   emoji: '🐔', zh: '鸡',     py: 'jī',          en: 'chicken'  },
  { id: 'eagle',     emoji: '🦅', zh: '老鹰',   py: 'lǎoyīng',     en: 'eagle'    },
];

const COLOURS = [
  { id: 'red',    zh: '红色', py: 'hóng sè',  en: 'red',    hex: '#ef4444', vehicleEmoji: '🚗' },
  { id: 'blue',   zh: '蓝色', py: 'lán sè',   en: 'blue',   hex: '#3b82f6', vehicleEmoji: '🚙' },
  { id: 'green',  zh: '绿色', py: 'lǜ sè',    en: 'green',  hex: '#22c55e', vehicleEmoji: '🚌' },
  { id: 'yellow', zh: '黄色', py: 'huáng sè', en: 'yellow', hex: '#eab308', vehicleEmoji: '🚕' },
  { id: 'white',  zh: '白色', py: 'bái sè',   en: 'white',  hex: '#e2e8f0', vehicleEmoji: '🚑' },
  { id: 'black',  zh: '黑色', py: 'hēi sè',   en: 'black',  hex: '#1e293b', vehicleEmoji: '🚓' },
  { id: 'orange', zh: '橙色', py: 'chéng sè', en: 'orange', hex: '#f97316', vehicleEmoji: '🚒' },
  { id: 'purple', zh: '紫色', py: 'zǐ sè',    en: 'purple', hex: '#a855f7', vehicleEmoji: '🏎️' },
];

const NUMBERS = [
  { id: 'one',   zh: '一', py: 'yī',  en: 'one',   num: 1  },
  { id: 'two',   zh: '二', py: 'èr',  en: 'two',   num: 2  },
  { id: 'three', zh: '三', py: 'sān', en: 'three', num: 3  },
  { id: 'four',  zh: '四', py: 'sì',  en: 'four',  num: 4  },
  { id: 'five',  zh: '五', py: 'wǔ',  en: 'five',  num: 5  },
  { id: 'six',   zh: '六', py: 'liù', en: 'six',   num: 6  },
  { id: 'seven', zh: '七', py: 'qī',  en: 'seven', num: 7  },
  { id: 'eight', zh: '八', py: 'bā',  en: 'eight', num: 8  },
  { id: 'nine',  zh: '九', py: 'jiǔ', en: 'nine',  num: 9  },
  { id: 'ten',   zh: '十', py: 'shí', en: 'ten',   num: 10 },
];

/* ═══════════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════════ */

const CAT_CFG = {
  vehicles: { labelZh: '交通工具', labelEn: 'Vehicles', emoji: '🚙', quizPrompt: '这是什么？ (Zhè shì shénme?)' },
  animals:  { labelZh: '动物',     labelEn: 'Animals',  emoji: '🐼', quizPrompt: '这是什么动物？ (Shénme dòngwù?)' },
  colours:  { labelZh: '颜色',     labelEn: 'Colours',  emoji: '🎨', quizPrompt: '这是什么颜色？ (Shénme yánsè?)' },
  numbers:  { labelZh: '数字',     labelEn: 'Numbers',  emoji: '🔢', quizPrompt: '这是什么数字？ (Shénme shùzì?)' },
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

let state = {
  screen:      'home',
  category:    null,
  cardIndex:   0,
  quizItems:   [], quizIndex: 0, quizScore: 0, quizAnswered: false,
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
   AUDIO — pre-generated .m4a files (Meijia voice)
═══════════════════════════════════════════════════════════════ */

function speak(wordId) {
  const audio = new Audio(`audio/${wordId}.m4a`);
  audio.addEventListener('play', () => pulseSpeakerBtn());
  audio.play().catch(() => {});
}

function pulseSpeakerBtn() {
  const btn = $('card-speaker') || document.querySelector('.modal-speaker');
  if (!btn) return;
  btn.classList.remove('playing');
  void btn.offsetWidth;
  btn.classList.add('playing');
  setTimeout(() => btn.classList.remove('playing'), 650);
}

/* ── Star burst ── */
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

/* ── Web Audio helpers ── */
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

function playGong() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'sine'; o.frequency.value = 130;
    g.gain.setValueAtTime(0.38, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 2.2);
    o.start(); o.stop(c.currentTime + 2.2);
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
  sun.style.boxShadow  = '0 0 0 28px rgba(255,255,255,0.4), 0 0 120px 60px rgba(249,158,11,0.95)';
  setTimeout(() => {
    sun.style.transition = 'transform 0.45s ease-out, box-shadow 0.45s ease-out';
    sun.style.transform  = ''; sun.style.boxShadow = '';
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
  hero.style.transform  = 'scale(1.45) rotate(8deg)';
  setTimeout(() => {
    hero.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';
    hero.style.transform  = '';
    setTimeout(() => { hero.style.transition = ''; }, 600);
  }, 180);
  playWhoosh();
  speak('nihao');
  burstStars(hero);
}

function pagodaTap() {
  const pagoda = document.querySelector('.h-pagoda');
  if (!pagoda) return;
  pagoda.style.transition = 'transform 0.15s ease-out';
  pagoda.style.transform  = 'scale(1.3) rotate(-4deg)';
  setTimeout(() => {
    pagoda.style.transition = 'transform 0.48s cubic-bezier(0.34,1.56,0.64,1)';
    pagoda.style.transform  = '';
    setTimeout(() => { pagoda.style.transition = ''; }, 520);
  }, 160);
  playGong();
  speak('nihao');
}

function planeDip() {
  const plane = document.querySelector('.h-plane');
  if (!plane) return;
  plane.style.transition = 'transform 0.18s ease-out';
  plane.style.transform  = 'rotate(22deg) scale(1.25)';
  setTimeout(() => {
    plane.style.transition = 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1)';
    plane.style.transform  = '';
    setTimeout(() => { plane.style.transition = ''; }, 450);
  }, 220);
  playWhoosh();
}

/* ── Parent info panel ── */
function openParentSettings() {
  if (document.getElementById('parent-panel')) return;
  const panel = document.createElement('div');
  panel.id = 'parent-panel';
  panel.className = 'parent-panel-overlay';
  panel.innerHTML = `
    <div class="parent-panel-card" role="dialog" aria-label="About Mandarin Explorer" aria-modal="true">
      <div class="pp-header">
        <span class="pp-title">⚙️ About this app</span>
        <button class="pp-close" aria-label="Close">✕</button>
      </div>
      <p class="pp-info">Mandarin Explorer teaches Mandarin Chinese (普通话) across 4 topic areas. Each card shows the character, pinyin pronunciation, and English meaning.</p>
      <p class="pp-info" style="margin-top:10px;color:rgba(255,255,255,0.45);font-size:0.78rem;">Audio is spoken by the Meijia voice at a clear, child-friendly pace. Tap 🐉 on the home screen for a surprise!</p>
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

      <button class="h-hero" data-action="tap-hero" aria-label="Tap the dragon!">🐉</button>

      <div class="home-content">
        <div class="home-heading">
          <span class="home-flag" aria-hidden="true">🏮</span>
          <h1 class="home-title">普通话探险</h1>
          <p class="home-tagline">Pǔtōnghuà Tànxiǎn · Tap to explore!</p>
        </div>

        <nav class="home-cards" aria-label="Choose a topic">
          <button class="home-cat-btn vehicles" data-action="open-cat" data-cat="vehicles" aria-label="交通工具 — vehicles">
            <span class="home-cat-icon" aria-hidden="true">🚙</span>
            <div class="home-cat-name">交通工具</div>
            <div class="home-cat-sub">Vehicles</div>
          </button>
          <button class="home-cat-btn animals" data-action="open-cat" data-cat="animals" aria-label="动物 — animals">
            <span class="home-cat-icon" aria-hidden="true">🐼</span>
            <div class="home-cat-name">动物</div>
            <div class="home-cat-sub">Animals</div>
          </button>
          <button class="home-cat-btn colours" data-action="open-cat" data-cat="colours" aria-label="颜色 — colours">
            <span class="home-cat-icon" aria-hidden="true">🎨</span>
            <div class="home-cat-name">颜色</div>
            <div class="home-cat-sub">Colours</div>
          </button>
          <button class="home-cat-btn numbers" data-action="open-cat" data-cat="numbers" aria-label="数字 — numbers">
            <span class="home-cat-icon" aria-hidden="true">🔢</span>
            <div class="home-cat-name">数字</div>
            <div class="home-cat-sub">Numbers</div>
          </button>
        </nav>
      </div>

      <div class="h-horizon" aria-hidden="true">
        <span class="h-tree">🎋</span><span class="h-tree-s">🌿</span>
        <span class="h-tree">🎋</span>
        <span class="h-pagoda scene-tap" data-action="tap-pagoda" aria-hidden="true">🏯</span>
        <span class="h-tree">🎋</span>
        <span class="h-tree-s">🌿</span><span class="h-tree">🎋</span>
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
        <h2 class="cat-title">${cfg.emoji} ${safeText(cfg.labelZh)}</h2>
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
  if (!items.length) return '<p style="color:rgba(255,255,255,0.4);text-align:center">没有词汇。</p>';

  const item    = items[state.cardIndex];
  const cat     = state.category;
  const animCls = slideDir === 'right' ? 'from-right' : slideDir === 'left' ? 'from-left' : '';

  let visual = '';
  if (cat === 'colours') {
    visual = `<div class="card-colour-swatch" style="background:${item.hex};"
      aria-label="${safeText(item.en)} colour"></div>
      <div class="card-vehicle-row" aria-hidden="true">${item.vehicleEmoji}</div>`;
  } else if (cat === 'numbers') {
    visual = `<div class="card-numeral" aria-label="${safeText(item.py)}">${item.num}</div>`;
  } else {
    const imgSrc = `../French Explorer/images/${safeText(item.id)}.jpg`;
    visual = `<div class="card-img-wrap" style="--bg-img:url('${imgSrc}')">
      <img class="card-photo" src="${imgSrc}" alt="${safeText(item.en)}"
        onerror="this.closest('.card-img-wrap').classList.add('no-img');this.style.display='none';this.nextElementSibling.style.display='block'">
      <div class="card-emoji-fallback" style="display:none" aria-hidden="true">${item.emoji}</div>
    </div>`;
  }

  return `
    <div class="card-inner ${animCls}" aria-label="${safeText(item.zh)} — ${safeText(item.py)} — ${safeText(item.en)}">
      ${visual}
      <button class="card-speaker-btn in-card" id="card-speaker"
        data-action="replay-card" aria-label="Hear the word">
        <span aria-hidden="true">🔊</span>
        <span class="speaker-label" aria-hidden="true">tap to hear</span>
      </button>
      <div class="card-zh-word">${safeText(item.zh)}</div>
      <div class="card-pinyin">${safeText(item.py)}</div>
      <div class="card-en-word">${safeText(item.en)}</div>
    </div>
  `;
}

function speakCurrentCard() {
  const items = getAllItems(state.category);
  if (!items.length) return;
  speak(items[state.cardIndex].id);
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
    visualHTML = `<div class="quiz-visual" aria-label="${safeText(correct.py)}">
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
        <div class="quiz-choices" role="group" aria-label="Choose the Chinese word">
          ${choices.map(c => `
            <button class="quiz-choice" data-action="quiz-answer"
              data-id="${safeText(c.id)}" data-correct="${safeText(correct.id)}">
              <span class="choice-zh">${safeText(c.zh)}</span>
              <span class="choice-py">${safeText(c.py)}</span>
            </button>`).join('')}
        </div>
        <p class="quiz-feedback" id="quiz-feedback" aria-live="polite" aria-atomic="true"></p>
        <button class="next-btn" id="quiz-next" data-action="quiz-next">下一个 →</button>
      </div>
    </div>
  `;

  setTimeout(() => speak(correct.id), 380);
}

function renderQuizComplete() {
  const total = state.quizItems.length;
  const score = state.quizScore;
  const pct   = Math.round((score / total) * 100);
  const medal = pct >= 80 ? '🏆' : pct >= 50 ? '🥈' : '🌟';
  const msg   = pct >= 80 ? '太棒了！恭喜！' : pct >= 50 ? '不错！继续！' : '再试试！';

  $('app').innerHTML = `
    <div class="quiz-screen">
      <div class="quiz-complete">
        <div class="complete-medal" aria-hidden="true">${medal}</div>
        <h2 class="complete-title">${safeText(msg)}</h2>
        <p class="complete-score">${score} / ${total} correct</p>
        <button class="complete-btn" data-action="retry-quiz">再试试 🔄</button>
        <button class="complete-btn ghost" data-action="exit-quiz">回家 🏠</button>
      </div>
    </div>
  `;
  if (pct >= 80) speak('taibangle');
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
  const current = state.quizItems[state.quizIndex];

  if (right) {
    state.quizScore++;
    btn.classList.add('correct');
    $('quiz-feedback').textContent = '⭐ 太棒了！';
    speak(correct);
    burstStars(btn);
  } else {
    btn.classList.add('wrong');
    const correctBtn = document.querySelector(`.quiz-choice[data-id="${correct}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
    $('quiz-feedback').textContent = `💛 答案是：${current.zh} (${current.py})`;
    speak(current.id);
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
    case 'tap-sun':    sunFlash();          break;
    case 'tap-cloud':  cloudPuff(btn);      break;
    case 'tap-plane':  planeDip();          break;
    case 'tap-hero':   heroTap();           break;
    case 'tap-pagoda': pagodaTap();         break;
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
