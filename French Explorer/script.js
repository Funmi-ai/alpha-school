'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
   All content lives here. Never touch render functions to add words.
═══════════════════════════════════════════════════════════════ */

const VEHICLES = [
  // Road
  { id: 'car',        emoji: '🚙',  fr: 'la voiture',            en: 'car',          type: 'road'  },
  { id: 'truck',      emoji: '🚛',  fr: 'le camion',             en: 'truck',        type: 'road'  },
  { id: 'bus',        emoji: '🚌',  fr: 'le bus',                en: 'bus',          type: 'road'  },
  { id: 'firetruck',  emoji: '🚒',  fr: 'le camion de pompiers', en: 'fire engine',  type: 'road'  },
  { id: 'ambulance',  emoji: '🚑',  fr: "l'ambulance",           en: 'ambulance',    type: 'road'  },
  { id: 'police',     emoji: '🚓',  fr: 'la voiture de police',  en: 'police car',   type: 'road'  },
  { id: 'racing',     emoji: '🏎️',  fr: 'la voiture de course',  en: 'racing car',   type: 'road'  },
  { id: 'motorbike',  emoji: '🏍️',  fr: 'la moto',               en: 'motorbike',    type: 'road'  },
  { id: 'bike',       emoji: '🚲',  fr: 'le vélo',               en: 'bicycle',      type: 'road'  },
  // Farm
  { id: 'tractor',    emoji: '🚜',  fr: 'le tracteur',           en: 'tractor',      type: 'farm'  },
  // Air
  { id: 'plane',      emoji: '✈️',   fr: "l'avion",               en: 'plane',        type: 'air'   },
  { id: 'helicopter', emoji: '🚁',  fr: "l'hélicoptère",         en: 'helicopter',   type: 'air'   },
  { id: 'rocket',     emoji: '🚀',  fr: 'la fusée',              en: 'rocket',       type: 'air'   },
  // Water
  { id: 'sailboat',   emoji: '⛵',  fr: 'le voilier',            en: 'sailboat',     type: 'water' },
  { id: 'ship',       emoji: '🚢',  fr: 'le bateau',             en: 'ship',         type: 'water' },
  { id: 'speedboat',  emoji: '🛥️',  fr: 'le bateau à moteur',   en: 'speedboat',    type: 'water' },
  // Rail
  { id: 'train',      emoji: '🚂',  fr: 'le train',              en: 'train',        type: 'rail'  },
  { id: 'metro',      emoji: '🚇',  fr: 'le métro',              en: 'metro',        type: 'rail'  },
];

const VEHICLE_FILTERS = [
  { id: 'all',   label: 'Tout',   emoji: '⭐' },
  { id: 'road',  label: 'Route',  emoji: '🛣️'  },
  { id: 'air',   label: 'Air',    emoji: '☁️'  },
  { id: 'water', label: 'Mer',    emoji: '🌊'  },
  { id: 'rail',  label: 'Rail',   emoji: '🚦'  },
  { id: 'farm',  label: 'Ferme',  emoji: '🌾'  },
];

// Animals grouped by the vehicle journey that finds them.
// The journeyEmoji reinforces the transport root concept.
const ANIMALS = [
  // Farm — found by the tractor
  { id: 'cow',       emoji: '🐄', fr: 'la vache',      en: 'cow',       journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'sheep',     emoji: '🐑', fr: 'le mouton',     en: 'sheep',     journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'horse',     emoji: '🐎', fr: 'le cheval',     en: 'horse',     journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'pig',       emoji: '🐷', fr: 'le cochon',     en: 'pig',       journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'chicken',   emoji: '🐔', fr: 'la poule',      en: 'chicken',   journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'dog',       emoji: '🐕', fr: 'le chien',      en: 'dog',       journey: 'farm',   journeyEmoji: '🚜' },
  // Safari — found from the jeep/truck
  { id: 'lion',      emoji: '🦁', fr: 'le lion',       en: 'lion',      journey: 'safari', journeyEmoji: '🚙' },
  { id: 'elephant',  emoji: '🐘', fr: "l'éléphant",    en: 'elephant',  journey: 'safari', journeyEmoji: '🚙' },
  { id: 'giraffe',   emoji: '🦒', fr: 'la girafe',     en: 'giraffe',   journey: 'safari', journeyEmoji: '🚙' },
  { id: 'zebra',     emoji: '🦓', fr: 'le zèbre',      en: 'zebra',     journey: 'safari', journeyEmoji: '🚙' },
  { id: 'monkey',    emoji: '🐒', fr: 'le singe',      en: 'monkey',    journey: 'safari', journeyEmoji: '🚙' },
  { id: 'rhino',     emoji: '🦏', fr: 'le rhinocéros', en: 'rhinoceros',journey: 'safari', journeyEmoji: '🚙' },
  // Ocean — found from the boat
  { id: 'dolphin',   emoji: '🐬', fr: 'le dauphin',    en: 'dolphin',   journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'shark',     emoji: '🦈', fr: 'le requin',     en: 'shark',     journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'whale',     emoji: '🐋', fr: 'la baleine',    en: 'whale',     journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'octopus',   emoji: '🐙', fr: 'la pieuvre',    en: 'octopus',   journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'crab',      emoji: '🦀', fr: 'le crabe',      en: 'crab',      journey: 'ocean',  journeyEmoji: '⛵' },
  // Sky — found from the plane/helicopter
  { id: 'eagle',     emoji: '🦅', fr: "l'aigle",       en: 'eagle',     journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'parrot',    emoji: '🦜', fr: 'le perroquet',  en: 'parrot',    journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'butterfly', emoji: '🦋', fr: 'le papillon',   en: 'butterfly', journey: 'sky',    journeyEmoji: '✈️' },
];

const ANIMAL_JOURNEYS = [
  { id: 'all',    label: 'Tous',   emoji: '⭐', hint: '' },
  { id: 'farm',   label: 'Ferme',  emoji: '🌾', hint: 'Found by the tractor 🚜' },
  { id: 'safari', label: 'Safari', emoji: '🌍', hint: 'Found by the jeep 🚙' },
  { id: 'ocean',  label: 'Océan',  emoji: '🌊', hint: 'Found from the boat ⛵' },
  { id: 'sky',    label: 'Ciel',   emoji: '☁️',  hint: 'Found from the plane ✈️' },
];

/* ── Level 2 data ── */

const NUMBERS = [
  { id: 'un',     fr: 'un',     en: 'one',   num: 1  },
  { id: 'deux',   fr: 'deux',   en: 'two',   num: 2  },
  { id: 'trois',  fr: 'trois',  en: 'three', num: 3  },
  { id: 'quatre', fr: 'quatre', en: 'four',  num: 4  },
  { id: 'cinq',   fr: 'cinq',   en: 'five',  num: 5  },
  { id: 'six',    fr: 'six',    en: 'six',   num: 6  },
  { id: 'sept',   fr: 'sept',   en: 'seven', num: 7  },
  { id: 'huit',   fr: 'huit',   en: 'eight', num: 8  },
  { id: 'neuf',   fr: 'neuf',   en: 'nine',  num: 9  },
  { id: 'dix',    fr: 'dix',    en: 'ten',   num: 10 },
];

