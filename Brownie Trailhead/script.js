'use strict';

/* ============================================================
   DATA
   All content lives here. No rendering logic in this section.

   Structure: each category is a "stop on the trail" — a label
   (the real word, always shown), a flavour name (the trail-theme
   name, shown as a subtitle), an icon, a tagline, and an ordered
   list of concepts (simple → harder within each category).
   ============================================================ */

const CONCEPT_CATEGORIES = [
  {
    id: 'business', label: 'Business', flavor: 'Base Camp', emoji: '🏕️',
    tagline: 'Set up camp and learn to run things.',
    concepts: [
      { id: 'business',    term: 'Business',    emoji: '🏪', def: 'Something people do to earn money — like selling things or doing jobs for others.', example: 'Your brownie stand is a business!' },
      { id: 'customer',    term: 'Customer',    emoji: '🙋', def: 'A person who buys what you\'re selling.', example: 'Everyone who buys a brownie from your stand is a customer.' },
      { id: 'cost',        term: 'Cost',        emoji: '💷', def: 'The money you spend to make or buy something.', example: 'Flour, butter and chocolate all cost money — that\'s your cost.' },
      { id: 'price',       term: 'Price',       emoji: '🏷️', def: 'The money a customer pays you for what you\'re selling.', example: 'You might charge £1.50 for one brownie — that\'s the price.' },
      { id: 'sale',        term: 'Sale',        emoji: '🤝', def: 'When a customer buys something from you.', example: 'Every brownie you sell is one sale.' },
      { id: 'income',      term: 'Income',      emoji: '💰', def: 'All the money that comes into a business (or to you).', example: 'The money you get from selling brownies is your income.' },
      { id: 'expense',     term: 'Expense',     emoji: '💸', def: 'The grown-up word for a cost — money a business has to pay out for things it needs.', example: 'Buying more flour is a business expense.' },
      { id: 'float',       term: 'Float',       emoji: '👝', def: 'The money a business keeps on hand to give change to customers.', example: 'Your float might be £5 in coins, ready to give change when someone pays with a bigger note.' },
      { id: 'profit',      term: 'Profit',      emoji: '📈', def: 'The money left over after your costs are taken away from what you earned.', example: 'Earn £3, spend £1.20 on ingredients — your profit is £1.80.' },
      { id: 'loss',        term: 'Loss',        emoji: '📉', def: 'When your costs are more than what you earned.', example: 'It happens sometimes — even to real businesses!' },
      { id: 'budget',      term: 'Budget',      emoji: '📝', def: 'A plan for how much money you have and how you\'ll spend it.', example: 'Deciding how much to spend on a poster is part of your budget.' },
      { id: 'marketing',   term: 'Marketing',   emoji: '📣', def: 'Telling people about your business so they know it\'s there and want to visit.', example: 'A bright poster or a good sign is marketing.' },
      { id: 'brand',       term: 'Brand',       emoji: '🔖', def: 'The special name, look and feeling that makes a business easy to recognise.', example: 'A fun name and a colourful sign help build your brand.' },
      { id: 'supplier',    term: 'Supplier',    emoji: '🚚', def: 'A person or shop that sells a business the things it needs to make its product.', example: 'The shop where you buy flour and chocolate is your supplier.' },
      { id: 'competitor',  term: 'Competitor',  emoji: '🏁', def: 'Another business selling something similar to yours.', example: 'If another child sells brownies too, they\'re your competitor.' },
      { id: 'entrepreneur', term: 'Entrepreneur', emoji: '🚀', def: 'A person who starts and runs their own business.', example: 'You\'re an entrepreneur the moment you start your brownie stand!' },
      { id: 'overheads',   term: 'Overheads',   emoji: '🕰️', def: 'The regular costs of running a business, even on a day with no customers.', example: 'Paying to rent a market table every week is an overhead.' },
    ],
  },
  {
    id: 'saving', label: 'Saving', flavor: 'Treasure Vault', emoji: '🗝️',
    tagline: 'Lock away money for later.',
    concepts: [
      { id: 'save',    term: 'Save',    emoji: '🐷', def: 'Keeping money instead of spending it, so you can use it later.', example: 'Putting £1 in your money jar instead of spending it is saving.' },
      { id: 'savings', term: 'Savings', emoji: '🏦', def: 'Money you\'ve saved and kept for later.', example: 'After a few weeks of saving, you might have £8 in savings.' },
      { id: 'bank',    term: 'Bank',    emoji: '🏛️', def: 'A safe place that looks after people\'s money for them.', example: 'Grown-ups often keep their savings in a bank.' },
      { id: 'account', term: 'Savings Account', emoji: '🗂️', def: 'A place at the bank that keeps track of your money for you.', example: 'A Savings Account keeps a record of how much you\'ve saved.' },
      { id: 'deposit', term: 'Deposit', emoji: '⬇️', def: 'Putting money into a bank or Savings Account.', example: 'When you deposit £5, the bank keeps it safe for you.' },
      { id: 'withdraw', term: 'Withdraw', emoji: '⬆️', def: 'Taking money out of your savings or bank account.', example: 'If you withdraw £5, the bank gives it back to you.' },
      { id: 'goal',    term: 'Goal',    emoji: '🎯', def: 'Something you\'re saving up towards.', example: 'Saving for a new toy or a day out is a savings goal.' },
      { id: 'nestEgg', term: 'Nest Egg', emoji: '🪺', def: 'A special amount of money saved up and kept safe for the future.', example: 'Some grown-ups keep a nest egg for when they\'re older.' },
      { id: 'interest', term: 'Interest', emoji: '➕', def: 'A little bit of extra money a bank gives you for keeping your savings there.', example: 'Leave £10 in the bank, and interest might turn it into £10.20 after a year.' },
      { id: 'emergencyFund', term: 'Emergency Fund', emoji: '☂️', def: 'Money saved for a rainy day, so a surprise problem doesn\'t catch you out.', example: 'If your bike needs a sudden repair, an emergency fund can help pay for it.' },
      { id: 'compoundInterest', term: 'Compound Interest', emoji: '🔁', def: 'When the extra money your savings earn also starts earning more extra money, so your savings grow faster and faster.', example: 'Your £10 grows to £11 — next year, interest is worked out on the whole £11, not just the first £10.' },
    ],
  },
  {
    id: 'spending', label: 'Spending', flavor: 'Trading Post', emoji: '🧭',
    tagline: 'Trade wisely for what you need.',
    concepts: [
      { id: 'spend',   term: 'Spend',   emoji: '🛍️', def: 'Using your money to buy something.', example: 'Spending your pocket money on sweets.' },
      { id: 'need',    term: 'Need',    emoji: '🧥', def: 'Something you must have to be OK, like food or a coat.', example: 'A winter coat is a need.' },
      { id: 'want',    term: 'Want',    emoji: '🧸', def: 'Something you\'d like to have, but don\'t really need.', example: 'A new toy is a want, not a need.' },
      { id: 'afford',  term: 'Afford',  emoji: '🧮', def: 'Having enough money to pay for something.', example: 'If a toy costs £5 and you only have £3, you can\'t afford it yet.' },
      { id: 'value',   term: 'Value',   emoji: '⚖️', def: 'Whether something is worth the money you pay for it.', example: 'A big bag for £1 can be better value than a small one for the same price.' },
      { id: 'bargain', term: 'Bargain', emoji: '✅', def: 'Something that\'s really good value for the price.', example: 'Two brownies for the price of one is a bargain!' },
      { id: 'discount', term: 'Discount', emoji: '✂️', def: 'When something costs less money than usual, for a little while.', example: 'A discount might make a £5 toy cost £4 instead.' },
      { id: 'receipt', term: 'Receipt', emoji: '🧾', def: 'A little note that shows what you bought and how much it cost.', example: 'Shops give you a receipt after you pay.' },
      { id: 'impulseBuy', term: 'Impulse Buy', emoji: '⚡', def: 'Buying something suddenly because you want it right away, without thinking about it first.', example: 'Grabbing sweets at the till without planning to is an impulse buy.' },
      { id: 'comparisonShopping', term: 'Comparison Shopping', emoji: '🔍', def: 'Looking at a few shops or prices before deciding where to buy something, to find the best deal.', example: 'Comparing two shops\' prices for the same sweets is comparison shopping.' },
      { id: 'debt',    term: 'Debt',    emoji: '💳', def: 'Money you owe to someone else because you borrowed it and haven\'t paid it back yet.', example: 'If you borrow £5 from a friend, you\'re in debt to them until you pay it back.' },
    ],
  },
  {
    id: 'investing', label: 'Investing', flavor: 'Summit Climb', emoji: '⛰️',
    tagline: 'Climb higher and grow your money.',
    concepts: [
      { id: 'invest',   term: 'Invest',   emoji: '🌱', def: 'Using your money now on something you hope will be worth more later, instead of spending it straight away.', example: 'Buying a good oven for your brownie stand is investing in your business.' },
      { id: 'grow',     term: 'Grow',     emoji: '📈', def: 'When your money becomes more over time.', example: 'Money can grow when you save it or invest it wisely.' },
      { id: 'risk',     term: 'Risk',     emoji: '🎲', def: 'The chance that something might not turn out the way you hoped.', example: 'Trying a new brownie flavour is a small risk — it might not sell as well.' },
      { id: 'patience', term: 'Patience', emoji: '⏳', def: 'Waiting calmly for something, without rushing it.', example: 'Investing usually needs patience, because it can take time for money to grow.' },
      { id: 'longTerm', term: 'Long-term', emoji: '🔭', def: 'Thinking about many months or years ahead, not just today.', example: 'Investing usually works best when you think long-term.' },
      { id: 'share',    term: 'Share',    emoji: '🧩', def: 'A tiny piece of a company that people can buy, hoping the company does well.', example: 'If your brownie business grew huge, someone might want to buy a share of it!' },
      { id: 'asset',    term: 'Asset',    emoji: '💎', def: 'Something valuable that you own, which could be sold or could earn you money.', example: 'A good brownie oven is an asset for your business.' },
      { id: 'stockMarket', term: 'Stock Market', emoji: '🏢', def: 'A place (mostly online now) where people buy and sell shares of companies.', example: 'Grown-ups sometimes buy shares of big companies on the stock market.' },
      { id: 'dividend', term: 'Dividend', emoji: '🎁', def: 'A small share of a company\'s profit that it sometimes pays to the people who own shares in it.', example: 'Owning a share in a successful brownie company might earn you a dividend from its profits.' },
      { id: 'diversify', term: 'Diversify', emoji: '🧺', def: 'Spreading your money across different things instead of just one — like not putting all your eggs in one basket.', example: 'Instead of only selling brownies, selling brownies AND lemonade is diversifying.' },
      { id: 'inflation', term: 'Inflation', emoji: '🎈', def: 'When, over time, the same money buys a little less than it used to, because prices slowly go up.', example: 'A brownie that cost £1 a few years ago might cost £1.50 now — that\'s inflation.' },
    ],
  },
];

