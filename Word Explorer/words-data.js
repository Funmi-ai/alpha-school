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
    id: 'big', emoji: '🐘', word: 'big', cat: 'size', tier: 'base',
    synonyms: ['enormous', 'gigantic', 'huge', 'vast', 'immense', 'massive'],
    story:  'The Hodger let out an enormous fart that rattled every window in the house.',
    prompt: 'Can you write a sentence about the Hodgers using one of these words?',
  },
  {
    id: 'small', emoji: '🐭', word: 'small', cat: 'size', tier: 'base',
    synonyms: ['tiny', 'little', 'miniature', 'petite', 'teeny', 'wee'],
    story:  'The Hodger was so tiny she could hide inside a teacup and nobody would ever know.',
    prompt: 'How small is a Hodger? Write a sentence showing just how teeny they are.',
  },
  {
    id: 'tall', emoji: '🦒', word: 'tall', cat: 'size', tier: 'base',
    synonyms: ['towering', 'lofty', 'high', 'soaring', 'sky-high', 'elevated'],
    story:  'From the towering height of the kitchen counter, the Hodger looked down at the dog below.',
    prompt: 'Write a sentence about a Hodger climbing something very high.',
  },
  {
    id: 'enormous', emoji: '🐋', word: 'enormous', cat: 'size', tier: 'rich',
    synonyms: ['gigantic', 'vast', 'immense'],
    story:  'The Hodger let out an enormous fart that rattled every window in the house.',
    prompt: 'Write a sentence about a Hodger doing something enormous — or making an enormous mess.',
  },

  // ── ADJECTIVES: SPEED ────────────────────────────────────────
  {
    id: 'fast', emoji: '🐆', word: 'fast', cat: 'speed', tier: 'base',
    synonyms: ['speedy', 'rapid', 'swift', 'quick', 'zippy', 'lightning'],
    story:  'The Hodger was lightning fast — she stole three biscuits before anyone even blinked.',
    prompt: 'Write a sentence about a Hodger escaping very quickly.',
  },
  {
    id: 'slow', emoji: '🐢', word: 'slow', cat: 'speed', tier: 'base',
    synonyms: ['gradual', 'leisurely', 'plodding', 'gentle', 'unhurried', 'steady'],
    story:  'The biggest Hodger waddled at a leisurely pace, completely unbothered, leaving poo footprints all the way.',
    prompt: 'Write a sentence about a Hodger moving very slowly and not caring at all.',
  },

  // ── ADJECTIVES: FEELINGS ─────────────────────────────────────
  {
    id: 'happy', emoji: '😄', word: 'happy', cat: 'feeling', tier: 'base',
    synonyms: ['joyful', 'cheerful', 'delighted', 'gleeful', 'merry', 'elated'],
    story:  'The Hodger was absolutely gleeful — she had hidden a smelly sock inside the sofa and nobody could find it.',
    prompt: 'Write a sentence about a Hodger who is delighted by some mischief she just caused.',
  },
  {
    id: 'sad', emoji: '😢', word: 'sad', cat: 'feeling', tier: 'base',
    synonyms: ['unhappy', 'gloomy', 'sorrowful', 'downcast', 'tearful', 'blue'],
    story:  'The Hodger felt gloomy — someone had moved the cheese and now he had no idea where to sit on it.',
    prompt: 'Why might a Hodger feel sorrowful? Write a sentence about it.',
  },
  {
    id: 'angry', emoji: '😠', word: 'angry', cat: 'feeling', tier: 'base',
    synonyms: ['furious', 'cross', 'annoyed', 'grumpy', 'irritated', 'livid'],
    story:  'The Hodger was absolutely furious — someone had tidied up the mess she had spent all morning making.',
    prompt: 'Write a sentence about a Hodger who is livid about something.',
  },
  {
    id: 'scared', emoji: '😨', word: 'scared', cat: 'feeling', tier: 'base',
    synonyms: ['frightened', 'terrified', 'nervous', 'startled', 'timid', 'jittery'],
    story:  'The Hodger was terrified — the cat had found her hiding spot behind the radiator.',
    prompt: 'Write a sentence about a Hodger who is startled by something.',
  },
  {
    id: 'excited', emoji: '🤩', word: 'excited', cat: 'feeling', tier: 'base',
    synonyms: ['thrilled', 'eager', 'enthusiastic', 'energised', 'overjoyed', 'buzzing'],
    story:  'The Hodgers were absolutely buzzing — they had discovered an unguarded trifle on the kitchen table.',
    prompt: 'What would make a Hodger overjoyed? Write a sentence about it.',
  },
  {
    id: 'gleeful', emoji: '😆', word: 'gleeful', cat: 'feeling', tier: 'rich',
    synonyms: ['joyful', 'delighted', 'elated'],
    story:  'The Hodger was absolutely gleeful — she had hidden a sock inside the sofa.',
    prompt: 'Write a sentence about a Hodger who is gleeful about some mischief.',
  },
  {
    id: 'furious', emoji: '🤬', word: 'furious', cat: 'feeling', tier: 'rich',
    synonyms: ['livid', 'cross', 'outraged'],
    story:  'The Hodger was furious — someone had tidied the mess she spent all morning making.',
    prompt: 'Write a sentence about a Hodger who is furious about something.',
  },
  {
    id: 'ferocious', emoji: '🐯', word: 'ferocious', cat: 'feeling', tier: 'rich',
    synonyms: ['fierce', 'wild', 'furious'],
    story:  'The Hodger gave the cat the most ferocious glare a creature her size could manage.',
    prompt: 'Write a sentence about a Hodger being ferocious.',
  },
  {
    id: 'bewildered', emoji: '😵‍💫', word: 'bewildered', cat: 'feeling', tier: 'rich',
    synonyms: ['confused', 'baffled', 'puzzled'],
    story:  'Everyone was bewildered by the smell — nobody suspected the Hodgers at all.',
    prompt: 'Write a sentence about someone who is bewildered by the Hodgers\' mischief.',
  },

  // ── ADJECTIVES: LOOKS ────────────────────────────────────────
  {
    id: 'beautiful', emoji: '🦋', word: 'beautiful', cat: 'looks', tier: 'base',
    synonyms: ['gorgeous', 'lovely', 'stunning', 'pretty', 'elegant', 'dazzling'],
    story:  'The Hodger thought she looked absolutely stunning in her tiny hat — even though it was made of cheese.',
    prompt: 'Write a sentence describing what a Hodger looks like.',
  },
  {
    id: 'bright', emoji: '💡', word: 'bright', cat: 'looks', tier: 'base',
    synonyms: ['shining', 'glowing', 'radiant', 'vivid', 'gleaming', 'luminous'],
    story:  'The Hodger\'s eyes were gleaming as she spotted the biscuit tin from across the room.',
    prompt: 'Write a sentence with gleaming or radiant about a Hodger.',
  },
  {
    id: 'dark', emoji: '🌙', word: 'dark', cat: 'looks', tier: 'base',
    synonyms: ['shadowy', 'murky', 'dim', 'gloomy', 'dusky', 'obscure'],
    story:  'The Hodgers crept through the shadowy corridor, giggling very quietly to each other.',
    prompt: 'Write a sentence about the Hodgers in a dark, murky place.',
  },

  // ── ADJECTIVES: TEXTURE ──────────────────────────────────────
  {
    id: 'soft', emoji: '🐰', word: 'soft', cat: 'texture', tier: 'base',
    synonyms: ['fluffy', 'silky', 'gentle', 'squishy', 'velvety', 'cushiony'],
    story:  'The Hodger settled into the squishy sofa cushion and let out a deeply satisfied sigh.',
    prompt: 'Write a sentence about a Hodger finding something soft to sit on.',
  },
  {
    id: 'hard', emoji: '🪨', word: 'hard', cat: 'texture', tier: 'base',
    synonyms: ['solid', 'firm', 'tough', 'rigid', 'sturdy', 'stiff'],
    story:  'The Hodger knocked on the solid floorboard three times — a signal to the others below.',
    prompt: 'Write a sentence with solid or firm about something a Hodger finds.',
  },
  {
    id: 'velvety', emoji: '🛋️', word: 'velvety', cat: 'texture', tier: 'rich',
    synonyms: ['silky', 'smooth', 'soft'],
    story:  'The Hodger sank into the velvety sofa cushion with a satisfied sigh.',
    prompt: 'Write a sentence about a Hodger finding something velvety to sit on.',
  },

  // ── ADJECTIVES: SOUND ────────────────────────────────────────
  {
    id: 'loud', emoji: '📣', word: 'loud', cat: 'sound', tier: 'base',
    synonyms: ['noisy', 'booming', 'thunderous', 'blaring', 'rowdy', 'deafening'],
    story:  'The fart was so thunderous it woke up the dog, the cat, and the next-door neighbours.',
    prompt: 'Write a sentence about a Hodger making a thunderous or deafening sound.',
  },
  {
    id: 'quiet', emoji: '🤫', word: 'quiet', cat: 'sound', tier: 'base',
    synonyms: ['silent', 'hushed', 'still', 'peaceful', 'calm', 'gentle'],
    story:  'The house was perfectly silent — which meant the Hodgers were definitely up to something.',
    prompt: 'Write a sentence about a Hodger being silent or hushed. Why are they so quiet?',
  },
  {
    id: 'thunderous', emoji: '⛈️', word: 'thunderous', cat: 'sound', tier: 'rich',
    synonyms: ['deafening', 'booming', 'blaring'],
    story:  'The burp was so thunderous it woke up the dog, the cat and next door.',
    prompt: 'Write a sentence about a Hodger making a thunderous noise.',
  },

  // ── ADJECTIVES: TEMPERATURE ──────────────────────────────────
  {
    id: 'hot', emoji: '🌋', word: 'hot', cat: 'temp', tier: 'base',
    synonyms: ['scorching', 'blazing', 'boiling', 'sizzling', 'sweltering', 'fiery'],
    story:  'The Hodger sat too close to the radiator and let out a scorching, furious fart of outrage.',
    prompt: 'Write a sentence about a Hodger in something scorching or blazing hot.',
  },
  {
    id: 'cold', emoji: '🧊', word: 'cold', cat: 'temp', tier: 'base',
    synonyms: ['freezing', 'icy', 'chilly', 'frosty', 'arctic', 'bitter'],
    story:  'The Hodger had hidden in the freezer for a whole hour — emerging frosty, furious, and absolutely starving.',
    prompt: 'Write a sentence about a Hodger who is absolutely freezing.',
  },

  // ── ADVERBS ──────────────────────────────────────────────────
  {
    id: 'quickly-adv', emoji: '⚡', word: 'quickly', cat: 'adverb', tier: 'base',
    synonyms: ['swiftly', 'hastily', 'speedily', 'briskly', 'rapidly', 'urgently'],
    story:  'The Hodger swiftly grabbed the last biscuit and vanished under the floorboards before anyone turned around.',
    prompt: 'Write a sentence about a Hodger doing something swiftly or hastily.',
  },
  {
    id: 'quietly-adv', emoji: '🤫', word: 'quietly', cat: 'adverb', tier: 'base',
    synonyms: ['silently', 'softly', 'stealthily', 'gently', 'noiselessly', 'sneakily'],
    story:  'The Hodger moved stealthily across the kitchen floor, not making a single sound.',
    prompt: 'Write a sentence about a Hodger sneaking somewhere silently.',
  },
  {
    id: 'loudly-adv', emoji: '📣', word: 'loudly', cat: 'adverb', tier: 'base',
    synonyms: ['noisily', 'thunderously', 'boisterously', 'raucously', 'deafeningly', 'rowdily'],
    story:  'The Hodger burped so thunderously that everyone in the house froze and stared at the ceiling.',
    prompt: 'Write a sentence about a Hodger doing something boisterously loud.',
  },
  {
    id: 'carefully-adv', emoji: '🎯', word: 'carefully', cat: 'adverb', tier: 'base',
    synonyms: ['cautiously', 'gently', 'delicately', 'precisely', 'tenderly', 'meticulously'],
    story:  'The Hodger cautiously lifted the edge of the tablecloth and peered underneath with one tiny eye.',
    prompt: 'Write a sentence about a Hodger doing something very cautiously.',
  },
  {
    id: 'suddenly-adv', emoji: '💥', word: 'suddenly', cat: 'adverb', tier: 'base',
    synonyms: ['abruptly', 'unexpectedly', 'instantly', 'immediately', 'sharply', 'all at once'],
    story:  'Everything was peaceful. Then, abruptly, an extraordinary smell filled the entire room.',
    prompt: 'Write a sentence where something abruptly or unexpectedly happens with the Hodgers.',
  },
  {
    id: 'bravely-adv', emoji: '🦁', word: 'bravely', cat: 'adverb', tier: 'base',
    synonyms: ['boldly', 'courageously', 'fearlessly', 'daringly', 'heroically', 'valiantly'],
    story:  'The smallest Hodger boldly marched straight towards the dog and sat on its paw.',
    prompt: 'Write a sentence about a Hodger doing something fearlessly.',
  },
  {
    id: 'stealthily-adv', emoji: '🥷', word: 'stealthily', cat: 'adverb', tier: 'rich',
    synonyms: ['silently', 'sneakily', 'noiselessly'],
    story:  'The Hodger moved stealthily across the kitchen, heading straight for the cheese.',
    prompt: 'Write a sentence about a Hodger sneaking somewhere stealthily.',
  },
  {
    id: 'cautiously-adv', emoji: '🧐', word: 'cautiously', cat: 'adverb', tier: 'rich',
    synonyms: ['carefully', 'gently', 'delicately'],
    story:  'The Hodger cautiously lifted the tablecloth and peered underneath with one tiny eye.',
    prompt: 'Write a sentence about a Hodger doing something cautiously.',
  },
  {
    id: 'raucously-adv', emoji: '🥳', word: 'raucously', cat: 'adverb', tier: 'rich',
    synonyms: ['noisily', 'loudly', 'boisterously'],
    story:  'The Hodgers laughed raucously as they tumbled out from behind the fridge.',
    prompt: 'Write a sentence about the Hodgers laughing raucously.',
  },

  // ── VERBS ────────────────────────────────────────────────────
  {
    id: 'walked-verb', emoji: '👣', word: 'walked', cat: 'verb', tier: 'base',
    synonyms: ['tiptoed', 'crept', 'scurried', 'shuffled', 'waddled', 'stomped'],
    story:  'The Hodger scurried across the kitchen floor at tremendous speed, heading straight for the cheese.',
    prompt: 'Write a sentence about a Hodger moving. Did she tiptoe, waddle or stomp?',
  },
  {
    id: 'ran-verb', emoji: '🏃', word: 'ran', cat: 'verb', tier: 'base',
    synonyms: ['sprinted', 'dashed', 'bolted', 'zoomed', 'hurtled', 'raced'],
    story:  'The Hodger bolted under the sofa the moment she heard footsteps on the stairs.',
    prompt: 'Write a sentence about a Hodger who sprints or dashes away from danger.',
  },
  {
    id: 'said-verb', emoji: '💬', word: 'said', cat: 'verb', tier: 'base',
    synonyms: ['whispered', 'shouted', 'muttered', 'giggled', 'announced', 'declared'],
    story:  '"This is the best hiding place," the Hodger whispered smugly from inside the wellington boot.',
    prompt: 'Write a sentence where a Hodger whispers, mutters or giggles something.',
  },
  {
    id: 'laughed-verb', emoji: '😂', word: 'laughed', cat: 'verb', tier: 'base',
    synonyms: ['chuckled', 'cackled', 'snorted', 'howled', 'giggled', 'guffawed'],
    story:  'The Hodger cackled so hard at her own prank that she fell off the shelf.',
    prompt: 'Write a sentence about a Hodger who cackles or guffaws at their own mischief.',
  },
  {
    id: 'ate-verb', emoji: '🍪', word: 'ate', cat: 'verb', tier: 'base',
    synonyms: ['devoured', 'gobbled', 'nibbled', 'munched', 'chomped', 'wolfed'],
    story:  'The Hodger devoured the entire biscuit tin in four minutes and felt absolutely no guilt.',
    prompt: 'Write a sentence about a Hodger who gobbles or devours something they shouldn\'t.',
  },
  {
    id: 'hid-verb', emoji: '🙈', word: 'hid', cat: 'verb', tier: 'base',
    synonyms: ['concealed', 'lurked', 'crouched', 'cowered', 'ducked', 'vanished'],
    story:  'The Hodger lurked behind the cereal boxes, watching and waiting for the perfect moment.',
    prompt: 'Write a sentence about a Hodger who lurks or crouches somewhere unexpected.',
  },
  {
    id: 'looked-verb', emoji: '👀', word: 'looked', cat: 'verb', tier: 'base',
    synonyms: ['peered', 'glared', 'peeked', 'spied', 'gazed', 'squinted'],
    story:  'The Hodger peered around the corner of the fridge with one very suspicious eye.',
    prompt: 'Write a sentence where a Hodger peeks, peers or spies on something.',
  },
  {
    id: 'scurried-verb', emoji: '🐁', word: 'scurried', cat: 'verb', tier: 'rich',
    synonyms: ['darted', 'bolted', 'dashed'],
    story:  'The Hodger scurried across the floor the moment she heard footsteps.',
    prompt: 'Write a sentence about a Hodger who scurries away quickly.',
  },
  {
    id: 'devoured-verb', emoji: '😋', word: 'devoured', cat: 'verb', tier: 'rich',
    synonyms: ['gobbled', 'wolfed', 'chomped'],
    story:  'The Hodger devoured the entire biscuit tin and felt absolutely no guilt.',
    prompt: 'Write a sentence about a Hodger who devours something they shouldn\'t.',
  },
  {
    id: 'lurking-verb', emoji: '🕵️', word: 'lurking', cat: 'verb', tier: 'rich',
    synonyms: ['hiding', 'creeping', 'crouching'],
    story:  'The Hodger was lurking behind the cereal boxes, watching and waiting.',
    prompt: 'Write a sentence about a Hodger lurking somewhere unexpected.',
  },
  {
    id: 'cackled-verb', emoji: '🧙', word: 'cackled', cat: 'verb', tier: 'rich',
    synonyms: ['giggled', 'howled', 'guffawed'],
    story:  'The Hodger cackled so hard at her own trick that she fell off the shelf.',
    prompt: 'Write a sentence about a Hodger who cackled at her own trick.',
  },

  // ── ADJECTIVES: OPINIONS ─────────────────────────────────────
  // "Opinion adjectives" — judgement/reaction words, distinct from the
  // sensory categories above (size/speed/feeling/looks/texture/sound/temp).
  {
    id: 'magnificent', emoji: '👑', word: 'magnificent', cat: 'opinion', tier: 'rich',
    synonyms: ['spectacular', 'splendid', 'glorious'],
    story:  'The Hodger thought her tiny poo sculpture was truly magnificent.',
    prompt: 'Write a sentence about something a Hodger thinks is magnificent.',
  },
  {
    id: 'peculiar', emoji: '🤔', word: 'peculiar', cat: 'opinion', tier: 'rich',
    synonyms: ['strange', 'odd', 'unusual'],
    story:  'A peculiar smell had been drifting through the house all afternoon.',
    prompt: 'Write a sentence about something peculiar the Hodgers left behind.',
  },
  {
    id: 'disastrous', emoji: '🌪️', word: 'disastrous', cat: 'opinion', tier: 'rich',
    synonyms: ['catastrophic', 'terrible', 'awful'],
    story:  'The plan had been brilliant. The result was completely disastrous.',
    prompt: 'Write a sentence about a Hodger plan that turned out disastrous.',
  },
  {
    id: 'preposterous', emoji: '🙃', word: 'preposterous', cat: 'opinion', tier: 'rich',
    synonyms: ['ridiculous', 'absurd', 'outrageous'],
    story:  'It was preposterous — three Hodgers in a teacup and they still wanted more room.',
    prompt: 'Write a sentence about something preposterous the Hodgers tried to do.',
  },
  {
    id: 'mischievous', emoji: '😏', word: 'mischievous', cat: 'opinion', tier: 'rich',
    synonyms: ['naughty', 'cheeky', 'troublesome'],
    story:  'The most mischievous Hodger had discovered where the chocolate biscuits were kept.',
    prompt: 'Write a sentence about the most mischievous Hodger you can imagine.',
  },
  {
    id: 'cunning', emoji: '🦊', word: 'cunning', cat: 'opinion', tier: 'rich',
    synonyms: ['clever', 'devious', 'crafty'],
    story:  'The most cunning Hodger had a plan involving the butter dish and the dog.',
    prompt: 'Write a sentence about a cunning plan a Hodger comes up with.',
  },

  // ── RICHER VOCABULARY BATCH (Aug 2026) ────────────────────────
  {
    id: 'colossal', emoji: '🦣', word: 'colossal', cat: 'size', tier: 'rich',
    synonyms: ['huge', 'massive', 'giant'],
    story:  'The Hodgers built a colossal tower of biscuits before anyone came downstairs.',
    prompt: 'Write a sentence about something colossal the Hodgers built or ate.',
  },
  {
    id: 'minuscule', emoji: '🐜', word: 'minuscule', cat: 'size', tier: 'rich',
    synonyms: ['tiny', 'microscopic', 'minute'],
    story:  'The crumb was minuscule, but the Hodger still fought her sister for it.',
    prompt: 'Write a sentence about something minuscule a Hodger fights over.',
  },
  {
    id: 'gargantuan', emoji: '🦕', word: 'gargantuan', cat: 'size', tier: 'rich',
    synonyms: ['huge', 'massive', 'enormous'],
    story:  'The Hodger let out a gargantuan yawn that somehow lasted eleven seconds.',
    prompt: 'Write a sentence about a gargantuan yawn, sneeze or burp.',
  },
  {
    id: 'diminutive', emoji: '🐁', word: 'diminutive', cat: 'size', tier: 'rich',
    synonyms: ['tiny', 'small', 'petite'],
    story:  'For such a diminutive creature, the Hodger caused an astonishing amount of chaos.',
    prompt: 'Write a sentence about a diminutive Hodger causing big trouble.',
  },
  {
    id: 'vast', emoji: '🏔️', word: 'vast', cat: 'size', tier: 'rich',
    synonyms: ['huge', 'immense', 'boundless'],
    story:  'To the Hodger, the garden was a vast, unexplored wilderness full of snacks.',
    prompt: 'Write a sentence about a vast space, real or imagined, a Hodger explores.',
  },
  {
    id: 'swift', emoji: '🐇', word: 'swift', cat: 'speed', tier: 'rich',
    synonyms: ['fast', 'quick', 'rapid'],
    story:  'With one swift movement, the Hodger snatched the last sausage roll.',
    prompt: 'Write a sentence about a Hodger\'s swift getaway.',
  },
  {
    id: 'brisk', emoji: '🚶', word: 'brisk', cat: 'speed', tier: 'rich',
    synonyms: ['quick', 'lively', 'energetic'],
    story:  'The Hodgers set off at a brisk pace the second they heard the fridge door open.',
    prompt: 'Write a sentence about the Hodgers moving at a brisk pace.',
  },
  {
    id: 'sluggish', emoji: '🐌', word: 'sluggish', cat: 'speed', tier: 'rich',
    synonyms: ['slow', 'lethargic', 'sleepy'],
    story:  'After eating an entire trifle, the Hodger felt far too sluggish to move.',
    prompt: 'Write a sentence about a Hodger who feels sluggish after eating too much.',
  },
  {
    id: 'hasty', emoji: '🏃', word: 'hasty', cat: 'speed', tier: 'rich',
    synonyms: ['quick', 'rushed', 'hurried'],
    story:  'The Hodger made a hasty exit the moment the biscuit tin lid started to lift.',
    prompt: 'Write a sentence about a hasty decision a Hodger makes.',
  },
  {
    id: 'nimble', emoji: '🤸', word: 'nimble', cat: 'speed', tier: 'rich',
    synonyms: ['agile', 'quick', 'graceful'],
    story:  'The Hodger\'s nimble little paws could open almost any cupboard in the house.',
    prompt: 'Write a sentence about a Hodger being nimble.',
  },
  {
    id: 'ecstatic', emoji: '🥳', word: 'ecstatic', cat: 'feeling', tier: 'rich',
    synonyms: ['overjoyed', 'thrilled', 'elated'],
    story:  'The Hodger was ecstatic — someone had left an entire cake unguarded on the side.',
    prompt: 'Write a sentence about a Hodger who is ecstatic about something.',
  },
  {
    id: 'melancholy', emoji: '😔', word: 'melancholy', cat: 'feeling', tier: 'rich',
    synonyms: ['sad', 'gloomy', 'wistful'],
    story:  'There was something melancholy about the last biscuit, sitting alone in an empty tin.',
    prompt: 'Write a sentence with a melancholy feeling about a Hodger.',
  },
  {
    id: 'irate', emoji: '😡', word: 'irate', cat: 'feeling', tier: 'rich',
    synonyms: ['furious', 'livid', 'enraged'],
    story:  'The Hodger grew irate when she discovered the fridge had been left firmly shut.',
    prompt: 'Write a sentence about a Hodger who becomes irate.',
  },
  {
    id: 'apprehensive', emoji: '😬', word: 'apprehensive', cat: 'feeling', tier: 'rich',
    synonyms: ['nervous', 'uneasy', 'worried'],
    story:  'The Hodger felt apprehensive tiptoeing past the sleeping dog with a stolen sausage.',
    prompt: 'Write a sentence about a Hodger feeling apprehensive.',
  },
  {
    id: 'exuberant', emoji: '🎉', word: 'exuberant', cat: 'feeling', tier: 'rich',
    synonyms: ['enthusiastic', 'lively', 'high-spirited'],
    story:  'The Hodgers gave an exuberant cheer the moment the picnic basket was left open.',
    prompt: 'Write a sentence about the Hodgers being exuberant.',
  },
  {
    id: 'despondent', emoji: '😞', word: 'despondent', cat: 'feeling', tier: 'rich',
    synonyms: ['miserable', 'downhearted', 'dejected'],
    story:  'The Hodger looked utterly despondent when she realised the biscuits were digestives, not chocolate ones.',
    prompt: 'Write a sentence about a Hodger who feels despondent.',
  },
  {
    id: 'jubilant', emoji: '🙌', word: 'jubilant', cat: 'feeling', tier: 'rich',
    synonyms: ['triumphant', 'joyful', 'elated'],
    story:  'The Hodgers were jubilant after successfully smuggling an entire sausage out of the kitchen.',
    prompt: 'Write a sentence about the Hodgers feeling jubilant.',
  },
  {
    id: 'resplendent', emoji: '👑', word: 'resplendent', cat: 'looks', tier: 'rich',
    synonyms: ['dazzling', 'magnificent', 'glorious'],
    story:  'The Hodger looked utterly resplendent in a crown made entirely of crisps.',
    prompt: 'Write a sentence describing a Hodger looking resplendent.',
  },
  {
    id: 'immaculate', emoji: '🧼', word: 'immaculate', cat: 'looks', tier: 'rich',
    synonyms: ['spotless', 'pristine', 'flawless'],
    story:  'The kitchen had been immaculate for exactly four minutes before the Hodgers arrived.',
    prompt: 'Write a sentence about something immaculate the Hodgers ruin.',
  },
  {
    id: 'dishevelled', emoji: '🧶', word: 'dishevelled', cat: 'looks', tier: 'rich',
    synonyms: ['untidy', 'messy', 'rumpled'],
    story:  'The Hodger emerged from the laundry basket looking thoroughly dishevelled.',
    prompt: 'Write a sentence about a Hodger looking dishevelled after an adventure.',
  },
  {
    id: 'exquisite', emoji: '💎', word: 'exquisite', cat: 'looks', tier: 'rich',
    synonyms: ['beautiful', 'elegant', 'delicate'],
    story:  'The Hodger declared the crumbs on the carpet an exquisite work of art.',
    prompt: 'Write a sentence about something a Hodger finds exquisite.',
  },
  {
    id: 'grotesque', emoji: '👹', word: 'grotesque', cat: 'looks', tier: 'rich',
    synonyms: ['hideous', 'monstrous', 'bizarre'],
    story:  'The shadow on the wall looked utterly grotesque — it was just the Hodger holding a spoon.',
    prompt: 'Write a sentence about something that looks grotesque but isn\'t really.',
  },
  {
    id: 'coarse', emoji: '🧵', word: 'coarse', cat: 'texture', tier: 'rich',
    synonyms: ['rough', 'scratchy', 'bristly'],
    story:  'The doormat felt coarse under the Hodger\'s tiny paws as she made her escape.',
    prompt: 'Write a sentence about something coarse a Hodger touches.',
  },
  {
    id: 'brittle', emoji: '🍂', word: 'brittle', cat: 'texture', tier: 'rich',
    synonyms: ['fragile', 'crumbly', 'delicate'],
    story:  'The old biscuit was so brittle it crumbled the second the Hodger picked it up.',
    prompt: 'Write a sentence about something brittle that breaks in a Hodger\'s paws.',
  },
  {
    id: 'gritty', emoji: '🏖️', word: 'gritty', cat: 'texture', tier: 'rich',
    synonyms: ['sandy', 'grainy', 'rough'],
    story:  'The Hodger\'s fur was gritty with sand after her trip through the plant pot.',
    prompt: 'Write a sentence about something gritty a Hodger gets covered in.',
  },
  {
    id: 'slimy', emoji: '🐌', word: 'slimy', cat: 'texture', tier: 'rich',
    synonyms: ['slippery', 'gooey', 'sticky'],
    story:  'The Hodger backed away from the slimy trail the snail had left across the patio.',
    prompt: 'Write a sentence about something slimy a Hodger discovers.',
  },
  {
    id: 'shrill', emoji: '📯', word: 'shrill', cat: 'sound', tier: 'rich',
    synonyms: ['piercing', 'high-pitched', 'screeching'],
    story:  'The Hodger let out a shrill squeak the moment the vacuum cleaner switched on.',
    prompt: 'Write a sentence about a shrill noise a Hodger makes.',
  },
  {
    id: 'muffled', emoji: '🧣', word: 'muffled', cat: 'sound', tier: 'rich',
    synonyms: ['smothered', 'quiet', 'dampened'],
    story:  'A muffled giggling could be heard coming from somewhere inside the sofa cushions.',
    prompt: 'Write a sentence about a muffled sound coming from a Hodger\'s hiding place.',
  },
  {
    id: 'resonant', emoji: '🔔', word: 'resonant', cat: 'sound', tier: 'rich',
    synonyms: ['deep', 'echoing', 'booming'],
    story:  'The Hodger\'s stomach made a resonant rumble that echoed round the entire kitchen.',
    prompt: 'Write a sentence about a resonant sound a Hodger makes.',
  },
  {
    id: 'cacophonous', emoji: '🥁', word: 'cacophonous', cat: 'sound', tier: 'rich',
    synonyms: ['chaotic', 'noisy', 'deafening'],
    story:  'Six Hodgers fighting over one biscuit made the most cacophonous racket imaginable.',
    prompt: 'Write a sentence about a cacophonous noise several Hodgers make together.',
  },
  {
    id: 'piercing', emoji: '📢', word: 'piercing', cat: 'sound', tier: 'rich',
    synonyms: ['sharp', 'shrill', 'penetrating'],
    story:  'A piercing shriek rang out the second the Hodger spotted her own reflection.',
    prompt: 'Write a sentence about a piercing sound in the Hodger house.',
  },
  {
    id: 'tepid', emoji: '🌤️', word: 'tepid', cat: 'temp', tier: 'rich',
    synonyms: ['lukewarm', 'mild', 'unheated'],
    story:  'The bathwater had gone tepid by the time the Hodger finally climbed in.',
    prompt: 'Write a sentence about something tepid a Hodger encounters.',
  },
  {
    id: 'balmy', emoji: '🌴', word: 'balmy', cat: 'temp', tier: 'rich',
    synonyms: ['warm', 'mild', 'pleasant'],
    story:  'On a balmy evening, the Hodgers liked nothing more than sunbathing on the windowsill.',
    prompt: 'Write a sentence about a balmy day the Hodgers enjoy.',
  },
  {
    id: 'frigid', emoji: '❄️', word: 'frigid', cat: 'temp', tier: 'rich',
    synonyms: ['freezing', 'icy', 'bitter'],
    story:  'The Hodger regretted her frigid hiding spot the moment the freezer door swung open.',
    prompt: 'Write a sentence about somewhere frigid a Hodger hides.',
  },
  {
    id: 'torrid', emoji: '🔥', word: 'torrid', cat: 'temp', tier: 'rich',
    synonyms: ['scorching', 'blistering', 'sweltering'],
    story:  'It was a torrid afternoon, and the Hodgers spent it fighting over the last ice cube.',
    prompt: 'Write a sentence about a torrid day the Hodgers survive.',
  },
  {
    id: 'articulately', emoji: '🗣️', word: 'articulately', cat: 'adverb', tier: 'rich',
    synonyms: ['clearly', 'eloquently', 'fluently'],
    story:  'The smallest Hodger explained, remarkably articulately, exactly why the biscuit tin was empty.',
    prompt: 'Write a sentence about a Hodger explaining something articulately.',
  },
  {
    id: 'diligently', emoji: '📚', word: 'diligently', cat: 'adverb', tier: 'rich',
    synonyms: ['carefully', 'thoroughly', 'conscientiously'],
    story:  'The Hodger worked diligently for over an hour to unwrap a single toffee.',
    prompt: 'Write a sentence about a Hodger working diligently on a tricky task.',
  },
  {
    id: 'reluctantly', emoji: '😒', word: 'reluctantly', cat: 'adverb', tier: 'rich',
    synonyms: ['unwillingly', 'hesitantly', 'grudgingly'],
    story:  'The Hodger reluctantly shared half a grape with her sister — just this once.',
    prompt: 'Write a sentence about a Hodger reluctantly sharing something.',
  },
  {
    id: 'gracefully', emoji: '🩰', word: 'gracefully', cat: 'adverb', tier: 'rich',
    synonyms: ['elegantly', 'smoothly', 'fluidly'],
    story:  'The Hodger leapt gracefully from the sofa to the windowsill without spilling a crumb.',
    prompt: 'Write a sentence about a Hodger moving gracefully.',
  },
  {
    id: 'clumsily', emoji: '🤕', word: 'clumsily', cat: 'adverb', tier: 'rich',
    synonyms: ['awkwardly', 'blunderingly', 'ungracefully'],
    story:  'The Hodger clumsily knocked an entire fruit bowl off the counter while reaching for one grape.',
    prompt: 'Write a sentence about a Hodger doing something clumsily.',
  },
  {
    id: 'relentlessly', emoji: '🔁', word: 'relentlessly', cat: 'adverb', tier: 'rich',
    synonyms: ['persistently', 'tirelessly', 'continuously'],
    story:  'The Hodger scratched relentlessly at the biscuit tin until somebody finally opened it.',
    prompt: 'Write a sentence about a Hodger doing something relentlessly.',
  },
  {
    id: 'pondered', emoji: '🤔', word: 'pondered', cat: 'verb', tier: 'rich',
    synonyms: ['wondered', 'considered', 'mused'],
    story:  'The Hodger pondered for a long while over which biscuit to steal first.',
    prompt: 'Write a sentence about a Hodger who pondered a big decision.',
  },
  {
    id: 'exclaimed', emoji: '😲', word: 'exclaimed', cat: 'verb', tier: 'rich',
    synonyms: ['cried out', 'shouted', 'blurted'],
    story:  '"The cheese has gone!" exclaimed the Hodger, staring in horror at the empty plate.',
    prompt: 'Write a sentence where a Hodger exclaimed something in surprise.',
  },
  {
    id: 'wobbled', emoji: '🫨', word: 'wobbled', cat: 'verb', tier: 'rich',
    synonyms: ['teetered', 'swayed', 'tottered'],
    story:  'The Hodger wobbled precariously along the shelf, arms full of stolen grapes.',
    prompt: 'Write a sentence about a Hodger who wobbled somewhere dangerous.',
  },
  {
    id: 'scrambled', emoji: '🧗', word: 'scrambled', cat: 'verb', tier: 'rich',
    synonyms: ['clambered', 'scurried', 'hurried'],
    story:  'The Hodgers scrambled up the curtains the second the cat wandered into the room.',
    prompt: 'Write a sentence about the Hodgers who scrambled to safety.',
  },
  {
    id: 'tumbled', emoji: '🤸', word: 'tumbled', cat: 'verb', tier: 'rich',
    synonyms: ['toppled', 'fell', 'rolled'],
    story:  'The Hodger tumbled straight off the sofa arm, still clutching her biscuit.',
    prompt: 'Write a sentence about a Hodger who tumbled somewhere unexpected.',
  },
  {
    id: 'plotted', emoji: '🗺️', word: 'plotted', cat: 'verb', tier: 'rich',
    synonyms: ['schemed', 'planned', 'conspired'],
    story:  'The Hodgers plotted for days over exactly how to reach the top shelf.',
    prompt: 'Write a sentence about what the Hodgers plotted together.',
  },
  {
    id: 'wandered', emoji: '🚶‍♀️', word: 'wandered', cat: 'verb', tier: 'rich',
    synonyms: ['roamed', 'strayed', 'meandered'],
    story:  'The smallest Hodger wandered off and was found, an hour later, asleep inside a welly boot.',
    prompt: 'Write a sentence about a Hodger who wandered off somewhere odd.',
  },
  {
    id: 'articulate', emoji: '🎤', word: 'articulate', cat: 'opinion', tier: 'rich',
    synonyms: ['eloquent', 'well-spoken', 'clear'],
    story:  'Everyone was stunned by how articulate the smallest Hodger was when explaining why the vase was broken.',
    prompt: 'Write a sentence about a Hodger being surprisingly articulate.',
  },
  {
    id: 'astonishing', emoji: '😮', word: 'astonishing', cat: 'opinion', tier: 'rich',
    synonyms: ['amazing', 'astounding', 'remarkable'],
    story:  'It was astonishing how much mess one tiny Hodger could make in four minutes.',
    prompt: 'Write a sentence about something astonishing the Hodgers do.',
  },
  {
    id: 'remarkable', emoji: '🌟', word: 'remarkable', cat: 'opinion', tier: 'rich',
    synonyms: ['extraordinary', 'notable', 'impressive'],
    story:  'The Hodgers showed a remarkable talent for opening things they were never meant to open.',
    prompt: 'Write a sentence about a remarkable Hodger talent.',
  },
  {
    id: 'delightful', emoji: '😊', word: 'delightful', cat: 'opinion', tier: 'rich',
    synonyms: ['charming', 'lovely', 'pleasing'],
    story:  'Everyone agreed the smallest Hodger\'s singing was delightful — the dog, less so.',
    prompt: 'Write a sentence about something delightful a Hodger does.',
  },
  {
    id: 'extraordinary', emoji: '🌠', word: 'extraordinary', cat: 'opinion', tier: 'rich',
    synonyms: ['remarkable', 'exceptional', 'astonishing'],
    story:  'It was an extraordinary sight — five Hodgers, one biscuit, and absolutely no sharing.',
    prompt: 'Write a sentence about an extraordinary Hodger moment.',
  },
  {
    id: 'marvellous', emoji: '🎊', word: 'marvellous', cat: 'opinion', tier: 'rich',
    synonyms: ['wonderful', 'splendid', 'magnificent'],
    story:  'The Hodger thought her sock collection was, without question, perfectly marvellous.',
    prompt: 'Write a sentence about something a Hodger thinks is marvellous.',
  },
  {
    id: 'horrendous', emoji: '🙀', word: 'horrendous', cat: 'opinion', tier: 'rich',
    synonyms: ['dreadful', 'appalling', 'atrocious'],
    story:  'The smell coming from behind the sofa was absolutely horrendous — even the dog refused to go near it.',
    prompt: 'Write a sentence about something horrendous the Hodgers left behind.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WORD OF THE DAY — shared logic
   One function, called by both timetable.html's wotdForToday() and
   Word Explorer's getWordOfDay(), so the date→word mapping only
   exists in one place.
═══════════════════════════════════════════════════════════════ */

// Historical corrections, keyed by exact toDateString(). Cairo was
// actually taught these two words on these two real calendar dates,
// before the Word Explorer/timetable word lists were merged (11 Aug
// 2026). Merging changed WORDS.length, which silently reshuffles the
// hash-computed word for every date, past and future — these entries
// correct the record for the two days that already happened under the
// old, smaller list. This is a one-off historical fix for the
// transition, not a general scheduling mechanism — don't add future
// dates here; let the hash pick those normally.
const WOTD_OVERRIDES = {
  'Mon Aug 10 2026': 'horrendous',
  'Tue Aug 11 2026': 'devoured-verb',
};

// Word of the Day only ever picks from tier: 'rich' words — the plain
// "anchor" words (big, happy, hid...) stay in WORDS for Word Explorer's
// browsing mode (they're still the right entry point for "big → here
// are 6 richer ways to say it"), but they're not interesting enough to
// be the daily spotlight word themselves. Tag any new word you add:
// 'rich' if it's genuinely a step up in vocabulary, 'base' if it's a
// common word mainly there to introduce its synonyms.
const RICH_WORDS = WORDS.filter(w => w.tier === 'rich');

function _weekStartMonday(d) {
  const date = new Date(d);
  const day = date.getDay(); // 0 Sun .. 6 Sat
  date.setDate(date.getDate() + (day === 0 ? -6 : 1 - day));
  date.setHours(0, 0, 0, 0);
  return date;
}

// Computes a whole Mon–Sun week's words together (not day-by-day
// independently) so a same-week repeat can be caught and avoided —
// with only 21 rich words feeding up to 7 days, two days landing on
// the same word by hash coincidence is common enough to be worth
// guarding against. Overrides count as "used" too, so a later day's
// hash won't step onto Monday/Tuesday's pinned words either.
function _weekWords(weekStart) {
  const used = new Set();
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    const key = d.toDateString();
    let word = WOTD_OVERRIDES[key] ? WORDS.find(w => w.id === WOTD_OVERRIDES[key]) : null;
    if (!word) {
      let h = 0;
      for (let c = 0; c < key.length; c++) h = Math.imul(31, h) + key.charCodeAt(c) | 0;
      let idx = (h >>> 0) % RICH_WORDS.length;
      let attempts = 0;
      while (used.has(RICH_WORDS[idx].id) && attempts < RICH_WORDS.length) {
        idx = (idx + 1) % RICH_WORDS.length;
        attempts++;
      }
      word = RICH_WORDS[idx];
    }
    used.add(word.id);
    days.push(word);
  }
  return days;
}

function wordOfDayFor(d) {
  const weekStart = _weekStartMonday(d);
  const today = new Date(d);
  today.setHours(0, 0, 0, 0);
  const offset = Math.round((today - weekStart) / 86400000);
  return _weekWords(weekStart)[offset];
}
