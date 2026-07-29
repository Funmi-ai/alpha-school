'use strict';

/* ═══════════════════════════════════════════════════════════════
   PHASE METADATA
═══════════════════════════════════════════════════════════════ */

const PHASE_META = {
  1: { label: 'Phase 1', color: '#7c3aed', dark: '#4c1d95', light: '#ede9fe', icon: '👂', subtitle: 'Listening & Awareness' },
  2: { label: 'Phase 2', color: '#1d4ed8', dark: '#1e3a8a', light: '#dbeafe', icon: '🔡', subtitle: 'First 23 Sounds' },
  3: { label: 'Phase 3', color: '#0f766e', dark: '#134e4a', light: '#ccfbf1', icon: '📗', subtitle: '25 More Sounds' },
  4: { label: 'Phase 4', color: '#b45309', dark: '#78350f', light: '#fef3c7', icon: '🔗', subtitle: 'Blending Practice' },
  5: { label: 'Phase 5', color: '#b91c1c', dark: '#7f1d1d', light: '#fee2e2', icon: '⭐', subtitle: 'New Spellings' },
};

/* ═══════════════════════════════════════════════════════════════
   PHASE 1 — Listening activity tiles
═══════════════════════════════════════════════════════════════ */

const PHASE1 = [
  { id: 'env',    emoji: '🌳', title: 'Environmental Sounds',
    desc: 'Go on a listening walk. What can you hear — cars, birds, wind, water?' },
  { id: 'inst',   emoji: '🥁', title: 'Instrumental Sounds',
    desc: 'Listen to different sounds: tapping, shaking, blowing. Can you tell them apart?' },
  { id: 'body',   emoji: '🙌', title: 'Body Percussion',
    desc: 'Clap the syllables in words. "el-e-phant" = 3 claps. Try your name!' },
  { id: 'rhyme',  emoji: '🎵', title: 'Rhythm & Rhyme',
    desc: 'Cat — hat — bat — mat. Can you find more rhyming words?' },
  { id: 'allit',  emoji: '🐍', title: 'Alliteration',
    desc: 'Silly Sam saw seven snakes. Spot words starting with the same sound.' },
  { id: 'voice',  emoji: '🗣️', title: 'Voice Sounds',
    desc: 'Make sounds with your voice: loud, soft, high, low, fast, slow.' },
  { id: 'blend',  emoji: '🧩', title: 'Oral Blending',
    desc: 'Listen to sounds and blend: c–a–t → cat! d–o–g → dog!' },
  { id: 'seg',    emoji: '✂️', title: 'Oral Segmenting',
    desc: 'Say a word in sounds: cat → c–a–t. How many sounds in "fish"?' },
];

/* ═══════════════════════════════════════════════════════════════
   PHASE 2 — Sets 1-5 (23 graphemes)
═══════════════════════════════════════════════════════════════ */

const PHASE2 = [
  // Set 1
  { id: 's',  grapheme: 's',  emoji: '🐍', keyword: 'snake',    speak: 'snake'    },
  { id: 'a',  grapheme: 'a',  emoji: '🐜', keyword: 'ant',      speak: 'ant'      },
  { id: 't',  grapheme: 't',  emoji: '🐯', keyword: 'tiger',    speak: 'tiger'    },
  { id: 'p',  grapheme: 'p',  emoji: '🐧', keyword: 'penguin',  speak: 'penguin'  },
  // Set 2
  { id: 'i',  grapheme: 'i',  emoji: '🦔', keyword: 'itch',     speak: 'itch'     },
  { id: 'n',  grapheme: 'n',  emoji: '🥜', keyword: 'nut',      speak: 'nut'      },
  { id: 'm',  grapheme: 'm',  emoji: '🐒', keyword: 'monkey',   speak: 'monkey'   },
  { id: 'd',  grapheme: 'd',  emoji: '🐕', keyword: 'dog',      speak: 'dog'      },
  // Set 3
  { id: 'g',  grapheme: 'g',  emoji: '🐐', keyword: 'goat',     speak: 'goat'     },
  { id: 'o',  grapheme: 'o',  emoji: '🐙', keyword: 'octopus',  speak: 'octopus'  },
  { id: 'c',  grapheme: 'c',  emoji: '🐱', keyword: 'cat',      speak: 'cat'      },
  { id: 'k',  grapheme: 'k',  emoji: '🪁', keyword: 'kite',     speak: 'kite'     },
  // Set 4
  { id: 'ck', grapheme: 'ck', emoji: '🦆', keyword: 'duck',     speak: 'duck'     },
  { id: 'e',  grapheme: 'e',  emoji: '🥚', keyword: 'egg',      speak: 'egg'      },
  { id: 'u',  grapheme: 'u',  emoji: '☂️', keyword: 'umbrella', speak: 'umbrella' },
  { id: 'r',  grapheme: 'r',  emoji: '🐇', keyword: 'rabbit',   speak: 'rabbit'   },
  // Set 5
  { id: 'h',  grapheme: 'h',  emoji: '🎩', keyword: 'hat',      speak: 'hat'      },
  { id: 'b',  grapheme: 'b',  emoji: '⚽', keyword: 'ball',     speak: 'ball'     },
  { id: 'f',  grapheme: 'f',  emoji: '🐠', keyword: 'fish',     speak: 'fish'     },
  { id: 'ff', grapheme: 'ff', emoji: '💨', keyword: 'puff',     speak: 'puff'     },
  { id: 'l',  grapheme: 'l',  emoji: '🦁', keyword: 'lion',     speak: 'lion'     },
  { id: 'll', grapheme: 'll', emoji: '🔔', keyword: 'bell',     speak: 'bell'     },
  { id: 'ss', grapheme: 'ss', emoji: '😤', keyword: 'hiss',     speak: 'hiss'     },
];

