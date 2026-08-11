'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
   The WORDS array lives in words-data.js (loaded by
   word-explorer.html before this file) so timetable.html's Word
   of the Day card can share the exact same list and date-seeded
   index — see getWordOfDay() below and directives/alpha_school.md.
   Add new words in words-data.js only — never touch render functions.
═══════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  { id: 'all',     label: 'All Words',          emoji: '⭐', color: '#ff6b35' },
  { id: 'size',    label: 'Adjectives: Size',    emoji: '📏', color: '#3b82f6' },
  { id: 'speed',   label: 'Adjectives: Speed',   emoji: '⚡', color: '#f97316' },
  { id: 'feeling', label: 'Adjectives: Feelings',emoji: '💛', color: '#ec4899' },
  { id: 'looks',   label: 'Adjectives: Looks',   emoji: '👁️', color: '#8b5cf6' },
  { id: 'texture', label: 'Adjectives: Texture', emoji: '🤝', color: '#14b8a6' },
  { id: 'sound',   label: 'Adjectives: Sound',   emoji: '🎵', color: '#eab308' },
  { id: 'temp',    label: 'Adjectives: Temp',    emoji: '🌡️', color: '#ef4444' },
  { id: 'adverb',  label: 'Adverbs',             emoji: '🚀', color: '#7c3aed' },
  { id: 'verb',    label: 'Verbs',               emoji: '🏃', color: '#0891b2' },
];

const TICKER_WORDS = [
  'enormous', 'swift', 'joyful', 'radiant', 'fluffy', 'blazing',
  'gigantic', 'speedy', 'gleeful', 'dazzling', 'stealthily', 'scorching',
  'towering', 'rapid', 'devoured', 'gleaming', 'scurried', 'cackled',
];

/* ═══════════════════════════════════════════════════════════════
   WORD OF THE DAY
   Seeded by date — same word all day, rotates daily.
   Drawn from ALL words in the WORDS array above.
═══════════════════════════════════════════════════════════════ */

function getWordOfDay() {
  const seed = new Date().toDateString();
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  const idx = (h >>> 0) % WORDS.length;
  return WORDS[idx];
}

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

/* ═══════════════════════════════════════════════════════════════
   TTS — browser Web Speech API (works on GitHub Pages, no server)
═══════════════════════════════════════════════════════════════ */

// Prime voice list on load (Chrome needs this before first speak)
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {}, { once: true });
}

// Speak an array of strings in sequence with pauses between each.
// The 150 ms delay after cancel() prevents Chrome locking up when
// a new tap interrupts a sequence that is already playing.
function speakSequence(parts, gapMs) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const gap = gapMs ?? 900;
  setTimeout(() => {
    // Resume if Chrome silently paused synthesis (e.g. tab was backgrounded)
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    function next(i) {
      if (i >= parts.length) return;
      const text = String(parts[i] || '').trim();
      if (!text) { setTimeout(() => next(i + 1), gap); return; }
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang  = 'en-GB';
      utt.rate  = 0.88;
      utt.onend = () => setTimeout(() => next(i + 1), gap);
      window.speechSynthesis.speak(utt);
    }
    next(0);
  }, 150);
}

// Speak a single phrase (used for synonyms, standalone triggers)
function speak(text) {
  speakSequence([text]);
}

// Speak word → synonyms → story with natural pauses
function speakFull(word) {
  if (!word) return;
  const synText = 'you could also say: ' + word.synonyms.slice(0, 4).join(', ');
  speakSequence([word.word, synText, word.story], 900);
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════════════ */

function renderHome() {
  state.screen = 'home';
  const tickerText = (TICKER_WORDS.join(' · ') + ' · ').repeat(2);
  const wotd = getWordOfDay();
  const wotdCat = getCatConfig(wotd.cat);

  $('app').innerHTML = `
    <div class="home-screen">

      <div class="word-ticker" aria-hidden="true">
        <div class="ticker-inner">${safeText(tickerText)}</div>
      </div>

      <div class="home-hero">
        <div class="home-icon" aria-hidden="true">💬</div>
        <h1 class="home-title">Word Explorer</h1>
        <p class="home-tagline">Discover bigger, better words for your Hodgers stories!</p>
      </div>

      <div class="wotd-card" aria-label="Word of the day: ${safeText(wotd.word)}">
        <div class="wotd-header">
          <span class="wotd-badge">⭐ Word of the Day</span>
          <button class="wotd-speak" data-action="speak-wotd"
            data-text="${safeText(wotd.word + '. ' + wotd.story)}"
            aria-label="Hear the word of the day">🔊</button>
        </div>
        <div class="wotd-word">${safeText(wotd.word)}</div>
        <div class="wotd-cat" style="color:${safeText(wotdCat.color)}">${wotdCat.emoji} ${safeText(wotdCat.label)}</div>
        <div class="wotd-synonyms">
          ${wotd.synonyms.slice(0,4).map(s => `<span class="wotd-syn">${safeText(s)}</span>`).join('')}
        </div>
        <div class="wotd-story">${safeText(wotd.story)}</div>
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
  const hdrCfg = state.filter === 'all' ? getCatConfig('all') : catCfg;

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
      <div class="card-also" aria-hidden="true">in your story, try…</div>
      <div class="synonym-grid" role="group" aria-label="Better words for ${safeText(word.word)}">
        ${word.synonyms.map(s => `
          <button class="synonym-chip${state.activeSynonym === s ? ' active' : ''}"
            data-action="speak-synonym"
            data-word="${safeText(s)}"
            aria-label="Hear ${safeText(s)}">
            ${safeText(s)}
          </button>
        `).join('')}
      </div>
      <div class="card-story-block">
        <div class="card-story-label">📖 Hodgers story:</div>
        <div class="card-story">${safeText(word.story)}</div>
        <button class="card-story-speak" data-action="speak-story"
          aria-label="Hear the story sentence">🔊 Hear it</button>
      </div>
      <div class="card-prompt">${safeText(word.prompt)}</div>
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
  speakFull(word);
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

    case 'speak-wotd': {
      const wotd = getWordOfDay();
      speakFull(wotd);
      break;
    }

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

    case 'speak-story': {
      const word = getCurrentWord();
      if (word) speak(word.story);
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

  // Greet with the Word of the Day as soon as Word Explorer opens — best-effort,
  // since some browsers block speech until the page has had a user gesture. The
  // WOTD card's own 🔊 button always works as a fallback either way. Only fires
  // once per page load (not on every "go-home" navigation) since it lives here
  // in INIT rather than inside renderHome() itself.
  setTimeout(() => {
    const wotdBtn = document.querySelector('.wotd-speak');
    if (wotdBtn) {
      wotdBtn.classList.add('playing');
      setTimeout(() => wotdBtn.classList.remove('playing'), 650);
    }
    speakFull(getWordOfDay());
  }, 600);

  document.addEventListener('keydown', e => {
    if (state.screen !== 'browse') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goCard(-1); }
    if (e.key === ' ')          { e.preventDefault(); speakMain(); }
  });
});
