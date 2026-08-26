'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA
   All content lives here. Never touch render functions to add words.
═══════════════════════════════════════════════════════════════ */

const VEHICLES = [
  // Road
  { id: 'car',          emoji: '🚙',  fr: 'la voiture',            en: 'car',               type: 'road'         },
  { id: 'truck',        emoji: '🚛',  fr: 'le camion',             en: 'truck',             type: 'road'         },
  { id: 'bus',          emoji: '🚌',  fr: 'le bus',                en: 'bus',               type: 'road'         },
  { id: 'firetruck',    emoji: '🚒',  fr: 'le camion de pompiers', en: 'fire engine',       type: 'road'         },
  { id: 'ambulance',    emoji: '🚑',  fr: "l'ambulance",           en: 'ambulance',         type: 'road'         },
  { id: 'police',       emoji: '🚓',  fr: 'la voiture de police',  en: 'police car',        type: 'road'         },
  { id: 'racing',       emoji: '🏎️',  fr: 'la voiture de course',  en: 'racing car',        type: 'road'         },
  { id: 'motorbike',    emoji: '🏍️',  fr: 'la moto',               en: 'motorbike',         type: 'road'         },
  { id: 'bike',         emoji: '🚲',  fr: 'le vélo',               en: 'bicycle',           type: 'road'         },
  { id: 'taxi',         emoji: '🚕',  fr: 'le taxi',               en: 'taxi',              type: 'road'         },
  { id: 'camionnette',  emoji: '🚐',  fr: 'la camionnette',        en: 'van',               type: 'road'         },
  { id: 'benne',        emoji: '🚛',  fr: 'le camion-benne',       en: 'garbage truck',     type: 'road'         },
  { id: 'scooter',      emoji: '🛵',  fr: 'le scooter',            en: 'scooter',           type: 'road'         },
  // Construction
  { id: 'pelleteuse',        emoji: '🏗️',  fr: 'la pelleteuse',          en: 'digger',            type: 'construction' },
  { id: 'bulldozer',         emoji: '🚧',  fr: 'le bulldozer',           en: 'bulldozer',         type: 'construction' },
  { id: 'grue',              emoji: '🏗️',  fr: 'la grue',                en: 'crane',             type: 'construction' },
  { id: 'betonniare',        emoji: '🚛',  fr: 'la bétonnière',          en: 'cement mixer',      type: 'construction' },
  { id: 'rouleau',           emoji: '🚧',  fr: 'le rouleau compresseur', en: 'steamroller',       type: 'construction' },
  { id: 'chariot_elevateur', emoji: '🏭',  fr: 'le chariot élévateur',   en: 'forklift',          type: 'construction' },
  { id: 'camion_poubelle',   emoji: '🚛',  fr: 'le camion poubelle',     en: 'rubbish truck',     type: 'road'         },
  { id: 'voiture_electrique',emoji: '🚗',  fr: 'la voiture électrique',  en: 'electric car',      type: 'road'         },
  { id: 'quad',              emoji: '🏍️',  fr: 'le quad',                en: 'quad bike',         type: 'road'         },
  // Winter
  { id: 'motoneige',         emoji: '🛷',  fr: 'la motoneige',           en: 'snowmobile',        type: 'winter'       },
  { id: 'chasse_neige',      emoji: '🌨️',  fr: 'le chasse-neige',        en: 'snowplough',        type: 'winter'       },
  { id: 'luge',              emoji: '🛷',  fr: 'la luge',                en: 'sledge',            type: 'winter'       },
  // Farm
  { id: 'tractor',      emoji: '🚜',  fr: 'le tracteur',           en: 'tractor',           type: 'farm'         },
  { id: 'moissonneuse', emoji: '🌾',  fr: 'la moissonneuse',       en: 'combine harvester', type: 'farm'         },
  // Air
  { id: 'plane',        emoji: '✈️',   fr: "l'avion",               en: 'plane',             type: 'air'          },
  { id: 'helicopter',   emoji: '🚁',  fr: "l'hélicoptère",         en: 'helicopter',        type: 'air'          },
  { id: 'montgolfiere',      emoji: '🎈',  fr: 'la montgolfière',        en: 'hot air balloon',   type: 'air'          },
  { id: 'navette_spatiale',  emoji: '🚀',  fr: 'la navette spatiale',    en: 'space shuttle',     type: 'air'          },
  { id: 'dirigeable',        emoji: '🛸',  fr: 'le dirigeable',          en: 'blimp',             type: 'air'          },
  { id: 'drone',             emoji: '🛸',  fr: 'le drone',               en: 'drone',             type: 'air'          },
  { id: 'rocket',       emoji: '🚀',  fr: 'la fusée',              en: 'rocket',            type: 'air'          },
  // Water
  { id: 'sailboat',     emoji: '⛵',  fr: 'le voilier',            en: 'sailboat',          type: 'water'        },
  { id: 'ship',         emoji: '🚢',  fr: 'le bateau',             en: 'ship',              type: 'water'        },
  { id: 'speedboat',    emoji: '🛥️',  fr: 'le bateau à moteur',   en: 'speedboat',         type: 'water'        },
  { id: 'ferry',        emoji: '⛴️',  fr: 'le ferry',              en: 'ferry',             type: 'water'        },
  { id: 'sous_marin',   emoji: '🤿',  fr: 'le sous-marin',         en: 'submarine',         type: 'water'        },
  { id: 'canoe',             emoji: '🛶',  fr: 'le canoë',               en: 'canoe',             type: 'water'        },
  { id: 'kayak',             emoji: '🛶',  fr: 'le kayak',               en: 'kayak',             type: 'water'        },
  { id: 'porte_conteneurs',  emoji: '🚢',  fr: 'le porte-conteneurs',    en: 'container ship',    type: 'water'        },
  { id: 'hovercraft',        emoji: '🛥️',  fr: "l'aéroglisseur",          en: 'hovercraft',        type: 'water'        },
  // Rail
  { id: 'train',        emoji: '🚂',  fr: 'le train',              en: 'train',             type: 'rail'         },
  { id: 'metro',        emoji: '🚇',  fr: 'le métro',              en: 'metro',             type: 'rail'         },
  { id: 'tram',              emoji: '🚊',  fr: 'le tram',                en: 'tram',              type: 'rail'         },
  { id: 'TGV',              emoji: '🚄',  fr: 'le TGV',                 en: 'high-speed train',  type: 'rail'         },
];

const VEHICLE_FILTERS = [
  { id: 'all',          label: 'Tout',       emoji: '⭐' },
  { id: 'road',         label: 'Route',      emoji: '🛣️'  },
  { id: 'construction', label: 'Chantier',   emoji: '🏗️'  },
  { id: 'farm',         label: 'Ferme',      emoji: '🌾'  },
  { id: 'air',          label: 'Air',        emoji: '☁️'  },
  { id: 'water',        label: 'Mer',        emoji: '🌊'  },
  { id: 'rail',         label: 'Rail',       emoji: '🚦'  },
  { id: 'winter',      label: 'Hiver',      emoji: '❄️'   },
];