/* ═══════════════════════════════════════════════════════════════
   PHASE 3 — Sets 6-7 + digraphs + vowel digraphs
═══════════════════════════════════════════════════════════════ */

const PHASE3 = [
  // Sets 6-7
  { id: 'j',    grapheme: 'j',    emoji: '🫙',  keyword: 'jar',    speak: 'jar'    },
  { id: 'v',    grapheme: 'v',    emoji: '🚐',  keyword: 'van',    speak: 'van'    },
  { id: 'w',    grapheme: 'w',    emoji: '🪱',  keyword: 'worm',   speak: 'worm'   },
  { id: 'x',    grapheme: 'x',    emoji: '🩻',  keyword: 'x-ray',  speak: 'x-ray'  },
  { id: 'y',    grapheme: 'y',    emoji: '💛',  keyword: 'yellow', speak: 'yellow' },
  { id: 'z',    grapheme: 'z',    emoji: '🦓',  keyword: 'zebra',  speak: 'zebra'  },
  { id: 'zz',   grapheme: 'zz',   emoji: '🐝',  keyword: 'buzz',   speak: 'buzz'   },
  { id: 'qu',   grapheme: 'qu',   emoji: '👑',  keyword: 'queen',  speak: 'queen'  },
  // Consonant digraphs
  { id: 'ch',   grapheme: 'ch',   emoji: '🐥',  keyword: 'chick',  speak: 'chick'  },
  { id: 'sh',   grapheme: 'sh',   emoji: '🐚',  keyword: 'shell',  speak: 'shell'  },
  { id: 'th1',  grapheme: 'th',   emoji: '👍',  keyword: 'thumb',  speak: 'thumb', note: 'as in thumb'  },
  { id: 'th2',  grapheme: 'th',   emoji: '🌬️', keyword: 'this',   speak: 'this',  note: 'as in this'   },
  { id: 'ng',   grapheme: 'ng',   emoji: '💍',  keyword: 'ring',   speak: 'ring'   },
  // Vowel digraphs & trigraphs
  { id: 'ai',   grapheme: 'ai',   emoji: '🌧️', keyword: 'rain',   speak: 'rain'   },
  { id: 'ee',   grapheme: 'ee',   emoji: '🐝',  keyword: 'bee',    speak: 'bee'    },
  { id: 'igh',  grapheme: 'igh',  emoji: '💡',  keyword: 'light',  speak: 'light'  },
  { id: 'oa',   grapheme: 'oa',   emoji: '⛵',  keyword: 'boat',   speak: 'boat'   },
  { id: 'oo1',  grapheme: 'oo',   emoji: '🌙',  keyword: 'moon',   speak: 'moon',  note: 'long oo'  },
  { id: 'oo2',  grapheme: 'oo',   emoji: '📖',  keyword: 'book',   speak: 'book',  note: 'short oo' },
  { id: 'ar',   grapheme: 'ar',   emoji: '⭐',  keyword: 'star',   speak: 'star'   },
  { id: 'or',   grapheme: 'or',   emoji: '🌽',  keyword: 'corn',   speak: 'corn'   },
  { id: 'ur',   grapheme: 'ur',   emoji: '🐢',  keyword: 'turtle', speak: 'turtle' },
  { id: 'ow',   grapheme: 'ow',   emoji: '🦉',  keyword: 'owl',    speak: 'owl'    },
  { id: 'oi',   grapheme: 'oi',   emoji: '💰',  keyword: 'coin',   speak: 'coin'   },
  { id: 'ear',  grapheme: 'ear',  emoji: '👂',  keyword: 'ear',    speak: 'ear'    },
  { id: 'air',  grapheme: 'air',  emoji: '🪶',  keyword: 'fair',   speak: 'fair'   },
  { id: 'ure',  grapheme: 'ure',  emoji: '🌿',  keyword: 'pure',   speak: 'pure'   },
  { id: 'er',   grapheme: 'er',   emoji: '🍂',  keyword: 'letter', speak: 'letter' },
];

