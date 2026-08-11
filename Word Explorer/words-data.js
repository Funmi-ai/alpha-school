'use strict';

/* ═══════════════════════════════════════════════════════════════
   WORD DATA — shared between Word Explorer and timetable.html's
   Word of the Day card, so both draw from the same list with the
   same date-seeded index and show the identical word each day.
   Add new words here only — never touch render/hash logic.
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
