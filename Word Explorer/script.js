'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
   All content lives here. Add new words by editing this array only.
═══════════════════════════════════════════════════════════════ */

const WORDS = [
  // SIZE
  { id: 'big',       emoji: '🐘', word: 'big',       cat: 'size',    synonyms: ['enormous', 'gigantic', 'huge', 'vast', 'immense', 'massive'] },
  { id: 'small',     emoji: '🐭', word: 'small',     cat: 'size',    synonyms: ['tiny', 'little', 'miniature', 'petite', 'teeny', 'wee'] },
  { id: 'tall',      emoji: '🦒', word: 'tall',      cat: 'size',    synonyms: ['towering', 'lofty', 'high', 'soaring', 'sky-high', 'elevated'] },
  // SPEED
  { id: 'fast',      emoji: '🐆', word: 'fast',      cat: 'speed',   synonyms: ['speedy', 'rapid', 'swift', 'quick', 'zippy', 'lightning'] },
  { id: 'slow',      emoji: '🐢', word: 'slow',      cat: 'speed',   synonyms: ['gradual', 'leisurely', 'plodding', 'gentle', 'unhurried', 'steady'] },
  // FEELINGS
  { id: 'happy',     emoji: '😄', word: 'happy',     cat: 'feeling', synonyms: ['joyful', 'cheerful', 'delighted', 'gleeful', 'merry', 'elated'] },
  { id: 'sad',       emoji: '😢', word: 'sad',       cat: 'feeling', synonyms: ['unhappy', 'gloomy', 'sorrowful', 'downcast', 'tearful', 'blue'] },
  { id: 'angry',     emoji: '😠', word: 'angry',     cat: 'feeling', synonyms: ['furious', 'cross', 'annoyed', 'grumpy', 'irritated', 'livid'] },
  { id: 'scared',    emoji: '😨', word: 'scared',    cat: 'feeling', synonyms: ['frightened', 'terrified', 'nervous', 'startled', 'timid', 'jittery'] },
  { id: 'excited',   emoji: '🤩', word: 'excited',   cat: 'feeling', synonyms: ['thrilled', 'eager', 'enthusiastic', 'energised', 'overjoyed', 'buzzing'] },
  // LOOKS
  { id: 'beautiful', emoji: '🦋', word: 'beautiful', cat: 'looks',   synonyms: ['gorgeous', 'lovely', 'stunning', 'pretty', 'elegant', 'dazzling'] },
  { id: 'bright',    emoji: '💡', word: 'bright',    cat: 'looks',   synonyms: ['shining', 'glowing', 'radiant', 'vivid', 'gleaming', 'luminous'] },
  { id: 'dark',      emoji: '🌙', word: 'dark',      cat: 'looks',   synonyms: ['shadowy', 'murky', 'dim', 'gloomy', 'dusky', 'obscure'] },
  // TEXTURE
  { id: 'soft',      emoji: '🐰', word: 'soft',      cat: 'texture', synonyms: ['fluffy', 'silky', 'gentle', 'squishy', 'velvety', 'cushiony'] },
  { id: 'hard',      emoji: '🪨', word: 'hard',      cat: 'texture', synonyms: ['solid', 'firm', 'tough', 'rigid', 'sturdy', 'stiff'] },
  // SOUND
  { id: 'loud',      emoji: '📣', word: 'loud',      cat: 'sound',   synonyms: ['noisy', 'booming', 'thunderous', 'blaring', 'rowdy', 'deafening'] },
  { id: 'quiet',     emoji: '🤫', word: 'quiet',     cat: 'sound',   synonyms: ['silent', 'hushed', 'still', 'peaceful', 'calm', 'gentle'] },
  // TEMPERATURE
  { id: 'hot',       emoji: '🌋', word: 'hot',       cat: 'temp',    synonyms: ['scorching', 'blazing', 'boiling', 'sizzling', 'sweltering', 'fiery'] },
  { id: 'cold',      emoji: '🧊', word: 'cold',      cat: 'temp',    synonyms: ['freezing', 'icy', 'chilly', 'frosty', 'arctic', 'bitter'] },
];