const BODY_PARTS = [
  { id: 'tete',    emoji: '🙂', fr: 'la tête',    en: 'head'   },
  { id: 'yeux',    emoji: '👁️', fr: 'les yeux',   en: 'eyes'   },
  { id: 'nez',     emoji: '👃', fr: 'le nez',     en: 'nose'   },
  { id: 'bouche',  emoji: '👄', fr: 'la bouche',  en: 'mouth'  },
  { id: 'oreille', emoji: '👂', fr: "l'oreille",  en: 'ear'    },
  { id: 'bras',    emoji: '💪', fr: 'le bras',    en: 'arm'    },
  { id: 'main',    emoji: '✋', fr: 'la main',    en: 'hand'   },
  { id: 'jambe',   emoji: '🦵', fr: 'la jambe',   en: 'leg'    },
  { id: 'pied',    emoji: '🦶', fr: 'le pied',    en: 'foot'   },
  { id: 'dents',   emoji: '🦷', fr: 'les dents',  en: 'teeth'  },
];

const FAMILY = [
  { id: 'maman',     emoji: '👩',      fr: 'maman',          en: 'mum'      },
  { id: 'papa',      emoji: '👨',      fr: 'papa',            en: 'dad'      },
  { id: 'bebe',      emoji: '👶',      fr: 'le bébé',         en: 'baby'     },
  { id: 'frere',     emoji: '👦',      fr: 'le frère',        en: 'brother'  },
  { id: 'soeur',     emoji: '👧',      fr: 'la sœur',         en: 'sister'   },
  { id: 'grandmere', emoji: '👵',      fr: 'la grand-mère',   en: 'grandma'  },
  { id: 'grandpere', emoji: '👴',      fr: 'le grand-père',   en: 'grandad'  },
];

const FOOD = [
  { id: 'pain',     emoji: '🍞', fr: 'le pain',      en: 'bread'      },
  { id: 'lait',     emoji: '🥛', fr: 'le lait',      en: 'milk'       },
  { id: 'eau',      emoji: '💧', fr: "l'eau",         en: 'water'      },
  { id: 'pomme',    emoji: '🍎', fr: 'la pomme',     en: 'apple'      },
  { id: 'fromage',  emoji: '🧀', fr: 'le fromage',   en: 'cheese'     },
  { id: 'chocolat', emoji: '🍫', fr: 'le chocolat',  en: 'chocolate'  },
  { id: 'gateau',   emoji: '🎂', fr: 'le gâteau',    en: 'cake'       },
  { id: 'jus',      emoji: '🥤', fr: 'le jus',       en: 'juice'      },
  { id: 'banane',   emoji: '🍌', fr: 'la banane',    en: 'banana'     },
  { id: 'fraise',   emoji: '🍓', fr: 'la fraise',    en: 'strawberry' },
];

// Colours anchored to vehicles — "rouge? That's the fire engine colour!"
const COLOURS = [
  { id: 'rouge',  fr: 'rouge',   en: 'red',    hex: '#ef4444', vehicleEmoji: '🚒', vehicleFr: 'le camion de pompiers' },
  { id: 'bleu',   fr: 'bleu',    en: 'blue',   hex: '#3b82f6', vehicleEmoji: '🚓', vehicleFr: 'la voiture de police'  },
  { id: 'jaune',  fr: 'jaune',   en: 'yellow', hex: '#eab308', vehicleEmoji: '🚌', vehicleFr: 'le bus scolaire'       },
  { id: 'vert',   fr: 'vert',    en: 'green',  hex: '#22c55e', vehicleEmoji: '🚜', vehicleFr: 'le tracteur'           },
  { id: 'orange', fr: 'orange',  en: 'orange', hex: '#f97316', vehicleEmoji: '🚧', vehicleFr: 'les travaux'           },
  { id: 'noir',   fr: 'noir',    en: 'black',  hex: '#374151', vehicleEmoji: '🏎️', vehicleFr: 'la voiture de course'  },
  { id: 'blanc',  fr: 'blanc',   en: 'white',  hex: '#e2e8f0', vehicleEmoji: '🚑', vehicleFr: "l'ambulance"           },
  { id: 'violet', fr: 'violet',  en: 'purple', hex: '#a855f7', vehicleEmoji: '🚂', vehicleFr: 'le train'              },
];

/* ═══════════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════════ */

const CAT_CFG = {
  vehicles: { labelFr: 'Les Véhicules', emoji: '🏎️', quizPrompt: 'Quel est ce véhicule ?' },
  animals:  { labelFr: 'Les Animaux',   emoji: '🦁', quizPrompt: 'Quel est cet animal ?' },
  colours:  { labelFr: 'Les Couleurs',  emoji: '🎨', quizPrompt: 'Quelle est cette couleur ?' },
  numbers:  { labelFr: 'Les Chiffres',  emoji: '🔢', quizPrompt: 'Quel est ce chiffre ?' },
  body:     { labelFr: 'Le Corps',      emoji: '💪', quizPrompt: 'Quelle est cette partie ?' },
  family:   { labelFr: 'La Famille',    emoji: '👨‍👩‍👧', quizPrompt: 'Qui est-ce ?' },
  food:     { labelFr: 'La Nourriture', emoji: '🍎', quizPrompt: "Qu'est-ce que c'est ?" },
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

let state = {
  screen:        'home',
  level:         1,
  category:      null,
  vehicleFilter: 'all',
  animalFilter:  'all',
  // card navigator
  cardIndex:     0,
  // quiz
  quizItems:     [],
  quizIndex:     0,
  quizScore:     0,
  quizAnswered:  false,
  // modal
  modalItem:     null,
  modalCat:      null,
  lastFocused:   null,
  // pronunciation practice
  practiceWords: [],
  practiceIdx:   0,
  _practiceRec:  null,
  // inline card recording
  _cardRec:      null,
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
  if (cat === 'body')     return BODY_PARTS;
  if (cat === 'family')   return FAMILY;
  if (cat === 'food')     return FOOD;
  return [];
}

function getFilteredItems() {
  if (state.category === 'vehicles') {
    return state.vehicleFilter === 'all'
      ? VEHICLES
      : VEHICLES.filter(v => v.type === state.vehicleFilter);
  }
  if (state.category === 'animals') {
    return state.animalFilter === 'all'
      ? ANIMALS
      : ANIMALS.filter(a => a.journey === state.animalFilter);
  }
  return getAllItems(state.category);
}

let _currentAudio = null;

function speak(id) {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
  }
  const audio = new Audio(`audio/${id}.m4a`);
  _currentAudio = audio;
  audio.play().catch(() => {});
}

/* ── French TTS via browser Web Speech API ── */

// Preload voices as early as possible (Chrome needs this)
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {}, { once: true });
}

function speakFrench(text) {
  if (!('speechSynthesis' in window)) return;
  if (_currentAudio) { _currentAudio.pause(); _currentAudio.currentTime = 0; }
  window.speechSynthesis.cancel();
  const doSpeak = () => {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'fr-FR';
    utt.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const frVoice = voices.find(v => v.lang.startsWith('fr'));
    if (frVoice) utt.voice = frVoice;
    window.speechSynthesis.speak(utt);
  };
  const voices = window.speechSynthesis.getVoices();
  if (voices.length) { doSpeak(); }
  else { window.speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true }); }
}

function cancelFrench() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

/* ── French feedback phrases (spoken after pronunciation evaluation) ── */

function frenchFeedbackPhrase(stars) {
  if (stars >= 5) return 'Tu as dit ça parfaitement !';
  if (stars >= 4) return 'Très bien dit !';
  if (stars >= 3) return 'Bien essayé !';
  if (stars >= 2) return 'Continue d\'essayer !';
  return 'Réessaie encore !';
}

/* ── Pronunciation practice helpers ── */

function getPracticeWords() {
  const vehicles = VEHICLES.map(v => ({ id: v.id, fr: v.fr, en: v.en, emoji: v.emoji }));
  const animals  = ANIMALS.map(a  => ({ id: a.id, fr: a.fr, en: a.en, emoji: a.emoji }));
  const colours  = COLOURS.map(c  => ({ id: c.id, fr: c.fr, en: c.en, emoji: '🎨' }));
  return shuffle([...vehicles, ...animals, ...colours]);
}