// Animals grouped by the vehicle journey that finds them.
// The journeyEmoji reinforces the transport root concept.
const ANIMALS = [
  // Farm — found by the tractor
  { id: 'cow',       emoji: '🐄', fr: 'la vache',       en: 'cow',        journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'sheep',     emoji: '🐑', fr: 'le mouton',      en: 'sheep',      journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'horse',     emoji: '🐎', fr: 'le cheval',      en: 'horse',      journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'pig',       emoji: '🐷', fr: 'le cochon',      en: 'pig',        journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'chicken',   emoji: '🐔', fr: 'la poule',       en: 'chicken',    journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'dog',       emoji: '🐕', fr: 'le chien',       en: 'dog',        journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'chat',      emoji: '🐈', fr: 'le chat',        en: 'cat',        journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'canard',    emoji: '🦆', fr: 'le canard',      en: 'duck',       journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'lapin',     emoji: '🐇', fr: 'le lapin',       en: 'rabbit',     journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'chevre',    emoji: '🐐', fr: 'la chèvre',      en: 'goat',       journey: 'farm',   journeyEmoji: '🚜' },
  { id: 'ane',       emoji: '🫏', fr: "l'âne",          en: 'donkey',     journey: 'farm',   journeyEmoji: '🚜' },
  // Safari — found from the jeep/truck
  { id: 'lion',      emoji: '🦁', fr: 'le lion',        en: 'lion',       journey: 'safari', journeyEmoji: '🚙' },
  { id: 'elephant',  emoji: '🐘', fr: "l'éléphant",     en: 'elephant',   journey: 'safari', journeyEmoji: '🚙' },
  { id: 'giraffe',   emoji: '🦒', fr: 'la girafe',      en: 'giraffe',    journey: 'safari', journeyEmoji: '🚙' },
  { id: 'zebra',     emoji: '🦓', fr: 'le zèbre',       en: 'zebra',      journey: 'safari', journeyEmoji: '🚙' },
  { id: 'monkey',    emoji: '🐒', fr: 'le singe',       en: 'monkey',     journey: 'safari', journeyEmoji: '🚙' },
  { id: 'rhino',     emoji: '🦏', fr: 'le rhinocéros',  en: 'rhinoceros', journey: 'safari', journeyEmoji: '🚙' },
  { id: 'tigre',     emoji: '🐯', fr: 'le tigre',       en: 'tiger',      journey: 'safari', journeyEmoji: '🚙' },
  { id: 'hippo',     emoji: '🦛', fr: "l'hippopotame",  en: 'hippo',      journey: 'safari', journeyEmoji: '🚙' },
  { id: 'crocodile', emoji: '🐊', fr: 'le crocodile',   en: 'crocodile',  journey: 'safari', journeyEmoji: '🚙' },
  { id: 'gorille',   emoji: '🦍', fr: 'le gorille',     en: 'gorilla',    journey: 'safari', journeyEmoji: '🚙' },
  { id: 'flamant',   emoji: '🦩', fr: 'le flamant rose',en: 'flamingo',   journey: 'safari', journeyEmoji: '🚙' },
  // Ocean — found from the boat
  { id: 'dolphin',   emoji: '🐬', fr: 'le dauphin',     en: 'dolphin',    journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'shark',     emoji: '🦈', fr: 'le requin',      en: 'shark',      journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'whale',     emoji: '🐋', fr: 'la baleine',     en: 'whale',      journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'octopus',   emoji: '🐙', fr: 'la pieuvre',     en: 'octopus',    journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'crab',      emoji: '🦀', fr: 'le crabe',       en: 'crab',       journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'poisson',   emoji: '🐟', fr: 'le poisson',     en: 'fish',       journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'tortue',    emoji: '🐢', fr: 'la tortue',      en: 'turtle',     journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'phoque',    emoji: '🦭', fr: 'le phoque',      en: 'seal',       journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'pingouin',  emoji: '🐧', fr: 'le pingouin',    en: 'penguin',    journey: 'ocean',  journeyEmoji: '⛵' },
  // Sky — found from the plane/helicopter
  { id: 'eagle',     emoji: '🦅', fr: "l'aigle",        en: 'eagle',      journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'parrot',    emoji: '🦜', fr: 'le perroquet',   en: 'parrot',     journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'butterfly', emoji: '🦋', fr: 'le papillon',    en: 'butterfly',  journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'hibou',     emoji: '🦉', fr: 'le hibou',       en: 'owl',        journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'cygne',     emoji: '🦢', fr: 'le cygne',       en: 'swan',       journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'paon',      emoji: '🦚', fr: 'le paon',        en: 'peacock',    journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'toucan',    emoji: '🦜', fr: 'le toucan',      en: 'toucan',     journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'renard',    emoji: '🦊', fr: 'le renard',      en: 'fox',        journey: 'safari', journeyEmoji: '🚙' },
  { id: 'ours',      emoji: '🐻', fr: "l'ours",         en: 'bear',       journey: 'safari', journeyEmoji: '🚙' },
  { id: 'loup',      emoji: '🐺', fr: 'le loup',        en: 'wolf',       journey: 'safari', journeyEmoji: '🚙' },
  { id: 'leopard',   emoji: '🐆', fr: 'le léopard',     en: 'leopard',    journey: 'safari', journeyEmoji: '🚙' },
  { id: 'guepard',   emoji: '🐆', fr: 'le guépard',     en: 'cheetah',    journey: 'safari', journeyEmoji: '🚙' },
  // Ocean additions
  { id: 'hippocampe',emoji: '🦄', fr: "l'hippocampe",   en: 'seahorse',   journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'meduse',    emoji: '🪼', fr: 'la méduse',      en: 'jellyfish',  journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'raie',      emoji: '🐟', fr: 'la raie manta',  en: 'manta ray',  journey: 'ocean',  journeyEmoji: '⛵' },
  { id: 'homard',    emoji: '🦞', fr: 'le homard',      en: 'lobster',    journey: 'ocean',  journeyEmoji: '⛵' },
  // Sky additions
  { id: 'colibri',   emoji: '🐦', fr: 'le colibri',     en: 'hummingbird',journey: 'sky',    journeyEmoji: '✈️' },
  { id: 'flamant_sky',emoji:'🦩', fr: 'le flamant',     en: 'flamingo',   journey: 'sky',    journeyEmoji: '✈️' },
  // Australia — found by the 'roo-rover 🦘
  { id: 'kangourou', emoji: '🦘', fr: 'le kangourou',   en: 'kangaroo',   journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'koala',     emoji: '🐨', fr: 'le koala',       en: 'koala',      journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'wombat',    emoji: '🦔', fr: 'le wombat',      en: 'wombat',     journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'echidne',   emoji: '🦔', fr: "l'échidné",      en: 'echidna',    journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'ornithorynque', emoji:'🦆', fr: "l'ornithorynque", en: 'platypus', journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'emeu',      emoji: '🐦', fr: "l'émeu",         en: 'emu',        journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'wallaby',   emoji: '🦘', fr: 'le wallaby',     en: 'wallaby',    journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'quokka',    emoji: '🐹', fr: 'le quokka',      en: 'quokka',     journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'dingo',     emoji: '🐕', fr: 'le dingo',       en: 'dingo',      journey: 'aussie', journeyEmoji: '🦘' },
  { id: 'cacatoes',  emoji: '🦜', fr: 'le cacatoès',    en: 'cockatoo',   journey: 'aussie', journeyEmoji: '🦘' },
  // Jungle — found from the rainforest trail 🌿
  { id: 'cameleon',  emoji: '🦎', fr: 'le caméléon',    en: 'chameleon',  journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'boa',       emoji: '🐍', fr: 'le boa',         en: 'boa constrictor', journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'python',    emoji: '🐍', fr: 'le python',      en: 'python',     journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'gecko',     emoji: '🦎', fr: 'le gecko',       en: 'gecko',      journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'paresseux', emoji: '🦥', fr: 'le paresseux',   en: 'sloth',      journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'jaguar',    emoji: '🐆', fr: 'le jaguar',      en: 'jaguar',     journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'tapir',     emoji: '🐗', fr: 'le tapir',       en: 'tapir',      journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'grenouille',emoji: '🐸', fr: 'la grenouille',  en: 'frog',       journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'mamba',     emoji: '🐍', fr: 'le mamba',       en: 'mamba',      journey: 'jungle', journeyEmoji: '🌿' },
  { id: 'tarantule', emoji: '🕷️', fr: 'la tarentule',   en: 'tarantula',  journey: 'jungle', journeyEmoji: '🌿' },
  // Arctic — found on the ice expedition ❄️
  { id: 'ours_polaire', emoji: '🐻‍❄️', fr: "l'ours polaire", en: 'polar bear', journey: 'arctique', journeyEmoji: '❄️' },
  { id: 'morse',     emoji: '🦭', fr: 'le morse',       en: 'walrus',     journey: 'arctique', journeyEmoji: '❄️' },
  { id: 'narval',    emoji: '🦄', fr: 'le narval',      en: 'narwhal',    journey: 'arctique', journeyEmoji: '❄️' },
  { id: 'beluga',    emoji: '🐳', fr: 'le béluga',      en: 'beluga whale', journey: 'arctique', journeyEmoji: '❄️' },
  { id: 'caribou',   emoji: '🦌', fr: 'le caribou',     en: 'reindeer',   journey: 'arctique', journeyEmoji: '❄️' },
  { id: 'lemming',   emoji: '🐭', fr: 'le lemming',     en: 'lemming',    journey: 'arctique', journeyEmoji: '❄️' },
  { id: 'boeuf_musque', emoji:'🦬', fr: 'le bœuf musqué', en: 'musk ox',  journey: 'arctique', journeyEmoji: '❄️' },
];