const QUIZ_LENGTH_CAP = 10; // keep quizzes snappy even for the 16-word Business deck

const INGREDIENTS = [
  { id: 'flour',     name: 'Flour',           emoji: '🌾', cost: 10, required: true,  note: 'The base of every good brownie.' },
  { id: 'sugar',     name: 'Sugar',           emoji: '🍚', cost: 10, required: true,  note: 'Makes them sweet and gooey.' },
  { id: 'butter',    name: 'Butter',          emoji: '🧈', cost: 15, required: true,  note: 'Gives brownies that rich, fudgy texture.' },
  { id: 'chocolate', name: 'Chocolate',       emoji: '🍫', cost: 20, required: true,  note: 'The most important part!' },
  { id: 'chocChips',    name: 'Chocolate chips',          emoji: '🍬', cost: 15, required: false, boost: 2, note: 'Melty pockets of extra chocolate.' },
  { id: 'walnuts',      name: 'Walnuts',                  emoji: '🌰', cost: 20, required: false, boost: 3, note: 'A crunchy, grown-up favourite.' },
  { id: 'peanutButter', name: 'Peanut butter swirl',      emoji: '🥜', cost: 18, required: false, boost: 3, note: 'A sweet and salty swirl through the middle.' },
  { id: 'marshmallow',  name: 'Marshmallow chunks',       emoji: '🍡', cost: 15, required: false, boost: 2, note: 'Gooey pockets that melt into the mixture.' },
  { id: 'saltedCaramel',name: 'Salted caramel',           emoji: '🧂', cost: 22, required: false, boost: 4, note: 'Sweet with a pinch of salt — a real favourite.' },
  { id: 'whiteChoc',    name: 'White chocolate chunks',   emoji: '🤍', cost: 18, required: false, boost: 3, note: 'Creamy chunks that make every bite different.' },
  { id: 'chocButtons',  name: 'Colourful chocolate buttons', emoji: '🌈', cost: 16, required: false, boost: 3, note: 'Bright little buttons that make brownies fun to look at.' },
]; // pence — required total 55p, a genuinely realistic homemade-brownie ingredient cost. Flavours (non-required) are single-select — see state.flavourId.

const PRICE_OPTIONS = [100, 150, 200, 250, 300]; // pence — £1.00 to £3.00, real bake-sale pricing

// "Give your stand a name" used to live here as a re-toggleable daily boost —
// removed because naming a business isn't a decision you redo every morning.
// It's now a one-time founding step (see BRAND / confirmBrand()), and the
// same +2 boost it used to offer is now a permanent brandBoost() instead.
const MARKETING_OPTIONS = [
  { id: 'plainSign',   name: 'Make a sign',            emoji: '📝', cost: 0, boost: 1, feet: 1, desc: "Let people know what you're selling, and for how much." },
  { id: 'tellFriends', name: 'Tell your friends',      emoji: '🗣️', cost: 0, boost: 3, feet: 2, desc: 'Word of mouth brings people over.' },
  { id: 'poster',      name: 'Colourful poster',       emoji: '🎨', cost: 200, boost: 4, feet: 2, desc: 'Bright colours can be spotted from far away.' },
  { id: 'freeSample',  name: 'Free tiny tastes',       emoji: '🎁', cost: 0, boost: 5, feet: 3, freeCups: 2, desc: 'Give away 2 little bites so people know how good they are.' },
];

const WEATHER_OPTIONS = [
  { id: 'sunny',  name: 'Sunny',  emoji: '☀️', base: 9, note: 'A lovely day — lots of people are out and about!' },
  { id: 'cloudy', name: 'Cloudy', emoji: '⛅', base: 6, note: 'A mild day. Some people will still stop by.' },
  { id: 'rainy',  name: 'Rainy',  emoji: '🌧️', base: 3, note: 'A rainy day means fewer people are out and about.' },
];

const CUSTOMER_NAMES = ['Sam', 'Priya', 'Leo', 'Amara', 'Jack', 'Mia', 'Tomás', 'Zara', 'Ben', 'Nina', 'Kwame', 'Elsie'];
const CUSTOMER_AVATARS = ['🧑', '👩', '👨', '🧒', '👧', '👦', '🧑‍🦱', '👵', '👴', '🧑‍🦳'];
const CUSTOMER_LINES = [
  "Ooh, brownies! I'll have one, please.",
  "Something sweet is exactly what I need!",
  'That sign caught my eye. One, please!',
  'My friend told me your brownies are amazing.',
  'One brownie, please!',
  "I've been looking forward to this all day.",
  'That poster looks brilliant — I’ll try one!',
  "Perfect timing, I'm starving for something sweet.",
];

// "Crossroads" — decision points on the trail, tying the vocab into real Run Your Stand choices.
const EQUIPMENT_UPGRADES = [
  { id: 'scale', name: 'Digital Kitchen Scale', emoji: '⚖️', cost: 800,  discount: 5,  desc: 'Measures ingredients perfectly, so less goes to waste.' },
  { id: 'oven',  name: 'Proper Oven',           emoji: '🔥', cost: 2500, discount: 10, desc: 'Bakes more evenly, so less batter is wasted.' },
  { id: 'mixer', name: 'Stand Mixer',           emoji: '🥧', cost: 3500, discount: 15, desc: 'Mixes your batter perfectly, every time.' },
]; // pence — cumulative "discount" trims pence off every future cup, floored at MIN_COST_PER_CUP

const TEMPTATION_ITEMS = [
  { name: 'Light-Up Yo-Yo', emoji: '🪀' },
  { name: 'Remote Control Car', emoji: '🚗' },
  { name: 'Glittery Slime Kit', emoji: '🧪' },
  { name: 'Trading Cards Pack', emoji: '🎴' },
];

// Logo choices for the founding/rebrand moment — kept to the game's existing
// emoji-only visual language rather than introducing a drawing tool.
const LOGO_OPTIONS = ['🍫', '🧁', '🍪', '🍰', '🥧', '⭐', '🌈', '🚀', '💎', '🔥'];

/* ============================================================
   CONFIG
   Gameplay tuning — not content, not rendering.
   ============================================================ */

const STARTING_FLOAT = 500;      // pence — £5.00 Day 1 float
const MAX_CUSTOMERS = 10;        // caps the queue so it's never overwhelming
const COIN_VALUES = [5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000]; // pence — real UK coins/notes a customer might pay with (up to a £50 note)
const INTEREST_RATE = 0.02;      // 2% per in-game day on the Savings Account — sped up on purpose, and said so on-screen
const MIN_TEMPTATION_FLOAT = 200; // don't offer a temptation below £2 float — not a meaningful choice otherwise
const MIN_COST_PER_CUP = 25;     // floor so equipment upgrades can never make brownies absurdly cheap

// Coin awarded per quiz-score tier. Only the *increase* over a topic's
// previous best tier is ever paid out — see maybeAwardCoins().
function coinTierForPct(pct) {
  if (pct >= 100) return 5;
  if (pct >= 80) return 3;
  if (pct >= 50) return 1;
  return 0;
}


/* ============================================================
   STATE
   ============================================================ */

const state = {
  view: 'home',
  day: 1,
  float: STARTING_FLOAT,
  savings: 0,
  upgradesOwned: new Set(),
  businessName: null,    // set once during founding (confirmBrand()), before Day 1 starts; rebrandable later
  businessLogo: '🍫',
  businessTagline: '',
  pendingSecondaryType: null, // 'invest' | 'temptation' | null — rolled once per day, resolved after the savings step
  pendingTemptation: null,    // { item, price } — set for the duration of a rendered Temptation card, read by its click handler
  pendingFallout: null,       // { itemName, emoji } — set if a temptation was accepted, shown once on the next Setup screen
  lastProfit: 0,
  weather: null,
  flavourId: null, // null = Classic. Single-select, not a Set — a batch of brownies has one flavour twist, not a pile of add-ins. Chosen once on Day 1, only changed afterwards via the occasional "Try a new flavour?" Crossroads.
  price: null,
  selectedMarketing: new Set(),
  marketingSpendToday: 0,
  queue: [],
  queueIndex: 0,
  currentPayment: null,     // { paid, correct, choices, feedback }
  showingSample: false,
  freeCupsGiven: 0,
  cupsSold: 0,
  revenue: 0,
  modalOpenerEl: null,

  // Trail / Learn / Quiz
  learnCategory: null,
  learnIndex: 0,
  quizCategory: null,
  quiz: { items: [], index: 0, score: 0, answered: false },
  quizBestScores: {},     // { [categoryId]: bestScore }

  // Knowledge Coins — anonymous progress only (no names, no personal data),
  // same carve-out Historical Heroes already uses for its star progress.
  knowledgeCoins: { byCategory: { business: 0, saving: 0, spending: 0, investing: 0 } },
};


