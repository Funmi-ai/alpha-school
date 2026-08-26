'use strict';

/* ═══════════════════════════════════════════════════════════════
   Synonyms — Friday recap quiz.

   No local word data here at all: WORDS, RICH_WORDS and
   wordOfDayFor() all come from Word Explorer/words-data.js (loaded
   before this file in synonyms.html), so this quiz always tests
   whatever Cairo was actually shown as Word of the Day that week —
   never a separate, drifting copy of the list.
═══════════════════════════════════════════════════════════════ */

/* ============================================================
   1. CONFIG
   ============================================================ */
const DAY_LABELS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

/* ============================================================
   2. STATE
   ============================================================ */
const state = {
  order: [],   // this week's 4 questions, each { day, word, synonyms, story, correct, options }
  i: 0,
  score: 0,
  answered: false,
};

/* ============================================================
   3. UTILITY
   ============================================================ */
function $(id) { return document.getElementById(id); }

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

function startOfWeekMonday(d) {
  const date = new Date(d);
  const day = date.getDay(); // 0 Sun .. 6 Sat
  date.setDate(date.getDate() + (day === 0 ? -6 : 1 - day));
  date.setHours(0, 0, 0, 0);
  return date;
}

// Find whichever of a word's synonyms actually appears in its story
// (stories use a synonym in context, not the base word itself).
function findSynonymInStory(w) {
  for (const syn of w.synonyms) {
    const re = new RegExp('\\b' + syn.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '\\b', 'i');
    if (re.test(w.story)) return syn;
  }
  return w.synonyms[0]; // fallback: first synonym
}

// Highlight the rich/tricky word in the story so the child can see it
// in context before answering what it means.
function highlightStory(w, syn) {
  const re = new RegExp('\\b' + syn.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '\\b', 'i');
  return w.story.replace(re, m => `<mark>${safeText(m)}</mark>`);
}

function buildWeek() {
  const monday = startOfWeekMonday(new Date());
  const weekWords = DAY_LABELS.map((label, i) => {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    return { day: label, ...wordOfDayFor(d) };
  });

  // Each question: the tricky rich word is highlighted in the Hodger story;
  // the correct answer is the simple base word (e.g. "enormous" → "big");
  // distractors are the other three days' simple base words, keeping the
  // whole quiz self-contained to the words actually taught this week.
  return { weekWords, order: weekWords.map((w, i) => {
    const richWord   = findSynonymInStory(w);          // the hard word shown in the sentence
    const correct    = w.word;                          // the simple base word is the answer
    const distractors = weekWords.filter((_, j) => j !== i).map(o => o.word);
    return { ...w, richWord, correct, options: shuffle([correct, ...distractors]) };
  })};
}

/* ============================================================
   4. RENDER
   ============================================================ */
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $('view-' + name).classList.add('active');
  $('view-' + name).querySelector('h2')?.focus?.();
}

function renderWeekStrip(weekWords) {
  $('week-strip').innerHTML = weekWords.map(w =>
    `<span class="week-chip"><span class="day">${safeText(w.day.slice(0, 3))}</span> ${safeText(w.word)}</span>`
  ).join('');
}

function renderQuestion() {
  const q = state.order[state.i];
  state.answered = false;
  $('day-tag').textContent = q.day + "'s word";
  $('sentence').innerHTML = highlightStory(q, q.richWord);
  $('question').textContent = `What does "${q.richWord}" mean?`;
  $('options').innerHTML = q.options.map(opt =>
    `<button class="opt" data-word="${safeText(opt)}">${safeText(opt)}</button>`
  ).join('');
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';

  const n = state.i + 1;
  $('progress-count').textContent = 'Q' + n + ' / ' + state.order.length;
  const fill = $('progress-fill');
  fill.style.width = (n / state.order.length * 100) + '%';
  fill.setAttribute('aria-valuenow', String(n));
}

function renderComplete() {
  const total = state.order.length;
  const score = state.score;
  $('complete-score').textContent = score + ' / ' + total;
  $('complete-heading').textContent =
    score === total ? 'Perfect recap!' : score >= total / 2 ? 'Great recap!' : 'Good try!';
  $('badge').textContent = score === total ? '🏆' : score >= total / 2 ? '🏅' : '📖';
  $('recap').innerHTML = state.order.map(w =>
    `<div class="recap-item"><span class="recap-word">${safeText(w.richWord)}</span><span class="recap-syn">= ${safeText(w.word)}</span></div>`
  ).join('');
}

/* ============================================================
   5. ACTIONS
   ============================================================ */
function startQuiz() {
  const { weekWords, order } = buildWeek();
  state.order = order;
  state.i = 0;
  state.score = 0;
  renderWeekStrip(weekWords); // keep intro chip strip current if the child comes back to it
  renderQuestion();
  showView('quiz');
}

function answerQuiz(word) {
  if (state.answered) return;
  state.answered = true;
  const q = state.order[state.i];
  const correct = word === q.correct;
  if (correct) state.score += 1;

  document.querySelectorAll('.opt').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.word === q.correct) btn.classList.add('correct');
    else if (btn.dataset.word === word) btn.classList.add('incorrect');
  });

  const fb = $('feedback');
  fb.textContent = correct ? '🌟 Correct!' : `Not quite — "${q.richWord}" means "${q.correct}".`;
  fb.className = 'feedback ' + (correct ? 'correct' : 'incorrect');

  setTimeout(() => {
    if (state.i < state.order.length - 1) {
      state.i += 1;
      renderQuestion();
    } else {
      renderComplete();
      showView('complete');
    }
  }, 1100);
}

/* ============================================================
   6. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const { weekWords } = buildWeek();
  renderWeekStrip(weekWords);

  $('btn-start').addEventListener('click', startQuiz);
  $('btn-retry').addEventListener('click', startQuiz);
  $('options').addEventListener('click', e => {
    const btn = e.target.closest('.opt');
    if (btn) answerQuiz(btn.dataset.word);
  });
});
