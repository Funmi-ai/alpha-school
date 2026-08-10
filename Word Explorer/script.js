'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
   Add new words here only — never touch the render functions.
   Each word needs: id, emoji, word, cat, synonyms, story, prompt
═══════════════════════════════════════════════════════════════ */

const WORDS = [
  // ── ADJECTIVES: SIZE ─────────────────────────────────────────
  {
    id: 'big', emoji: '🐘', word: 'big', cat: 'size',
    synonyms: ['enormous', 'gigantic', 'huge', 'vast', 'immense', 'massive'],
    story:  'The Hodger let out an enormous fart that rattled every window in the house.',
    prompt: 'Can you write a sentence about the Hodgers using one of these words?',
  },
  {
    id: 'small', emoji: '🐭', word: 'small', cat: 'size',
    synonyms: ['tiny', 'little', 'miniature', 'petite', 'teeny', 'wee'],
    story:  'The Hodger was so tiny she could hide inside a teacup and nobody would ever know.',
    prompt: 'How small is a Hodger? Write a sentence showing just how teeny they are.',
  },
  {
    id: 'tall', emoji: '🦒', word: 'tall', cat: 'size',
    synonyms: ['towering', 'lofty', 'high', 'soaring', 'sky-high', 'elevated'],
    story:  'From the towering height of the kitchen counter, the Hodger looked down at the dog below.',
    prompt: 'Write a sentence about a Hodger climbing something very high.',
  },

  // ── ADJECTIVES: SPEED ────────────────────────────────────────
  {
    id: 'fast', emoji: '🐆', word: 'fast', cat: 'speed',
    synonyms: ['speedy', 'rapid', 'swift', 'quick', 'zippy', 'lightning'],
    story:  'The Hodger was lightning fast — she stole three biscuits before anyone even blinked.',
    prompt: 'Write a sentence about a Hodger escaping very quickly.',
  },
  {
    id: 'slow', emoji: '🐢', word: 'slow', cat: 'speed',
    synonyms: ['gradual', 'leisurely', 'plodding', 'gentle', 'unhurried', 'steady'],
    story:  'The biggest Hodger waddled at a leisurely pace, completely unbothered, leaving poo footprints all the way.',
    prompt: 'Write a sentence about a Hodger moving very slowly and not caring at all.',
  },

  // ── ADJECTIVES: FEELINGS ─────────────────────────────────────
  {
    id: 'happy', emoji: '😄', word: 'happy', cat: 'feeling',
    synonyms: ['joyful', 'cheerful', 'delighted', 'gleeful', 'merry', 'elated'],
    story:  'The Hodger was absolutely gleeful — she had hidden a smelly sock inside the sofa and nobody could find it.',
    prompt: 'Write a sentence about a Hodger who is delighted by some mischief she just caused.',
  },
  {
    id: 'sad', emoji: '😢', word: 'sad', cat: 'feeling',
    synonyms: ['unhappy', 'gloomy', 'sorrowful', 'downcast', 'tearful', 'blue'],
    story:  'The Hodger felt gloomy — someone had moved the cheese and now he had no idea where to sit on it.',
    prompt: 'Why might a Hodger feel sorrowful? Write a sentence about it.',
  },
  {
    id: 'angry', emoji: '😠', word: 'angry', cat: 'feeling',
    synonyms: ['furious', 'cross', 'annoyed', 'grumpy', 'irritated', 'livid'],
    story:  'The Hodger was absolutely furious — someone had tidied up the mess she had spent all morning making.',
    prompt: 'Write a sentence about a Hodger who is livid about something.',
  },
  {
    id: 'scared', emoji: '😨', word: 'scared', cat: 'feeling',
    synonyms: ['frightened', 'terrified', 'nervous', 'startled', 'timid', 'jittery'],
    story:  'The Hodger was terrified — the cat had found her hiding spot behind the radiator.',
    prompt: 'Write a sentence about a Hodger who is startled by something.',
  },
  {
    id: 'excited', emoji: '🤩', word: 'excited', cat: 'feeling',
    synonyms: ['thrilled', 'eager', 'enthusiastic', 'energised', 'overjoyed', 'buzzing'],
    story:  'The Hodgers were absolutely buzzing — they had discovered an unguarded trifle on the kitchen table.',
    prompt: 'What would make a Hodger overjoyed? Write a sentence about it.',
  },

  // ── ADJECTIVES: LOOKS ────────────────────────────────────────
  {
    id: 'beautiful', emoji: '🦋', word: 'beautiful', cat: 'looks',
    synonyms: ['gorgeous', 'lovely', 'stunning', 'pretty', 'elegant', 'dazzling'],
    story:  'The Hodger thought she looked absolutely stunning in her tiny hat — even though it was made of cheese.',
    prompt: 'Write a sentence describing what a Hodger looks like.',
  },
  {
    id: 'bright', emoji: '💡', word: 'bright', cat: 'looks',
    synonyms: ['shining', 'glowing', 'radiant', 'vivid', 'gleaming', 'luminous'],
    story:  'The Hodger\'s eyes were gleaming as she spotted the biscuit tin from across the room.',
    prompt: 'Write a sentence with gleaming or radiant about a Hodger.',
  },
  {
    id: 'dark', emoji: '🌙', word: 'dark', cat: 'looks',
    synonyms: ['shadowy', 'murky', 'dim', 'gloomy', 'dusky', 'obscure'],
    story:  'The Hodgers crept through the shadowy corridor, giggling very quietly to each other.',
    prompt: 'Write a sentence about the Hodgers in a dark, murky place.',
  },

  // ── ADJECTIVES: TEXTURE ──────────────────────────────────────
  {
    id: 'soft', emoji: '🐰', word: 'soft', cat: 'texture',
    synonyms: ['fluffy', 'silky', 'gentle', 'squishy', 'velvety', 'cushiony'],
    story:  'The Hodger settled into the squishy sofa cushion and let out a deeply satisfied sigh.',
    prompt: 'Write a sentence about a Hodger finding something soft to sit on.',
  },
  {
    id: 'hard', emoji: '🪨', word: 'hard', cat: 'texture',
    synonyms: ['solid', 'firm', 'tough', 'rigid', 'sturdy', 'stiff'],
    story:  'The Hodger knocked on the solid floorboard three times — a signal to the others below.',
    prompt: 'Write a sentence with solid or firm about something a Hodger finds.',
  },

  // ── ADJECTIVES: SOUND ────────────────────────────────────────
  {
    id: 'loud', emoji: '📣', word: 'loud', cat: 'sound',
    synonyms: ['noisy', 'booming', 'thunderous', 'blaring', 'rowdy', 'deafening'],
    story:  'The fart was so thunderous it woke up the dog, the cat, and the next-door neighbours.',
    prompt: 'Write a sentence about a Hodger making a thunderous or deafening sound.',
  },
  {
    id: 'quiet', emoji: '🤫', word: 'quiet', cat: 'sound',
    synonyms: ['silent', 'hushed', 'still', 'peaceful', 'calm', 'gentle'],
    story:  'The house was perfectly silent — which meant the Hodgers were definitely up to something.',
    prompt: 'Write a sentence about a Hodger being silent or hushed. Why are they so quiet?',
  },

  // ── ADJECTIVES: TEMPERATURE ──────────────────────────────────
  {
    id: 'hot', emoji: '🌋', word: 'hot', cat: 'temp',
    synonyms: ['scorching', 'blazing', 'boiling', 'sizzling', 'sweltering', 'fiery'],
    story:  'The Hodger sat too close to the radiator and let out a scorching, furious fart of outrage.',
    prompt: 'Write a sentence about a Hodger in something scorching or blazing hot.',
  },
  {
    id: 'cold', emoji: '🧊', word: 'cold', cat: 'temp',
    synonyms: ['freezing', 'icy', 'chilly', 'frosty', 'arctic', 'bitter'],
    story:  'The Hodger had hidden in the freezer for a whole hour — emerging frosty, furious, and absolutely starving.',
    prompt: 'Write a sentence about a Hodger who is absolutely freezing.',
  },

  // ── ADVERBS ──────────────────────────────────────────────────
  {
    id: 'quickly-adv', emoji: '⚡', word: 'quickly', cat: 'adverb',
    synonyms: ['swiftly', 'hastily', 'speedily', 'briskly', 'rapidly', 'urgently'],
    story:  'The Hodger swiftly grabbed the last biscuit and vanished under the floorboards before anyone turned around.',
    prompt: 'Write a sentence about a Hodger doing something swiftly or hastily.',
  },
  {
    id: 'quietly-adv', emoji: '🤫', word: 'quietly', cat: 'adverb',
    synonyms: ['silently', 'softly', 'stealthily', 'gently', 'noiselessly', 'sneakily'],
    story:  'The Hodger moved stealthily across the kitchen floor, not making a single sound.',
    prompt: 'Write a sentence about a Hodger sneaking somewhere silently.',
  },
  {
    id: 'loudly-adv', emoji: '📣', word: 'loudly', cat: 'adverb',
    synonyms: ['noisily', 'thunderously', 'boisterously', 'raucously', 'deafeningly', 'rowdily'],
    story:  'The Hodger burped so thunderously that everyone in the house froze and stared at the ceiling.',
    prompt: 'Write a sentence about a Hodger doing something boisterously loud.',
  },
  {
    id: 'carefully-adv', emoji: '🎯', word: 'carefully', cat: 'adverb',
    synonyms: ['cautiously', 'gently', 'delicately', 'precisely', 'tenderly', 'meticulously'],
    story:  'The Hodger cautiously lifted the edge of the tablecloth and peered underneath with one tiny eye.',
    prompt: 'Write a sentence about a Hodger doing something very cautiously.',
  },
  {
    id: 'suddenly-adv', emoji: '💥', word: 'suddenly', cat: 'adverb',
    synonyms: ['abruptly', 'unexpectedly', 'instantly', 'immediately', 'sharply', 'all at once'],
    story:  'Everything was peaceful. Then, abruptly, an extraordinary smell filled the entire room.',
    prompt: 'Write a sentence where something abruptly or unexpectedly happens with the Hodgers.',
  },
  {
    id: 'bravely-adv', emoji: '🦁', word: 'bravely', cat: 'adverb',
    synonyms: ['boldly', 'courageously', 'fearlessly', 'daringly', 'heroically', 'valiantly'],
    story:  'The smallest Hodger boldly marched straight towards the dog and sat on its paw.',
    prompt: 'Write a sentence about a Hodger doing something fearlessly.',
  },

  // ── VERBS ────────────────────────────────────────────────────
  {
    id: 'walked-verb', emoji: '👣', word: 'walked', cat: 'verb',
    synonyms: ['tiptoed', 'crept', 'scurried', 'shuffled', 'waddled', 'stomped'],
    story:  'The Hodger scurried across the kitchen floor at tremendous speed, heading straight for the cheese.',
    prompt: 'Write a sentence about a Hodger moving. Did she tiptoe, waddle or stomp?',
  },
  {
    id: 'ran-verb', emoji: '🏃', word: 'ran', cat: 'verb',
    synonyms: ['sprinted', 'dashed', 'bolted', 'zoomed', 'hurtled', 'raced'],
    story:  'The Hodger bolted under the sofa the moment she heard footsteps on the stairs.',
    prompt: 'Write a sentence about a Hodger who sprints or dashes away from danger.',
  },
  {
    id: 'said-verb', emoji: '💬', word: 'said', cat: 'verb',
    synonyms: ['whispered', 'shouted', 'muttered', 'giggled', 'announced', 'declared'],
    story:  '"This is the best hiding place," the Hodger whispered smugly from inside the wellington boot.',
    prompt: 'Write a sentence where a Hodger whispers, mutters or giggles something.',
  },
  {
    id: 'laughed-verb', emoji: '😂', word: 'laughed', cat: 'verb',
    synonyms: ['chuckled', 'cackled', 'snorted', 'howled', 'giggled', 'guffawed'],
    story:  'The Hodger cackled so hard at her own prank that she fell off the shelf.',
    prompt: 'Write a sentence about a Hodger who cackles or guffaws at their own mischief.',
  },
  {
    id: 'ate-verb', emoji: '🍪', word: 'ate', cat: 'verb',
    synonyms: ['devoured', 'gobbled', 'nibbled', 'munched', 'chomped', 'wolfed'],
    story:  'The Hodger devoured the entire biscuit tin in four minutes and felt absolutely no guilt.',
    prompt: 'Write a sentence about a Hodger who gobbles or devours something they shouldn\'t.',
  },
  {
    id: 'hid-verb', emoji: '🙈', word: 'hid', cat: 'verb',
    synonyms: ['concealed', 'lurked', 'crouched', 'cowered', 'ducked', 'vanished'],
    story:  'The Hodger lurked behind the cereal boxes, watching and waiting for the perfect moment.',
    prompt: 'Write a sentence about a Hodger who lurks or crouches somewhere unexpected.',
  },
  {
    id: 'looked-verb', emoji: '👀', word: 'looked', cat: 'verb',
    synonyms: ['peered', 'glared', 'peeked', 'spied', 'gazed', 'squinted'],
    story:  'The Hodger peered around the corner of the fridge with one very suspicious eye.',
    prompt: 'Write a sentence where a Hodger peeks, peers or spies on something.',
  },
];

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

// Speak an array of strings in sequence, with a pause (ms) between each.
function speakSequence(parts, gapMs) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const gap = gapMs ?? 800;
  function next(i) {
    if (i >= parts.length) return;
    const text = String(parts[i] || '').trim();
    if (!text) { setTimeout(() => next(i + 1), gap); return; }
    const utt  = new SpeechSynthesisUtterance(text);
    utt.lang   = 'en-GB';
    utt.rate   = 0.88;
    utt.onend  = () => setTimeout(() => next(i + 1), gap);
    window.speechSynthesis.speak(utt);
  }
  next(0);
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

  document.addEventListener('keydown', e => {
    if (state.screen !== 'browse') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goCard(-1); }
    if (e.key === ' ')          { e.preventDefault(); speakMain(); }
  });
});