const ANIMAL_JOURNEYS = [
  { id: 'all',    label: 'Tous',   emoji: '⭐', hint: '' },
  { id: 'farm',   label: 'Ferme',  emoji: '🌾', hint: 'Found by the tractor 🚜' },
  { id: 'safari', label: 'Safari', emoji: '🌍', hint: 'Found by the jeep 🚙' },
  { id: 'ocean',  label: 'Océan',  emoji: '🌊', hint: 'Found from the boat ⛵' },
  { id: 'sky',      label: 'Ciel',      emoji: '☁️',  hint: 'Found from the plane ✈️' },
  { id: 'aussie',   label: 'Australie', emoji: '🦘', hint: "Found Down Under 🌏" },
  { id: 'jungle',   label: 'Jungle',    emoji: '🌿', hint: 'Found in the rainforest 🌳' },
  { id: 'arctique', label: 'Arctique',  emoji: '❄️',  hint: 'Found on the ice ❄️' },
];

/* ── Level 2 data ── */

const NUMBERS = [
  { id: 'un',        fr: 'un',        en: 'one',       num: 1  },
  { id: 'deux',      fr: 'deux',      en: 'two',       num: 2  },
  { id: 'trois',     fr: 'trois',     en: 'three',     num: 3  },
  { id: 'quatre',    fr: 'quatre',    en: 'four',      num: 4  },
  { id: 'cinq',      fr: 'cinq',      en: 'five',      num: 5  },
  { id: 'six',       fr: 'six',       en: 'six',       num: 6  },
  { id: 'sept',      fr: 'sept',      en: 'seven',     num: 7  },
  { id: 'huit',      fr: 'huit',      en: 'eight',     num: 8  },
  { id: 'neuf',      fr: 'neuf',      en: 'nine',      num: 9  },
  { id: 'dix',       fr: 'dix',       en: 'ten',       num: 10 },
  { id: 'onze',      fr: 'onze',      en: 'eleven',    num: 11 },
  { id: 'douze',     fr: 'douze',     en: 'twelve',    num: 12 },
  { id: 'treize',    fr: 'treize',    en: 'thirteen',  num: 13 },
  { id: 'quatorze',  fr: 'quatorze',  en: 'fourteen',  num: 14 },
  { id: 'quinze',    fr: 'quinze',    en: 'fifteen',   num: 15 },
  { id: 'seize',     fr: 'seize',     en: 'sixteen',   num: 16 },
  { id: 'dixsept',   fr: 'dix-sept',  en: 'seventeen', num: 17 },
  { id: 'dixhuit',   fr: 'dix-huit',  en: 'eighteen',  num: 18 },
  { id: 'dixneuf',   fr: 'dix-neuf',  en: 'nineteen',  num: 19 },
  { id: 'vingt',     fr: 'vingt',     en: 'twenty',    num: 20 },
];

const BODY_PARTS = [
  { id: 'tete',    emoji: '🙂', fr: 'la tête',      en: 'head'      },
  { id: 'cheveux', emoji: '💇', fr: 'les cheveux',  en: 'hair'      },
  { id: 'yeux',    emoji: '👁️', fr: 'les yeux',     en: 'eyes'      },
  { id: 'sourcil', emoji: '😬', fr: 'le sourcil',   en: 'eyebrow'   },
  { id: 'nez',     emoji: '👃', fr: 'le nez',       en: 'nose'      },
  { id: 'joue',    emoji: '😊', fr: 'la joue',      en: 'cheek'     },
  { id: 'bouche',  emoji: '👄', fr: 'la bouche',    en: 'mouth'     },
  { id: 'langue',  emoji: '👅', fr: 'la langue',    en: 'tongue'    },
  { id: 'dents',   emoji: '🦷', fr: 'les dents',    en: 'teeth'     },
  { id: 'oreille', emoji: '👂', fr: "l'oreille",    en: 'ear'       },
  { id: 'cou',     emoji: '🧣', fr: 'le cou',       en: 'neck'      },
  { id: 'epaule',  emoji: '💪', fr: "l'épaule",     en: 'shoulder'  },
  { id: 'bras',    emoji: '💪', fr: 'le bras',      en: 'arm'       },
  { id: 'doigt',   emoji: '👆', fr: 'le doigt',     en: 'finger'    },
  { id: 'main',    emoji: '✋', fr: 'la main',      en: 'hand'      },
  { id: 'ventre',  emoji: '🫃', fr: 'le ventre',    en: 'tummy'     },
  { id: 'dos',     emoji: '🔙', fr: 'le dos',       en: 'back'      },
  { id: 'jambe',   emoji: '🦵', fr: 'la jambe',     en: 'leg'       },
  { id: 'genou',   emoji: '🦵', fr: 'le genou',     en: 'knee'      },
  { id: 'pied',    emoji: '🦶', fr: 'le pied',       en: 'foot'      },
  { id: 'orteil',  emoji: '🦶', fr: "l'orteil",      en: 'toe'       },
  { id: 'cheville',emoji: '🦵', fr: 'la cheville',   en: 'ankle'     },
  { id: 'poignet', emoji: '💪', fr: 'le poignet',    en: 'wrist'     },
  { id: 'pouce',   emoji: '👍', fr: 'le pouce',      en: 'thumb'     },
  { id: 'ongle',   emoji: '💅', fr: "l'ongle",       en: 'nail'      },
];