function starHTML(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star${i < n ? ' lit' : ''}" aria-hidden="true">${i < n ? '⭐' : '☆'}</span>`
  ).join('');
}

function practiceIdleHTML() {
  return `
    <div class="practice-idle">
      <p class="practice-instruction">Listen first, then try saying it in French!</p>
      <div class="practice-btn-row">
        <button class="pr-btn listen" data-action="practice-listen">👂 Listen</button>
        <button class="pr-btn mic"    data-action="practice-record">🎙️ Your turn</button>
      </div>
    </div>`;
}

/* ── Inline card mic (Option A) ── */

function resetCardMicBtn() {
  const btn = $('card-mic');
  if (!btn) return;
  btn.innerHTML = '<span aria-hidden="true">🎙️</span><span class="speaker-label">say it</span>';
  btn.disabled = false;
}

function cancelCardRecording() {
  if (!state._cardRec) return;
  const rec = state._cardRec;
  state._cardRec = null;
  try { rec.stop(); } catch {}
  resetCardMicBtn();
  const resultEl = $('card-mic-result');
  if (resultEl) { resultEl.classList.add('hidden'); resultEl.innerHTML = ''; }
}

function startCardRecording() {
  const items = getFilteredItems();
  if (!items.length) return;
  const item = items[state.cardIndex];

  cancelCardRecording();

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;

  const micBtn = $('card-mic');
  if (micBtn) {
    micBtn.innerHTML = '<span aria-hidden="true" class="mic-pulse-inline">🎙️</span><span class="speaker-label">listening…</span>';
    micBtn.disabled = true;
  }

  const rec = new SR();
  rec.lang = 'fr-FR';
  rec.continuous = true;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  state._cardRec = rec;

  let doneTimer = null;
  let pending = '';

  rec.onresult = e => {
    const last = e.results[e.results.length - 1];
    if (!last.isFinal) return;
    const text = last[0].transcript.trim();
    if (!text) return;
    pending = text;
    clearTimeout(doneTimer);
    doneTimer = setTimeout(() => {
      try { rec.stop(); } catch {}
      evaluateCardPronunciation(item, pending);
    }, 1500);
  };

  rec.onerror = e => {
    clearTimeout(doneTimer);
    if (e.error === 'no-speech') return;
    state._cardRec = null;
    resetCardMicBtn();
  };

  rec.onend = () => {
    clearTimeout(doneTimer);
    if (state._cardRec !== rec) return;
    const btn = $('card-mic');
    if (btn && btn.disabled) {
      try { rec.start(); } catch { state._cardRec = null; resetCardMicBtn(); }
    } else {
      state._cardRec = null;
    }
  };

  rec.start();
}

async function evaluateCardPronunciation(item, transcript) {
  const micBtn = $('card-mic');
  if (micBtn) {
    micBtn.innerHTML = '<span class="speaker-label" style="font-size:0.75rem;padding:0 6px">checking…</span>';
  }

  const apiKey = localStorage.getItem('why_api_key');
  let result = { stars: 3, feedback: 'Great try!' };

  if (apiKey) {
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 80,
          system: 'You evaluate a young child\'s (age 5-7) French pronunciation. Return ONLY valid JSON: {"stars":3,"feedback":"short encouraging sentence max 8 words"}. Be very generous with stars. Always warm and positive.',
          messages: [{ role: 'user', content: `Target: "${item.fr}" (${item.en}). Heard: "${transcript || '(nothing clear)'}". Evaluate.` }],
        }),
      });
      if (resp.ok) {
        const data = await resp.json();
        try {
          const match = data.content[0].text.match(/\{[\s\S]*\}/);
          if (match) result = JSON.parse(match[0]);
        } catch {}
      }
    } catch {}
  }

  state._cardRec = null;
  resetCardMicBtn();

  const resultEl = $('card-mic-result');
  if (!resultEl) return;

  const stars = Math.max(1, Math.min(5, Math.round(result.stars || 3)));
  resultEl.innerHTML = `
    <div class="cmr-stars">${starHTML(stars)}</div>
    <p class="cmr-feedback">${safeText(result.feedback)}</p>`;
  resultEl.classList.remove('hidden');

  speakFrench(frenchFeedbackPhrase(stars));

  if (stars >= 4) {
    const display = $('card-display');
    if (display) burstStars(display);
  }

  setTimeout(() => {
    const el = $('card-mic-result');
    if (el) { el.classList.add('hidden'); el.innerHTML = ''; }
  }, 3500);
}

function renderPractice() {
  stopRocketCanvas();
  cancelFrench();
  state.screen        = 'practice';
  state.practiceWords = getPracticeWords();
  state.practiceIdx   = 0;
  renderPracticeCard();
}

function renderPracticeCard() {
  const words = state.practiceWords;
  const idx   = state.practiceIdx;

  if (idx >= words.length) { renderPracticeComplete(); return; }

  const word = words[idx];

  $('app').innerHTML = `
    <div class="practice-screen">
      <header class="practice-header">
        <button class="back-btn" data-action="go-home" aria-label="Back to home">←</button>
        <h2 class="practice-title">🎙️ Parler</h2>
        <span class="practice-counter" aria-live="polite">${idx + 1} / ${words.length}</span>
      </header>

      <div class="practice-body">
        <div class="practice-word-card" id="practice-word-card">
          <div class="practice-emoji" aria-hidden="true">${word.emoji}</div>
          <div class="practice-fr">${safeText(word.fr)}</div>
          <div class="practice-en">${safeText(word.en)}</div>
        </div>

        <div id="practice-phase">${practiceIdleHTML()}</div>
      </div>
    </div>`;

  setTimeout(() => speak(word.id), 500);
}

function startPracticeRecording() {
  const phase = $('practice-phase');
  if (!phase) return;

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    phase.innerHTML = `
      <p class="practice-err">Microphone not supported in this browser.<br>Try Chrome or Safari.</p>
      <button class="pr-btn listen" data-action="practice-listen" style="margin-top:1rem">👂 Listen again</button>`;
    return;
  }

  phase.innerHTML = `
    <div class="practice-recording">
      <div class="pr-mic-pulse" aria-hidden="true">🎙️</div>
      <p class="practice-recording-text">Listening…</p>
      <button class="pr-btn cancel" data-action="practice-cancel">Stop</button>
    </div>`;

  const rec = new SR();
  rec.lang = 'fr-FR';
  rec.continuous = true;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  state._practiceRec = rec;

  let doneTimer = null;
  let pending = '';

  rec.onresult = e => {
    const last = e.results[e.results.length - 1];
    if (!last.isFinal) return;
    const text = last[0].transcript.trim();
    if (!text) return;
    pending = text;
    clearTimeout(doneTimer);
    doneTimer = setTimeout(() => {
      try { rec.stop(); } catch {}
      evaluatePronunciation(pending);
    }, 1500);
  };

  rec.onerror = e => {
    clearTimeout(doneTimer);
    if (e.error === 'no-speech') { /* onend will restart */ return; }
    state._practiceRec = null;
    const ph = $('practice-phase');
    if (ph) ph.innerHTML = practiceIdleHTML();
  };

  rec.onend = () => {
    clearTimeout(doneTimer);
    if (state._practiceRec !== rec) return; // cancelled or done
    const ph = $('practice-phase');
    if (ph && ph.querySelector('.practice-recording')) {
      try { rec.start(); } catch { state._practiceRec = null; }
    } else {
      state._practiceRec = null;
    }
  };

  rec.start();
}