/* ═══════════════════════════════════════════════════════════════
   PHASE 4 — Blending practice words (CVCC / CCVC / CCVCC)
═══════════════════════════════════════════════════════════════ */

const PHASE4_GROUPS = [
  {
    label: 'CVCC words',
    desc: 'Consonant–Vowel–Consonant–Consonant',
    words: ['mast', 'belt', 'milk', 'pond', 'bump', 'fast', 'left', 'gift', 'lost', 'dust', 'went', 'mint', 'dusk', 'limp', 'hunt'],
  },
  {
    label: 'CCVC words',
    desc: 'Consonant–Consonant–Vowel–Consonant',
    words: ['flag', 'frog', 'plan', 'slip', 'snap', 'step', 'stop', 'swim', 'trip', 'twin', 'clap', 'drip', 'grab', 'plug', 'spin'],
  },
  {
    label: 'CCVCC words',
    desc: 'Blend both ends!',
    words: ['crisp', 'clamp', 'grump', 'blend', 'frost', 'swamp', 'crust', 'plump', 'slant', 'stunt'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PHASE 5 — New graphemes + split digraphs
═══════════════════════════════════════════════════════════════ */

const PHASE5 = [
  // New graphemes
  { id: 'ay',  grapheme: 'ay',  emoji: '🌤️', keyword: 'day',    speak: 'day'    },
  { id: 'ou',  grapheme: 'ou',  emoji: '☁️', keyword: 'cloud',  speak: 'cloud'  },
  { id: 'ie',  grapheme: 'ie',  emoji: '🥧', keyword: 'pie',    speak: 'pie'    },
  { id: 'ea',  grapheme: 'ea',  emoji: '🍃', keyword: 'leaf',   speak: 'leaf'   },
  { id: 'oy',  grapheme: 'oy',  emoji: '🧸', keyword: 'toy',    speak: 'toy'    },
  { id: 'ir',  grapheme: 'ir',  emoji: '🐦', keyword: 'bird',   speak: 'bird'   },
  { id: 'ue',  grapheme: 'ue',  emoji: '🔵', keyword: 'blue',   speak: 'blue'   },
  { id: 'aw',  grapheme: 'aw',  emoji: '🦁', keyword: 'paw',    speak: 'paw'    },
  { id: 'wh',  grapheme: 'wh',  emoji: '🐋', keyword: 'whale',  speak: 'whale'  },
  { id: 'ph',  grapheme: 'ph',  emoji: '📱', keyword: 'phone',  speak: 'phone'  },
  { id: 'ew',  grapheme: 'ew',  emoji: '✨', keyword: 'new',    speak: 'new'    },
  { id: 'oe',  grapheme: 'oe',  emoji: '🦶', keyword: 'toe',    speak: 'toe'    },
  { id: 'au',  grapheme: 'au',  emoji: '🍂', keyword: 'autumn', speak: 'autumn' },
  // Split digraphs (magic e)
  { id: 'a_e', grapheme: 'a·e', emoji: '🎂', keyword: 'cake',   speak: 'cake',  note: 'magic e' },
  { id: 'e_e', grapheme: 'e·e', emoji: '🌲', keyword: 'these',  speak: 'these', note: 'magic e' },
  { id: 'i_e', grapheme: 'i·e', emoji: '🪁', keyword: 'kite',   speak: 'kite',  note: 'magic e' },
  { id: 'o_e', grapheme: 'o·e', emoji: '🏠', keyword: 'home',   speak: 'home',  note: 'magic e' },
  { id: 'u_e', grapheme: 'u·e', emoji: '🎲', keyword: 'cube',   speak: 'cube',  note: 'magic e' },
  // Alternative spellings already known
  { id: 'ea2', grapheme: 'ea',  emoji: '🍞', keyword: 'bread',  speak: 'bread', note: 'also /ɛ/' },
  { id: 'ie2', grapheme: 'ie',  emoji: '👸', keyword: 'ladies', speak: 'ladies',note: 'also /ɪ/' },
  { id: 'er2', grapheme: 'er',  emoji: '🏃', keyword: 'teacher',speak: 'teacher',note: 'unstressed'},
];

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

let state = { screen: 'home', phase: null };

/* ═══════════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════════ */

function $(id) { return document.getElementById(id); }

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str ?? '';
  return d.innerHTML;
}

/* ═══════════════════════════════════════════════════════════════
   AUDIO — Web Speech API (British English)
═══════════════════════════════════════════════════════════════ */

let _voices = [];
if (window.speechSynthesis) {
  _voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    _voices = window.speechSynthesis.getVoices();
  });
}