const FAMILY = [
  { id: 'maman',     emoji: '👩',  fr: 'maman',          en: 'mum'     },
  { id: 'papa',      emoji: '👨',  fr: 'papa',           en: 'dad'     },
  { id: 'bebe',      emoji: '👶',  fr: 'le bébé',        en: 'baby'    },
  { id: 'frere',     emoji: '👦',  fr: 'le frère',       en: 'brother' },
  { id: 'soeur',     emoji: '👧',  fr: 'la sœur',        en: 'sister'  },
  { id: 'grandmere', emoji: '👵',  fr: 'la grand-mère',  en: 'grandma' },
  { id: 'grandpere', emoji: '👴',  fr: 'le grand-père',  en: 'grandad' },
  { id: 'oncle',     emoji: '👨',  fr: "l'oncle",        en: 'uncle'   },
  { id: 'tante',     emoji: '👩',  fr: 'la tante',       en: 'aunt'    },
  { id: 'cousin',    emoji: '🧒',  fr: 'le cousin',      en: 'cousin'    },
  { id: 'niece',     emoji: '👧',  fr: 'la nièce',       en: 'niece'     },
  { id: 'neveu',     emoji: '👦',  fr: 'le neveu',       en: 'nephew'    },
  { id: 'parrain',   emoji: '👨',  fr: 'le parrain',     en: 'godfather' },
  { id: 'marraine',  emoji: '👩',  fr: 'la marraine',    en: 'godmother' },
];

const FOOD = [
  { id: 'pain',      emoji: '🍞', fr: 'le pain',        en: 'bread'       },
  { id: 'lait',      emoji: '🥛', fr: 'le lait',        en: 'milk'        },
  { id: 'eau',       emoji: '💧', fr: "l'eau",           en: 'water'       },
  { id: 'jus',       emoji: '🥤', fr: 'le jus',         en: 'juice'       },
  { id: 'pomme',     emoji: '🍎', fr: 'la pomme',       en: 'apple'       },
  { id: 'banane',    emoji: '🍌', fr: 'la banane',      en: 'banana'      },
  { id: 'orange',    emoji: '🍊', fr: "l'orange",       en: 'orange'      },
  { id: 'fraise',    emoji: '🍓', fr: 'la fraise',      en: 'strawberry'  },
  { id: 'raisin',    emoji: '🍇', fr: 'le raisin',      en: 'grapes'      },
  { id: 'carotte',   emoji: '🥕', fr: 'la carotte',     en: 'carrot'      },
  { id: 'tomate',    emoji: '🍅', fr: 'la tomate',      en: 'tomato'      },
  { id: 'oeuf',      emoji: '🥚', fr: "l'œuf",          en: 'egg'         },
  { id: 'fromage',   emoji: '🧀', fr: 'le fromage',     en: 'cheese'      },
  { id: 'chocolat',  emoji: '🍫', fr: 'le chocolat',    en: 'chocolate'   },
  { id: 'gateau',    emoji: '🎂', fr: 'le gâteau',      en: 'cake'        },
  { id: 'croissant', emoji: '🥐', fr: 'le croissant',   en: 'croissant'   },
  { id: 'soupe',     emoji: '🍲', fr: 'la soupe',       en: 'soup'        },
  { id: 'riz',       emoji: '🍚', fr: 'le riz',         en: 'rice'        },
  { id: 'pates',     emoji: '🍝', fr: 'les pâtes',      en: 'pasta'       },
  { id: 'poulet',    emoji: '🍗', fr: 'le poulet',      en: 'chicken'     },
  { id: 'glace',          emoji: '🍦', fr: 'la glace',         en: 'ice cream'    },
  { id: 'beurre',         emoji: '🧈', fr: 'le beurre',        en: 'butter'       },
  { id: 'yaourt',         emoji: '🥛', fr: 'le yaourt',        en: 'yogurt'       },
  { id: 'crepe',          emoji: '🥞', fr: 'la crêpe',         en: 'crêpe'        },
  { id: 'ananas',         emoji: '🍍', fr: "l'ananas",         en: 'pineapple'    },
  { id: 'mangue',         emoji: '🥭', fr: 'la mangue',        en: 'mango'        },
  { id: 'pasteque',       emoji: '🍉', fr: 'la pastèque',      en: 'watermelon'   },
  { id: 'citron',         emoji: '🍋', fr: 'le citron',        en: 'lemon'        },
  { id: 'cerise',         emoji: '🍒', fr: 'la cerise',        en: 'cherry'       },
  { id: 'peche',          emoji: '🍑', fr: 'la pêche',         en: 'peach'        },
  { id: 'poire',          emoji: '🍐', fr: 'la poire',         en: 'pear'         },
  { id: 'melon',          emoji: '🍈', fr: 'le melon',         en: 'melon'        },
  { id: 'brocoli',        emoji: '🥦', fr: 'le brocoli',       en: 'broccoli'     },
  { id: 'mais',           emoji: '🌽', fr: 'le maïs',          en: 'sweetcorn'    },
  { id: 'avocat',         emoji: '🥑', fr: "l'avocat",         en: 'avocado'      },
  { id: 'concombre',      emoji: '🥒', fr: 'le concombre',     en: 'cucumber'     },
  { id: 'poivron',        emoji: '🫑', fr: 'le poivron',       en: 'pepper'       },
  { id: 'pomme_de_terre', emoji: '🥔', fr: 'la pomme de terre',en: 'potato'       },
  { id: 'pizza',          emoji: '🍕', fr: 'la pizza',         en: 'pizza'        },
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
  { id: 'violet', fr: 'violet',  en: 'purple', hex: '#a855f7', vehicleEmoji: '🚂', vehicleFr: 'le train'             },
  { id: 'rose',   fr: 'rose',    en: 'pink',   hex: '#f472b6', vehicleEmoji: '🛵', vehicleFr: 'le scooter rose'       },
  { id: 'marron', fr: 'marron',  en: 'brown',  hex: '#92400e', vehicleEmoji: '🚜', vehicleFr: 'le vieux tracteur'     },
  { id: 'gris',        fr: 'gris',        en: 'grey',      hex: '#9ca3af', vehicleEmoji: '🚐', vehicleFr: 'la camionnette'           },
  { id: 'turquoise',   fr: 'turquoise',   en: 'turquoise', hex: '#06b6d4', vehicleEmoji: '🛥️', vehicleFr: 'le bateau turquoise'      },
  { id: 'dore',        fr: 'doré',        en: 'gold',      hex: '#ca8a04', vehicleEmoji: '🏎️', vehicleFr: 'la voiture dorée'         },
  { id: 'argente',     fr: 'argenté',     en: 'silver',    hex: '#94a3b8', vehicleEmoji: '🚀', vehicleFr: 'la fusée argentée'        },
  { id: 'bordeaux',    fr: 'bordeaux',    en: 'burgundy',  hex: '#9f1239', vehicleEmoji: '🚂', vehicleFr: 'le vieux train'           },
  { id: 'beige',       fr: 'beige',       en: 'beige',     hex: '#d6c4a0', vehicleEmoji: '🚙', vehicleFr: 'la jeep beige'            },
];

/* ═══════════════════════════════════════════════════════════════
   PHONICS DATA
═══════════════════════════════════════════════════════════════ */