async function evaluatePronunciation(transcript) {
  const phase = $('practice-phase');
  if (!phase) return;

  const word = state.practiceWords[state.practiceIdx];

  phase.innerHTML = `
    <div class="practice-evaluating">
      <div class="loading-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
      <p>Checking your French…</p>
    </div>`;

  const apiKey = localStorage.getItem('why_api_key');

  if (!apiKey) {
    showPracticeResult(transcript, { stars: 3, feedback: 'Great try — keep practising!', tip: "Ask a grown-up to set up Why's That first for personalised feedback." });
    return;
  }

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 120,
        system: 'You evaluate a young child\'s (age 5-7) French pronunciation attempt. Return ONLY valid JSON, no prose: {"stars":3,"feedback":"short encouraging sentence max 12 words","tip":"one short phonetic hint max 12 words"}. Be generous with stars. Always be warm and positive.',
        messages: [{
          role: 'user',
          content: `Target French: "${word.fr}" (means "${word.en}"). Speech recognition heard: "${transcript || '(nothing clear)'}". Evaluate.`,
        }],
      }),
    });

    if (!resp.ok) throw new Error('API error');
    const data = await resp.json();
    let result = { stars: 3, feedback: 'Great try!', tip: 'Keep practising!' };
    try {
      const raw = data.content[0].text;
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) result = JSON.parse(match[0]);
    } catch { /* keep default */ }

    showPracticeResult(transcript, result);
  } catch {
    showPracticeResult(transcript, { stars: 3, feedback: 'Good effort — keep going!', tip: 'Practise makes perfect!' });
  }
}

function showPracticeResult(transcript, result) {
  const phase = $('practice-phase');
  if (!phase) return;

  const stars = Math.max(1, Math.min(5, Math.round(result.stars || 3)));

  phase.innerHTML = `
    <div class="practice-result">
      <div class="pr-stars" aria-label="${stars} out of 5 stars">${starHTML(stars)}</div>
      <p class="pr-feedback">${safeText(result.feedback)}</p>
      ${result.tip ? `<p class="pr-tip">💡 ${safeText(result.tip)}</p>` : ''}
      ${transcript ? `<p class="pr-heard">I heard: "<em>${safeText(transcript)}</em>"</p>` : ''}
      <div class="practice-btn-row result-btns">
        <button class="pr-btn try-again" data-action="practice-try-again">🔄 Try again</button>
        <button class="pr-btn next-word"  data-action="practice-next">Next word →</button>
      </div>
    </div>`;

  if (stars >= 4) {
    const card = $('practice-word-card');
    if (card) burstStars(card);
  }

  speakFrench(frenchFeedbackPhrase(stars));
}

function renderPracticeComplete() {
  $('app').innerHTML = `
    <div class="practice-screen">
      <div class="practice-complete">
        <div class="practice-trophy" aria-hidden="true">🏆</div>
        <h2>Tu as tout fait !</h2>
        <p>You practised all the Level 1 words. Magnifique !</p>
        <button class="pr-btn next-word" data-action="practice-restart" style="margin-top:1.5rem">Play again 🔄</button>
        <button class="pr-btn listen"    data-action="go-home" style="margin-top:0.5rem">Home 🏠</button>
      </div>
    </div>`;
}

function makeStarsSVG(n) {
  let circles = '';
  for (let i = 0; i < n; i++) {
    const x   = (Math.random() * 100).toFixed(1);
    const y   = (Math.random() * 100).toFixed(1);
    const r   = (0.8 + Math.random() * 1.8).toFixed(1);
    const op  = (0.25 + Math.random() * 0.75).toFixed(2);
    circles += `<circle cx="${x}%" cy="${y}%" r="${r}" fill="white" opacity="${op}"/>`;
  }
  return circles;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════════════ */

/* ── Canvas rocket particle engine ── */

let _rocketRaf = null;
let _rocketBoostUntil = 0;

function stopRocketCanvas() {
  if (_rocketRaf !== null) {
    cancelAnimationFrame(_rocketRaf);
    _rocketRaf = null;
  }
}

function initRocketCanvas() {
  const canvas = document.getElementById('h-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  const pts    = []; // particle pool
  let tick     = 0;

  // Rounded-rect path (avoids ctx.roundRect Safari < 15.4)
  function rrect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y,     x + w, y + r,     r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x,     y + h, x,     y + h - r, r);
    ctx.lineTo(x,     y + r);
    ctx.arcTo(x,     y,     x + r, y,          r);
    ctx.closePath();
  }

  // Draw rocket; returns nozzle world position + scale for particle spawning
  function drawRocket(W, H, bob, tilt) {
    const sc = W * 0.68 / 100;
    const s  = v => v * sc;
    const cx = W / 2, cy = H * 0.44 + bob;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(tilt);

    const gBody = ctx.createLinearGradient(-s(22), 0, s(22), 0);
    gBody.addColorStop(0,    '#93c5fd');
    gBody.addColorStop(0.35, '#eff6ff');
    gBody.addColorStop(0.65, '#ffffff');
    gBody.addColorStop(1,    '#bfdbfe');

    const gNose = ctx.createLinearGradient(-s(22), 0, s(22), 0);
    gNose.addColorStop(0,   '#1d4ed8');
    gNose.addColorStop(0.5, '#3b82f6');
    gNose.addColorStop(1,   '#1d4ed8');

    const gFin = ctx.createLinearGradient(0, s(20), 0, s(56));
    gFin.addColorStop(0, '#2563eb');
    gFin.addColorStop(1, '#1e3a8a');

    // Fins
    ctx.fillStyle = gFin;
    ctx.beginPath(); ctx.moveTo(-s(20),s(20)); ctx.lineTo(-s(42),s(56)); ctx.lineTo(-s(20),s(40)); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo( s(20),s(20)); ctx.lineTo( s(42),s(56)); ctx.lineTo( s(20),s(40)); ctx.closePath(); ctx.fill();

    // Body
    ctx.fillStyle = gBody;
    rrect(-s(22), -s(40), s(44), s(82), s(4));
    ctx.fill();

    // Nose cone
    ctx.fillStyle = gNose;
    ctx.beginPath();
    ctx.moveTo(0, -s(90));
    ctx.bezierCurveTo(-s(5),-s(60), -s(22),-s(46), -s(22),-s(32));
    ctx.lineTo(s(22),-s(32));
    ctx.bezierCurveTo(s(22),-s(46), s(5),-s(60), 0,-s(90));
    ctx.closePath();
    ctx.fill();

    // Nose shine
    ctx.fillStyle = 'rgba(255,255,255,0.20)';
    ctx.beginPath();
    ctx.moveTo(-s(2),-s(86));
    ctx.bezierCurveTo(-s(9),-s(62),-s(18),-s(46),-s(18),-s(34));
    ctx.lineTo(-s(10),-s(34));
    ctx.bezierCurveTo(-s(10),-s(46),-s(2),-s(62),-s(2),-s(86));
    ctx.closePath();
    ctx.fill();

    // French tricolour stripe
    const sy = -s(22), sh = s(38);
    ctx.globalAlpha = 0.55; ctx.fillStyle = '#002395'; ctx.fillRect(-s(22), sy, s(15), sh);
    ctx.globalAlpha = 0.40; ctx.fillStyle = '#ffffff';  ctx.fillRect(-s(7),  sy, s(14), sh);
    ctx.globalAlpha = 0.55; ctx.fillStyle = '#ed2939';  ctx.fillRect( s(7),  sy, s(15), sh);
    ctx.globalAlpha = 1;

    // Window ring + glass
    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath(); ctx.arc(0, -s(6), s(16), 0, Math.PI * 2); ctx.fill();

    const gWin = ctx.createRadialGradient(-s(4),-s(10),0, 0,-s(6),s(14));
    gWin.addColorStop(0,   '#e0f2fe');
    gWin.addColorStop(0.6, '#7dd3fc');
    gWin.addColorStop(1,   '#0ea5e9');
    ctx.fillStyle = gWin;
    ctx.beginPath(); ctx.arc(0, -s(6), s(14), 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath(); ctx.ellipse(-s(4),-s(11),s(5),s(3),0,0,Math.PI*2); ctx.fill();

    // Nozzle
    ctx.fillStyle = '#374151';
    rrect(-s(14), s(40), s(28), s(10), s(3));
    ctx.fill();
    ctx.fillStyle = '#1f2937';
    ctx.beginPath(); ctx.ellipse(0,s(50),s(14),s(4),0,0,Math.PI*2); ctx.fill();

    ctx.restore();
    return { nx: cx, ny: cy + s(50), sc };
  }

  function drawParticles() {
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i];
      p.x  += p.vx;
      p.y  += p.vy;
      p.life  -= p.decay;
      p.size  *= 0.974;
      if (p.life <= 0 || p.size < 0.4) { pts.splice(i, 1); continue; }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      let g;
      if (p.type === 'flame') {
        g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0,    '#fff7ed');
        g.addColorStop(0.20, '#fef08a');
        g.addColorStop(0.55, '#fbbf24');
        g.addColorStop(0.85, '#f97316');
        g.addColorStop(1,    'rgba(239,68,68,0)');
      } else {
        g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0, 'rgba(200,200,200,0.45)');
        g.addColorStop(1, 'rgba(150,150,150,0)');
      }
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }
  }

  function spawnParticles(nx, ny, sc, count = 3) {
    const spread = sc * 7;
    for (let i = 0; i < count; i++) {
      pts.push({
        x: nx + (Math.random()-0.5)*spread,
        y: ny - sc*2,
        vx: (Math.random()-0.5)*1.5,
        vy: 2.2 + Math.random()*3.0,
        size: (2 + Math.random()*sc*5) * (count > 3 ? 1.5 : 1),
        life: 0.9 + Math.random()*0.1,
        decay: 0.055 + Math.random()*0.04,
        type: 'flame'
      });
    }
    if (tick % 3 === 0) {
      pts.push({
        x: nx + (Math.random()-0.5)*spread*1.8,
        y: ny + sc*6,
        vx: (Math.random()-0.5)*0.8,
        vy: 0.8 + Math.random()*1.0,
        size: sc*6 + Math.random()*sc*9,
        life: 0.4 + Math.random()*0.1,
        decay: 0.009 + Math.random()*0.007,
        type: 'smoke'
      });
    }
  }

  function loop() {
    if (!document.getElementById('h-canvas')) return; // navigated away

    const W = canvas.width  = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    if (!W || !H) { _rocketRaf = requestAnimationFrame(loop); return; }

    ctx.clearRect(0, 0, W, H);
    tick++;

    const boost  = Date.now() < _rocketBoostUntil;
    const rate   = boost ? 0.09 : 0.026;
    const bob    = Math.sin(tick * rate) * H * (boost ? 0.06 : 0.028);
    const tilt   = Math.sin(tick * rate) * (boost ? Math.PI / 28 : Math.PI / 84);
    const glowR  = boost ? 34 : 22;

    drawParticles();

    const { nx, ny, sc } = drawRocket(W, H, bob, tilt);

    const gGlow = ctx.createRadialGradient(nx, ny, 0, nx, ny, sc * glowR);
    gGlow.addColorStop(0,    'rgba(255,255,255,0.95)');
    gGlow.addColorStop(0.25, 'rgba(254,240,138,0.80)');
    gGlow.addColorStop(0.6,  'rgba(249,115,22,0.45)');
    gGlow.addColorStop(1,    'rgba(249,115,22,0)');
    ctx.fillStyle = gGlow;
    ctx.beginPath(); ctx.arc(nx, ny, sc * glowR, 0, Math.PI*2); ctx.fill();

    spawnParticles(nx, ny, sc, boost ? 9 : 3);

    _rocketRaf = requestAnimationFrame(loop);
  }

  _rocketRaf = requestAnimationFrame(loop);
}

