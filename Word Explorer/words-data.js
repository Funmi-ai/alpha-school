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
  {
    id: 'enormous', emoji: '🐋', word: 'enormous', cat: 'size',
    synonyms: ['gigantic', 'vast', 'immense'],
    story:  'The Hodger let out an enormous fart that rattled every window in the house.',
    prompt: 'Write a sentence about a Hodger doing something enormous — or making an enormous mess.',
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
  {
    id: 'gleeful', emoji: '😆', word: 'gleeful', cat: 'feeling',
    synonyms: ['joyful', 'delighted', 'elated'],
    story:  'The Hodger was absolutely gleeful — she had hidden a sock inside the sofa.',
    prompt: 'Write a sentence about a Hodger who is gleeful about some mischief.',
  },
  {
    id: 'furious', emoji: '🤬', word: 'furious', cat: 'feeling',
    synonyms: ['livid', 'cross', 'outraged'],
    story:  'The Hodger was furious — someone had tidied the mess she spent all morning making.',
    prompt: 'Write a sentence about a Hodger who is furious about something.',
  },
  {
    id: 'ferocious', emoji: '🐯', word: 'ferocious', cat: 'feeling',
    synonyms: ['fierce', 'wild', 'furious'],
    story:  'The Hodger gave the cat the most ferocious glare a creature her size could manage.',
    prompt: 'Write a sentence about a Hodger being ferocious.',
  },
  {
    id: 'bewildered', emoji: '😵‍💫', word: 'bewildered', cat: 'feeling',
    synonyms: ['confused', 'baffled', 'puzzled'],
    story:  'Everyone was bewildered by the smell — nobody suspected the Hodgers at all.',
    prompt: 'Write a sentence about someone who is bewildered by the Hodgers\' mischief.',
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
  {
    id: 'velvety', emoji: '🛋️', word: 'velvety', cat: 'texture',
    synonyms: ['silky', 'smooth', 'soft'],
    story:  'The Hodger sank into the velvety sofa cushion with a satisfied sigh.',
    prompt: 'Write a sentence about a Hodger finding something velvety to sit on.',
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
  {
    id: 'thunderous', emoji: '⛈️', word: 'thunderous', cat: 'sound',
    synonyms: ['deafening', 'booming', 'blaring'],
    story:  'The burp was so thunderous it woke up the dog, the cat and next door.',
    prompt: 'Write a sentence about a Hodger making a thunderous noise.',
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
  {
    id: 'stealthily-adv', emoji: '🥷', word: 'stealthily', cat: 'adverb',
    synonyms: ['silently', 'sneakily', 'noiselessly'],
    story:  'The Hodger moved stealthily across the kitchen, heading straight for the cheese.',
    prompt: 'Write a sentence about a Hodger sneaking somewhere stealthily.',
  },
  {
    id: 'cautiously-adv', emoji: '🧐', word: 'cautiously', cat: 'adverb',
    synonyms: ['carefully', 'gently', 'delicately'],
    story:  'The Hodger cautiously lifted the tablecloth and peered underneath with one tiny eye.',
    prompt: 'Write a sentence about a Hodger doing something cautiously.',
  },
  {
    id: 'raucously-adv', emoji: '🥳', word: 'raucously', cat: 'adverb',
    synonyms: ['noisily', 'loudly', 'boisterously'],
    story:  'The Hodgers laughed raucously as they tumbled out from behind the fridge.',
    prompt: 'Write a sentence about the Hodgers laughing raucously.',
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
  {
    id: 'scurried-verb', emoji: '🐁', word: 'scurried', cat: 'verb',
    synonyms: ['darted', 'bolted', 'dashed'],
    story:  'The Hodger scurried across the floor the moment she heard footsteps.',
    prompt: 'Write a sentence about a Hodger who scurries away quickly.',
  },
  {
    id: 'devoured-verb', emoji: '😋', word: 'devoured', cat: 'verb',
    synonyms: ['gobbled', 'wolfed', 'chomped'],
    story:  'The Hodger devoured the entire biscuit tin and felt absolutely no guilt.',
    prompt: 'Write a sentence about a Hodger who devours something they shouldn\'t.',
  },
  {
    id: 'lurking-verb', emoji: '🕵️', word: 'lurking', cat: 'verb',
    synonyms: ['hiding', 'creeping', 'crouching'],
    story:  'The Hodger was lurking behind the cereal boxes, watching and waiting.',
    prompt: 'Write a sentence about a Hodger lurking somewhere unexpected.',
  },
  {
    id: 'cackled-verb', emoji: '🧙', word: 'cackled', cat: 'verb',
    synonyms: ['giggled', 'howled', 'guffawed'],
    story:  'The Hodger cackled so hard at her own trick that she fell off the shelf.',
    prompt: 'Write a sentence about a Hodger who cackled at her own trick.',
  },

  // ── ADJECTIVES: OPINIONS ─────────────────────────────────────
  // "Opinion adjectives" — judgement/reaction words, distinct from the
  // sensory categories above (size/speed/feeling/looks/texture/sound/temp).
  {
    id: 'magnificent', emoji: '👑', word: 'magnificent', cat: 'opinion',
    synonyms: ['spectacular', 'splendid', 'glorious'],
    story:  'The Hodger thought her tiny poo sculpture was truly magnificent.',
    prompt: 'Write a sentence about something a Hodger thinks is magnificent.',
  },
  {
    id: 'peculiar', emoji: '🤔', word: 'peculiar', cat: 'opinion',
    synonyms: ['strange', 'odd', 'unusual'],
    story:  'A peculiar smell had been drifting through the house all afternoon.',
    prompt: 'Write a sentence about something peculiar the Hodgers left behind.',
  },
  {
    id: 'disastrous', emoji: '🌪️', word: 'disastrous', cat: 'opinion',
    synonyms: ['catastrophic', 'terrible', 'awful'],
    story:  'The plan had been brilliant. The result was completely disastrous.',
    prompt: 'Write a sentence about a Hodger plan that turned out disastrous.',
  },
  {
    id: 'preposterous', emoji: '🙃', word: 'preposterous', cat: 'opinion',
    synonyms: ['ridiculous', 'absurd', 'outrageous'],
    story:  'It was preposterous — three Hodgers in a teacup and they still wanted more room.',
    prompt: 'Write a sentence about something preposterous the Hodgers tried to do.',
  },
  {
    id: 'mischievous', emoji: '😏', word: 'mischievous', cat: 'opinion',
    synonyms: ['naughty', 'cheeky', 'troublesome'],
    story:  'The most mischievous Hodger had discovered where the chocolate biscuits were kept.',
    prompt: 'Write a sentence about the most mischievous Hodger you can imagine.',
  },
  {
    id: 'cunning', emoji: '🦊', word: 'cunning', cat: 'opinion',
    synonyms: ['clever', 'devious', 'crafty'],
    story:  'The most cunning Hodger had a plan involving the butter dish and the dog.',
    prompt: 'Write a sentence about a cunning plan a Hodger comes up with.',
  },
];