function speak(text, rate = 0.78) {
  if (!text || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang  = 'en-GB';
  utt.rate  = rate;
  utt.pitch = 1.1;
  const gbVoice = _voices.find(v => v.lang === 'en-GB') ||
                  _voices.find(v => v.lang.startsWith('en'));
  if (gbVoice) utt.voice = gbVoice;
  window.speechSynthesis.speak(utt);
}

/* speak a word-decoder word syllable by syllable via slow TTS */
function speakDecoder() {
  const input = $('decoder-input');
  if (!input || !input.value.trim()) return;
  const word = input.value.trim();
  speak(word, 0.55);
  input.select();
  const btn = $('decoder-btn');
  if (btn) {
    btn.classList.add('saying');
    setTimeout(() => btn.classList.remove('saying'), 1200);
  }
}

/* visual pulse on a tile */
function pulseTile(el) {
  if (!el) return;
  el.classList.remove('tapped');
  void el.offsetWidth;
  el.classList.add('tapped');
  setTimeout(() => el.classList.remove('tapped'), 500);
}

/* star burst */
function burstStars(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top  + rect.height / 2;
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('span');
    s.textContent = i % 2 === 0 ? '✨' : '⭐';
    s.setAttribute('aria-hidden', 'true');
    const dx = (Math.random() - 0.5) * 180;
    const dy = -40 - Math.random() * 100;
    s.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;font-size:${0.8+Math.random()*0.8}rem;` +
      `pointer-events:none;z-index:9999;transform:translate(-50%,-50%);` +
      `--dx:${dx}px;--dy:${dy}px;animation:starFly 0.8s ease-out forwards;`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════════════ */

function renderHome() {
  state.screen = 'home';
  state.phase  = null;
  $('app').innerHTML = `
    <div class="home-screen">
      <header class="home-header">
        <div class="home-hero" aria-hidden="true">📚</div>
        <h1 class="home-title">Phonics Explorer</h1>
        <p class="home-tagline">Letters and Sounds · Phases 1–5</p>
      </header>

      <main class="home-main">
        <nav class="phase-list" aria-label="Choose a phase">
          ${Object.values(PHASE_META).map(p => `
            <button class="phase-card" data-action="open-phase" data-phase="${p.label.split(' ')[1]}"
              style="--ph-color:${p.color};--ph-dark:${p.dark};--ph-light:${p.light}"
              aria-label="${p.label}: ${p.subtitle}">
              <span class="pc-icon" aria-hidden="true">${p.icon}</span>
              <div class="pc-body">
                <div class="pc-label">${p.label}</div>
                <div class="pc-sub">${p.subtitle}</div>
              </div>
              <span class="pc-arrow" aria-hidden="true">›</span>
            </button>
          `).join('')}
        </nav>

        <div class="decoder-box">
          <label class="decoder-label" for="decoder-input">🔍 Word Decoder</label>
          <p class="decoder-hint">Type any word — hear it spoken slowly to help with decoding</p>
          <div class="decoder-row">
            <input id="decoder-input" class="decoder-input" type="text"
              placeholder="e.g. triangle" autocomplete="off" autocorrect="off"
              autocapitalize="off" spellcheck="false" aria-label="Type a word to hear">
            <button id="decoder-btn" class="decoder-btn" data-action="say-word" aria-label="Say the word">
              🔊 Say it
            </button>
          </div>
        </div>
      </main>

      <footer class="home-footer">Letters and Sounds (DfE) · Phases 1–5</footer>
    </div>
  `;

  const inp = $('decoder-input');
  if (inp) {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') speakDecoder();
    });
  }
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — PHASE SCREEN
═══════════════════════════════════════════════════════════════ */

function renderPhase(num) {
  state.screen = 'phase';
  state.phase  = num;
  const meta = PHASE_META[num];

  let content = '';
  if (num === 1)      content = renderPhase1Content();
  else if (num === 2) content = renderSoundGrid(PHASE2, meta);
  else if (num === 3) content = renderSoundGrid(PHASE3, meta);
  else if (num === 4) content = renderPhase4Content(meta);
  else if (num === 5) content = renderSoundGrid(PHASE5, meta);

  $('app').innerHTML = `
    <div class="phase-screen" style="--ph-color:${meta.color};--ph-dark:${meta.dark};--ph-light:${meta.light}">
      <header class="phase-header">
        <button class="back-btn" data-action="go-home" aria-label="Back to home">←</button>
        <div class="phase-header-title">
          <span class="phase-header-icon" aria-hidden="true">${meta.icon}</span>
          <div>
            <div class="phase-header-label">${meta.label}</div>
            <div class="phase-header-sub">${meta.subtitle}</div>
          </div>
        </div>
      </header>
      <div class="phase-body">
        ${content}
        <div class="decoder-box inline-decoder">
          <label class="decoder-label" for="decoder-input-ph">🔍 Decode a Word</label>
          <div class="decoder-row">
            <input id="decoder-input-ph" class="decoder-input" type="text"
              placeholder="type any word…" autocomplete="off" autocorrect="off"
              autocapitalize="off" spellcheck="false" aria-label="Type a word to hear">
            <button id="decoder-btn-ph" class="decoder-btn" data-action="say-word-ph" aria-label="Say the word">
              🔊
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const inp = $('decoder-input-ph');
  if (inp) {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') { speak(inp.value.trim(), 0.55); }
    });
  }
}