/* ── Rocket boost ── */
function triggerRocketBoost() {
  _rocketBoostUntil = Date.now() + 900;
  playWhoosh();
}

/* ── Web Audio helpers (no external files) ── */
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

/* ── Star burst (quiz correct + sun tap) ── */
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

/* ── Scene interactions ── */
function sunFlash() {
  const sun = document.querySelector('.h-sun');
  if (!sun) return;
  sun.style.transition = 'transform 0.12s ease-out, box-shadow 0.12s ease-out';
  sun.style.transform  = 'scale(1.45)';
  sun.style.boxShadow  = '0 0 0 28px rgba(255,255,255,0.45), 0 0 120px 60px rgba(251,191,36,0.95)';
  setTimeout(() => {
    sun.style.transition = 'transform 0.45s ease-out, box-shadow 0.45s ease-out';
    sun.style.transform  = '';
    sun.style.boxShadow  = '';
    setTimeout(() => { sun.style.transition = ''; }, 500);
  }, 160);
  playDing();
  const r = sun.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('span');
    s.textContent = '✨';
    s.setAttribute('aria-hidden', 'true');
    const angle = (i / 8) * Math.PI * 2;
    const dist  = 48 + Math.random() * 44;
    s.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;` +
      `font-size:${0.9 + Math.random() * 0.8}rem;pointer-events:none;z-index:9999;` +
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

function towerBeret() {
  const tower = document.querySelector('.h-tower');
  if (!tower) return;
  speak('bonjour');
  const tr    = tower.getBoundingClientRect();
  const scene = document.querySelector('.home-scene');
  if (!scene) return;
  const sr    = scene.getBoundingClientRect();
  const beret = document.createElement('span');
  beret.textContent = '🎩';
  beret.setAttribute('aria-hidden', 'true');
  beret.style.cssText =
    `position:absolute;font-size:1.7rem;` +
    `left:${tr.left - sr.left + tr.width * 0.5}px;` +
    `top:${tr.top  - sr.top}px;` +
    `transform:translateX(-50%);pointer-events:none;z-index:20;` +
    `animation:beretFloat 1.5s ease-out forwards;`;
  scene.appendChild(beret);
  setTimeout(() => beret.remove(), 1600);
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

function flagSpin() {
  const flag = document.querySelector('.home-flag');
  if (!flag) return;
  flag.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
  flag.style.transform  = 'rotate(360deg) scale(1.35)';
  setTimeout(() => {
    flag.style.transform  = 'rotate(360deg) scale(1)';
    setTimeout(() => { flag.style.transition = ''; flag.style.transform = ''; }, 50);
  }, 520);
  playDing();
}

/* ── Parent settings panel ── */
function openParentSettings() {
  if (document.getElementById('parent-panel')) return;
  const panel = document.createElement('div');
  panel.id = 'parent-panel';
  panel.className = 'parent-panel-overlay';
  panel.innerHTML = `
    <div class="parent-panel-card" role="dialog" aria-label="Parent settings" aria-modal="true">
      <div class="pp-header">
        <span class="pp-title">⚙️ Parent Settings</span>
        <button class="pp-close" aria-label="Close settings">✕</button>
      </div>
      <p class="pp-label">Choose level</p>
      <div class="pp-level-row">
        <button class="pp-level-btn${state.level === 1 ? ' active' : ''}" data-level="1">
          ⭐ Level 1
          <span class="pp-level-desc">Vehicles · Animals · Colours</span>
        </button>
        <button class="pp-level-btn${state.level === 2 ? ' active' : ''}" data-level="2">
          🌟 Level 2
          <span class="pp-level-desc">Numbers · Body · Family · Food</span>
        </button>
      </div>
    </div>
  `;
  panel.addEventListener('click', e => {
    const lvlBtn = e.target.closest('.pp-level-btn');
    if (lvlBtn) { state.level = parseInt(lvlBtn.dataset.level, 10); panel.remove(); renderHome(); return; }
    if (e.target.closest('.pp-close')) { panel.remove(); return; }
    if (!e.target.closest('.parent-panel-card')) panel.remove();
  });
  document.body.appendChild(panel);
  requestAnimationFrame(() => { const c = panel.querySelector('.pp-close'); if (c) c.focus(); });
  function ppEsc(e) { if (e.key === 'Escape') { panel.remove(); document.removeEventListener('keydown', ppEsc); } }
  document.addEventListener('keydown', ppEsc);
}

function homeCatButtons() {
  if (state.level === 1) {
    return `
      <button class="home-cat-btn portrait animals"
        data-action="open-cat" data-cat="animals"
        aria-label="Les Animaux — animals">
        <span class="home-cat-icon" aria-hidden="true">🦁</span>
        <div class="home-cat-info">
          <div class="home-cat-name">Les Animaux</div>
          <div class="home-cat-name-fr">Animals</div>
        </div>
      </button>
      <button class="home-cat-btn portrait vehicles"
        data-action="open-cat" data-cat="vehicles"
        aria-label="Le Garage — les véhicules">
        <span class="start-badge" aria-hidden="true">START HERE</span>
        <span class="home-cat-icon" aria-hidden="true">🏎️</span>
        <div class="home-cat-info">
          <div class="home-cat-name">Le Garage</div>
          <div class="home-cat-name-fr">Vehicles</div>
        </div>
      </button>
      <button class="home-cat-btn portrait colours"
        data-action="open-cat" data-cat="colours"
        aria-label="Les Couleurs — colours">
        <span class="home-cat-icon" aria-hidden="true">🎨</span>
        <div class="home-cat-info">
          <div class="home-cat-name">Les Couleurs</div>
          <div class="home-cat-name-fr">Colours</div>
        </div>
      </button>
      <button class="home-cat-btn portrait practice-shortcut"
        data-action="open-practice"
        aria-label="Pronunciation practice — say French words aloud">
        <span class="home-cat-icon" aria-hidden="true">🎙️</span>
        <div class="home-cat-info">
          <div class="home-cat-name">Parler</div>
          <div class="home-cat-name-fr">Say it in French!</div>
        </div>
      </button>`;
  }
  return `
    <button class="home-cat-btn numbers"
      data-action="open-cat" data-cat="numbers"
      aria-label="Les Chiffres — numbers 1 to 10">
      <span class="home-cat-icon" aria-hidden="true">🔢</span>
      <div class="home-cat-info">
        <div class="home-cat-name">Les Chiffres</div>
        <div class="home-cat-name-fr">Les Nombres</div>
        <div class="home-cat-desc">Count from one to ten</div>
      </div>
      <span class="home-cat-arrow" aria-hidden="true">→</span>
    </button>
    <button class="home-cat-btn body"
      data-action="open-cat" data-cat="body"
      aria-label="Le Corps — body parts">
      <span class="home-cat-icon" aria-hidden="true">💪</span>
      <div class="home-cat-info">
        <div class="home-cat-name">Le Corps</div>
        <div class="home-cat-name-fr">Le Corps Humain</div>
        <div class="home-cat-desc">Head · eyes · nose · arm · leg</div>
      </div>
      <span class="home-cat-arrow" aria-hidden="true">→</span>
    </button>
    <button class="home-cat-btn family"
      data-action="open-cat" data-cat="family"
      aria-label="La Famille — family members">
      <span class="home-cat-icon" aria-hidden="true">👨‍👩‍👧</span>
      <div class="home-cat-info">
        <div class="home-cat-name">La Famille</div>
        <div class="home-cat-name-fr">La Famille</div>
        <div class="home-cat-desc">Mum · dad · baby · sister · brother</div>
      </div>
      <span class="home-cat-arrow" aria-hidden="true">→</span>
    </button>
    <button class="home-cat-btn food"
      data-action="open-cat" data-cat="food"
      aria-label="La Nourriture — food and drink">
      <span class="home-cat-icon" aria-hidden="true">🍎</span>
      <div class="home-cat-info">
        <div class="home-cat-name">La Nourriture</div>
        <div class="home-cat-name-fr">À La Table</div>
        <div class="home-cat-desc">Bread · milk · fruit · cheese · cake</div>
      </div>
      <span class="home-cat-arrow" aria-hidden="true">→</span>
    </button>`;
}

function renderHome() {
  stopRocketCanvas();
  state.screen = 'home';
  $('app').innerHTML = `
    <div class="home-scene">

      <button class="parent-settings-btn" data-action="open-parent-settings" aria-label="Parent settings">⚙️</button>

      <div class="h-sun scene-tap" data-action="tap-sun" aria-hidden="true"></div>
      <div class="h-cloud c1 scene-tap" data-action="tap-cloud" aria-hidden="true">☁️</div>
      <div class="h-cloud c3 scene-tap" data-action="tap-cloud" aria-hidden="true">☁️</div>
      <div class="h-plane scene-tap" data-action="tap-plane" aria-hidden="true">✈️</div>
      <button class="h-rocket" data-action="tap-rocket" aria-label="Tap the rocket!">
        <canvas id="h-canvas"></canvas>
      </button>

      <div class="home-content">
        <div class="home-heading">
          <span class="home-flag scene-tap" data-action="tap-flag" aria-hidden="true">🇫🇷</span>
          <h1 class="home-title">Mon Aventure Française</h1>
          <p class="home-tagline">Tap a topic — let's explore!</p>
        </div>

        <nav class="home-cards${state.level === 1 ? ' portrait' : ''}" aria-label="Choose a topic">
          ${homeCatButtons()}
        </nav>
      </div>

      <div class="h-horizon" aria-hidden="true">
        <span class="h-tree">🌳</span><span class="h-tree-s">🌲</span>
        <span class="h-tree">🌳</span><span class="h-tree-s">🌿</span>
        <span class="h-tower scene-tap" data-action="tap-tower">🗼</span>
        <span class="h-tree-s">🌿</span><span class="h-tree">🌳</span>
        <span class="h-tree-s">🌲</span><span class="h-tree">🌳</span>
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
  initRocketCanvas();
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — CATEGORY
═══════════════════════════════════════════════════════════════ */

function renderCategory(cat) {
  stopRocketCanvas();
  state.screen   = 'category';
  state.category = cat;
  const cfg      = CAT_CFG[cat];
  const items    = getFilteredItems();
  const total    = items.length;
  const idx      = state.cardIndex;

  let filterHtml = '';
  if (cat === 'vehicles') {
    filterHtml = `
      <div class="filter-row" role="group" aria-label="Filter by vehicle type">
        ${VEHICLE_FILTERS.map(f => `
          <button class="filter-chip${state.vehicleFilter === f.id ? ' active' : ''}"
            data-action="filter-v" data-filter="${safeText(f.id)}"
            aria-pressed="${state.vehicleFilter === f.id}">
            ${f.emoji} ${safeText(f.label)}
          </button>
        `).join('')}
      </div>`;
  } else if (cat === 'animals') {
    filterHtml = `
      <div class="filter-row" role="group" aria-label="Filter by journey">
        ${ANIMAL_JOURNEYS.map(j => `
          <button class="filter-chip${state.animalFilter === j.id ? ' active' : ''}"
            data-action="filter-a" data-filter="${safeText(j.id)}"
            aria-pressed="${state.animalFilter === j.id}">
            ${j.emoji} ${safeText(j.label)}
          </button>
        `).join('')}
      </div>`;
  }

  $('app').innerHTML = `
    <div class="cat-screen">
      <header class="cat-header ${cat}">
        <button class="back-btn" data-action="go-home" aria-label="Back to home">←</button>
        <h2 class="cat-title">${cfg.emoji} ${safeText(cfg.labelFr)}</h2>
        <button class="quiz-btn" data-action="start-quiz" aria-label="Start quiz">Quiz ⚡</button>
      </header>

      ${filterHtml}

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

  // Touch swipe on the stage
  const stage = $('card-stage');
  let _tx = 0;
  stage.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend',   e => {
    const diff = _tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) goCard(diff > 0 ? 1 : -1);
  }, { passive: true });

  // Auto-speak first card when entering a category
  setTimeout(() => speakCurrentCard(), 150);
}

// Build the HTML for the card at state.cardIndex
function buildSingleCard(slideDir) {
  const items = getFilteredItems();
  if (!items.length) return '<p style="color:rgba(255,255,255,0.4);text-align:center">No words here.</p>';

  const item    = items[state.cardIndex];
  const cat     = state.category;
  const animCls = slideDir === 'right' ? 'from-right'
                : slideDir === 'left'  ? 'from-left' : '';

  let visual = '';
  if (cat === 'colours') {
    visual = `
      <div class="card-colour-swatch" style="background:${item.hex};"
        aria-label="${safeText(item.en)} colour"></div>
      <div class="card-vehicle-row" aria-hidden="true">${item.vehicleEmoji}</div>`;
  } else if (cat === 'numbers') {
    visual = `<div class="card-numeral" aria-label="${safeText(item.en)}">${item.num}</div>`;
  } else if (cat === 'body' || cat === 'family') {
    visual = `<div class="card-main-emoji" aria-label="${safeText(item.en)}">${item.emoji}</div>`;
  } else {
    // vehicles, animals, food — photo with emoji fallback
    const imgSrc = `images/${safeText(item.id)}.jpg`;
    visual = `
      <div class="card-img-wrap" style="--bg-img:url('${imgSrc}')">
        <img class="card-photo"
          src="${imgSrc}"
          alt="${safeText(item.en)}"
          onerror="this.closest('.card-img-wrap').classList.add('no-img');this.style.display='none';this.nextElementSibling.style.display='block'">
        <div class="card-emoji-fallback" style="display:none" aria-hidden="true">${item.emoji}</div>
      </div>`;
  }

  const hint = cat === 'animals'
    ? `<div class="card-journey-hint" aria-hidden="true">${item.journeyEmoji} journey</div>`
    : '';

  return `
    <div class="card-inner ${animCls}"
      aria-label="${safeText(item.fr)} — ${safeText(item.en)}">
      ${visual}
      <div class="card-btn-row">
        <button class="card-speaker-btn in-card" id="card-speaker"
          data-action="replay-card" aria-label="Hear the word again">
          <span aria-hidden="true">🔊</span>
          <span class="speaker-label" aria-hidden="true">hear it</span>
        </button>
        <button class="card-mic-btn" id="card-mic"
          data-action="card-record" aria-label="Say it in French">
          <span aria-hidden="true">🎙️</span>
          <span class="speaker-label" aria-hidden="true">say it</span>
        </button>
      </div>
      <div class="card-fr-word">${safeText(item.fr)}</div>
      <div class="card-en-word">${safeText(item.en)}</div>
      ${hint}
      <div id="card-mic-result" class="card-mic-result hidden"></div>
    </div>
  `;
}

function goCard(dir) {
  cancelCardRecording();
  const items = getFilteredItems();
  const next  = state.cardIndex + dir;
  if (next < 0 || next >= items.length) return;
  state.cardIndex = next;

  const display = $('card-display');
  if (display) display.innerHTML = buildSingleCard(dir > 0 ? 'right' : 'left');

  // Update progress bar + counter
  const total = items.length;
  const pct   = ((next + 1) / total * 100).toFixed(1);
  const fill    = $('progress-fill');
  const counter = $('card-counter');
  const bar     = document.querySelector('[role="progressbar"]');
  if (fill)    fill.style.width = pct + '%';
  if (counter) counter.textContent = `${next + 1} of ${total}`;
  if (bar)     bar.setAttribute('aria-valuenow', next + 1);

  // Enable/disable arrows
  const prev = $('nav-prev');
  const nxt  = $('nav-next');
  if (prev) prev.disabled = next === 0;
  if (nxt)  nxt.disabled  = next >= total - 1;

  speakCurrentCard();
}

function speakCurrentCard() {
  const items = getFilteredItems();
  if (!items.length) return;
  speak(items[state.cardIndex].id);

  // Pulse the speaker button
  const btn = $('card-speaker');
  if (btn) {
    btn.classList.remove('playing');
    void btn.offsetWidth;
    btn.classList.add('playing');
    setTimeout(() => btn.classList.remove('playing'), 650);
  }
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
  const cat     = state.category;
  const cfg     = CAT_CFG[cat];
  const items   = state.quizItems;
  const total   = items.length;

  if (state.quizIndex >= total) {
    renderQuizComplete();
    return;
  }

  const correct  = items[state.quizIndex];
  const pool     = getAllItems(cat).filter(i => i.id !== correct.id);
  const wrongs   = shuffle(pool).slice(0, 2);
  const choices  = shuffle([correct, ...wrongs]);

  // Visual — varies by category
  let visualHTML = '';
  if (cat === 'colours') {
    visualHTML = `
      <div class="quiz-visual" aria-label="${safeText(correct.en)} colour" style="background:${correct.hex}33;border:3px solid ${correct.hex}66;">
        <span style="font-size:3.5rem" aria-hidden="true">${correct.vehicleEmoji}</span>
      </div>`;
  } else if (cat === 'numbers') {
    visualHTML = `
      <div class="quiz-visual" aria-label="${safeText(correct.en)}">
        <span style="font-size:5rem;font-weight:900;color:#fff;line-height:1">${correct.num}</span>
      </div>`;
  } else {
    visualHTML = `
      <div class="quiz-visual" aria-label="${safeText(correct.en)}" aria-hidden="true">
        ${correct.emoji}
      </div>`;
  }

  $('app').innerHTML = `
    <div class="quiz-screen">
      <header class="quiz-header ${cat}">
        <button class="back-btn" data-action="exit-quiz" aria-label="Exit quiz">←</button>
        <h2 class="cat-title">${cfg.emoji} Quiz!</h2>
        <div class="quiz-score-pill" aria-live="polite" aria-atomic="true">
          ⭐ ${state.quizScore} / ${state.quizIndex}
        </div>
      </header>

      <div class="quiz-body">
        <p class="quiz-prompt">${safeText(cfg.quizPrompt)}</p>

        ${visualHTML}

        <div class="quiz-choices" role="group" aria-label="Choose the French word">
          ${choices.map(c => `
            <button class="quiz-choice"
              data-action="quiz-answer"
              data-id="${safeText(c.id)}"
              data-correct="${safeText(correct.id)}">
              ${safeText(c.fr)}
            </button>
          `).join('')}
        </div>

        <p class="quiz-feedback" id="quiz-feedback" aria-live="polite" aria-atomic="true"></p>

        <button class="next-btn" id="quiz-next" data-action="quiz-next">
          Suivant ! →
        </button>
      </div>
    </div>
  `;

  // Auto-play after brief pause so the page has rendered
  setTimeout(() => speak(correct.id), 380);
}

function renderQuizComplete() {
  const total = state.quizItems.length;
  const score = state.quizScore;
  const pct   = Math.round((score / total) * 100);
  const medal = pct >= 80 ? '🏆' : pct >= 50 ? '🥈' : '🌟';
  const msg   = pct >= 80 ? 'Excellent ! Super travail !'
              : pct >= 50 ? 'Bien joué ! Continue !'
              : 'Bon début ! Essaie encore !';

  $('app').innerHTML = `
    <div class="quiz-screen">
      <div class="quiz-complete">
        <div class="complete-medal" aria-hidden="true">${medal}</div>
        <h2 class="complete-title">${safeText(msg)}</h2>
        <p class="complete-score">${score} / ${total} correct</p>
        <button class="complete-btn" data-action="retry-quiz">Rejouer 🔄</button>
        <button class="complete-btn ghost" data-action="exit-quiz">Retour 🏠</button>
      </div>
    </div>
  `;

  setTimeout(() => speak('bravo'), 300);
}

/* ═══════════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════════ */

function openModal(item, cat) {
  state.modalItem   = item;
  state.modalCat    = cat;
  state.lastFocused = document.activeElement;

  let visualHTML = '';
  if (cat === 'colours') {
    visualHTML = `
      <div class="modal-colour-swatch" style="background:${item.hex};" aria-label="${safeText(item.en)} colour swatch"></div>
      <div class="modal-vehicle-row" aria-hidden="true">${item.vehicleEmoji}</div>`;
  } else {
    visualHTML = `<div class="modal-emoji" aria-hidden="true">${item.emoji}</div>`;
  }

  let hintHTML = '';
  if (cat === 'animals' && item.journeyEmoji) {
    hintHTML = `<p class="modal-hint">Met on the journey ${item.journeyEmoji}</p>`;
  } else if (cat === 'colours') {
    hintHTML = `<p class="modal-hint">${safeText(item.vehicleFr)}</p>`;
  }

  const overlay = document.createElement('div');
  overlay.id        = 'word-modal';
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'modal-fr-label');

  overlay.innerHTML = `
    <div class="modal-card ${cat}" id="modal-card" role="document">
      <button class="modal-close" data-action="close-modal" aria-label="Close">✕</button>
      ${visualHTML}
      <div class="modal-fr" id="modal-fr-label">${safeText(item.fr)}</div>
      <div class="modal-en">${safeText(item.en)}</div>
      ${hintHTML}
      <button class="modal-speaker" id="modal-speaker" data-action="replay-audio"
        aria-label="Hear ${safeText(item.fr)} again">
        🔊
      </button>
    </div>
  `;

  // Modal is in document.body, outside #app, so it needs its own handler.
  // Action buttons (close, replay) go through handleClick; clicking the
  // dark backdrop (outside #modal-card) closes the modal.
  overlay.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (btn) { handleClick(e); return; }
    if (!e.target.closest('#modal-card')) closeModal();
  });

  document.body.appendChild(overlay);

  // Focus speaker button so screen readers announce the word
  requestAnimationFrame(() => {
    const speaker = document.getElementById('modal-speaker');
    if (speaker) speaker.focus();
  });

  // Auto-play + animate speaker
  speak(item.id);
  pulseSpeaker();

  document.addEventListener('keydown', onModalKey);
}

function closeModal() {
  const modal = document.getElementById('word-modal');
  if (!modal) return;
  modal.remove();
  document.removeEventListener('keydown', onModalKey);
  if (state.lastFocused) state.lastFocused.focus();
}

function onModalKey(e) {
  if (e.key === 'Escape') closeModal();
}

function pulseSpeaker() {
  const speaker = document.getElementById('modal-speaker');
  if (!speaker) return;
  speaker.classList.remove('playing');
  void speaker.offsetWidth; // force reflow to restart animation
  speaker.classList.add('playing');
  setTimeout(() => speaker.classList.remove('playing'), 650);
}

/* ═══════════════════════════════════════════════════════════════
   ACTIONS
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
    $('quiz-feedback').textContent = '⭐ Bravo !';
    speak('bravo');
    burstStars(btn);
  } else {
    btn.classList.add('wrong');
    const correctBtn = document.querySelector(`.quiz-choice[data-id="${correct}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
    const current = state.quizItems[state.quizIndex];
    $('quiz-feedback').textContent = `💛 Pas tout à fait — c'est ${current.fr}`;
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
    case 'tap-rocket':
      triggerRocketBoost();
      break;
    case 'tap-sun':
      sunFlash();
      break;
    case 'tap-cloud':
      cloudPuff(btn);
      break;
    case 'tap-tower':
      towerBeret();
      break;
    case 'tap-plane':
      planeDip();
      break;
    case 'tap-flag':
      flagSpin();
      break;
    case 'open-parent-settings':
      openParentSettings();
      break;
    case 'set-level':
      state.level = parseInt(btn.dataset.level, 10);
      renderHome();
      break;
    case 'open-cat':
      state.vehicleFilter = 'all';
      state.animalFilter  = 'all';
      renderCategory(btn.dataset.cat);
      break;
    case 'go-home':
      cancelFrench();
      cancelCardRecording();
      if (state._practiceRec) { state._practiceRec.stop(); state._practiceRec = null; }
      renderHome();
      break;
    case 'card-prev':
      goCard(-1);
      break;
    case 'card-next':
      goCard(1);
      break;
    case 'replay-card':
      speakCurrentCard();
      break;
    case 'card-record':
      startCardRecording();
      break;
    case 'filter-v':
      state.vehicleFilter = btn.dataset.filter;
      state.cardIndex = 0;
      renderCategory(state.category);
      break;
    case 'filter-a':
      state.animalFilter = btn.dataset.filter;
      state.cardIndex = 0;
      renderCategory(state.category);
      break;
    case 'start-quiz':
      cancelCardRecording();
      startQuiz();
      break;
    case 'exit-quiz':
      state.cardIndex = 0;
      renderCategory(state.category);
      break;
    case 'close-modal':
      closeModal();
      break;
    case 'replay-audio':
      if (state.modalItem) { speak(state.modalItem.id); pulseSpeaker(); }
      break;
    case 'quiz-answer':
      handleQuizAnswer(btn);
      break;
    case 'quiz-next':
      state.quizIndex++;
      state.quizAnswered = false;
      renderQuizQuestion();
      break;
    case 'retry-quiz':
      startQuiz();
      break;
    case 'open-practice':
      renderPractice();
      break;
    case 'practice-listen':
      speak(state.practiceWords[state.practiceIdx].id);
      break;
    case 'practice-record':
      cancelFrench();
      startPracticeRecording();
      break;
    case 'practice-cancel':
      if (state._practiceRec) { state._practiceRec.stop(); state._practiceRec = null; }
      { const ph = $('practice-phase'); if (ph) ph.innerHTML = practiceIdleHTML(); }
      break;
    case 'practice-try-again':
      cancelFrench();
      renderPracticeCard();
      break;
    case 'practice-next':
      cancelFrench();
      state.practiceIdx++;
      renderPracticeCard();
      break;
    case 'practice-restart':
      renderPractice();
      break;
  }
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  $('app').addEventListener('click', handleClick);

  // Arrow keys navigate cards; spacebar replays audio
  document.addEventListener('keydown', e => {
    if (state.screen !== 'category') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goCard(-1); }
    if (e.key === ' ')          { e.preventDefault(); speakCurrentCard(); }
  });
});