const CATEGORIES = [
  { id: 'all',     label: 'All Words',   emoji: '⭐', color: '#ff6b35' },
  { id: 'size',    label: 'Size',        emoji: '📏', color: '#3b82f6' },
  { id: 'speed',   label: 'Speed',       emoji: '⚡', color: '#f97316' },
  { id: 'feeling', label: 'Feelings',    emoji: '💛', color: '#ec4899' },
  { id: 'looks',   label: 'Looks',       emoji: '👁️', color: '#8b5cf6' },
  { id: 'texture', label: 'Texture',     emoji: '🤝', color: '#14b8a6' },
  { id: 'sound',   label: 'Sound',       emoji: '🎵', color: '#eab308' },
  { id: 'temp',    label: 'Temperature', emoji: '🌡️', color: '#ef4444' },
];

const TICKER_WORDS = [
  'enormous', 'swift', 'joyful', 'radiant', 'fluffy', 'blazing',
  'gigantic', 'speedy', 'cheerful', 'dazzling', 'squishy', 'scorching',
  'towering', 'rapid', 'elated', 'gleaming', 'velvety', 'freezing',
];

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

let state = {
  screen:        'home',
  filter:        'all',
  cardIndex:     0,
  activeSynonym: null,
};

/* ═══════════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════════ */

function $(id) { return document.getElementById(id); }

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = String(str ?? '');
  return d.innerHTML;
}

function getFilteredWords() {
  if (state.filter === 'all') return WORDS;
  return WORDS.filter(w => w.cat === state.filter);
}

function getCatConfig(id) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}

function getCurrentWord() {
  const words = getFilteredWords();
  return words[state.cardIndex] || null;
}

/* ── TTS via local server (tts_server.py on :8081, uses macOS say) ── */
const TTS_SERVER = 'http://localhost:8081';

function speak(text) {
  fetch(TTS_SERVER + '/cancel', { method: 'POST' }).catch(() => {});
  fetch(TTS_SERVER + '/speak', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ text }),
  }).catch(() => {});
  const status = $('speak-status');
  if (status) status.textContent = text;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════════════ */