const PHONICS_GROUPS = [
  { id: 'vowels',    label: 'Voyelles',     colour: '#b91c1c' },
  { id: 'combos',   label: 'Mélanges',     colour: '#1d4ed8' },
  { id: 'nasal',    label: 'Sons Nasaux',  colour: '#6d28d9' },
  { id: 'special',  label: 'Sons Spéciaux',colour: '#15803d' },
  { id: 'syllables',label: 'Petits Mots',  colour: '#c2570e' },
];

const PHONICS = [
  // Simple vowels
  { group: 'vowels',    grapheme: 'a',    tts: 'a',    hint: 'ah',   ex: 'chat'     },
  { group: 'vowels',    grapheme: 'e',    tts: 'e',    hint: 'uh',   ex: 'le'       },
  { group: 'vowels',    grapheme: 'é',    tts: 'é',    hint: 'ay',   ex: 'été'      },
  { group: 'vowels',    grapheme: 'è',    tts: 'è',    hint: 'eh',   ex: 'mère'     },
  { group: 'vowels',    grapheme: 'i',    tts: 'i',    hint: 'ee',   ex: 'ami'      },
  { group: 'vowels',    grapheme: 'o',    tts: 'o',    hint: 'oh',   ex: 'mot'      },
  { group: 'vowels',    grapheme: 'u',    tts: 'u',    hint: 'ew',   ex: 'lune'     },
  // Vowel combinations
  { group: 'combos',    grapheme: 'ou',   tts: 'ou',   hint: 'oo',   ex: 'loup'     },
  { group: 'combos',    grapheme: 'au',   tts: 'au',   hint: 'oh',   ex: 'bateau'   },
  { group: 'combos',    grapheme: 'eau',  tts: 'eau',  hint: 'oh',   ex: 'eau'      },
  { group: 'combos',    grapheme: 'eu',   tts: 'eu',   hint: 'uh',   ex: 'feu'      },
  { group: 'combos',    grapheme: 'ai',   tts: 'ai',   hint: 'ay',   ex: 'maison'   },
  { group: 'combos',    grapheme: 'oi',   tts: 'oi',   hint: 'wa',   ex: 'voiture'  },
  // Nasal vowels
  { group: 'nasal',     grapheme: 'an',   tts: 'an',   hint: 'ahn',  ex: 'enfant'   },
  { group: 'nasal',     grapheme: 'en',   tts: 'en',   hint: 'ahn',  ex: 'enfant'   },
  { group: 'nasal',     grapheme: 'in',   tts: 'in',   hint: 'an',   ex: 'lapin'    },
  { group: 'nasal',     grapheme: 'on',   tts: 'on',   hint: 'ohn',  ex: 'lion'     },
  { group: 'nasal',     grapheme: 'un',   tts: 'un',   hint: 'uhn',  ex: 'un'       },
  // Special consonants (carrier syllable so TTS produces the right onset sound)
  { group: 'special',   grapheme: 'ch',   tts: 'cha',  hint: 'sh',   ex: 'chat'     },
  { group: 'special',   grapheme: 'j',    tts: 'ja',   hint: 'zh',   ex: 'jardin'   },
  { group: 'special',   grapheme: 'gn',   tts: 'gna',  hint: 'ny',   ex: 'montagne' },
  { group: 'special',   grapheme: 'qu',   tts: 'qua',  hint: 'k',    ex: 'quatre'   },
  { group: 'special',   grapheme: 'r',    tts: 'ra',   hint: 'r',    ex: 'rouge'    },
  { group: 'special',   grapheme: 'ç',    tts: 'ça',   hint: 's',    ex: 'garçon'   },
  // Common short words children will decode in the vocabulary
  { group: 'syllables', grapheme: 'le',   tts: 'le',   hint: 'luh',  ex: 'le chat'  },
  { group: 'syllables', grapheme: 'la',   tts: 'la',   hint: 'lah',  ex: 'la vache' },
  { group: 'syllables', grapheme: 'les',  tts: 'les',  hint: 'lay',  ex: 'les animaux' },
  { group: 'syllables', grapheme: 'de',   tts: 'de',   hint: 'duh',  ex: 'camion de pompiers' },
  { group: 'syllables', grapheme: 'du',   tts: 'du',   hint: 'dü',   ex: 'du lait'  },
  { group: 'syllables', grapheme: 'une',  tts: 'une',  hint: 'ün',   ex: 'une vache' },
  { group: 'syllables', grapheme: 'est',  tts: 'est',  hint: 'ay',   ex: "c'est"    },
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

function speak(id, frText = null) {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
  }
  const audio = new Audio(`audio/${id}.m4a`);
  _currentAudio = audio;
  const fallback = () => { if (frText) speakFrench(frText); };
  audio.onerror = fallback;
  audio.play().catch(fallback);
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
  // Chrome bug: cancel() is async — speak() called in the same tick is silently dropped.
  // A 50 ms gap ensures cancel completes before the new utterance is queued.
  setTimeout(() => {
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
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
  }, 50);
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
          system: 'You evaluate a young child\'s (age 5-7) French pronunciation. Return ONLY valid JSON: {"stars":N,"feedback":"short encouraging sentence max 8 words"}. Star rubric — 5: perfect; 4: very close; 3: recognisable; 2: attempted; 1: nothing like it. Always warm and encouraging.',
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

  setTimeout(() => speak(word.id, word.fr), 500);
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
    showPracticeResult(transcript, { stars: 3, feedback: 'Great try — keep practising!', tip: 'Ask a parent to set up pronunciation feedback.' });
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
        system: 'You evaluate a young child\'s (age 5-7) French pronunciation attempt. Return ONLY valid JSON: {"stars":N,"feedback":"short encouraging sentence max 12 words","tip":"one short phonetic hint max 12 words"}. Star rubric — 5: matches perfectly; 4: very close, minor accent; 3: recognisable but off; 2: attempted, quite different; 1: nothing like target. Be honest but always warm and encouraging.',
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

function drawStars(canvasId) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const p = c.parentElement;
  c.width  = p.offsetWidth  || 800;
  c.height = p.offsetHeight || 600;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * c.width;
    const y = Math.random() * c.height;
    const r = Math.random() * 1.2 + 0.15;
    const a = Math.random() * 0.65 + 0.25;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill();
  }
  [['rgba(165,180,252,0.85)', 16], ['rgba(167,243,208,0.75)', 12], ['rgba(253,230,138,0.85)', 12]].forEach(([col, n]) => {
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * c.width, Math.random() * c.height, Math.random() * 0.7 + 0.2, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill();
    }
  });
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
    return [
      planetCard('p-earth',  'earth',  '🦁', 'Les Animaux', 'Animals',          'open-cat', 'data-cat="animals"'),
      planetCard('p-metal',  'metal',  '🏎️', 'Le Garage',   'Vehicles',         'open-cat', 'data-cat="vehicles"'),
      planetCard('p-saturn', 'saturn', '🎨', 'Les Couleurs','Colours',           'open-cat', 'data-cat="colours"'),
      planetFloat('p-astro',               '🧑‍🚀', 'Parler',     'Say it in French!', 'open-practice'),
    ].join('');
  }
  return [
    planetCard('p-jupiter', 'jupiter', '🔢', 'Les Chiffres', 'Numbers',   'open-cat', 'data-cat="numbers"'),
    planetCard('p-ice',     'ice',     '💪', 'Le Corps',     'Body parts', 'open-cat', 'data-cat="body"'),
    planetCard('p-neptune', 'neptune', '👨‍👩‍👧', 'La Famille',  'Family',    'open-cat', 'data-cat="family"'),
    planetCard('p-forest',  'forest',  '🍎', 'La Nourriture','Food',       'open-cat', 'data-cat="food"'),
    planetFloat('p-astro',              '🧑‍🚀', 'Parler',      'Say it in French!', 'open-practice'),
  ].join('');
}