/* ============================================================
   UTILITY
   ============================================================ */

function $(id) { return document.getElementById(id); }

/** Safely insert data strings into innerHTML */
function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function money(n) { return `£${(n / 100).toFixed(2)}`; }

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}


/* ============================================================
   FEEDBACK EFFECTS
   Small celebratory sound + confetti for correct answers/sales.
   Built with Web Audio + plain DOM — no external files, no
   network requests, so they stay within the offline tech rules.
   ============================================================ */

/** A short, cheerful chime — used on a correct quiz answer or correct change. */
function playDing() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = 660;
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch (e) { /* sound is a nice-to-have — never let it break the game */ }
}

/** A little burst of stars from an element — used the same moments as playDing(). */
function burstStars(el) {
  if (!el || prefersReducedMotion()) return;
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  for (let i = 0; i < 10; i++) {
    const star = document.createElement('span');
    star.textContent = i % 3 === 0 ? '✨' : '⭐';
    star.setAttribute('aria-hidden', 'true');
    const dx = (Math.random() - 0.5) * 180;
    const dy = -45 - Math.random() * 100;
    star.style.cssText =
      `position:fixed;left:${cx}px;top:${cy}px;font-size:${(0.8 + Math.random()).toFixed(2)}rem;` +
      `pointer-events:none;z-index:9999;transform:translate(-50%,-50%);` +
      `--dx:${dx}px;--dy:${dy}px;animation:starFly 0.8s ease-out forwards;`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 850);
  }
}

/** Faint scattered footprint-pairs across the parchment — French Explorer's drawStars(), themed as worn ground. */
function drawTrailDust() {
  const canvas = $('dust-canvas');
  if (!canvas) return;
  const parent = canvas.parentElement;
  const w = parent.offsetWidth;
  const h = parent.offsetHeight;
  if (!w || !h) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const count = Math.floor((w * h) / 1600);
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const scale = 0.5 + Math.random() * 0.8;
    const rot = Math.random() * Math.PI * 2;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.scale(scale, scale);
    ctx.fillStyle = 'rgba(30, 42, 58, 0.07)';
    ctx.beginPath();
    ctx.ellipse(-3, 0, 2.6, 4.4, 0.15, 0, Math.PI * 2);
    ctx.ellipse(3, 5.5, 2.6, 4.4, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}


/* ============================================================
   PERSISTENCE — profiles
   One child = one profile = their whole save (business + learning
   progress together), since Knowledge Coins and quiz scores are
   just as much "theirs" as the Day/Float/Savings numbers are —
   two siblings sharing a device must never see each other's business
   or each other's quiz mastery. Anonymous throughout: no names beyond
   whatever the child typed as their own business name, no transcripts,
   no PII — same carve-out Historical Heroes established for star progress.
   ============================================================ */

const PROFILES_KEY = 'brownieTrailhead_profiles';
// Pre-profiles single-save keys — read once to migrate, then retired.
const LEGACY_PLAY_KEY = 'brownieTrailhead_playState';
const LEGACY_COINS_KEY = 'brownieTrailhead_knowledgeCoins';

let profiles = [];          // [{ id, name, logo, tagline, day, float, savings, upgradesOwned:[], flavourId, price, knowledgeCoins:{}, quizBestScores:{} }]
let activeProfileId = null;

function makeBlankProfile(name, logo, tagline) {
  return {
    id: 'p' + Date.now().toString(36) + Math.floor(Math.random() * 1000),
    name, logo, tagline,
    day: 1,
    float: STARTING_FLOAT,
    savings: 0,
    upgradesOwned: [],
    flavourId: null,
    price: null,
    knowledgeCoins: { business: 0, saving: 0, spending: 0, investing: 0 },
    quizBestScores: {},
  };
}

function getActiveProfile() { return profiles.find(p => p.id === activeProfileId) || null; }

/** Loads every profile, or migrates a pre-profiles single save into Profile 1 the first time this runs after the update. */
function loadProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.profiles)) profiles = parsed.profiles;
      if (typeof parsed?.activeProfileId === 'string') activeProfileId = parsed.activeProfileId;
      return;
    }
  } catch (e) { /* corrupt — fall through and try migration instead */ }

  try {
    const legacyPlay = JSON.parse(localStorage.getItem(LEGACY_PLAY_KEY) || 'null');
    if (legacyPlay) {
      const legacyCoins = JSON.parse(localStorage.getItem(LEGACY_COINS_KEY) || 'null');
      const migrated = makeBlankProfile(
        legacyPlay.businessName || 'Your Brownie Stand',
        legacyPlay.businessLogo || '🍫',
        legacyPlay.businessTagline || ''
      );
      if (typeof legacyPlay.day === 'number') migrated.day = legacyPlay.day;
      if (typeof legacyPlay.float === 'number') migrated.float = legacyPlay.float;
      if (typeof legacyPlay.savings === 'number') migrated.savings = legacyPlay.savings;
      if (Array.isArray(legacyPlay.upgradesOwned)) migrated.upgradesOwned = legacyPlay.upgradesOwned;
      if (typeof legacyPlay.price === 'number') migrated.price = legacyPlay.price;
      if (typeof legacyPlay.flavourId === 'string' || legacyPlay.flavourId === null) migrated.flavourId = legacyPlay.flavourId;
      if (legacyCoins?.byCategory) migrated.knowledgeCoins = { ...migrated.knowledgeCoins, ...legacyCoins.byCategory };
      profiles = [migrated];
      activeProfileId = migrated.id;
      saveProfiles();
      localStorage.removeItem(LEGACY_PLAY_KEY);
      localStorage.removeItem(LEGACY_COINS_KEY);
    }
  } catch (e) { /* nothing usable to migrate — start with an empty roster */ }
}

function saveProfiles() {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify({ activeProfileId, profiles }));
  } catch (e) { /* storage may be unavailable (private browsing etc) — fail silently */ }
}

/** Copies a stored profile's saved fields into the live `state`, and resets everything session-only for whoever's turn it is now. */
function applyProfileToState(profile) {
  state.businessName = profile.name;
  state.businessLogo = profile.logo;
  state.businessTagline = profile.tagline;
  state.day = profile.day;
  state.float = profile.float;
  state.savings = profile.savings;
  state.upgradesOwned = new Set(profile.upgradesOwned);
  state.flavourId = profile.flavourId;
  state.price = profile.price;
  state.knowledgeCoins.byCategory = { business: 0, saving: 0, spending: 0, investing: 0, ...profile.knowledgeCoins };
  state.quizBestScores = { ...profile.quizBestScores };

  // Session-only — never carried between profiles
  state.lastProfit = 0; state.weather = null;
  state.selectedMarketing = new Set(); state.marketingSpendToday = 0;
  state.queue = []; state.queueIndex = 0; state.currentPayment = null;
  state.showingSample = false; state.freeCupsGiven = 0; state.cupsSold = 0; state.revenue = 0;
  state.pendingSecondaryType = null; state.pendingTemptation = null; state.pendingFallout = null;
  state.learnCategory = null; state.learnIndex = 0; state.quizCategory = null;
  state.quiz = { items: [], index: 0, score: 0, answered: false };
}

/** Writes the live state's persisted fields back into the active profile and saves. The stable "save now" entry point used everywhere else in the file. */
function persistActiveProfile() {
  const profile = getActiveProfile();
  if (!profile) return;
  profile.name = state.businessName;
  profile.logo = state.businessLogo;
  profile.tagline = state.businessTagline;
  profile.day = state.day;
  profile.float = state.float;
  profile.savings = state.savings;
  profile.upgradesOwned = [...state.upgradesOwned];
  profile.flavourId = state.flavourId;
  profile.price = state.price;
  profile.knowledgeCoins = { ...state.knowledgeCoins.byCategory };
  profile.quizBestScores = { ...state.quizBestScores };
  saveProfiles();
}

// savePlayState()/saveKnowledgeCoins() are kept as the stable names every
// other function already calls — only what's underneath them changed.
function savePlayState() { persistActiveProfile(); }
function saveKnowledgeCoins() { persistActiveProfile(); }


/* ============================================================
   GAME LOGIC
   Pure calculations — no DOM access. Kept separate from RENDER
   so the numbers can be checked/changed without touching markup.
   ============================================================ */

function findCategory(id) { return CONCEPT_CATEGORIES.find(c => c.id === id); }

function knowledgeCoinsTotal() {
  return Object.values(state.knowledgeCoins.byCategory).reduce((a, b) => a + b, 0);
}

/** Awards the coin difference only if this score beats the topic's previous best tier. Returns coins gained (0 if none). */
function maybeAwardCoins(categoryId, pct) {
  const newTier = coinTierForPct(pct);
  const prevTier = state.knowledgeCoins.byCategory[categoryId] || 0;
  if (newTier <= prevTier) return 0;
  const gained = newTier - prevTier;
  state.knowledgeCoins.byCategory[categoryId] = newTier;
  saveKnowledgeCoins();
  return gained;
}

function resetKnowledgeCoins() {
  CONCEPT_CATEGORIES.forEach(cat => { state.knowledgeCoins.byCategory[cat.id] = 0; });
  saveKnowledgeCoins();
}

function buildQuizItems(categoryId) {
  const all = shuffle(findCategory(categoryId).concepts.slice());
  return all.slice(0, Math.min(QUIZ_LENGTH_CAP, all.length));
}

function activeFlavour() { return INGREDIENTS.find(i => i.id === state.flavourId) || null; }

function costPerCup() {
  let c = 0;
  INGREDIENTS.forEach(ing => { if (ing.required) c += ing.cost; });
  const flavour = activeFlavour();
  if (flavour) c += flavour.cost;
  let discount = 0;
  state.upgradesOwned.forEach(id => {
    const u = EQUIPMENT_UPGRADES.find(x => x.id === id);
    if (u) discount += u.discount;
  });
  return Math.max(MIN_COST_PER_CUP, c - discount);
}