function renderHome() {
  state.screen = 'home';
  const tickerText = (TICKER_WORDS.join(' · ') + ' · ').repeat(2);

  $('app').innerHTML = `
    <div class="home-screen">

      <div class="word-ticker" aria-hidden="true">
        <div class="ticker-inner">${safeText(tickerText)}</div>
      </div>

      <div class="home-hero">
        <div class="home-icon" aria-hidden="true">💬</div>
        <h1 class="home-title">Word Explorer</h1>
        <p class="home-tagline">Discover bigger, better words!</p>
      </div>

      <nav class="home-cats" aria-label="Choose a word category">
        ${CATEGORIES.filter(c => c.id !== 'all').map(c => `
          <button class="home-cat-btn"
            data-action="open-cat" data-cat="${safeText(c.id)}"
            style="--cat-color:${safeText(c.color)}"
            aria-label="${safeText(c.label)} words">
            <span class="hcb-emoji" aria-hidden="true">${c.emoji}</span>
            <span class="hcb-label">${safeText(c.label)}</span>
          </button>
        `).join('')}
      </nav>

      <button class="home-all-btn" data-action="open-cat" data-cat="all"
        aria-label="Explore all words">
        ⭐ All Words
      </button>

    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — BROWSE
═══════════════════════════════════════════════════════════════ */

function renderBrowse() {
  state.screen = 'browse';
  const words = getFilteredWords();
  const total = words.length;
  const idx   = state.cardIndex;
  const word  = words[idx];

  if (!word) { renderHome(); return; }

  const catCfg = getCatConfig(word.cat);
  const hdrCfg = state.filter === 'all'
    ? getCatConfig('all')
    : catCfg;

  $('app').innerHTML = `
    <div class="browse-screen" style="--cat-color:${safeText(catCfg.color)}">

      <header class="browse-header" style="background:${safeText(hdrCfg.color)}">
        <button class="back-btn" data-action="go-home" aria-label="Back to home">←</button>
        <div class="browse-cat-label" aria-live="polite">
          ${hdrCfg.emoji} ${safeText(hdrCfg.label)}
        </div>
        <button class="speaker-btn" id="speaker-btn" data-action="speak-main"
          aria-label="Hear the word">🔊</button>
      </header>

      <div class="card-stage" id="card-stage">
        <button class="nav-arrow" id="nav-prev" data-action="card-prev"
          aria-label="Previous word" ${idx === 0 ? 'disabled' : ''}>◀</button>

        <div class="word-card" id="word-card">
          ${buildWordCard('none')}
        </div>

        <button class="nav-arrow" id="nav-next" data-action="card-next"
          aria-label="Next word" ${idx >= total - 1 ? 'disabled' : ''}>▶</button>
      </div>

      <div class="browse-footer">
        <div class="progress-track" role="progressbar"
          aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${idx + 1}">
          <div class="progress-fill" id="progress-fill"
            style="width:${((idx + 1) / total * 100).toFixed(1)}%"></div>
        </div>
        <div class="card-counter" id="card-counter" aria-live="polite">
          ${idx + 1} of ${total}
        </div>
      </div>

    </div>
  `;

  // Touch swipe
  const stage = $('card-stage');
  let _tx = 0;
  stage.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = _tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 44) goCard(diff > 0 ? 1 : -1);
  }, { passive: true });

  // Auto-speak after brief layout settle
  setTimeout(() => speakMain(), 220);
}

function buildWordCard(slideDir) {
  const words = getFilteredWords();
  if (!words.length) return '';
  const word    = words[state.cardIndex];
  const animCls = slideDir === 'right' ? 'from-right'
                : slideDir === 'left'  ? 'from-left' : '';

  return `
    <div class="card-inner ${animCls}"
      aria-label="${safeText(word.word)} — tap a synonym to hear it">
      <div class="card-emoji" aria-hidden="true">${word.emoji}</div>
      <div class="card-word">${safeText(word.word)}</div>
      <div class="card-also" aria-hidden="true">also means…</div>
      <div class="synonym-grid" role="group" aria-label="Synonyms for ${safeText(word.word)}">
        ${word.synonyms.map(s => `
          <button class="synonym-chip${state.activeSynonym === s ? ' active' : ''}"
            data-action="speak-synonym"
            data-word="${safeText(s)}"
            aria-label="Hear ${safeText(s)}">
            ${safeText(s)}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function goCard(dir) {
  const words = getFilteredWords();
  const next  = state.cardIndex + dir;
  if (next < 0 || next >= words.length) return;
  state.cardIndex     = next;
  state.activeSynonym = null;

  const card = $('word-card');
  if (card) {
    // Update --cat-color on the parent screen for the new word
    const newWord = words[next];
    const newCat  = getCatConfig(newWord.cat);
    const screen  = card.closest('.browse-screen');
    if (screen) screen.style.setProperty('--cat-color', newCat.color);
    card.innerHTML = buildWordCard(dir > 0 ? 'right' : 'left');
  }

  const total   = words.length;
  const pct     = ((next + 1) / total * 100).toFixed(1);
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

  speakMain();
}

function speakMain() {
  const word = getCurrentWord();
  if (!word) return;
  speak(word.word);
  pulseSpeaker();
}

function pulseSpeaker() {
  const btn = $('speaker-btn');
  if (!btn) return;
  btn.classList.remove('playing');
  void btn.offsetWidth;
  btn.classList.add('playing');
  setTimeout(() => btn.classList.remove('playing'), 650);
}

/* ═══════════════════════════════════════════════════════════════
   ACTIONS
═══════════════════════════════════════════════════════════════ */

function handleClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  switch (btn.dataset.action) {

    case 'open-cat':
      state.filter        = btn.dataset.cat;
      state.cardIndex     = 0;
      state.activeSynonym = null;
      renderBrowse();
      break;

    case 'go-home':
      renderHome();
      break;

    case 'speak-main':
      speakMain();
      break;

    case 'card-prev':
      goCard(-1);
      break;

    case 'card-next':
      goCard(1);
      break;

    case 'speak-synonym': {
      const syn = btn.dataset.word;
      state.activeSynonym = syn;
      speak(syn);
      document.querySelectorAll('.synonym-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.word === syn);
      });
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

  // Keyboard navigation on browse screen
  document.addEventListener('keydown', e => {
    if (state.screen !== 'browse') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goCard(-1); }
    if (e.key === ' ')          { e.preventDefault(); speakMain(); }
  });
});