/* ── Phase 1: activity tiles ── */
function renderPhase1Content() {
  return `
    <p class="phase-intro">Phase 1 builds listening skills before learning graphemes. Try these activities!</p>
    <div class="activity-grid">
      ${PHASE1.map(a => `
        <div class="activity-card" aria-label="${safeText(a.title)}">
          <div class="ac-emoji" aria-hidden="true">${a.emoji}</div>
          <div class="ac-title">${safeText(a.title)}</div>
          <div class="ac-desc">${safeText(a.desc)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/* ── Phase 2, 3, 5: sound mat grid ── */
function renderSoundGrid(sounds, meta) {
  return `
    <p class="phase-intro">Tap any tile to hear the sound.</p>
    <div class="sound-grid" role="list">
      ${sounds.map(s => `
        <button class="sound-tile" role="listitem"
          data-action="say-sound" data-speak="${safeText(s.speak)}"
          aria-label="${safeText(s.grapheme)} as in ${safeText(s.keyword)}${s.note ? ', ' + safeText(s.note) : ''}">
          <span class="st-grapheme" aria-hidden="true">${safeText(s.grapheme)}</span>
          <span class="st-emoji" aria-hidden="true">${s.emoji}</span>
          <span class="st-keyword" aria-hidden="true">${safeText(s.keyword)}</span>
          ${s.note ? `<span class="st-note" aria-hidden="true">${safeText(s.note)}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `;
}

/* ── Phase 4: blending word tiles ── */
function renderPhase4Content(meta) {
  return `
    <p class="phase-intro">No new sounds this phase — practice blending! Tap a word to hear it.</p>
    ${PHASE4_GROUPS.map(g => `
      <div class="blend-group">
        <div class="blend-group-label">${safeText(g.label)}</div>
        <div class="blend-group-desc">${safeText(g.desc)}</div>
        <div class="blend-grid">
          ${g.words.map(w => `
            <button class="blend-tile" data-action="say-blend" data-word="${safeText(w)}"
              aria-label="Hear the word ${safeText(w)}">
              ${safeText(w)}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

/* ═══════════════════════════════════════════════════════════════
   EVENT DELEGATION
═══════════════════════════════════════════════════════════════ */

function handleClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;

  switch (el.dataset.action) {
    case 'open-phase':
      renderPhase(Number(el.dataset.phase));
      break;
    case 'go-home':
      renderHome();
      break;
    case 'say-sound':
      speak(el.dataset.speak);
      pulseTile(el);
      burstStars(el);
      break;
    case 'say-blend':
      speak(el.dataset.word, 0.65);
      pulseTile(el);
      break;
    case 'say-word':
      speakDecoder();
      break;
    case 'say-word-ph': {
      const inp = $('decoder-input-ph');
      if (inp && inp.value.trim()) {
        speak(inp.value.trim(), 0.55);
        inp.select();
        el.classList.add('saying');
        setTimeout(() => el.classList.remove('saying'), 1200);
      }
      break;
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  $('app').addEventListener('click', handleClick);
});