function renderPhonics() {
  cancelFrench();
  cancelCardRecording();
  state.screen = 'phonics';

  const groupsHTML = PHONICS_GROUPS.map(g => {
    const tiles = PHONICS.filter(p => p.group === g.id);
    const tilesHTML = tiles.map(p => `
      <button class="phonic-tile" data-action="play-phonic"
        data-tts="${safeText(p.tts)}"
        style="--tc:${g.colour}"
        aria-label="${safeText(p.grapheme)}, sounds like ${safeText(p.hint)}, as in ${safeText(p.ex)}">
        <span class="phonic-grapheme">${safeText(p.grapheme)}</span>
        <span class="phonic-hint">${safeText(p.hint)}</span>
        <span class="phonic-ex">${safeText(p.ex)}</span>
      </button>`).join('');
    return `
      <div class="phonic-group">
        <h3 class="phonic-group-label" style="color:${g.colour}">${g.label}</h3>
        <div class="phonic-grid">${tilesHTML}</div>
      </div>`;
  }).join('');

  $('app').innerHTML = `
    <div class="phonics-screen">
      <header class="phonics-header">
        <button class="phonics-back" data-action="go-home" aria-label="Back to home">← Back</button>
        <div class="phonics-title-block">
          <h2 class="phonics-title">Les Sons</h2>
          <p class="phonics-sub">Tap a sound to hear it</p>
        </div>
      </header>
      <div class="phonics-body" aria-label="Sound mat">
        ${groupsHTML}
      </div>
    </div>`;
}