function qualityBoost() {
  const flavour = activeFlavour();
  return flavour ? (flavour.boost || 0) : 0;
}

function marketingBoost() {
  let b = 0;
  state.selectedMarketing.forEach(id => {
    const m = MARKETING_OPTIONS.find(x => x.id === id);
    if (m) b += m.boost;
  });
  return b;
}

function marketingSpend() {
  let s = 0;
  state.selectedMarketing.forEach(id => {
    const m = MARKETING_OPTIONS.find(x => x.id === id);
    if (m) s += m.cost;
  });
  return s;
}

function freeCupsFromMarketing() {
  let f = 0;
  state.selectedMarketing.forEach(id => {
    const m = MARKETING_OPTIONS.find(x => x.id === id);
    if (m && m.freeCups) f += m.freeCups;
  });
  return f;
}

function priceFeedback() {
  if (state.price == null) return 'Pick a price to see how it feels.';
  const margin = state.price - costPerCup();
  if (margin <= 30) return `That's a bargain! You'll only keep a little from each brownie, but lots of people will want one.`;
  if (margin <= 120) return `That's a fair price — customers feel it's worth it, and you still make a good profit.`;
  if (margin <= 200) return `That's a little pricey — some people might walk past.`;
  return `That's quite expensive for a brownie — fewer people may stop.`;
}

/** A named, memorable business is a little easier for customers to find — the
 * same permanent +2 the old "Give your stand a name" daily toggle used to give. */
function brandBoost() { return state.businessName ? 2 : 0; }

function computeCustomerCount() {
  let count = state.weather.base + qualityBoost() + marketingBoost() + brandBoost();
  const margin = state.price - costPerCup();
  if (margin > 200) count -= 4;
  else if (margin > 120) count -= 2;
  return Math.max(2, Math.min(Math.round(count), MAX_CUSTOMERS));
}

/** Picks what a customer pays with. Weighted towards the nearest coin/note
 * above the price (most realistic — most people pay close to the amount),
 * halving in likelihood for each denomination further away, so a big note
 * is rare but genuinely possible — exactly what real customers do. Replaces
 * the old `COIN_VALUES.find(...)`, which always picked the same coin for a
 * given price and made every customer in a day pay identically. */
function pickPaymentCoin(price) {
  const valid = COIN_VALUES.filter(c => c > price);
  if (valid.length === 0) return COIN_VALUES[COIN_VALUES.length - 1];
  const weights = valid.map((_, i) => 2 ** (valid.length - 1 - i));
  const total = weights.reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < valid.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return valid[i];
  }
  return valid[0];
}

/** Builds 4 unique, positive, plausible change choices including the correct one. */
function generateChangeChoices(correct, price, paid) {
  const candidates = [correct];
  const maybe = [correct + 5, correct - 5, correct + 10, correct - 10, price, paid];
  for (const c of maybe) {
    if (c > 0 && c <= paid && !candidates.includes(c)) candidates.push(c);
    if (candidates.length >= 4) break;
  }
  let filler = 5;
  while (candidates.length < 4) {
    const v = correct + filler;
    if (v > 0 && !candidates.includes(v)) candidates.push(v);
    filler += 5;
  }
  return shuffle(candidates.slice(0, 4));
}

/** Builds the day's profit & loss line items — same shape an accountant's
 * report uses (Revenue → itemised Cost of Ingredients → Gross Profit →
 * Expenses → Net Profit), so "where the money went" is actually visible
 * rather than one lump "cost" number. */
function computeSummary() {
  const units = state.cupsSold + state.freeCupsGiven;
  const cpc = costPerCup();
  const flavour = activeFlavour();
  const requiredCost = INGREDIENTS.filter(i => i.required).reduce((s, i) => s + i.cost, 0);
  const rawCost = requiredCost + (flavour ? flavour.cost : 0);
  const appliedDiscount = rawCost - cpc; // how much of the upgrade discount actually applied, respecting MIN_COST_PER_CUP
  const ingredientsCost = cpc * units;

  const required = INGREDIENTS.filter(i => i.required);
  const lineItems = [
    { label: `${required.map(i => i.emoji).join('')} ${required.map(i => i.name).join(', ')}`,
      cost: requiredCost * units },
  ];
  if (flavour) lineItems.push({ label: `${flavour.emoji} ${flavour.name}`, cost: flavour.cost * units });
  if (appliedDiscount > 0) {
    lineItems.push({ label: '🔧 Equipment savings', cost: -appliedDiscount * units, isSaving: true });
  }

  const grossProfit = state.revenue - ingredientsCost;
  const marketingSpend = state.marketingSpendToday;
  const profit = grossProfit - marketingSpend;

  // Marketing was already deducted when the stand opened. Floor at 0 — a business
  // can run out of money, but we keep the concept of debt out of a young child's game.
  state.float = Math.max(0, state.float + state.revenue - ingredientsCost);
  return {
    cpc,
    ingredientsCost,
    lineItems,
    grossProfit,
    marketingSpend,
    profit,
    revenue: state.revenue,
    cupsSold: state.cupsSold,
    freeCupsGiven: state.freeCupsGiven,
  };
}

/** Applies one day's interest to the Savings Account. Returns the amount earned (0 if nothing to grow). */
function applyDailyInterest() {
  if (state.savings <= 0) return 0;
  const earned = Math.round(state.savings * INTEREST_RATE);
  state.savings += earned;
  return earned;
}

/** Decides *whether* a secondary Crossroads fires today — eligibility (afford it? any left? day gate?) is checked later, after the savings step. */
function rollSecondaryType() {
  const roll = Math.random();
  if (roll < 0.3) return 'invest';
  if (roll < 0.55) return 'temptation';
  if (roll < 0.75) return 'flavour';
  return null; // a quiet day, roughly a quarter of the time
}


/* ============================================================
   RENDER
   One function per view. Reads state + data, writes to the DOM.
   ============================================================ */

function showPhase(name) {
  document.querySelectorAll('.phase').forEach(sec => {
    const match = sec.id === `phase-${name}`;
    sec.classList.toggle('hidden', !match);
    sec.setAttribute('aria-hidden', String(!match));
  });
  state.view = name;
  const heading = $(`phase-${name}`)?.querySelector('h2');
  if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus(); }
}

function renderHeader() {
  $('coin-badge-count').textContent = knowledgeCoinsTotal();
}

/** The landing page IS the trail — 4 stops, no separate hub screen in front of them. */
function renderHome() {
  $('trail-grid').innerHTML = CONCEPT_CATEGORIES.map(cat => {
    const best = state.quizBestScores[cat.id];
    const cap = Math.min(QUIZ_LENGTH_CAP, cat.concepts.length);
    const cta = best != null ? `Best: ${best} / ${cap} →` : 'Explore →';
    return `
      <button type="button" class="trail-card" data-category="${cat.id}">
        <span class="trail-icon" aria-hidden="true">${cat.emoji}</span>
        <span class="trail-label">${safeText(cat.label)}</span>
        <span class="trail-flavor">${safeText(cat.flavor)}</span>
        <span class="trail-tagline">${safeText(cat.tagline)}</span>
        <span class="trail-cta">${safeText(cta)}</span>
      </button>`;
  }).join('');
  renderPlayCta();
}

/** Day / Float / Savings live on the Run Your Stand tile — they're specific to that simulation, not the whole app. */
function renderPlayCta() {
  $('play-cta-day').textContent = state.day;
  $('play-cta-float').textContent = money(state.float);
  $('play-cta-savings').textContent = money(state.savings);
}

function renderCoinPanel() {
  $('coin-total').textContent = knowledgeCoinsTotal();
  $('coin-rows').innerHTML = CONCEPT_CATEGORIES.map(cat => `
    <div class="coin-row">
      <span class="icon" aria-hidden="true">${cat.emoji}</span>
      <span class="name">${safeText(cat.label)} <span class="flavor">— ${safeText(cat.flavor)}</span></span>
      <span class="count">${state.knowledgeCoins.byCategory[cat.id] || 0}</span>
    </div>`).join('');
}

function renderLearnCard() {
  const cat = findCategory(state.learnCategory);
  const total = cat.concepts.length;
  const idx = state.learnIndex;
  const c = cat.concepts[idx];
  $('learn-title').textContent = `${cat.emoji} ${cat.flavor}`;
  $('learn-subtitle').textContent = `${cat.label} words`;
  $('learn-card-display').innerHTML = `
    <div class="concept-card pop-in">
      <span class="concept-emoji" aria-hidden="true">${c.emoji}</span>
      <h3 class="concept-term">${safeText(c.term)}</h3>
      <p class="concept-def">${safeText(c.def)}</p>
      <p class="concept-example">🍫 ${safeText(c.example)}</p>
    </div>`;
  $('learn-counter').textContent = `${idx + 1} of ${total}`;
  $('learn-progress-fill').style.width = `${((idx + 1) / total * 100).toFixed(1)}%`;
  $('learn-progress-track').setAttribute('aria-valuemax', String(total));
  $('learn-progress-track').setAttribute('aria-valuenow', String(idx + 1));
  $('learn-prev-btn').disabled = idx === 0;
  $('learn-next-btn').disabled = idx === total - 1;
}

