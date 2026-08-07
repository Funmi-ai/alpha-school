'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
   All Hojas-themed examples live here. Edit this section only
   to add new connectives or update story sentences.
═══════════════════════════════════════════════════════════════ */

const GROUPS = [
  {
    id:      'adding',
    label:   'Adding More',
    emoji:   '➕',
    color:   '#3b82f6',
    desc:    'Use these to build up your story — add more and more!',
    words: [
      {
        id:       'and',
        word:     'and',
        does:     'joins two ideas together',
        example:  'The Hoja found the perfect hiding spot and immediately did a massive fart.',
        prompt:   'The Hoja crept under the sofa and…',
      },
      {
        id:       'also',
        word:     'also',
        does:     'adds another thing on top',
        example:  'The Hojas stole all the biscuits. They also sat on the dog.',
        prompt:   'The Hoja made a terrible smell. She also…',
      },
      {
        id:       'as-well-as',
        word:     'as well as',
        does:     'says there is even more',
        example:  'The Hoja left muddy footprints everywhere, as well as a very suspicious smell.',
        prompt:   'The Hojas caused mischief in the kitchen, as well as…',
      },
      {
        id:       'too',
        word:     'too',
        does:     'says something else joins in',
        example:  'The big Hoja was grumpy. The little one was absolutely furious too.',
        prompt:   'The Hoja was hiding. Her friend was hiding too, but…',
      },
    ],
  },

  {
    id:      'contrasting',
    label:   'Twist!',
    emoji:   '🔀',
    color:   '#8b5cf6',
    desc:    'Use these when something surprising or different happens!',
    words: [
      {
        id:       'but',
        word:     'but',
        does:     'something different or opposite happens',
        example:  'The Hojas tried to be quiet, but the biggest one did a thunderous burp.',
        prompt:   'The Hoja tiptoed across the floor, but…',
      },
      {
        id:       'however',
        word:     'however',
        does:     'a surprising thing happens instead',
        example:  'The kitchen looked spotless. However, the Hojas had been extremely busy under the floorboards.',
        prompt:   'Everything seemed fine. However, the Hojas…',
      },
      {
        id:       'although',
        word:     'although',
        does:     'even though one thing is true, something else is too',
        example:  'Although the Hojas were tiny, they could cause an absolutely enormous amount of trouble.',
        prompt:   'Although the Hoja was only the size of a thumb, she…',
      },
      {
        id:       'yet',
        word:     'yet',
        does:     'something still happens even so',
        example:  'The Hoja had been warned about the cat, yet she still crept straight towards the food bowl.',
        prompt:   'The Hoja knew it was dangerous, yet…',
      },
      {
        id:       'even-though',
        word:     'even though',
        does:     'something happens despite the situation',
        example:  'Even though the whole family was watching, the Hoja still managed to steal a crumpet.',
        prompt:   'Even though everyone was looking, the Hoja…',
      },
    ],
  },

  {
    id:      'cause',
    label:   'Cause & Effect',
    emoji:   '🔗',
    color:   '#f59e0b',
    desc:    'Use these to explain WHY things happen in your story!',
    words: [
      {
        id:       'because',
        word:     'because',
        does:     'explains why something happened',
        example:  'The whole room smelled terrible because a Hoja had been hiding behind the radiator all afternoon.',
        prompt:   'Everyone had to open the windows because…',
      },
      {
        id:       'so',
        word:     'so',
        does:     'shows what happened as a result',
        example:  'The Hoja ate seventeen biscuits, so she had to undo her tiny belt.',
        prompt:   'The Hoja had been very naughty all day, so…',
      },
      {
        id:       'therefore',
        word:     'therefore',
        does:     'because of that, this happened',
        example:  'The Hojas had caused terrible mischief. Therefore, they hid behind the washing machine and waited.',
        prompt:   'The Hoja had been spotted. Therefore, she…',
      },
      {
        id:       'since',
        word:     'since',
        does:     'because something was already true',
        example:  'Since the Hoja had been farting under the floorboards all morning, everyone blamed the dog.',
        prompt:   'Since the Hojas had eaten all the cheese…',
      },
      {
        id:       'as-a-result',
        word:     'as a result',
        does:     'this is what happened because of that',
        example:  'The Hoja sat in the butter dish. As a result, things got very slippery very quickly.',
        prompt:   'The Hoja had been extremely mischievous. As a result…',
      },
    ],
  },

  {
    id:      'time',
    label:   'Story Order',
    emoji:   '⏱️',
    color:   '#16a34a',
    desc:    'Use these to tell your story in the right order — step by step!',
    words: [
      {
        id:       'first',
        word:     'first',
        does:     'the very first thing that happened',
        example:  'First, the Hoja checked that absolutely nobody was looking.',
        prompt:   'First, the Hoja…',
      },
      {
        id:       'next',
        word:     'next',
        does:     'what happened straight after',
        example:  'Next, she tiptoed across the kitchen floor on her tiny feet.',
        prompt:   'Next, the Hoja sneaked towards…',
      },
      {
        id:       'then',
        word:     'then',
        does:     'what happened after that',
        example:  'Then she sat directly in the middle of the butter dish and grinned.',
        prompt:   'Then the Hoja…',
      },
      {
        id:       'after',
        word:     'after',
        does:     'something happened following that',
        example:  'After the great biscuit disaster, the Hojas decided to hide in the sock drawer for a while.',
        prompt:   'After the Hojas caused so much trouble…',
      },
      {
        id:       'before',
        word:     'before',
        does:     'something happened earlier',
        example:  'Before anyone noticed, the Hojas had eaten all the cheese and completely disappeared.',
        prompt:   'Before the family came home, the Hojas…',
      },
      {
        id:       'when',
        word:     'when',
        does:     'at the same moment as something else',
        example:  'When the lights went off, the Hojas crept out from under the kitchen cupboards.',
        prompt:   'When nobody was watching, the Hoja…',
      },
      {
        id:       'while',
        word:     'while',
        does:     'two things happening at the same time',
        example:  'While everyone was eating dinner, the Hojas were doing something disgusting in the garden.',
        prompt:   'While the family was asleep, the Hojas…',
      },
      {
        id:       'finally',
        word:     'finally',
        does:     'the last thing — the ending!',
        example:  'Finally, after holding it in all afternoon, the Hoja let out the most enormous fart anyone had ever heard.',
        prompt:   'Finally, after all that mischief, the Hoja…',
      },
    ],
  },

  {
    id:      'drama',
    label:   'Drama!',
    emoji:   '🎭',
    color:   '#ef4444',
    desc:    'Use these to make your story really exciting!',
    words: [
      {
        id:       'suddenly',
        word:     'suddenly',
        does:     'something unexpected and exciting happens',
        example:  'Everything was quiet and peaceful. Suddenly, a terrible smell drifted under the door.',
        prompt:   'The house was completely silent. Suddenly…',
      },
      {
        id:       'meanwhile',
        word:     'meanwhile',
        does:     'something else was happening somewhere else at the same time',
        example:  'The family thought everything was fine. Meanwhile, in the kitchen cupboard, the Hojas were planning something absolutely awful.',
        prompt:   'The family went to bed. Meanwhile, the Hojas…',
      },
      {
        id:       'until',
        word:     'until',
        does:     'something was happening right up to the moment when',
        example:  'Everything was peaceful and lovely until the Hojas arrived and discovered the fridge.',
        prompt:   'The house was tidy and clean until…',
      },
      {
        id:       'luckily',
        word:     'luckily',
        does:     'something good happened just in time',
        example:  'The Hoja had almost been caught — luckily, she dived inside a wellington boot just in time.',
        prompt:   'The Hoja was spotted! Luckily…',
      },
      {
        id:       'unfortunately',
        word:     'unfortunately',
        does:     'something bad happened — oh no!',
        example:  'Unfortunately for the family, the Hojas had discovered where the chocolate biscuits were hidden.',
        prompt:   'The Hojas had a brilliant plan. Unfortunately…',
      },
      {
        id:       'worst-of-all',
        word:     'worst of all',
        does:     'the most terrible thing of everything',
        example:  'The Hojas had eaten the cake, stolen the cheese, and sat on the cat — but worst of all, nobody knew it was them.',
        prompt:   'The Hoja had caused so much trouble, but worst of all…',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════════ */

// Total card count
const TOTAL = GROUPS.reduce((n, g) => n + g.words.length, 0);

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

let state = {
  screen:     'home',    // 'home' | 'group' | 'card'
  groupId:    null,
  wordIndex:  0,
  speaking:   false,
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

function getGroup()    { return GROUPS.find(g => g.id === state.groupId) || null; }
function getWords()    { return getGroup()?.words ?? []; }
function getWord()     { return getWords()[state.wordIndex] ?? null; }

/* ═══════════════════════════════════════════════════════════════
   TTS — routes through tts_server.py (macOS 'say', port 8081)
═══════════════════════════════════════════════════════════════ */

const TTS = 'http://localhost:8081';

async function speak(text, onDone) {
  if (!text) { if (onDone) onDone(); return; }
  state.speaking = true;
  try {
    await fetch(TTS + '/speak', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ text }),
    });
  } catch (e) { /* server not running — silent fail */ }
  state.speaking = false;
  if (onDone) onDone();
  const el = $('speak-status');
  if (el) el.textContent = text;
}

function cancelSpeech() {
  fetch(TTS + '/cancel', { method: 'POST' }).catch(() => {});
  state.speaking = false;
}

// Speak: word → short pause → example sentence
function speakCard(word) {
  cancelSpeech();
  speak(word.word, () => {
    setTimeout(() => speak(word.example), 400);
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════════════ */

function renderHome() {
  state.screen   = 'home';
  state.groupId  = null;
  state.wordIndex = 0;
  cancelSpeech();

  $('app').innerHTML = `
    <div class="home-screen">

      <header class="home-hero">
        <div class="home-logo" aria-hidden="true">🔗</div>
        <h1 class="home-title">Connectives</h1>
        <p class="home-sub">Words that join your story together</p>
        <p class="home-hojas">Every example features the Hojas 💨</p>
      </header>

      <nav class="group-grid" aria-label="Choose a connective group">
        ${GROUPS.map(g => `
          <button class="group-btn" data-action="open-group" data-group="${safeText(g.id)}"
            style="--gc:${safeText(g.color)}" aria-label="${safeText(g.label)} — ${safeText(g.desc)}">
            <span class="gb-emoji" aria-hidden="true">${g.emoji}</span>
            <span class="gb-label">${safeText(g.label)}</span>
            <span class="gb-count">${g.words.length} words</span>
          </button>
        `).join('')}
      </nav>

      <div class="home-footer">
        <span class="home-total">${TOTAL} connectives in total</span>
      </div>

    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — GROUP (word list)
═══════════════════════════════════════════════════════════════ */

function renderGroup() {
  state.screen = 'group';
  cancelSpeech();
  const group = getGroup();
  if (!group) { renderHome(); return; }

  $('app').innerHTML = `
    <div class="group-screen" style="--gc:${safeText(group.color)}">

      <header class="screen-header" style="background:${safeText(group.color)}">
        <button class="back-btn" data-action="go-home" aria-label="Back to home">←</button>
        <div class="screen-title">${group.emoji} ${safeText(group.label)}</div>
        <div></div>
      </header>

      <p class="group-desc">${safeText(group.desc)}</p>

      <div class="word-list" role="list">
        ${group.words.map((w, i) => `
          <button class="word-list-item" data-action="open-card" data-index="${i}"
            role="listitem" aria-label="Learn the word ${safeText(w.word)}">
            <span class="wli-word">${safeText(w.word)}</span>
            <span class="wli-does">${safeText(w.does)}</span>
            <span class="wli-arrow" aria-hidden="true">→</span>
          </button>
        `).join('')}
      </div>

    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — CARD (full connective card)
═══════════════════════════════════════════════════════════════ */

function renderCard(slideDir) {
  state.screen = 'card';
  const group  = getGroup();
  const words  = getWords();
  const word   = getWord();
  const idx    = state.wordIndex;
  const total  = words.length;
  if (!word || !group) { renderGroup(); return; }

  const animCls = slideDir === 'next' ? 'from-right'
                : slideDir === 'prev' ? 'from-left' : '';

  $('app').innerHTML = `
    <div class="card-screen" style="--gc:${safeText(group.color)}">

      <header class="screen-header" style="background:${safeText(group.color)}">
        <button class="back-btn" data-action="go-group" aria-label="Back to word list">←</button>
        <div class="screen-title">${group.emoji} ${safeText(group.label)}</div>
        <div class="card-counter">${idx + 1}/${total}</div>
      </header>

      <div class="card-stage" id="card-stage">
        <button class="nav-arrow" data-action="card-prev" aria-label="Previous word"
          ${idx === 0 ? 'disabled' : ''}>◀</button>

        <div class="conn-card ${animCls}" id="conn-card">

          <div class="cc-word-row">
            <span class="cc-word">${safeText(word.word)}</span>
            <button class="cc-speak-btn" data-action="speak-word"
              aria-label="Hear this word and example">🔊</button>
          </div>

          <div class="cc-does">
            <span class="cc-does-label">What it does:</span>
            <span class="cc-does-text">${safeText(word.does)}</span>
          </div>

          <div class="cc-example-block">
            <div class="cc-example-label">📖 Hojas story:</div>
            <blockquote class="cc-example">
              ${highlightWord(word.example, word.word)}
            </blockquote>
            <button class="cc-hear-btn" data-action="speak-example"
              aria-label="Hear the story sentence">
              🔊 Hear the story
            </button>
          </div>

          <div class="cc-prompt-block">
            <div class="cc-prompt-label">✏️ Your turn — finish the story:</div>
            <div class="cc-prompt">
              ${highlightWord(word.prompt, word.word)}
            </div>
            <button class="cc-hear-btn cc-hear-prompt" data-action="speak-prompt"
              aria-label="Hear the story prompt">
              🔊 Hear the prompt
            </button>
          </div>

        </div>

        <button class="nav-arrow" data-action="card-next" aria-label="Next word"
          ${idx >= total - 1 ? 'disabled' : ''}>▶</button>
      </div>

      <div class="card-progress">
        <div class="progress-track" role="progressbar"
          aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${idx + 1}">
          <div class="progress-fill" style="width:${((idx + 1) / total * 100).toFixed(1)}%"></div>
        </div>
      </div>

    </div>
  `;

  // Touch swipe on card
  const stage = $('card-stage');
  let _tx = 0;
  stage.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = _tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 44) goCard(diff > 0 ? 1 : -1);
  }, { passive: true });

  // Auto-speak word on arrival (brief delay for layout)
  setTimeout(() => speak(word.word), 250);
}

// Highlight the connective word inside a sentence (wraps first occurrence)
function highlightWord(sentence, word) {
  const safe = safeText(sentence);
  const safeWord = safeText(word);
  // Case-insensitive first-match wrap
  const re = new RegExp(`(${safeWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i');
  return safe.replace(re, '<strong class="conn-highlight">$1</strong>');
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════════ */

function goCard(dir) {
  const words = getWords();
  const next  = state.wordIndex + dir;
  if (next < 0 || next >= words.length) return;
  state.wordIndex = next;
  cancelSpeech();
  renderCard(dir > 0 ? 'next' : 'prev');
}

/* ═══════════════════════════════════════════════════════════════
   ACTIONS
═══════════════════════════════════════════════════════════════ */

function handleClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  switch (btn.dataset.action) {

    case 'open-group':
      state.groupId   = btn.dataset.group;
      state.wordIndex = 0;
      renderGroup();
      break;

    case 'go-home':
      renderHome();
      break;

    case 'go-group':
      renderGroup();
      break;

    case 'open-card':
      state.wordIndex = Number(btn.dataset.index);
      renderCard('none');
      break;

    case 'card-prev':
      goCard(-1);
      break;

    case 'card-next':
      goCard(1);
      break;

    case 'speak-word': {
      const w = getWord();
      if (w) speakCard(w);
      break;
    }

    case 'speak-example': {
      const w = getWord();
      if (w) speak(w.example);
      break;
    }

    case 'speak-prompt': {
      const w = getWord();
      if (w) speak(w.prompt);
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
    if (state.screen !== 'card') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goCard(-1); }
    if (e.key === ' ')          { e.preventDefault(); const w = getWord(); if (w) speakCard(w); }
    if (e.key === 'Escape')     { e.preventDefault(); renderGroup(); }
  });
});
