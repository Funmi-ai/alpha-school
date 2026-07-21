'use strict';

const STORAGE_KEY = 'cookieMoneyJars_v1';

const QUESTIONS = [
  'What does our company need to buy?',
  'How much should we keep for ingredients?',
  'Did we earn more than we spent?',
  'Which jar has the most money?',
  'Which jar has the least money?',
  'How much money do we have altogether?',
  'What are we saving for?'
];

let state = {
  startingAmount: 10,
  remaining: 10,
  jars: { save: 0, spend: 0, business: 0 },
  savingsGoal: 10,
  questionIndex: 0,
  moneyIn: 0,
  moneyOut: 0
};

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (typeof d.startingAmount !== 'number') return;
    state.jars.save     = Math.max(0, Math.round(d.jars?.save     || 0));
    state.jars.spend    = Math.max(0, Math.round(d.jars?.spend    || 0));
    state.jars.business = Math.max(0, Math.round(d.jars?.business || 0));
    state.savingsGoal   = clamp(Math.round(d.savingsGoal  || 10), 1, 50);
    state.questionIndex = (d.questionIndex || 0) % QUESTIONS.length;
    state.moneyIn       = Math.max(0, Math.round(d.moneyIn  || 0));
    state.moneyOut      = Math.max(0, Math.round(d.moneyOut || 0));
    const loaded        = Math.max(0, Math.round(d.remaining || 0));
    state.remaining      = loaded;
    state.startingAmount = totalInJars() + state.remaining;
  } catch (_) {}
}

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function totalInJars() { return state.jars.save + state.jars.spend + state.jars.business; }

function render() {
  const sortEl = document.getElementById('sort-coins');
  sortEl.innerHTML = '';
  for (let i = 0; i < state.remaining; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin-lg';
    coin.textContent = '£1';
    sortEl.appendChild(coin);
  }
  document.getElementById('sort-amount').textContent = state.remaining;
  document.getElementById('total-start').textContent = state.startingAmount;
  document.getElementById('total-jars').textContent  = totalInJars();
  document.getElementById('total-sort').textContent  = state.remaining;
  renderJar('save');
  renderJar('spend');
  renderJar('business');
  const needed = Math.max(0, state.savingsGoal - state.jars.save);
  document.getElementById('goal-target').textContent    = state.savingsGoal;
  document.getElementById('goal-remaining').textContent = needed;
  document.getElementById('goal-reached').textContent   =
    state.jars.save >= state.savingsGoal ? 'Goal reached!' : '';
  document.getElementById('question-text').textContent = QUESTIONS[state.questionIndex];
  renderPL();
  ['save', 'spend', 'business'].forEach(jar => {
    document.querySelector('#jar-' + jar + ' .btn-add').disabled  = state.remaining  === 0;
    document.querySelector('#jar-' + jar + ' .btn-take').disabled = state.jars[jar]  === 0;
  });
}

function renderJar(jar) {
  document.getElementById('amount-' + jar).textContent = state.jars[jar];
  const el      = document.getElementById('coins-' + jar);
  el.innerHTML  = '';
  const count   = state.jars[jar];
  const visible = Math.min(count, 20);
  for (let i = 0; i < visible; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin-sm';
    el.appendChild(coin);
  }
  if (count > 20) {
    const more = document.createElement('div');
    more.className   = 'coins-more';
    more.textContent = '+' + (count - 20);
    el.appendChild(more);
  }
}

function addToJar(jar) {
  if (state.remaining <= 0) return;
  state.remaining--;
  state.jars[jar]++;
  saveState();
  render();
}

function removeFromJar(jar) {
  if (state.jars[jar] <= 0) return;
  state.jars[jar]--;
  state.remaining++;
  saveState();
  render();
}

function changeMoney(type, delta) {
  if (type === 'in')  state.moneyIn  = Math.max(0, state.moneyIn  + delta);
  if (type === 'out') state.moneyOut = Math.max(0, state.moneyOut + delta);
  saveState();
  renderPL();
}

function renderPL() {
  document.getElementById('pl-in').textContent  = state.moneyIn;
  document.getElementById('pl-out').textContent = state.moneyOut;
  const result = document.getElementById('pl-result');
  const profit = state.moneyIn - state.moneyOut;
  if (state.moneyIn === 0 && state.moneyOut === 0) {
    result.textContent = '';
    result.className   = 'pl-result';
  } else if (profit > 0) {
    result.textContent = 'We made £' + profit + ' profit!';
    result.className   = 'pl-result pl-profit';
  } else if (profit < 0) {
    result.textContent = 'We spent £' + Math.abs(profit) + ' more than we earned.';
    result.className   = 'pl-result pl-loss';
  } else {
    result.textContent = 'We broke even.';
    result.className   = 'pl-result pl-even';
  }
}

function nextQuestion() {
  state.questionIndex = (state.questionIndex + 1) % QUESTIONS.length;
  saveState();
  document.getElementById('question-text').textContent = QUESTIONS[state.questionIndex];
}

function toggleSettings() {
  const body = document.getElementById('settings-body');
  const btn  = document.getElementById('settings-toggle');
  body.hidden = !body.hidden;
  btn.setAttribute('aria-expanded', body.hidden ? 'false' : 'true');
  btn.querySelector('.toggle-arrow').textContent = body.hidden ? '▾' : '▴';
}

function applyStartingAmount() {
  const val = parseInt(document.getElementById('input-starting').value, 10);
  if (!Number.isInteger(val) || val < 1 || val > 20) return;
  const inJars         = totalInJars();
  state.remaining      = Math.max(0, val - inJars);
  state.startingAmount = inJars + state.remaining;
  saveState();
  render();
}

function applySavingsGoal() {
  const val = parseInt(document.getElementById('input-goal').value, 10);
  if (!Number.isInteger(val) || val < 1 || val > 50) return;
  state.savingsGoal = val;
  saveState();
  render();
}

function handleReset() {
  document.getElementById('reset-confirm').hidden = false;
}

function cancelReset() {
  document.getElementById('reset-confirm').hidden = true;
}

function confirmReset() {
  document.getElementById('reset-confirm').hidden = true;
  state.startingAmount = 10;
  state.remaining      = 10;
  state.jars           = { save: 0, spend: 0, business: 0 };
  state.savingsGoal    = 10;
  state.questionIndex  = 0;
  state.moneyIn        = 0;
  state.moneyOut       = 0;
  document.getElementById('input-starting').value = 10;
  document.getElementById('input-goal').value     = 10;
  saveState();
  render();
}

loadState();
document.getElementById('input-starting').value = state.startingAmount;
document.getElementById('input-goal').value     = state.savingsGoal;
render();