function renderQuizQuestion() {
  const cat = findCategory(state.quizCategory);
  const { items, index, score } = state.quiz;
  const total = items.length;
  if (index >= total) { renderQuizComplete(); return; }

  const correct = items[index];
  const pool = cat.concepts.filter(c => c.id !== correct.id);
  const wrongs = shuffle(pool).slice(0, 2);
  const choices = shuffle([correct, ...wrongs]);
  state.quiz.answered = false;

  $('quiz-content').innerHTML = `
    <div class="quiz-top">
      <button type="button" class="back-btn" id="quiz-exit-btn" aria-label="Back to ${safeText(cat.flavor)}">←</button>
      <h2>${cat.emoji} ${safeText(cat.flavor)} Quiz</h2>
      <div class="quiz-score-pill" aria-live="polite" aria-atomic="true">⭐ ${score} / ${index}</div>
    </div>
    <p class="quiz-progress">Question ${index + 1} of ${total}</p>
    <div class="quiz-visual pop-in" aria-hidden="true">${correct.emoji}</div>
    <p class="quiz-prompt">Which word means: “${safeText(correct.def)}”?</p>
    <div class="quiz-choices" role="group" aria-label="Choose the correct word">
      ${choices.map(c => `
        <button type="button" class="quiz-choice" data-action="quiz-answer" data-id="${c.id}" data-correct="${correct.id}">
          ${safeText(c.term)}
        </button>`).join('')}
    </div>
    <p id="quiz-feedback" class="feedback-text" aria-live="polite"></p>
    <button type="button" class="btn btn-primary next-btn" id="quiz-next-btn">Next →</button>
  `;
}

function renderQuizComplete() {
  const cat = findCategory(state.quizCategory);
  const { items, score } = state.quiz;
  const total = items.length;
  const pct = Math.round((score / total) * 100);
  const medal = pct >= 80 ? '🏆' : pct >= 50 ? '🥈' : '🌟';
  const msg = pct >= 80 ? `Fantastic! You really know your ${cat.label.toLowerCase()} words.`
    : pct >= 50 ? "Nice work! You're getting the hang of it."
    : 'Good start! Have another look at the trail cards, then try again.';

  if (state.quizBestScores[cat.id] == null || score > state.quizBestScores[cat.id]) {
    state.quizBestScores[cat.id] = score;
  }

  const gained = maybeAwardCoins(cat.id, pct);
  renderHeader(); // sync the coin badge immediately if coins were just earned

  const extraBtn = cat.id === 'business'
    ? `<button type="button" class="btn btn-primary" id="quiz-to-play-btn">⛺ Run Your Stand</button>`
    : '';
  const coinsLine = gained > 0
    ? `<p class="coins-gained">🪙 +${gained} Knowledge Coin${gained === 1 ? '' : 's'}!</p>`
    : '';

  $('quiz-content').innerHTML = `
    <div class="quiz-complete pop-in">
      <div class="complete-medal" aria-hidden="true">${medal}</div>
      <h2>${safeText(msg)}</h2>
      <p class="complete-score">${score} / ${total} correct</p>
      ${coinsLine}
      <div class="phase-actions">
        <button type="button" class="btn btn-primary" id="quiz-retry-btn">Try Again 🔄</button>
        ${extraBtn}
        <button type="button" class="btn btn-secondary" id="quiz-home-btn">🗺️ Trail Map</button>
      </div>
    </div>
  `;
  if (pct >= 50) playDing();
  if (gained > 0) burstStars($('coin-badge-btn'));
}

/** Day 1 only: the child picks their starting flavour (or Classic). From
 * Day 2 onward this is a read-only recap, not a daily re-prompt — the
 * recipe only changes via the occasional "Try a new flavour?" Crossroads
 * (see renderFlavourCrossroads()). Real sellers don't re-decide their base
 * recipe from scratch every morning. */
function renderSetup() {
  const list = $('ingredient-list');
  const intro = $('setup-intro');
  const required = INGREDIENTS.filter(i => i.required);
  const flavours = INGREDIENTS.filter(i => !i.required);

  if (state.day === 1) {
    if (intro) intro.textContent = 'Every business needs supplies. Pick a flavour twist for your brownies — or keep it classic!';
    const classicOn = state.flavourId == null;
    list.innerHTML = `
      <div class="recipe-recap">
        ${required.map(ing => `<span class="recipe-chip">${ing.emoji} ${safeText(ing.name)}</span>`).join('')}
      </div>
      <div class="ingredient-grid">
        <button type="button" class="ingredient-chip ingredient-chip--toggle${classicOn ? ' is-on' : ''}"
          data-flavour="classic" aria-pressed="${classicOn}">
          <span class="ingredient-emoji" aria-hidden="true">🍫</span>
          <span class="ingredient-name">Classic</span>
          <span class="ingredient-note">Just the essentials — simple and delicious.</span>
          <span class="ingredient-cost">No extra cost</span>
        </button>
        ${flavours.map(ing => {
          const on = state.flavourId === ing.id;
          return `
            <button type="button" class="ingredient-chip ingredient-chip--toggle${on ? ' is-on' : ''}"
              data-flavour="${ing.id}" aria-pressed="${on}">
              <span class="ingredient-emoji" aria-hidden="true">${ing.emoji}</span>
              <span class="ingredient-name">${safeText(ing.name)}</span>
              <span class="ingredient-note">${safeText(ing.note)}</span>
              <span class="ingredient-cost">+${money(ing.cost)}/cup</span>
            </button>`;
        }).join('')}
      </div>`;
  } else {
    if (intro) intro.textContent = "Today's recipe is ready to go.";
    const flavour = activeFlavour();
    list.innerHTML = `
      <div class="recipe-recap">
        ${required.map(ing => `<span class="recipe-chip">${ing.emoji} ${safeText(ing.name)}</span>`).join('')}
        <span class="recipe-chip recipe-chip--flavour">${flavour ? `${flavour.emoji} ${safeText(flavour.name)}` : '🍫 Classic'}</span>
      </div>`;
  }

  $('cost-summary').textContent = `It costs ${money(costPerCup())} to bake each brownie.`;

  const owned = [...state.upgradesOwned].map(id => EQUIPMENT_UPGRADES.find(u => u.id === id)).filter(Boolean);
  $('owned-upgrades').textContent = owned.length
    ? `Upgrades: ${owned.map(u => `${u.emoji} ${u.name}`).join(' · ')}`
    : '';

  const falloutEl = $('fallout-banner');
  if (state.pendingFallout) {
    falloutEl.innerHTML = `
      <span class="fallout-icon" aria-hidden="true">${state.pendingFallout.emoji}</span>
      <p>Yesterday you spent your Float on a ${safeText(state.pendingFallout.itemName)}, so today you're starting with ${money(state.float)}. That's what happens when we spend it all at once —
        <button type="button" class="learn-link" id="fallout-learn-btn">what was that word again? Impulse Buy →</button>
      </p>`;
    falloutEl.classList.remove('hidden');
  } else {
    falloutEl.classList.add('hidden');
    falloutEl.innerHTML = '';
  }
}

function renderPricing() {
  const wrap = $('price-options');
  wrap.innerHTML = PRICE_OPTIONS.map(p => {
    const on = state.price === p;
    return `<button type="button" class="price-chip${on ? ' is-on' : ''}" data-price="${p}" aria-pressed="${on}">${money(p)}</button>`;
  }).join('');
  const intro = $('pricing-intro');
  if (intro) {
    intro.textContent = (state.price == null)
      ? 'How much will you charge for one brownie?'
      : `Your price is currently ${money(state.price)}. Keep it, or try something new?`;
  }
  $('price-feedback').textContent = priceFeedback();
  $('to-marketing-btn').disabled = state.price == null;
}

function renderMarketing() {
  const spent = marketingSpend();
  const remaining = state.float - spent;
  const wrap = $('marketing-list');
  wrap.innerHTML = MARKETING_OPTIONS.map(m => {
    const on = state.selectedMarketing.has(m.id);
    const affordable = on || m.cost <= remaining;
    const feet = '👣'.repeat(m.feet);
    return `
      <button type="button" class="marketing-chip${on ? ' is-on' : ''}${affordable ? '' : ' is-disabled'}"
        data-marketing="${m.id}" aria-pressed="${on}" ${affordable ? '' : 'disabled aria-disabled="true"'}>
        <span class="marketing-emoji" aria-hidden="true">${m.emoji}</span>
        <span class="marketing-name">${safeText(m.name)}</span>
        <span class="marketing-desc">${safeText(m.desc)}</span>
        <span class="marketing-impact" aria-label="Brings in customers">${feet}</span>
        <span class="marketing-cost">${m.cost === 0 ? 'Free' : money(m.cost)}</span>
        ${affordable ? '' : `<span class="marketing-warning">Need ${money(m.cost - remaining)} more</span>`}
      </button>`;
  }).join('');
  $('marketing-cost-summary').textContent =
    `Marketing spent so far: ${money(spent)} · Float left: ${money(remaining)}`;
}

function renderSelling() {
  $('weather-line').textContent = `${state.weather.emoji} ${state.weather.name} — ${state.weather.note}`;

  const area = $('customer-area');
  const changeArea = $('change-area');

  if (state.showingSample) {
    $('queue-status').textContent = `Customers waiting: ${state.queue.length}`;
    area.innerHTML = `
      <div class="sample-card pop-in">
        <p>🎁 You gave out ${state.freeCupsGiven} tiny bites of your brownies!</p>
        <button type="button" id="sample-continue-btn" class="btn btn-primary">Open up! →</button>
      </div>`;
    changeArea.classList.add('hidden');
    changeArea.innerHTML = '';
    return;
  }

  if (state.queueIndex >= state.queue.length) {
    finishDay();
    return;
  }

  const waiting = state.queue.length - state.queueIndex - 1;
  $('queue-status').textContent = `Brownies sold: ${state.cupsSold} · Customers waiting: ${Math.max(waiting, 0)}`;

  const cust = state.queue[state.queueIndex];

  if (!state.currentPayment) {
    area.innerHTML = `
      <div class="customer-card pop-in">
        <span class="customer-avatar" aria-hidden="true">${cust.avatar}</span>
        <p class="customer-name">${safeText(cust.name)}</p>
        <p class="customer-line">“${safeText(cust.line)}”</p>
        <button type="button" id="serve-btn" class="btn btn-primary">Serve for ${money(state.price)} 🍫</button>
      </div>`;
    changeArea.classList.add('hidden');
    changeArea.innerHTML = '';
  } else {
    const cp = state.currentPayment;
    area.innerHTML = `
      <div class="customer-card pop-in">
        <span class="customer-avatar" aria-hidden="true">${cust.avatar}</span>
        <p class="customer-name">${safeText(cust.name)}</p>
        <p class="customer-line">Here's ${money(cp.paid)}. Can I have my change, please?</p>
      </div>`;
    changeArea.classList.remove('hidden');
    changeArea.innerHTML = `
      <p class="change-question">A brownie costs ${money(state.price)}. ${safeText(cust.name)} paid ${money(cp.paid)}. How much change?</p>
      <div class="change-choices">
        ${cp.choices.map(c => `<button type="button" class="btn change-choice" data-change="${c}">${money(c)}</button>`).join('')}
      </div>
      <p id="change-feedback" class="feedback-text" aria-live="polite">${safeText(cp.feedback || '')}</p>
    `;
  }
}