const PLANET_SVG = {
  earth: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ea" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="90%" stop-color="rgba(59,130,246,0.38)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="eb" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#bfdbfe"/><stop offset="22%" stop-color="#60a5fa"/><stop offset="55%" stop-color="#2563eb"/><stop offset="100%" stop-color="#1e3a8a"/></radialGradient><radialGradient id="es" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.62)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="eh" cx="30%" cy="24%" r="38%"><stop offset="0%" stop-color="rgba(255,255,255,0.5)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="ec"><circle cx="60" cy="60" r="43"/></clipPath></defs><circle cx="60" cy="60" r="56" fill="url(#ea)"/><circle cx="60" cy="60" r="43" fill="url(#eb)"/><g clip-path="url(#ec)"><ellipse cx="66" cy="50" rx="15" ry="22" fill="rgba(21,128,61,0.75)" transform="rotate(-18,66,50)"/><ellipse cx="43" cy="66" rx="11" ry="14" fill="rgba(22,163,74,0.65)" transform="rotate(12,43,66)"/><ellipse cx="76" cy="72" rx="8" ry="10" fill="rgba(21,128,61,0.55)" transform="rotate(8,76,72)"/><ellipse cx="60" cy="21" rx="16" ry="7" fill="rgba(255,255,255,0.72)"/><ellipse cx="60" cy="99" rx="10" ry="5" fill="rgba(255,255,255,0.5)"/><ellipse cx="48" cy="44" rx="14" ry="4" fill="rgba(255,255,255,0.28)" transform="rotate(-8,48,44)"/><ellipse cx="70" cy="61" rx="11" ry="3" fill="rgba(255,255,255,0.22)" transform="rotate(5,70,61)"/></g><circle cx="60" cy="60" r="43" fill="url(#es)"/><circle cx="60" cy="60" r="43" fill="url(#eh)"/></svg>`,

  metal: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ma" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="90%" stop-color="rgba(148,163,184,0.25)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="mb" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#f1f5f9"/><stop offset="20%" stop-color="#94a3b8"/><stop offset="55%" stop-color="#475569"/><stop offset="100%" stop-color="#0f172a"/></radialGradient><radialGradient id="ms" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.70)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="mh" cx="28%" cy="22%" r="42%"><stop offset="0%" stop-color="rgba(255,255,255,0.65)"/><stop offset="60%" stop-color="rgba(255,255,255,0.15)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="mc"><circle cx="60" cy="60" r="43"/></clipPath></defs><circle cx="60" cy="60" r="56" fill="url(#ma)"/><circle cx="60" cy="60" r="43" fill="url(#mb)"/><g clip-path="url(#mc)"><circle cx="48" cy="44" r="9" fill="rgba(0,0,0,0.28)"/><circle cx="48" cy="44" r="6.5" fill="rgba(71,85,105,0.5)"/><circle cx="48" cy="44" r="4" fill="rgba(100,116,139,0.4)"/><circle cx="74" cy="55" r="7" fill="rgba(0,0,0,0.24)"/><circle cx="74" cy="55" r="5" fill="rgba(71,85,105,0.45)"/><circle cx="74" cy="55" r="3" fill="rgba(100,116,139,0.35)"/><circle cx="55" cy="74" r="5.5" fill="rgba(0,0,0,0.22)"/><circle cx="55" cy="74" r="3.5" fill="rgba(71,85,105,0.4)"/><circle cx="38" cy="65" r="4" fill="rgba(0,0,0,0.20)"/><circle cx="38" cy="65" r="2.5" fill="rgba(71,85,105,0.38)"/><circle cx="70" cy="72" r="3.5" fill="rgba(0,0,0,0.18)"/><circle cx="70" cy="72" r="2" fill="rgba(71,85,105,0.34)"/><ellipse cx="55" cy="55" rx="28" ry="8" fill="rgba(148,163,184,0.10)" transform="rotate(-20,55,55)"/></g><circle cx="60" cy="60" r="43" fill="url(#ms)"/><circle cx="60" cy="60" r="43" fill="url(#mh)"/></svg>`,

  saturn: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="sa" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#ede9fe"/><stop offset="22%" stop-color="#c084fc"/><stop offset="55%" stop-color="#9333ea"/><stop offset="100%" stop-color="#4c1d95"/></radialGradient><radialGradient id="ss" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.6)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="sh" cx="30%" cy="24%" r="38%"><stop offset="0%" stop-color="rgba(255,255,255,0.45)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="sc"><circle cx="80" cy="60" r="38"/></clipPath><clipPath id="srb"><rect x="0" y="0" width="160" height="60"/></clipPath><clipPath id="srf"><rect x="0" y="60" width="160" height="60"/></clipPath></defs><g clip-path="url(#srb)"><ellipse cx="80" cy="60" rx="76" ry="13" fill="none" stroke="rgba(216,180,254,0.22)" stroke-width="4"/><ellipse cx="80" cy="60" rx="69" ry="11" fill="none" stroke="rgba(216,180,254,0.42)" stroke-width="5"/><ellipse cx="80" cy="60" rx="62" ry="10" fill="none" stroke="rgba(233,213,255,0.60)" stroke-width="6"/><ellipse cx="80" cy="60" rx="55" ry="8" fill="none" stroke="rgba(233,213,255,0.45)" stroke-width="4"/><ellipse cx="80" cy="60" rx="49" ry="7" fill="none" stroke="rgba(196,181,253,0.28)" stroke-width="3"/></g><circle cx="80" cy="60" r="38" fill="url(#sa)"/><g clip-path="url(#sc)"><ellipse cx="80" cy="50" rx="38" ry="7" fill="rgba(167,139,250,0.22)"/><ellipse cx="80" cy="63" rx="38" ry="5" fill="rgba(109,40,217,0.20)"/><ellipse cx="80" cy="35" rx="38" ry="4" fill="rgba(233,213,255,0.14)"/></g><circle cx="80" cy="60" r="38" fill="url(#ss)"/><circle cx="80" cy="60" r="38" fill="url(#sh)"/><g clip-path="url(#srf)"><ellipse cx="80" cy="60" rx="49" ry="7" fill="none" stroke="rgba(196,181,253,0.32)" stroke-width="3"/><ellipse cx="80" cy="60" rx="55" ry="8" fill="none" stroke="rgba(233,213,255,0.52)" stroke-width="4"/><ellipse cx="80" cy="60" rx="62" ry="10" fill="none" stroke="rgba(233,213,255,0.70)" stroke-width="6"/><ellipse cx="80" cy="60" rx="69" ry="11" fill="none" stroke="rgba(216,180,254,0.52)" stroke-width="5"/><ellipse cx="80" cy="60" rx="76" ry="13" fill="none" stroke="rgba(216,180,254,0.28)" stroke-width="4"/></g></svg>`,

  jupiter: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ja" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="90%" stop-color="rgba(217,119,6,0.3)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="jb" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="22%" stop-color="#fbbf24"/><stop offset="55%" stop-color="#d97706"/><stop offset="100%" stop-color="#78350f"/></radialGradient><radialGradient id="js" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.58)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="jh" cx="30%" cy="24%" r="38%"><stop offset="0%" stop-color="rgba(255,255,255,0.38)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="jc"><circle cx="60" cy="60" r="43"/></clipPath></defs><circle cx="60" cy="60" r="56" fill="url(#ja)"/><circle cx="60" cy="60" r="43" fill="url(#jb)"/><g clip-path="url(#jc)"><rect x="17" y="38" width="86" height="7" fill="rgba(120,53,15,0.45)"/><rect x="17" y="50" width="86" height="5" fill="rgba(180,83,9,0.32)"/><rect x="17" y="60" width="86" height="8" fill="rgba(120,53,15,0.42)"/><rect x="17" y="72" width="86" height="5" fill="rgba(180,83,9,0.36)"/><rect x="17" y="82" width="86" height="4" fill="rgba(120,53,15,0.28)"/><rect x="17" y="32" width="86" height="4" fill="rgba(120,53,15,0.22)"/><ellipse cx="74" cy="57" rx="9" ry="5.5" fill="rgba(185,28,28,0.5)" transform="rotate(5,74,57)"/><ellipse cx="74" cy="57" rx="6" ry="3.5" fill="rgba(220,38,38,0.3)" transform="rotate(5,74,57)"/></g><circle cx="60" cy="60" r="43" fill="url(#js)"/><circle cx="60" cy="60" r="43" fill="url(#jh)"/></svg>`,

  ice: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ia" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="90%" stop-color="rgba(251,113,133,0.3)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="ib" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#ffe4e6"/><stop offset="22%" stop-color="#fb7185"/><stop offset="55%" stop-color="#e11d48"/><stop offset="100%" stop-color="#881337"/></radialGradient><radialGradient id="is" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.6)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="ih" cx="30%" cy="24%" r="38%"><stop offset="0%" stop-color="rgba(255,255,255,0.5)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="ic"><circle cx="60" cy="60" r="43"/></clipPath></defs><circle cx="60" cy="60" r="56" fill="url(#ia)"/><circle cx="60" cy="60" r="43" fill="url(#ib)"/><g clip-path="url(#ic)"><line x1="40" y1="30" x2="55" y2="55" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/><line x1="65" y1="25" x2="72" y2="60" stroke="rgba(255,255,255,0.14)" stroke-width="1.2"/><line x1="30" y1="55" x2="58" y2="70" stroke="rgba(255,255,255,0.16)" stroke-width="1.4"/><line x1="70" y1="50" x2="85" y2="80" stroke="rgba(255,255,255,0.13)" stroke-width="1"/><line x1="48" y1="70" x2="60" y2="90" stroke="rgba(255,255,255,0.15)" stroke-width="1.2"/><ellipse cx="60" cy="22" rx="14" ry="6" fill="rgba(255,255,255,0.68)"/><ellipse cx="60" cy="98" rx="9" ry="4" fill="rgba(255,255,255,0.5)"/></g><circle cx="60" cy="60" r="43" fill="url(#is)"/><circle cx="60" cy="60" r="43" fill="url(#ih)"/></svg>`,

  neptune: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="na" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#ede9fe"/><stop offset="22%" stop-color="#a78bfa"/><stop offset="55%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#2e1065"/></radialGradient><radialGradient id="ns" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.62)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="nh" cx="30%" cy="24%" r="38%"><stop offset="0%" stop-color="rgba(255,255,255,0.42)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="nc"><circle cx="80" cy="60" r="38"/></clipPath><clipPath id="nrb"><rect x="0" y="0" width="160" height="60"/></clipPath><clipPath id="nrf"><rect x="0" y="60" width="160" height="60"/></clipPath></defs><g clip-path="url(#nrb)"><ellipse cx="80" cy="60" rx="70" ry="10" fill="none" stroke="rgba(221,214,254,0.18)" stroke-width="3"/><ellipse cx="80" cy="60" rx="62" ry="8" fill="none" stroke="rgba(221,214,254,0.30)" stroke-width="4"/><ellipse cx="80" cy="60" rx="54" ry="7" fill="none" stroke="rgba(196,181,253,0.20)" stroke-width="2.5"/></g><circle cx="80" cy="60" r="38" fill="url(#na)"/><g clip-path="url(#nc)"><ellipse cx="72" cy="52" rx="10" ry="6" fill="rgba(255,255,255,0.16)" transform="rotate(-12,72,52)"/><ellipse cx="90" cy="66" rx="8" ry="5" fill="rgba(255,255,255,0.12)" transform="rotate(8,90,66)"/></g><circle cx="80" cy="60" r="38" fill="url(#ns)"/><circle cx="80" cy="60" r="38" fill="url(#nh)"/><g clip-path="url(#nrf)"><ellipse cx="80" cy="60" rx="54" ry="7" fill="none" stroke="rgba(196,181,253,0.24)" stroke-width="2.5"/><ellipse cx="80" cy="60" rx="62" ry="8" fill="none" stroke="rgba(221,214,254,0.36)" stroke-width="4"/><ellipse cx="80" cy="60" rx="70" ry="10" fill="none" stroke="rgba(221,214,254,0.22)" stroke-width="3"/></g></svg>`,

  forest: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="fa" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="90%" stop-color="rgba(16,185,129,0.32)"/><stop offset="100%" stop-color="transparent"/></radialGradient><radialGradient id="fb" cx="34%" cy="28%" r="85%"><stop offset="0%" stop-color="#99f6e4"/><stop offset="22%" stop-color="#2dd4bf"/><stop offset="55%" stop-color="#0d9488"/><stop offset="100%" stop-color="#042f2e"/></radialGradient><radialGradient id="fs" cx="78%" cy="76%" r="62%"><stop offset="0%" stop-color="rgba(0,0,0,0.6)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient><radialGradient id="fh" cx="30%" cy="24%" r="38%"><stop offset="0%" stop-color="rgba(255,255,255,0.44)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient><clipPath id="fc"><circle cx="60" cy="60" r="43"/></clipPath></defs><circle cx="60" cy="60" r="56" fill="url(#fa)"/><circle cx="60" cy="60" r="43" fill="url(#fb)"/><g clip-path="url(#fc)"><ellipse cx="55" cy="55" rx="18" ry="22" fill="rgba(5,150,105,0.55)" transform="rotate(-15,55,55)"/><ellipse cx="74" cy="65" rx="14" ry="16" fill="rgba(6,78,59,0.60)" transform="rotate(10,74,65)"/><ellipse cx="42" cy="70" rx="12" ry="14" fill="rgba(5,150,105,0.48)" transform="rotate(5,42,70)"/><ellipse cx="65" cy="38" rx="9" ry="11" fill="rgba(4,120,87,0.45)" transform="rotate(-5,65,38)"/><ellipse cx="60" cy="45" rx="43" ry="10" fill="rgba(153,246,228,0.12)"/></g><circle cx="60" cy="60" r="43" fill="url(#fs)"/><circle cx="60" cy="60" r="43" fill="url(#fh)"/></svg>`,
};

function planetCard(cls, svgKey, emoji, fr, en, action, extra = '') {
  const isRinged = svgKey === 'saturn' || svgKey === 'neptune';
  return `
    <button class="planet-card ${cls}" data-action="${action}" ${extra} aria-label="${fr}">
      <div class="planet-orb${isRinged ? ' planet-orb-wide' : ''}">
        ${PLANET_SVG[svgKey]}
        <span class="planet-emoji" aria-hidden="true">${emoji}</span>
      </div>
      <div class="planet-label">
        <span class="planet-fr">${fr}</span>
        <span class="planet-en">${en}</span>
      </div>
    </button>`;
}

function planetFloat(cls, char, fr, en, action) {
  return `
    <button class="planet-card ${cls}" data-action="${action}" aria-label="${fr}">
      <span class="planet-float" aria-hidden="true">${char}</span>
      <div class="planet-label">
        <span class="planet-fr">${fr}</span>
        <span class="planet-en">${en}</span>
      </div>
    </button>`;
}

function promptApiKey(onSave) {
  if (document.getElementById('apikey-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'apikey-overlay';
  overlay.className = 'apikey-overlay';
  overlay.innerHTML = `
    <div class="apikey-card" role="dialog" aria-label="Set up pronunciation feedback" aria-modal="true">
      <div class="apikey-icon">🎙️</div>
      <div class="apikey-title">Set up Parler</div>
      <p class="apikey-body">
        Parler uses AI to give your child personalised star ratings on their French pronunciation.<br><br>
        You'll need a free API key from
        <a href="https://console.anthropic.com" target="_blank" rel="noopener">console.anthropic.com</a>.
        Create an account, go to API Keys, and paste it below.
        Your key is saved only on this device.
      </p>
      <div class="apikey-input-row">
        <input class="apikey-input" id="apikey-input" type="password"
          placeholder="sk-ant-…" autocomplete="off" spellcheck="false" />
        <button class="apikey-show" id="apikey-show">Show</button>
      </div>
      <button class="apikey-save" id="apikey-save">Save &amp; start Parler →</button>
      <button class="apikey-cancel" id="apikey-cancel">Cancel</button>
    </div>`;

  const close = () => overlay.remove();

  overlay.querySelector('#apikey-show').addEventListener('click', () => {
    const inp = overlay.querySelector('#apikey-input');
    const btn = overlay.querySelector('#apikey-show');
    inp.type = inp.type === 'password' ? 'text' : 'password';
    btn.textContent = inp.type === 'password' ? 'Show' : 'Hide';
  });

  overlay.querySelector('#apikey-save').addEventListener('click', () => {
    const key = overlay.querySelector('#apikey-input').value.trim();
    if (!key) { overlay.querySelector('#apikey-input').focus(); return; }
    localStorage.setItem('why_api_key', key);
    close();
    onSave();
  });

  overlay.querySelector('#apikey-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') overlay.querySelector('#apikey-save').click();
  });

  overlay.querySelector('#apikey-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.querySelector('#apikey-input').focus());
}

function zoomIntoPlanet(btn, navigate) {
  const card = btn.closest('.planet-card');
  const grid = btn.closest('.planet-grid');
  if (!card || !grid) { navigate(); return; }
  grid.classList.add('zooming');
  card.classList.add('zoom-in');
  setTimeout(navigate, 600);
}

function renderHome() {
  stopRocketCanvas();
  state.screen = 'home';
  $('app').innerHTML = `
    <div class="space-home">
      <canvas class="space-stars" id="h-stars"></canvas>
      <div class="space-nebula"></div>
      <header class="space-header">
        <span class="space-flag" aria-hidden="true">🇫🇷</span>
        <h1 class="space-title">Mon Aventure Française</h1>
        <button class="parent-settings-btn" data-action="open-parent-settings" aria-label="Parent settings">⚙️</button>
      </header>
      <nav class="planet-grid" aria-label="Choose a topic">
        ${homeCatButtons()}
        ${planetFloat('p-station', '🛸', 'Les Sons', 'Sound mat', 'open-phonics')}
      </nav>
    </div>
  `;
  drawStars('h-stars');
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
  } else {
    // vehicles, animals, food, body, family — photo with emoji fallback
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
  const item = items[state.cardIndex];
  speak(item.id, item.fr);

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
    const imgSrc = `images/${safeText(correct.id)}.jpg`;
    visualHTML = `
      <div class="quiz-visual" aria-label="${safeText(correct.en)}" style="padding:0;overflow:hidden;background:transparent">
        <img src="${imgSrc}" alt="${safeText(correct.en)}"
          style="width:100%;height:100%;object-fit:cover;border-radius:16px"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:4rem">
          ${correct.emoji}
        </div>
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
  setTimeout(() => speak(correct.id, correct.fr), 380);
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
  } else if (cat === 'numbers') {
    visualHTML = `<div class="modal-emoji" aria-hidden="true" style="font-size:3rem;font-weight:900">${item.num}</div>`;
  } else {
    const imgSrc = `images/${safeText(item.id)}.jpg`;
    visualHTML = `
      <img src="${imgSrc}" alt="${safeText(item.en)}"
        style="width:100%;max-height:180px;object-fit:cover;border-radius:12px;margin-bottom:4px"
        onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <div class="modal-emoji" aria-hidden="true" style="display:none">${item.emoji || ''}</div>`;
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
  speak(item.id, item.fr);
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
    speak(current.id, current.fr);
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
      zoomIntoPlanet(btn, () => {
        state.vehicleFilter = 'all';
        state.animalFilter  = 'all';
        renderCategory(btn.dataset.cat);
      });
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
      if (state.modalItem) { speak(state.modalItem.id, state.modalItem.fr); pulseSpeaker(); }
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
    case 'open-phonics':
      zoomIntoPlanet(btn, renderPhonics);
      break;
    case 'play-phonic':
      speakFrench(btn.dataset.tts);  // speakFrench already cancels internally
      btn.classList.add('phonic-active');
      setTimeout(() => btn.classList.remove('phonic-active'), 500);
      break;
    case 'open-practice':
      if (!localStorage.getItem('why_api_key')) {
        promptApiKey(() => zoomIntoPlanet(btn, renderPractice));
      } else {
        zoomIntoPlanet(btn, renderPractice);
      }
      break;
    case 'practice-listen':
      speak(state.practiceWords[state.practiceIdx].id, state.practiceWords[state.practiceIdx].fr);
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