function renderSummary(s) {
  $('summary-heading').innerHTML = state.businessName
    ? `📊 ${state.businessLogo} ${safeText(state.businessName)} — Day ${state.day} Report`
    : `📊 Day ${state.day} Summary`;

  let tip;
  if (s.profit > s.cpc * 5) tip = 'Fantastic! Your stand did really well today.';
  else if (s.profit > 0) tip = 'You made a profit — that means you earned more than you spent. Well done!';
  else if (s.profit === 0) tip = 'You broke even — you spent exactly what you earned. Try a different price or some marketing tomorrow.';
  else tip = "You spent a little more than you earned today. That's called a loss — it happens to real businesses too. Maybe try again tomorrow!";

  const revenueNote = s.freeCupsGiven
    ? `${s.cupsSold} sold + ${s.freeCupsGiven} free bites`
    : `${s.cupsSold} brownie${s.cupsSold === 1 ? '' : 's'} sold`;

  const cogsLines = s.lineItems.map(item => `
    <div class="pl-line pl-indent${item.isSaving ? ' is-saving' : ''}">
      <span>${safeText(item.label)}</span>
      <strong>${item.cost < 0 ? '+' : '−'}${money(Math.abs(item.cost))}</strong>
    </div>`).join('');

  const marketingBlock = s.marketingSpend ? `
    <div class="pl-section-label">Expenses</div>
    <div class="pl-line pl-indent"><span>📣 Marketing</span><strong>−${money(s.marketingSpend)}</strong></div>
  ` : '';

  $('summary-content').innerHTML = `
    <div class="pl-statement">
      <div class="pl-line pl-revenue">
        <span>Revenue <span class="pl-note">(${safeText(revenueNote)})</span></span>
        <strong>${money(s.revenue)}</strong>
      </div>
      <div class="pl-section-label">Cost of ingredients</div>
      ${cogsLines}
      <div class="pl-line pl-subtotal">
        <span>Gross Profit</span><strong>${money(s.grossProfit)}</strong>
      </div>
      ${marketingBlock}
      <div class="pl-line pl-total ${s.profit >= 0 ? 'is-profit' : 'is-loss'}">
        <span>${s.profit >= 0 ? 'Net Profit' : 'Net Loss'}</span><strong>${money(Math.abs(s.profit))}</strong>
      </div>
    </div>
    <p class="feedback-text">${tip}</p>
  `;

  $('next-day-btn').textContent = `Ready for Day ${state.day + 1}? →`;
}

function renderWordBank() {
  $('wordbank-list').innerHTML = CONCEPT_CATEGORIES.map(cat => `
    <div class="wordbank-group">
      <h3 class="wordbank-group-title">${cat.emoji} ${safeText(cat.label)} <span class="wordbank-group-flavor">— ${safeText(cat.flavor)}</span></h3>
      <dl>
        ${cat.concepts.map(c => `<dt>${c.emoji} ${safeText(c.term)}</dt><dd>${safeText(c.def)}</dd>`).join('')}
      </dl>
    </div>
  `).join('');
}

/* ── Crossroads screens ── */

function renderSavingsCrossroads() {
  const interestEarned = applyDailyInterest();
  const interestLine = interestEarned > 0
    ? `<p class="cross-vault-note">Your Savings Account grew by ${money(interestEarned)} today!</p>
       <p class="cross-vault-caveat">(We've sped this up so you can watch it happen — real banks grow your money much more slowly.)</p>`
    : '';

  const earnings = Math.max(0, state.lastProfit || 0);
  const wrap = $('crossroads-content');

  if (earnings <= 0) {
    wrap.innerHTML = `
      <div class="stat-row">
        <span class="stat-chip">Float: ${money(state.float)}</span>
        <span class="stat-chip vault">🏦 Savings Account: ${money(state.savings)}</span>
      </div>
      <div class="cross-card">
        <span class="cross-tag">🗝️ Saving in action</span>
        <div class="cross-icon">🏦</div>
        <p class="cross-prompt">No profit to save today — but your Savings Account still ticks along.</p>
        ${interestLine}
        <div class="cross-choices">
          <button type="button" class="cross-choice primary" id="cross-continue-btn">Continue →</button>
        </div>
      </div>`;
    return;
  }

  wrap.innerHTML = `
    <div class="stat-row">
      <span class="stat-chip">Float: ${money(state.float)}</span>
      <span class="stat-chip vault">🏦 Savings Account: ${money(state.savings)}</span>
    </div>
    <div class="cross-card">
      <span class="cross-tag">🗝️ Saving in action</span>
      <div class="cross-icon">🏦</div>
      <p class="cross-prompt">You earned ${money(earnings)} today! Put some in your Savings Account to earn interest, or keep it all in your Float?</p>
      <div class="cross-choices">
        <button type="button" class="cross-choice primary" data-savings="all">Save it all 🏦</button>
        <button type="button" class="cross-choice primary" data-savings="half">Save half</button>
        <button type="button" class="cross-choice secondary" data-savings="none">Keep it all 👝</button>
      </div>
      ${interestLine}
    </div>`;
}

function renderInvestCrossroads(upgrade) {
  const canAfford = state.float >= upgrade.cost;
  $('crossroads-content').innerHTML = `
    <div class="stat-row"><span class="stat-chip">Float: ${money(state.float)}</span></div>
    <div class="cross-card">
      <span class="cross-tag">⛰️ Investing in action</span>
      <div class="cross-icon">${upgrade.emoji}</div>
      <p class="cross-prompt">A trader at Base Camp has a ${safeText(upgrade.name)} for ${money(upgrade.cost)}. ${safeText(upgrade.desc)} Invest?</p>
      <div class="cross-choices">
        <button type="button" class="cross-choice primary" data-invest="yes" ${canAfford ? '' : 'disabled'}>Invest 🏗️ (−${money(upgrade.cost)})</button>
        <button type="button" class="cross-choice secondary" data-invest="no">Not today</button>
      </div>
      ${canAfford ? '' : `<p class="cross-vault-caveat">You don't have enough Float for this yet.</p>`}
    </div>`;
}

/** Offers 2 fresh flavours (never the one currently active) plus a "keep it" option.
 * The only way the recipe ever changes after Day 1 — no daily re-prompt. */
function renderFlavourCrossroads() {
  const current = activeFlavour();
  const pool = shuffle(INGREDIENTS.filter(i => !i.required && i.id !== state.flavourId)).slice(0, 2);
  $('crossroads-content').innerHTML = `
    <div class="cross-card">
      <span class="cross-tag">🍫 Business in action</span>
      <div class="cross-icon">✨</div>
      <p class="cross-prompt">Fancy trying a new flavour twist in your brownies?</p>
      <div class="cross-choices">
        ${pool.map(f => `
          <button type="button" class="cross-choice primary" data-flavour-pick="${f.id}">
            ${f.emoji} ${safeText(f.name)} (+${money(f.cost)}/cup)
          </button>`).join('')}
        <button type="button" class="cross-choice secondary" data-flavour-pick="keep">
          Keep ${current ? safeText(current.name) : 'it Classic'}
        </button>
      </div>
    </div>`;
}

function renderTemptationCrossroads(item, price) {
  state.pendingTemptation = { item, price };
  $('crossroads-content').innerHTML = `
    <div class="stat-row"><span class="stat-chip">Float: ${money(state.float)}</span></div>
    <div class="cross-card decoy">
      <span class="cross-tag">🧭 Spending in action</span>
      <div class="cross-icon">${item.emoji}</div>
      <p class="cross-prompt">A trader at the Trading Post is selling a ${safeText(item.name)} for exactly ${money(price)} — the same as your whole Float! Get it now?</p>
      <div class="cross-choices">
        <button type="button" class="cross-choice primary" data-temptation="yes">Get it! ${item.emoji} (−${money(price)})</button>
        <button type="button" class="cross-choice secondary" data-temptation="no">Save my coins</button>
      </div>
    </div>`;
}


/* ============================================================
   ACTIONS
   Update state, then call the relevant render function(s).
   ============================================================ */

// drawTrailDust() is called here (not inside renderHome()) because the dust
// canvas measures its own parent's size — that's only non-zero once the
// phase is actually visible, which showPhase() hasn't done yet when
// renderHome() runs.
// Single choke point: the header's "Trail Map" button is always clickable,
// even while the picker is showing with no profile chosen yet — without
// this guard a child could play a whole day with nothing active to save it
// to. Anything that tries to reach Home with no active profile lands back
// on the picker instead.
function goHome() {
  if (!getActiveProfile()) { goToPicker(); return; }
  renderHome();
  showPhase('home');
  drawTrailDust();
}

/* ── Player picker ── */

function renderPicker() {
  const cards = profiles.map(p => `
    <button type="button" class="profile-card" data-profile="${p.id}">
      <span class="profile-card-logo" aria-hidden="true">${p.logo}</span>
      <span class="profile-card-name">${safeText(p.name)}</span>
      <span class="profile-card-meta">Day ${p.day} · ${money(p.float)}</span>
    </button>`).join('');
  $('profile-grid').innerHTML = `
    ${cards}
    <button type="button" class="profile-card profile-card--new" id="new-profile-btn">
      <span class="profile-card-logo" aria-hidden="true">➕</span>
      <span class="profile-card-name">New Business</span>
    </button>`;
}

function goToPicker() { renderPicker(); showPhase('picker'); }

function selectProfile(id) {
  const profile = profiles.find(p => p.id === id);
  if (!profile) return;
  activeProfileId = id;
  saveProfiles();
  applyProfileToState(profile);
  renderHeader();
  renderBrandDisplays();
  goHome();
}

function selectCategory(id) { enterLearnCategory(id); }

function enterLearnCategory(id) {
  state.learnCategory = id;
  state.learnIndex = 0;
  renderLearnCard();
  showPhase('learn');
}

function learnGo(dir) {
  const total = findCategory(state.learnCategory).concepts.length;
  state.learnIndex = Math.min(total - 1, Math.max(0, state.learnIndex + dir));
  renderLearnCard();
}

function startCategoryQuiz(id) {
  state.quizCategory = id;
  state.quiz = { items: buildQuizItems(id), index: 0, score: 0, answered: false };
  renderQuizQuestion();
  showPhase('quiz');
}

function handleQuizAnswer(btn) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const chosenId = btn.dataset.id;
  const correctId = btn.dataset.correct;
  const right = chosenId === correctId;

  if (right) {
    state.quiz.score++;
    btn.classList.add('correct');
    $('quiz-feedback').textContent = '⭐ That’s it!';
    playDing();
    burstStars(btn);
  } else {
    btn.classList.add('wrong');
    const correctBtn = document.querySelector(`.quiz-choice[data-id="${correctId}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
    const correctConcept = findCategory(state.quizCategory).concepts.find(c => c.id === correctId);
    $('quiz-feedback').textContent = `That one's actually ${correctConcept.term} — ${correctConcept.example}`;
  }

  document.querySelectorAll('.quiz-choice').forEach(b => { b.disabled = true; });
  $('quiz-next-btn').classList.add('show');
}

function quizNext() {
  state.quiz.index++;
  renderQuizQuestion();
}

// Reachable only from the Trail Map, which itself only shows once a profile
// is active — so there's always a founded business to resume here. Always
// re-enters at Setup (never mid-selling/summary/crossroads) since those
// screens hold transient numbers that were never meant to survive a reload —
// same tolerance the game already had before profiles existed.
function enterPlay() {
  renderSetup();
  showPhase('setup');
}

/* ── Brand (founding a new profile, or renaming the active one) ──
   One modal, two modes, tracked by _brandModalMode: 'create' makes a new
   profile from the Picker's "+ New Business"; 'edit' renames whichever
   profile is currently active, from the header's Rebrand button. Inputs
   are always reset to the relevant starting values on open, so closing
   without confirming just discards the in-progress edit. */

let _brandModalMode = 'edit';

function openBrandModalForCreate() {
  _brandModalMode = 'create';
  $('brand-name-input').value = '';
  $('brand-tagline-input').value = '';
  state.businessLogo = '🍫'; // just the picker's default selection — nothing is committed until confirmed
  renderLogoGrid();
  $('brand-reset-section').classList.add('hidden'); // resetting a business that doesn't exist yet makes no sense
  openModal('brand-modal', $('new-profile-btn'));
  $('brand-name-input').focus();
}

function openBrandModalForEdit(triggerEl) {
  _brandModalMode = 'edit';
  $('brand-name-input').value = state.businessName || '';
  $('brand-tagline-input').value = state.businessTagline || '';
  renderLogoGrid();
  $('brand-reset-section').classList.remove('hidden');
  openModal('brand-modal', triggerEl);
  $('brand-name-input').focus();
}

function renderLogoGrid() {
  $('brand-logo-grid').innerHTML = LOGO_OPTIONS.map(emoji => `
    <button type="button" class="logo-option${state.businessLogo === emoji ? ' is-on' : ''}"
      data-logo="${emoji}" aria-pressed="${state.businessLogo === emoji}" aria-label="Logo: ${emoji}">${emoji}</button>
  `).join('');
}

function chooseLogo(emoji) {
  state.businessLogo = emoji;
  renderLogoGrid();
}

function confirmBrand() {
  const typedName = $('brand-name-input').value.trim();
  const name = typedName ? typedName.slice(0, 24) : 'Your Brownie Stand';
  const tagline = $('brand-tagline-input').value.trim().slice(0, 40);

  if (_brandModalMode === 'create') {
    const profile = makeBlankProfile(name, state.businessLogo, tagline);
    profiles.push(profile);
    activeProfileId = profile.id;
    saveProfiles();
    applyProfileToState(profile);
    closeModal('brand-modal');
    renderHeader();
    renderBrandDisplays();
    enterPlay(); // straight into Day 1 Setup — the modal itself was the "getting started" ceremony
  } else {
    state.businessName = name;
    state.businessTagline = tagline;
    persistActiveProfile();
    closeModal('brand-modal');
    renderBrandDisplays();
  }
}

/** Grown-ups only (tucked in the Brand modal's edit mode, same friction
 * pattern as the Knowledge Coins reset — no confirmation dialog, the "you
 * had to go find this" step is the safeguard). Resets this profile's Day,
 * Float, Savings and recipe back to the start — name, logo, tagline,
 * Knowledge Coins and quiz scores all stay, since those are the child's,
 * not the business run's. To test as a genuinely new player, use "+ New
 * Business" from the Picker instead — this only resets the current one. */
function resetActiveBusiness() {
  const profile = getActiveProfile();
  if (!profile) return;
  profile.day = 1;
  profile.float = STARTING_FLOAT;
  profile.savings = 0;
  profile.upgradesOwned = [];
  profile.flavourId = null;
  profile.price = null;
  saveProfiles();
  applyProfileToState(profile);
  closeModal('brand-modal');
  renderBrandDisplays();
  goHome();
}

/** Updates every place the business name/logo shows outside the modal itself. */
function renderBrandDisplays() {
  const label = state.businessName ? `${state.businessLogo} ${safeText(state.businessName)}` : null;
  const ctaTitle = $('play-cta-title');
  if (ctaTitle) ctaTitle.innerHTML = label || 'Run Your Stand';
  const setupH = $('setup-heading');
  if (setupH) setupH.innerHTML = label ? label : '🧺 Set Up Your Stand';
  const sellingH = $('selling-heading');
  if (sellingH) sellingH.innerHTML = label ? `${label} — Selling Time!` : '🍫 Sell Your Brownies!';
  const rebrandBtn = $('rebrand-btn');
  if (rebrandBtn) rebrandBtn.classList.toggle('hidden', !getActiveProfile());
}

function goToPricing() { renderPricing(); showPhase('pricing'); }
function goToSetup() { renderSetup(); showPhase('setup'); }
function goToMarketing() { renderMarketing(); showPhase('marketing'); }

function goToPricingFromMarketing() { renderPricing(); showPhase('pricing'); }

/** Day 1 only — picking (or re-picking) a starting flavour before the recipe locks in for the recap view. */
function chooseInitialFlavour(id) {
  state.flavourId = (id === 'classic') ? null : id;
  savePlayState();
  renderSetup();
}

function setPrice(value) {
  state.price = value;
  savePlayState();
  renderPricing();
}

function toggleMarketing(id) {
  if (state.selectedMarketing.has(id)) state.selectedMarketing.delete(id);
  else state.selectedMarketing.add(id);
  renderMarketing();
}

function openStand() {
  state.marketingSpendToday = marketingSpend();
  state.float -= state.marketingSpendToday;
  state.weather = pickRandom(WEATHER_OPTIONS);

  const count = computeCustomerCount();
  state.queue = Array.from({ length: count }, () => ({
    name: pickRandom(CUSTOMER_NAMES),
    avatar: pickRandom(CUSTOMER_AVATARS),
    line: pickRandom(CUSTOMER_LINES),
  }));
  state.queueIndex = 0;
  state.cupsSold = 0;
  state.revenue = 0;
  state.freeCupsGiven = freeCupsFromMarketing();
  state.showingSample = state.freeCupsGiven > 0;
  state.currentPayment = null;

  showPhase('selling');
  renderSelling();
}

function dismissSample() {
  state.showingSample = false;
  renderSelling();
}

function handleServe() {
  const price = state.price;
  const paid = pickPaymentCoin(price);
  const correct = paid - price;
  state.currentPayment = { paid, correct, choices: generateChangeChoices(correct, price, paid), feedback: '' };
  renderSelling();
}

function handleChangeChoice(value, btn) {
  const cp = state.currentPayment;
  if (!cp) return;
  if (value === cp.correct) {
    playDing();
    if (btn) burstStars(btn);
    state.cupsSold += 1;
    state.revenue += state.price;
    state.currentPayment = null;
    state.queueIndex += 1;
    renderSelling();
  } else {
    cp.feedback = 'Not quite — count on from the price up to what they paid. Try again!';
    renderSelling();
  }
}

function finishDay() {
  const summary = computeSummary();
  state.lastProfit = summary.profit;
  renderSummary(summary);
  showPhase('summary');
  if (summary.profit > 0) playDing();
  savePlayState();
}

/** Replaces the old "go straight to next day" — every day now passes through the Savings Crossroads first. */
function goToCrossroads() {
  state.pendingSecondaryType = rollSecondaryType();
  renderSavingsCrossroads();
  showPhase('crossroads');
}

function chooseSavings(portion) {
  const earnings = Math.max(0, state.lastProfit || 0);
  let amountToSave = 0;
  if (portion === 'all') amountToSave = earnings;
  else if (portion === 'half') amountToSave = Math.round(earnings / 2);
  if (amountToSave > 0) {
    state.float -= amountToSave;
    state.savings += amountToSave;
  }
  savePlayState();
  advanceAfterSavings();
}

function continueAfterSavings() {
  advanceAfterSavings();
}

/** Resolves the day's rolled secondary Crossroads using *current* (post-savings) Float — only ever one of these per day. */
function advanceAfterSavings() {
  const type = state.pendingSecondaryType;
  state.pendingSecondaryType = null;

  if (type === 'invest') {
    const upgrade = EQUIPMENT_UPGRADES.find(u => !state.upgradesOwned.has(u.id));
    if (upgrade) { renderInvestCrossroads(upgrade); return; }
  }
  if (type === 'temptation' && state.float >= MIN_TEMPTATION_FLOAT) {
    const item = pickRandom(TEMPTATION_ITEMS);
    renderTemptationCrossroads(item, state.float);
    return;
  }
  // Gated to Day 2+ finishing — the child already chose a starting flavour
  // during Day 1's Setup, so this is the earliest a *change* makes sense.
  if (type === 'flavour' && state.day >= 2) {
    renderFlavourCrossroads();
    return;
  }
  nextDay();
}

function chooseInvest(accept, upgrade) {
  if (accept && state.float >= upgrade.cost) {
    state.float -= upgrade.cost;
    state.upgradesOwned.add(upgrade.id);
  }
  savePlayState();
  nextDay();
}

function chooseFlavour(flavourId) {
  if (flavourId !== 'keep') state.flavourId = flavourId;
  savePlayState();
  nextDay();
}

function chooseTemptation(accept, item, price) {
  if (accept) {
    state.float -= price;
    state.pendingFallout = { itemName: item.name, emoji: item.emoji };
  }
  savePlayState();
  nextDay();
}

function nextDay() {
  state.day += 1;
  // Price and flavourId are NOT reset — a real seller doesn't re-decide their
  // price or recipe from scratch every morning. Both carry forward; price
  // stays changeable any time on the Pricing screen, flavour only changes
  // via the occasional "Try a new flavour?" Crossroads.
  state.selectedMarketing = new Set();
  state.marketingSpendToday = 0;
  state.queue = [];
  state.queueIndex = 0;
  state.currentPayment = null;
  state.showingSample = false;
  state.freeCupsGiven = 0;
  state.cupsSold = 0;
  state.revenue = 0;
  state.lastProfit = 0;
  savePlayState();
  goToSetup();
}

// Generic focus-trapped modal open/close, shared by Word Bank and Knowledge Coins.
const _modalKeydownHandlers = {}; // { [modalId]: handlerFn }

function openModal(modalId, triggerEl) {
  state.modalOpenerEl = triggerEl || document.activeElement;
  const modal = $(modalId);
  modal.classList.remove('hidden');
  const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusables.length) focusables[0].focus();
  const handler = (e) => {
    if (e.key === 'Escape') { closeModal(modalId); return; }
    if (e.key === 'Tab' && focusables.length) {
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  _modalKeydownHandlers[modalId] = handler;
  modal.addEventListener('keydown', handler);
}

function closeModal(modalId) {
  const modal = $(modalId);
  modal.classList.add('hidden');
  const handler = _modalKeydownHandlers[modalId];
  if (handler) { modal.removeEventListener('keydown', handler); delete _modalKeydownHandlers[modalId]; }
  if (state.modalOpenerEl) state.modalOpenerEl.focus();
}


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  loadProfiles();
  renderWordBank();
  const active = getActiveProfile();
  if (active) {
    applyProfileToState(active);
    renderHeader();
    renderBrandDisplays();
    goHome();
  } else {
    // No profile yet (brand new player, or an empty roster) — the picker
    // itself is the landing screen until at least one business exists.
    renderPicker();
    showPhase('picker');
  }
  window.addEventListener('resize', drawTrailDust);

  // ── Header nav ──
  $('home-btn').addEventListener('click', goHome);
  $('switch-profile-btn').addEventListener('click', goToPicker);
  $('profile-grid').addEventListener('click', (e) => {
    if (e.target.closest('#new-profile-btn')) { openBrandModalForCreate(); return; }
    const card = e.target.closest('[data-profile]');
    if (card) selectProfile(card.dataset.profile);
  });
  $('wordbank-btn').addEventListener('click', (e) => openModal('wordbank-modal', e.currentTarget));
  $('wordbank-close').addEventListener('click', () => closeModal('wordbank-modal'));
  $('wordbank-modal').addEventListener('click', (e) => {
    if (e.target === $('wordbank-modal')) closeModal('wordbank-modal');
  });

  // ── Knowledge Coins ──
  $('coin-badge-btn').addEventListener('click', (e) => {
    renderCoinPanel();
    openModal('coin-modal', e.currentTarget);
  });
  $('coin-modal-close').addEventListener('click', () => closeModal('coin-modal'));
  $('coin-modal').addEventListener('click', (e) => {
    if (e.target === $('coin-modal')) closeModal('coin-modal');
  });
  $('coin-reset-btn').addEventListener('click', () => {
    resetKnowledgeCoins();
    renderCoinPanel();
    renderHeader();
  });

  // ── Brand (founding a new profile + editing the active one) ──
  $('rebrand-btn').addEventListener('click', (e) => openBrandModalForEdit(e.currentTarget));
  $('brand-modal-close').addEventListener('click', () => closeModal('brand-modal'));
  $('brand-modal').addEventListener('click', (e) => {
    if (e.target === $('brand-modal')) closeModal('brand-modal');
  });
  $('brand-logo-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-logo]');
    if (!btn) return;
    chooseLogo(btn.dataset.logo);
  });
  $('brand-confirm-btn').addEventListener('click', confirmBrand);
  $('reset-business-btn').addEventListener('click', resetActiveBusiness);

  // ── Run Your Stand CTA (big tile below the trail) ──
  $('play-cta').addEventListener('click', enterPlay);

  // ── Trail (landing) ──
  // The whole card is one button (so keyboard/tap behaviour is consistent) —
  // it always opens that topic's Learn deck.
  $('trail-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    selectCategory(btn.dataset.category);
  });

  // ── Learn ──
  $('learn-prev-btn').addEventListener('click', () => learnGo(-1));
  $('learn-next-btn').addEventListener('click', () => learnGo(1));
  $('learn-home-btn').addEventListener('click', goHome);
  $('learn-quiz-btn').addEventListener('click', () => startCategoryQuiz(state.learnCategory));
  (() => {
    const stage = $('learn-card-stage');
    let startX = 0;
    stage.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 48) learnGo(diff > 0 ? 1 : -1);
    }, { passive: true });
  })();

  // ── Quiz (event delegation — content is rebuilt on every question) ──
  $('quiz-content').addEventListener('click', (e) => {
    if (e.target.closest('#quiz-exit-btn')) { enterLearnCategory(state.quizCategory); return; }
    const answerBtn = e.target.closest('[data-action="quiz-answer"]');
    if (answerBtn) { handleQuizAnswer(answerBtn); return; }
    if (e.target.closest('#quiz-next-btn')) { quizNext(); return; }
    if (e.target.closest('#quiz-retry-btn')) { startCategoryQuiz(state.quizCategory); return; }
    if (e.target.closest('#quiz-to-play-btn')) { enterPlay(); return; }
    if (e.target.closest('#quiz-home-btn')) { goHome(); return; }
  });

  // ── Play: setup ──
  $('ingredient-list').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-flavour]');
    if (!btn) return;
    chooseInitialFlavour(btn.dataset.flavour);
  });
  $('fallout-banner').addEventListener('click', (e) => {
    if (e.target.closest('#fallout-learn-btn')) openModal('wordbank-modal', e.target);
  });
  $('to-pricing-btn').addEventListener('click', goToPricing);

  // ── Play: pricing ──
  $('price-options').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-price]');
    if (!btn) return;
    setPrice(Number(btn.dataset.price));
  });
  $('back-to-setup-btn').addEventListener('click', goToSetup);
  $('to-marketing-btn').addEventListener('click', goToMarketing);

  // ── Play: marketing ──
  $('marketing-list').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-marketing]');
    if (!btn || btn.disabled) return;
    toggleMarketing(btn.dataset.marketing);
  });
  $('back-to-pricing-btn').addEventListener('click', goToPricingFromMarketing);
  $('open-stand-btn').addEventListener('click', openStand);

  // ── Play: selling ──
  $('customer-area').addEventListener('click', (e) => {
    if (e.target.closest('#serve-btn')) { handleServe(); return; }
    if (e.target.closest('#sample-continue-btn')) { dismissSample(); return; }
  });
  $('change-area').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-change]');
    if (!btn) return;
    handleChangeChoice(Number(btn.dataset.change), btn);
  });

  // ── Play: summary ──
  $('next-day-btn').addEventListener('click', goToCrossroads);
  $('summary-home-btn').addEventListener('click', goHome);

  // ── Play: crossroads (event delegation — content changes per day/type) ──
  $('crossroads-content').addEventListener('click', (e) => {
    const savingsBtn = e.target.closest('[data-savings]');
    if (savingsBtn) { chooseSavings(savingsBtn.dataset.savings); return; }
    if (e.target.closest('#cross-continue-btn')) { continueAfterSavings(); return; }
    const investBtn = e.target.closest('[data-invest]');
    if (investBtn) {
      const upgrade = EQUIPMENT_UPGRADES.find(u => !state.upgradesOwned.has(u.id));
      if (upgrade) chooseInvest(investBtn.dataset.invest === 'yes', upgrade);
      return;
    }
    const temptBtn = e.target.closest('[data-temptation]');
    if (temptBtn && state.pendingTemptation) {
      const { item, price } = state.pendingTemptation;
      state.pendingTemptation = null;
      chooseTemptation(temptBtn.dataset.temptation === 'yes', item, price);
      return;
    }
    const flavourBtn = e.target.closest('[data-flavour-pick]');
    if (flavourBtn) { chooseFlavour(flavourBtn.dataset.flavourPick); return; }
  });
});
