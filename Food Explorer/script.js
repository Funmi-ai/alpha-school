'use strict';

/* ============================================================
   FOOD DATA
   ============================================================ */

const foodData = [

  /* ── FRUIT AND VEGETABLES ── */

  { id: 'apple', name: 'Apple', emoji: '🍎',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Helps your tummy work well.',
      'Gives your body some energy.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Apple trees can keep producing fruit for more than 100 years.',
    discussionQuestion: 'Is it soft, crunchy or chewy?',
    searchKeywords: ['apple', 'fruit', 'fruit and vegetables']
  },

  { id: 'banana', name: 'Banana', emoji: '🍌',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin B6', 'Vitamin C'],
    minerals: ['Potassium'],
    benefits: [
      'Gives your body energy.',
      'Helps your muscles and nerves work.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Bananas grow in large hanging groups called bunches or hands.',
    discussionQuestion: 'What colour is it when it is not ripe yet?',
    searchKeywords: ['banana', 'fruit', 'fruit and vegetables']
  },

  { id: 'orange', name: 'Orange', emoji: '🍊',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C', 'Folate'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Helps your body heal cuts and scratches.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Oranges are a type of berry, which might surprise you!',
    discussionQuestion: 'What colour is it?',
    searchKeywords: ['orange', 'citrus', 'fruit and vegetables']
  },

  { id: 'strawberry', name: 'Strawberry', emoji: '🍓',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Helps your body heal.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Strawberries carry their tiny seeds on the outside of the fruit.',
    discussionQuestion: 'Where do you think it grows?',
    searchKeywords: ['strawberry', 'strawberries', 'berry', 'fruit and vegetables']
  },

  { id: 'blueberry', name: 'Blueberry', emoji: '🫐',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C', 'Vitamin K'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Helps your tummy work well.',
      'Supports healthy blood.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Blueberries turn from green to blue-purple when they are ripe.',
    discussionQuestion: 'Is it soft, crunchy or chewy?',
    searchKeywords: ['blueberry', 'blueberries', 'berry', 'fruit and vegetables']
  },

  { id: 'mango', name: 'Mango', emoji: '🥭',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin C', 'Vitamin A'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your eyes see well.',
      'Helps your body fight germs.',
      'Gives your body some energy.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Mango trees can live for hundreds of years and still produce fruit.',
    discussionQuestion: 'What colour is it inside?',
    searchKeywords: ['mango', 'tropical', 'fruit and vegetables']
  },

  { id: 'watermelon', name: 'Watermelon', emoji: '🍉',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin C', 'Vitamin A'],
    minerals: ['Potassium'],
    benefits: [
      'Helps keep your body hydrated.',
      'Helps your body fight germs.',
      'Helps your eyes stay healthy.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Watermelon is made up of about 90% water.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['watermelon', 'melon', 'fruit and vegetables']
  },

  { id: 'avocado', name: 'Avocado', emoji: '🥑',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Healthy fats', 'Fibre'],
    vitamins: ['Vitamin K', 'Vitamin E', 'Folate'],
    minerals: ['Potassium'],
    benefits: [
      'Gives your body healthy fats.',
      'Helps your tummy work well.',
      'Supports healthy blood.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'The avocado is actually a large berry with a single seed inside.',
    discussionQuestion: 'What colour is it inside?',
    searchKeywords: ['avocado', 'fruit and vegetables', 'healthy fats']
  },

  { id: 'carrot', name: 'Carrot', emoji: '🥕',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin A'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your eyes see well.',
      'Helps your body fight germs.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Carrots can be purple, yellow, white or orange, not just the orange ones we often see.',
    discussionQuestion: 'Which part of your body might it help?',
    searchKeywords: ['carrot', 'vegetable', 'fruit and vegetables']
  },

  { id: 'broccoli', name: 'Broccoli', emoji: '🥦',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C', 'Vitamin K', 'Folate'],
    minerals: ['Calcium', 'Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Supports healthy bones.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'The top of a broccoli is made up of lots of tiny flower buds.',
    discussionQuestion: 'Where do you think it grows?',
    searchKeywords: ['broccoli', 'vegetable', 'fruit and vegetables']
  },

  { id: 'spinach', name: 'Spinach', emoji: '🥬',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre'],
    vitamins: ['Vitamin K', 'Vitamin A', 'Folate'],
    minerals: ['Iron', 'Calcium'],
    benefits: [
      'Supports healthy blood.',
      'Helps your bones stay strong.',
      'Helps your eyes stay healthy.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Spinach leaves are actually quite small before they are cooked — they shrink a lot.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['spinach', 'leaves', 'greens', 'vegetable', 'fruit and vegetables']
  },

  { id: 'peas', name: 'Peas', emoji: '🫛',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Protein'],
    vitamins: ['Vitamin C', 'Vitamin K'],
    minerals: ['Iron', 'Potassium'],
    benefits: [
      'Helps your tummy work well.',
      'Helps your muscles grow and repair.',
      'Helps your body fight germs.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Peas grow inside a pod on a climbing plant.',
    discussionQuestion: 'What other food belongs to the same group?',
    searchKeywords: ['peas', 'vegetable', 'fruit and vegetables']
  },

  { id: 'tomato', name: 'Tomato', emoji: '🍅',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C', 'Vitamin K'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Supports healthy blood.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'A tomato is actually a fruit, even though we often use it in savoury dishes.',
    discussionQuestion: 'Is it soft, crunchy or chewy?',
    searchKeywords: ['tomato', 'tomatoes', 'fruit and vegetables']
  },

  { id: 'sweet-pepper', name: 'Sweet pepper', emoji: '🫑',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Fibre', 'Carbohydrates'],
    vitamins: ['Vitamin C', 'Vitamin A'],
    minerals: ['Potassium'],
    benefits: [
      'Helps your body fight germs.',
      'Helps your eyes see well.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'This can count towards your fruit and vegetables. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Red, yellow and green sweet peppers are all the same plant, just picked at different times.',
    discussionQuestion: 'What colour is it?',
    searchKeywords: ['pepper', 'sweet pepper', 'bell pepper', 'vegetable', 'fruit and vegetables']
  },

  { id: 'sweetcorn', name: 'Sweetcorn', emoji: '🌽',
    group: 'Fruit and vegetables',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['B vitamins', 'Vitamin C'],
    minerals: ['Potassium', 'Magnesium'],
    benefits: [
      'Gives your body energy.',
      'Helps your tummy work well.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Sweetcorn can count towards your fruit and vegetables. It also provides carbohydrates. Try to eat at least five child-sized portions of different fruit and vegetables across the day.',
    portionNote: 'A child-sized fruit or vegetable portion is often around the amount that fits in the child\'s hand.',
    fact: 'Each strand of silk on a corn cob is connected to one single kernel.',
    discussionQuestion: 'What colour is it?',
    searchKeywords: ['sweetcorn', 'corn', 'maize', 'vegetable', 'fruit and vegetables']
  },

  /* ── STARCHY CARBOHYDRATES ── */

  { id: 'oats', name: 'Oats', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><path d="M13 12 Q14 9 13 6" fill="none" stroke="#BBB" stroke-width="1.4" stroke-linecap="round"/><path d="M18 11 Q19 8 18 5" fill="none" stroke="#BBB" stroke-width="1.4" stroke-linecap="round"/><path d="M23 12 Q24 9 23 6" fill="none" stroke="#BBB" stroke-width="1.4" stroke-linecap="round"/><path d="M6 18 Q7 29 18 30 Q29 29 30 18Z" fill="#F5ECD7" stroke="#C8A96E" stroke-width="1.5"/><ellipse cx="18" cy="18" rx="12" ry="3" fill="#D4B896" stroke="#C8A96E" stroke-width="1.5"/></svg>',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['B vitamins'],
    minerals: ['Iron', 'Magnesium'],
    benefits: [
      'Gives your body energy.',
      'Helps your tummy work well.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Oats begin as seeds from an oat plant that grows in fields.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['oats', 'porridge', 'oatmeal', 'cereal', 'starchy carbohydrates', 'carbs']
  },

  { id: 'rice', name: 'Rice', emoji: '🍚',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates'],
    vitamins: ['B vitamins'],
    minerals: ['Magnesium'],
    benefits: [
      'Gives your body energy.',
      'Helps your body use food for energy.',
      'Can help you feel full.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Rice is one of the most widely eaten foods in the world.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['rice', 'starchy carbohydrates', 'carbs']
  },

  { id: 'pasta', name: 'Pasta', emoji: '🍝',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['B vitamins'],
    minerals: ['Iron', 'Magnesium'],
    benefits: [
      'Gives your body energy.',
      'Helps your body use food for energy.',
      'Whole wheat pasta can help your tummy work well.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Pasta comes in more than 300 different shapes and sizes.',
    discussionQuestion: 'What shape pasta do you like best?',
    searchKeywords: ['pasta', 'spaghetti', 'penne', 'starchy carbohydrates', 'carbs']
  },

  { id: 'bread', name: 'Bread', emoji: '🍞',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['B vitamins'],
    minerals: ['Iron', 'Calcium'],
    benefits: [
      'Gives your body energy.',
      'Wholegrain bread helps your tummy work well.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Bread rises because tiny living things called yeast make bubbles of gas in the dough.',
    discussionQuestion: 'What other food belongs to the same group?',
    searchKeywords: ['bread', 'loaf', 'wholemeal', 'starchy carbohydrates', 'carbs']
  },

  { id: 'potato', name: 'Potato', emoji: '🥔',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin C', 'B vitamins'],
    minerals: ['Potassium'],
    benefits: [
      'Gives your body energy.',
      'Helps your body fight germs.',
      'Helps your tummy work well when you eat the skin too.'
    ],
    dailyGuidance: 'Potatoes are a starchy food and do not count as a fruit and vegetable portion. These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Potatoes are one of the most eaten vegetables in the world.',
    discussionQuestion: 'Where do you think it grows?',
    searchKeywords: ['potato', 'potatoes', 'starchy carbohydrates', 'carbs']
  },

  { id: 'sweet-potato', name: 'Sweet potato', emoji: '🍠',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin A', 'Vitamin C', 'B vitamins'],
    minerals: ['Potassium'],
    benefits: [
      'Gives your body energy.',
      'Helps your eyes see well.',
      'Helps your tummy work well.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Sweet potatoes are not the same plant as regular potatoes, even though they look similar.',
    discussionQuestion: 'Is it soft, crunchy or chewy when cooked?',
    searchKeywords: ['sweet potato', 'starchy carbohydrates', 'carbs']
  },

  { id: 'plantain', name: 'Plantain', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><path d="M5 27 Q4 20 8 14 Q15 8 25 9 Q31 10 32 16 Q33 22 27 26 Q19 31 5 27Z" fill="#5DB861" stroke="#3A7F3D" stroke-width="1.4"/><path d="M8 22 Q16 15 29 17" fill="none" stroke="#3A7F3D" stroke-width="1.3" stroke-linecap="round"/><path d="M5 27 Q3 29 4 31" fill="none" stroke="#3A7F3D" stroke-width="1.5" stroke-linecap="round"/><path d="M32 16 Q34 13 32 11" fill="none" stroke="#3A7F3D" stroke-width="1.2" stroke-linecap="round"/></svg>',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin A', 'Vitamin C', 'B vitamins'],
    minerals: ['Potassium', 'Magnesium'],
    benefits: [
      'Gives your body energy.',
      'Helps your tummy work well.',
      'Supports healthy muscles and nerves.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Plantain looks like a banana but is usually cooked before eating.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['plantain', 'starchy carbohydrates', 'carbs']
  },

  { id: 'yam', name: 'Yam', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><path d="M3 21 Q3 14 7 11 Q15 7 25 10 Q31 12 32 18 Q33 23 29 27 Q21 31 12 30 Q5 28 3 21Z" fill="#5C3318" stroke="#2E1608" stroke-width="1.4"/><path d="M6 15 Q18 12 30 16" fill="none" stroke="#2E1608" stroke-width="0.9" opacity="0.5"/><path d="M5 22 Q18 19 31 22" fill="none" stroke="#2E1608" stroke-width="0.9" opacity="0.5"/><path d="M13 8 Q12 11 13 15" fill="none" stroke="#2E1608" stroke-width="1" opacity="0.5"/><path d="M21 7 Q20 11 21 15" fill="none" stroke="#2E1608" stroke-width="1" opacity="0.5"/></svg>',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin C', 'B vitamins'],
    minerals: ['Potassium', 'Magnesium'],
    benefits: [
      'Gives your body energy.',
      'Helps your tummy work well.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Yam can grow very large — some weigh as much as a small child.',
    discussionQuestion: 'Where do you think it grows?',
    searchKeywords: ['yam', 'starchy carbohydrates', 'carbs']
  },

  { id: 'cassava', name: 'Cassava', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><path d="M3 20 Q3 13 7 10 Q18 7 29 10 Q33 13 33 20 Q33 26 29 29 Q18 32 7 29 Q3 26 3 20Z" fill="#B8874A" stroke="#7A5520" stroke-width="1.3"/><path d="M7 13 Q18 11 29 13" fill="none" stroke="#9B6B2F" stroke-width="0.9" opacity="0.5"/><path d="M7 27 Q18 25 29 27" fill="none" stroke="#9B6B2F" stroke-width="0.9" opacity="0.5"/><line x1="14" y1="9" x2="14" y2="30" stroke="#7A5520" stroke-width="0.8" opacity="0.4"/><line x1="22" y1="8" x2="22" y2="31" stroke="#7A5520" stroke-width="0.8" opacity="0.4"/></svg>',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['Vitamin C'],
    minerals: ['Potassium'],
    benefits: [
      'Gives your body energy.',
      'Helps your tummy work well.',
      'Gives your body some vitamin C.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Cassava is a root vegetable and is one of the main sources of starchy food for many people around the world.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['cassava', 'manioc', 'starchy carbohydrates', 'carbs']
  },

  { id: 'breakfast-cereal', name: 'Breakfast cereal', emoji: '🥣',
    group: 'Starchy carbohydrates',
    nutrientRoles: ['Carbohydrates', 'Fibre'],
    vitamins: ['B vitamins', 'Vitamin D'],
    minerals: ['Iron', 'Calcium'],
    benefits: [
      'Gives your body energy to start the day.',
      'Fortified cereals can support healthy blood.',
      'Wholegrain cereals can help your tummy work well.'
    ],
    dailyGuidance: 'These foods give us energy. Include starchy foods as part of meals across the day.',
    portionNote: '',
    fact: 'Some breakfast cereals are made with added vitamins and minerals to help the body.',
    discussionQuestion: 'What other food belongs to the same group?',
    searchKeywords: ['cereal', 'breakfast cereal', 'starchy carbohydrates', 'carbs']
  },

  /* ── PROTEIN FOODS ── */

  { id: 'egg', name: 'Egg', emoji: '🥚',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Healthy fats'],
    vitamins: ['Vitamin D', 'Vitamin B12', 'B vitamins'],
    minerals: ['Iron', 'Iodine'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Helps your bones stay strong.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'The colour of a hen\'s egg shell depends on the breed of hen.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['egg', 'eggs', 'protein foods', 'protein']
  },

  { id: 'chicken', name: 'Chicken', emoji: '🍗',
    group: 'Protein foods',
    nutrientRoles: ['Protein'],
    vitamins: ['B vitamins', 'Vitamin B12'],
    minerals: ['Iron', 'Potassium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Gives your body building blocks to grow.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'Chicken is one of the most widely eaten meats in the world.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['chicken', 'poultry', 'protein foods', 'protein', 'meat']
  },

  { id: 'salmon', name: 'Salmon', emoji: '🐟',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Healthy fats'],
    vitamins: ['Vitamin D', 'Vitamin B12', 'B vitamins'],
    minerals: ['Iodine', 'Potassium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Supports a healthy brain.',
      'Helps your bones stay strong.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'Salmon can swim upstream against powerful rivers to reach the place where they were born.',
    discussionQuestion: 'What colour is it inside?',
    searchKeywords: ['salmon', 'fish', 'protein foods', 'protein']
  },

  { id: 'tuna', name: 'Tuna', emoji: '🐠',
    group: 'Protein foods',
    nutrientRoles: ['Protein'],
    vitamins: ['Vitamin D', 'Vitamin B12', 'B vitamins'],
    minerals: ['Iodine', 'Potassium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Helps your bones stay strong.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'Tuna are very fast swimmers and can travel huge distances across oceans.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['tuna', 'fish', 'protein foods', 'protein']
  },

  { id: 'beans', name: 'Beans', emoji: '🫘',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Carbohydrates', 'Fibre'],
    vitamins: ['Folate', 'B vitamins'],
    minerals: ['Iron', 'Potassium', 'Magnesium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Helps your tummy work well.',
      'Helps your body move oxygen around.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'There are hundreds of different types of beans eaten around the world.',
    discussionQuestion: 'What other food belongs to the same group?',
    searchKeywords: ['beans', 'kidney beans', 'baked beans', 'protein foods', 'protein', 'legumes']
  },

  { id: 'lentils', name: 'Lentils', emoji: '🍲',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Carbohydrates', 'Fibre'],
    vitamins: ['Folate', 'B vitamins'],
    minerals: ['Iron', 'Potassium', 'Magnesium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Helps your tummy work well.',
      'Helps your body move oxygen around.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'Lentils come in several colours, including red, green, brown and black.',
    discussionQuestion: 'What colour is it?',
    searchKeywords: ['lentils', 'dal', 'dhal', 'protein foods', 'protein', 'legumes']
  },

  { id: 'chickpeas', name: 'Chickpeas', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><circle cx="11" cy="19" r="6" fill="#E8C97A" stroke="#B8943A" stroke-width="1.3"/><path d="M8 16 Q11 13 14 16" fill="none" stroke="#B8943A" stroke-width="1.1" stroke-linecap="round"/><circle cx="25" cy="15" r="6" fill="#E8C97A" stroke="#B8943A" stroke-width="1.3"/><path d="M22 12 Q25 9 28 12" fill="none" stroke="#B8943A" stroke-width="1.1" stroke-linecap="round"/><circle cx="22" cy="25" r="6" fill="#E8C97A" stroke="#B8943A" stroke-width="1.3"/><path d="M19 22 Q22 19 25 22" fill="none" stroke="#B8943A" stroke-width="1.1" stroke-linecap="round"/></svg>',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Carbohydrates', 'Fibre'],
    vitamins: ['Folate', 'B vitamins'],
    minerals: ['Iron', 'Potassium', 'Magnesium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Helps your tummy work well.',
      'Helps your body move oxygen around.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'Chickpeas are used to make hummus, which is a creamy dip.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['chickpeas', 'garbanzo', 'hummus', 'protein foods', 'protein', 'legumes']
  },

  { id: 'tofu', name: 'Tofu', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><rect x="15" y="8" width="17" height="12" rx="2" fill="#EEEADB" stroke="#B8B4A0" stroke-width="1.2"/><rect x="15" y="8" width="17" height="3.5" rx="2" fill="#F8F5EC" stroke="#B8B4A0" stroke-width="1.2"/><rect x="4" y="16" width="17" height="12" rx="2" fill="#F5F2E5" stroke="#B8B4A0" stroke-width="1.2"/><rect x="4" y="16" width="17" height="3.5" rx="2" fill="#FDFBF5" stroke="#B8B4A0" stroke-width="1.2"/></svg>',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Healthy fats'],
    vitamins: ['Vitamin B12'],
    minerals: ['Calcium', 'Iron', 'Magnesium'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Supports healthy bones.',
      'Helps your body move oxygen around.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'Tofu is made from soya beans and has been eaten in parts of Asia for over 2000 years.',
    discussionQuestion: 'What meal could we make with it?',
    searchKeywords: ['tofu', 'soya', 'soy', 'protein foods', 'protein']
  },

  { id: 'peanut-butter', name: 'Peanut butter', emoji: '🥜',
    group: 'Protein foods',
    nutrientRoles: ['Protein', 'Healthy fats'],
    vitamins: ['Vitamin E', 'B vitamins'],
    minerals: ['Potassium', 'Magnesium', 'Iron'],
    benefits: [
      'Helps your muscles grow and repair.',
      'Gives your body healthy fats.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Include some protein foods across the day to help the body grow and repair.',
    portionNote: '',
    fact: 'It takes roughly 850 peanuts to make one jar of peanut butter.',
    discussionQuestion: 'Is it soft, crunchy or chewy?',
    searchKeywords: ['peanut butter', 'peanut', 'nut butter', 'protein foods', 'protein']
  },

  /* ── DAIRY AND ALTERNATIVES ── */

  { id: 'milk', name: 'Milk', emoji: '🥛',
    group: 'Dairy and alternatives',
    nutrientRoles: ['Protein', 'Carbohydrates'],
    vitamins: ['Vitamin D', 'Vitamin B12', 'B vitamins'],
    minerals: ['Calcium', 'Iodine', 'Potassium'],
    benefits: [
      'Helps your bones grow strong.',
      'Helps your teeth stay healthy.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Include some dairy or a suitable fortified alternative as part of a balanced day.',
    portionNote: '',
    fact: 'One glass of milk contains calcium that helps your bones and teeth stay strong.',
    discussionQuestion: 'What other food belongs to the same group?',
    searchKeywords: ['milk', 'dairy', 'dairy and alternatives']
  },

  { id: 'yoghurt', name: 'Yoghurt', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><path d="M9 14 Q10 28 12 29 Q18 31 24 29 Q26 28 27 14Z" fill="#FFF5FA" stroke="#D088B0" stroke-width="1.4"/><ellipse cx="18" cy="14" rx="9" ry="2.5" fill="#ECC8E0" stroke="#D088B0" stroke-width="1.4"/><path d="M24.5 14 Q28 12 29 13" fill="none" stroke="#D088B0" stroke-width="1.3" stroke-linecap="round"/><path d="M10 22 Q18 23.5 26 22" fill="none" stroke="#D088B0" stroke-width="1" opacity="0.5"/></svg>',
    group: 'Dairy and alternatives',
    nutrientRoles: ['Protein', 'Carbohydrates'],
    vitamins: ['Vitamin B12', 'B vitamins'],
    minerals: ['Calcium', 'Iodine', 'Potassium'],
    benefits: [
      'Helps your bones grow strong.',
      'Helps your teeth stay healthy.',
      'Can support a healthy tummy.'
    ],
    dailyGuidance: 'Include some dairy or a suitable fortified alternative as part of a balanced day.',
    portionNote: '',
    fact: 'Yoghurt is made when helpful bacteria are added to warm milk.',
    discussionQuestion: 'What flavour do you like best?',
    searchKeywords: ['yoghurt', 'yogurt', 'dairy', 'dairy and alternatives']
  },

  { id: 'cheese', name: 'Cheese', emoji: '🧀',
    group: 'Dairy and alternatives',
    nutrientRoles: ['Protein'],
    vitamins: ['Vitamin A', 'Vitamin B12'],
    minerals: ['Calcium', 'Iodine'],
    benefits: [
      'Helps your bones grow strong.',
      'Helps your teeth stay healthy.',
      'Helps your muscles grow and repair.'
    ],
    dailyGuidance: 'Include some dairy or a suitable fortified alternative as part of a balanced day.',
    portionNote: '',
    fact: 'There are over a thousand different types of cheese made around the world.',
    discussionQuestion: 'Is it soft, crunchy or chewy?',
    searchKeywords: ['cheese', 'dairy', 'dairy and alternatives']
  },

  { id: 'soya-drink', name: 'Fortified soya drink', emoji: '🫙',
    group: 'Dairy and alternatives',
    nutrientRoles: ['Protein'],
    vitamins: ['Vitamin D', 'Vitamin B12'],
    minerals: ['Calcium', 'Iodine'],
    benefits: [
      'Can support healthy bones when fortified.',
      'Helps your muscles grow and repair.',
      'Helps your body use food for energy.'
    ],
    dailyGuidance: 'Include some dairy or a suitable fortified alternative as part of a balanced day.',
    portionNote: '',
    fact: 'Soya drinks that have calcium and vitamins added are a useful dairy alternative.',
    discussionQuestion: 'What other food belongs to the same group?',
    searchKeywords: ['soya', 'soy', 'soya drink', 'plant milk', 'dairy and alternatives']
  },

  /* ── OILS AND SPREADS ── */

  { id: 'olive-oil', name: 'Olive oil', emoji: '🫒',
    group: 'Oils and spreads',
    nutrientRoles: ['Healthy fats'],
    vitamins: ['Vitamin E', 'Vitamin K'],
    minerals: [],
    benefits: [
      'Gives your body healthy fats.',
      'Supports a healthy heart.',
      'Helps your body absorb some vitamins.'
    ],
    dailyGuidance: 'Our bodies need some fat, but we usually only need small amounts of oils and spreads.',
    portionNote: '',
    fact: 'Olive oil is made by pressing the fruit from olive trees, which can live for thousands of years.',
    discussionQuestion: 'What meal could we use it in?',
    searchKeywords: ['olive oil', 'oil', 'oils and spreads']
  },

  { id: 'vegetable-oil', name: 'Vegetable oil', emoji: '🌻',
    group: 'Oils and spreads',
    nutrientRoles: ['Healthy fats'],
    vitamins: ['Vitamin E'],
    minerals: [],
    benefits: [
      'Gives your body healthy fats.',
      'Helps your body absorb some vitamins.',
      'Provides energy from fats.'
    ],
    dailyGuidance: 'Our bodies need some fat, but we usually only need small amounts of oils and spreads.',
    portionNote: '',
    fact: 'Vegetable oil can be made from many plants, including sunflower seeds and rapeseed.',
    discussionQuestion: 'What meal could we use it in?',
    searchKeywords: ['vegetable oil', 'sunflower oil', 'oil', 'oils and spreads']
  },

  { id: 'butter', name: 'Butter', emoji: '🧈',
    group: 'Oils and spreads',
    nutrientRoles: ['Healthy fats'],
    vitamins: ['Vitamin A'],
    minerals: [],
    benefits: [
      'Provides fat, which the body needs in small amounts.',
      'Helps your body absorb vitamin A.',
      'Gives food flavour when used in cooking.'
    ],
    dailyGuidance: 'Our bodies need some fat, but we usually only need small amounts of oils and spreads. Butter is higher in saturated fat, so use it in smaller amounts.',
    portionNote: '',
    fact: 'Butter is made by churning cream until it becomes solid.',
    discussionQuestion: 'What food do you like to put butter on?',
    searchKeywords: ['butter', 'spread', 'oils and spreads']
  },

  /* ── FOODS TO ENJOY LESS OFTEN ── */

  { id: 'cookie', name: 'Cookie', emoji: '🍪',
    group: 'Foods to enjoy less often',
    nutrientRoles: ['Carbohydrates'],
    vitamins: [],
    minerals: [],
    benefits: [
      'Gives your body energy from carbohydrates, sugar and fat.',
      'Can be a nice treat to enjoy with others.'
    ],
    dailyGuidance: 'This food can be enjoyed, but it is best to have foods high in sugar, salt or saturated fat less often and in smaller amounts.',
    portionNote: '',
    fact: 'Cookies are enjoyed in many shapes and flavours all around the world.',
    discussionQuestion: 'What is your favourite flavour?',
    searchKeywords: ['cookie', 'biscuit', 'snack', 'foods to enjoy less often', 'treat']
  },

  { id: 'brownie', name: 'Brownie', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><rect x="5" y="10" width="26" height="18" rx="3" fill="#5C2E0A" stroke="#3A1A04" stroke-width="1.4"/><rect x="5" y="10" width="26" height="5" rx="3" fill="#7A3D10" stroke="#3A1A04" stroke-width="1.4"/><line x1="18" y1="10" x2="18" y2="28" stroke="#3A1A04" stroke-width="1" opacity="0.4"/><line x1="5" y1="19" x2="31" y2="19" stroke="#3A1A04" stroke-width="1" opacity="0.4"/></svg>',
    group: 'Foods to enjoy less often',
    nutrientRoles: ['Carbohydrates'],
    vitamins: [],
    minerals: [],
    benefits: [
      'Gives your body energy from carbohydrates, sugar and fat.',
      'Can be a nice treat to enjoy on special occasions.'
    ],
    dailyGuidance: 'This food can be enjoyed, but it is best to have foods high in sugar, salt or saturated fat less often and in smaller amounts.',
    portionNote: '',
    fact: 'Brownies are made with cocoa or chocolate, which comes from the seeds of the cacao tree.',
    discussionQuestion: 'What is your favourite way to enjoy a treat?',
    searchKeywords: ['brownie', 'chocolate', 'cake', 'foods to enjoy less often', 'treat']
  },

  { id: 'sweets', name: 'Sweets', emoji: '🍬',
    group: 'Foods to enjoy less often',
    nutrientRoles: ['Carbohydrates'],
    vitamins: [],
    minerals: [],
    benefits: [
      'Give your body energy from sugar.',
      'Can be a fun treat to enjoy in small amounts.'
    ],
    dailyGuidance: 'This food can be enjoyed, but it is best to have foods high in sugar, salt or saturated fat less often and in smaller amounts.',
    portionNote: '',
    fact: 'Sweets come in thousands of different shapes, colours and flavours.',
    discussionQuestion: 'What is your favourite flavour?',
    searchKeywords: ['sweets', 'candy', 'lolly', 'foods to enjoy less often', 'treat']
  },

  { id: 'crisps', name: 'Crisps', emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" style="vertical-align:-0.15em"><path d="M18 4c5-1 11 2 13 8s0 14-6 17-14 1-17-5S5 8 12 5c2-1 4-1 6-1z" fill="#F9C623" stroke="#C89A10" stroke-width="1.5"/><path d="M7 19 Q18 11 29 19" fill="none" stroke="#C89A10" stroke-width="2" stroke-linecap="round"/><circle cx="11" cy="23" r="1.2" fill="rgba(255,255,255,0.6)"/><circle cx="22" cy="24" r="1.2" fill="rgba(255,255,255,0.6)"/><circle cx="26" cy="16" r="1.2" fill="rgba(255,255,255,0.6)"/><circle cx="14" cy="13" r="1.2" fill="rgba(255,255,255,0.6)"/></svg>',
    group: 'Foods to enjoy less often',
    nutrientRoles: ['Carbohydrates'],
    vitamins: [],
    minerals: [],
    benefits: [
      'Give your body energy from carbohydrates and fat.',
      'Can be a crunchy snack to enjoy occasionally.'
    ],
    dailyGuidance: 'This food can be enjoyed, but it is best to have foods high in sugar, salt or saturated fat less often and in smaller amounts.',
    portionNote: '',
    fact: 'Crisps were first made by accident when a cook kept slicing potatoes thinner and thinner.',
    discussionQuestion: 'Is it soft, crunchy or chewy?',
    searchKeywords: ['crisps', 'chips', 'snack', 'foods to enjoy less often', 'treat']
  },

  { id: 'sugary-drink', name: 'Sugary drink', emoji: '🥤',
    group: 'Foods to enjoy less often',
    nutrientRoles: ['Carbohydrates'],
    vitamins: [],
    minerals: [],
    benefits: [
      'Gives your body energy from sugar.',
      'Water, milk or milk alternatives are usually a better choice for everyday drinking.'
    ],
    dailyGuidance: 'This food can be enjoyed, but it is best to have foods high in sugar, salt or saturated fat less often and in smaller amounts.',
    portionNote: '',
    fact: 'Water is the best drink for keeping our bodies hydrated throughout the day.',
    discussionQuestion: 'What is your favourite thing to drink every day?',
    searchKeywords: ['sugary drink', 'fizzy drink', 'juice', 'pop', 'soda', 'foods to enjoy less often', 'treat']
  }
];

/* ============================================================
   GROUP CONFIG (colours / badge classes)
   ============================================================ */

const groupConfig = {
  'Fruit and vegetables':    { cls: 'grp-fruit',     badge: 'gbadge-fruit',     emoji: '🥦' },
  'Starchy carbohydrates':   { cls: 'grp-carbs',     badge: 'gbadge-carbs',     emoji: '🍞' },
  'Protein foods':           { cls: 'grp-protein',   badge: 'gbadge-protein',   emoji: '🥚' },
  'Dairy and alternatives':  { cls: 'grp-dairy',     badge: 'gbadge-dairy',     emoji: '🥛' },
  'Oils and spreads':        { cls: 'grp-oils',      badge: 'gbadge-oils',      emoji: '🫒' },
  'Foods to enjoy less often':{ cls: 'grp-sometimes', badge: 'gbadge-sometimes', emoji: '🍪' }
};

const nutrientTagMap = {
  'Carbohydrates': 'tag-carbs',
  'Protein':       'tag-protein',
  'Healthy fats':  'tag-fats',
  'Fibre':         'tag-fibre'
};

const clueMap = {
  'Carbohydrates': { label: 'Energy',  cls: 'clue-carbs'   },
  'Protein':       { label: 'Protein', cls: 'clue-protein'  },
  'Healthy fats':  { label: 'Fats',    cls: 'clue-fats'     },
  'Fibre':         { label: 'Fibre',   cls: 'clue-fibre'    }
};

/* ============================================================
   VITAMIN & MINERAL DEEP DIVE DATA
   ============================================================ */

const vitaminData = {
  'Vitamin C': {
    emoji: '🍊', bodyPart: 'Immune system',
    headline: 'Helps your body fight germs and heal.',
    benefits: [
      'Helps your body fight germs.',
      'Helps your body heal cuts and scratches.',
      'Helps your body absorb iron from food.'
    ],
    fact: 'Your body cannot store Vitamin C for long, so it needs a fresh supply from food every day.'
  },
  'Vitamin A': {
    emoji: '🥕', bodyPart: 'Eyes & skin',
    headline: 'Helps your eyes see, especially in dim light.',
    benefits: [
      'Helps your eyes see well, especially when the light is low.',
      'Helps your skin stay healthy.',
      'Helps your body fight germs.'
    ],
    fact: 'The orange colour in carrots comes from beta-carotene, which your body can convert into Vitamin A.'
  },
  'Vitamin D': {
    emoji: '☀️', bodyPart: 'Bones & teeth',
    headline: 'Helps your bones and teeth grow strong.',
    benefits: [
      'Helps your bones grow strong.',
      'Helps your teeth stay healthy.',
      'Helps your muscles work properly.'
    ],
    fact: 'Your skin can make Vitamin D when sunlight touches it — that is why it is sometimes called the sunshine vitamin.'
  },
  'B vitamins': {
    emoji: '⚡', bodyPart: 'Energy & brain',
    headline: 'Help your body use energy from food.',
    benefits: [
      'Help your body turn food into energy.',
      'Support a healthy brain and nerves.',
      'Help your body make red blood cells.'
    ],
    fact: 'There are eight different B vitamins, and they all work together to help the body stay healthy.'
  },
  'Vitamin B6': {
    emoji: '🍌', bodyPart: 'Brain & muscles',
    headline: 'Helps your brain and muscles work well.',
    benefits: [
      'Helps your brain send messages around your body.',
      'Helps your muscles work properly.',
      'Helps your body use protein from food.'
    ],
    fact: 'Vitamin B6 helps your body make serotonin, a chemical that helps you feel calm and happy.'
  },
  'Vitamin B12': {
    emoji: '🩸', bodyPart: 'Blood & brain',
    headline: 'Helps your blood and brain stay healthy.',
    benefits: [
      'Helps your body make healthy red blood cells.',
      'Supports a healthy brain and nervous system.',
      'Helps your body release energy from food.'
    ],
    fact: 'Vitamin B12 is mainly found in animal foods. People who eat no animal products are often advised to take a supplement.'
  },
  'Vitamin K': {
    emoji: '🩹', bodyPart: 'Blood & bones',
    headline: 'Helps your blood clot when you have a cut.',
    benefits: [
      'Helps your blood clot so cuts stop bleeding.',
      'Supports strong, healthy bones.',
      'Plays a role in normal growth.'
    ],
    fact: 'Vitamin K gets its name from the German word for clotting — "Koagulation".'
  },
  'Vitamin E': {
    emoji: '🌿', bodyPart: 'Cell protection',
    headline: 'Helps protect the cells in your body.',
    benefits: [
      'Helps protect the cells in your body from damage.',
      'Supports a healthy immune system.',
      'Works alongside Vitamin C to keep your body healthy.'
    ],
    fact: 'Vitamin E is found in plant oils, nuts and seeds, and acts as a natural protector for cells.'
  },
  'Folate': {
    emoji: '🥬', bodyPart: 'Cell growth',
    headline: 'Helps your body make new cells.',
    benefits: [
      'Helps your body make new cells to grow and repair.',
      'Supports healthy blood.',
      'Is especially important during times of growth.'
    ],
    fact: 'Folate is the natural form of Vitamin B9 found in food. It is also called folic acid when added to supplements.'
  },
  'Calcium': {
    emoji: '🦴', bodyPart: 'Bones & teeth',
    headline: 'Builds strong bones and teeth.',
    benefits: [
      'Helps your bones grow strong.',
      'Helps your teeth stay hard and healthy.',
      'Helps your muscles and heart work properly.'
    ],
    fact: 'Nearly all the calcium in your body is stored in your bones and teeth — they act as a calcium bank.'
  },
  'Iron': {
    emoji: '🩸', bodyPart: 'Blood',
    headline: 'Helps your blood carry oxygen around your body.',
    benefits: [
      'Helps your blood carry oxygen to every part of your body.',
      'Helps your brain stay alert and focused.',
      'Supports normal growth and development.'
    ],
    fact: 'The red colour of blood comes from iron — it is what allows blood to pick up and carry oxygen.'
  },
  'Potassium': {
    emoji: '💪', bodyPart: 'Muscles & heart',
    headline: 'Helps your muscles and heart work well.',
    benefits: [
      'Supports healthy muscles, including your heart.',
      'Helps control the amount of fluid in your body.',
      'Helps your nerves send messages.'
    ],
    fact: 'Bananas are well known for potassium, but many fruits, vegetables and beans also contain good amounts.'
  },
  'Magnesium': {
    emoji: '⚙️', bodyPart: 'Muscles & energy',
    headline: 'Helps your muscles, bones and energy.',
    benefits: [
      'Helps your muscles work and relax properly.',
      'Supports strong bones alongside calcium.',
      'Helps your body produce energy from food.'
    ],
    fact: 'Magnesium is involved in over 300 processes in the body — it is one of the hardest-working minerals.'
  },
  'Iodine': {
    emoji: '🦋', bodyPart: 'Thyroid gland',
    headline: 'Helps a special gland in your neck work.',
    benefits: [
      'Helps the thyroid gland in your neck make important hormones.',
      'Supports normal growth and brain development.',
      'Helps your body use energy at the right pace.'
    ],
    fact: 'The thyroid gland sits at the front of the neck and uses iodine to make hormones that help control how the whole body works.'
  }
};

/* ============================================================
   FOOD GROUP DEEP DIVE DATA
   ============================================================ */

const groupPageData = {
  'Fruit and vegetables': {
    emoji: '🥦',
    headline: 'Packed with vitamins, minerals and fibre.',
    whyWeEat: [
      'Give your body vitamins and minerals to stay healthy.',
      'Help your tummy work well.',
      'Help your body fight germs and repair itself.'
    ],
    portionGuidance: 'Try to eat at least five child-sized portions of different fruit and vegetables across the day. A child-sized portion is often around the amount that fits in their hand. Eating different colours helps your body get a wider variety of nutrients.',
    fact: 'Eating a range of different coloured fruit and vegetables gives your body a wider variety of nutrients — try to eat the rainbow!'
  },
  'Starchy carbohydrates': {
    emoji: '🍞',
    headline: 'The main energy foods.',
    whyWeEat: [
      'Give your body and brain energy to move, think and grow.',
      'Wholegrain versions help your tummy work well.',
      'Help you feel satisfied between meals.'
    ],
    portionGuidance: 'Include starchy foods as part of meals across the day. Choosing wholegrain or higher-fibre versions when possible gives extra benefit.',
    fact: 'Starchy carbohydrates are broken down into glucose — a type of sugar that is the main fuel for your brain and body.'
  },
  'Protein foods': {
    emoji: '🥚',
    headline: 'Build and repair your body.',
    whyWeEat: [
      'Help your muscles grow and repair after activity.',
      'Give your body the building blocks it needs to grow.',
      'Help your body make important chemicals and hormones.'
    ],
    portionGuidance: 'Include some protein foods across the day. A variety of protein foods — including plant-based options like beans, lentils and tofu — is a great aim.',
    fact: 'Proteins are made of smaller parts called amino acids. Your body uses these like building blocks to make all kinds of things it needs.'
  },
  'Dairy and alternatives': {
    emoji: '🥛',
    headline: 'Important for bones and teeth.',
    whyWeEat: [
      'Help your bones grow strong.',
      'Help your teeth stay healthy.',
      'Provide protein, iodine and other important nutrients.'
    ],
    portionGuidance: 'Include some dairy or a suitable fortified alternative as part of a balanced day. Fortified plant alternatives can provide calcium and Vitamin D when dairy is not suitable.',
    fact: 'The calcium in dairy foods is in a form that is particularly easy for the body to absorb and use for building bones.'
  },
  'Oils and spreads': {
    emoji: '🫒',
    headline: 'Provide healthy fats in small amounts.',
    whyWeEat: [
      'Give your body essential fats it cannot make itself.',
      'Help your body absorb vitamins A, D, E and K.',
      'Support a healthy brain and heart.'
    ],
    portionGuidance: 'Our bodies need some fat, but only small amounts of oils and spreads are needed each day. Unsaturated oils, like olive oil, are a good choice when cooking.',
    fact: 'Some vitamins — A, D, E and K — can only be absorbed by the body when some fat is present. They are called fat-soluble vitamins.'
  },
  'Foods to enjoy less often': {
    emoji: '🍪',
    headline: 'Fine to enjoy — but not an everyday food.',
    whyWeEat: [
      'Provide energy mainly from sugar, fat or salt.',
      'Can be enjoyed as a treat on special occasions.',
      'Are best eaten less often and in smaller amounts.'
    ],
    portionGuidance: 'These foods can be part of a happy, balanced life when enjoyed occasionally. They are not "bad" foods — it is just worth having them less often and in smaller amounts.',
    fact: 'All foods can fit into a balanced way of eating. What matters most is the overall pattern of food across the day and week, not any single food.'
  }
};

/* ============================================================
   NUTRIENT ROLE DEEP DIVE DATA
   ============================================================ */

const nutrientRoleData = {
  'Carbohydrates': {
    emoji: '⚡',
    bodyPart: 'Energy',
    headline: 'The body\'s main source of energy.',
    benefits: [
      'Give your body and brain energy to move, think and grow.',
      'Help you feel satisfied between meals.',
      'Wholegrain and high-fibre carbs help your tummy work well.'
    ],
    description: 'Carbohydrates are found in starchy foods, fruit, vegetables and dairy. Your body breaks them down into a sugar called glucose, which every cell uses for fuel. Not all carbohydrates are the same — those that also come with fibre are digested more slowly and give your body a steadier supply of energy.',
    fact: 'Your brain runs almost entirely on glucose — it uses about 20% of all the energy your body takes in, even while you are asleep.'
  },
  'Protein': {
    emoji: '💪',
    bodyPart: 'Muscles & growth',
    headline: 'Builds and repairs your body.',
    benefits: [
      'Helps your muscles grow and repair after activity.',
      'Gives your body the building blocks it needs to grow.',
      'Helps your body make important chemicals and hormones.'
    ],
    description: 'Proteins are made of smaller parts called amino acids. Your body uses them like building blocks to make muscles, skin, hair, enzymes and many other important things. Some amino acids must come from food because the body cannot make them on its own.',
    fact: 'The word "protein" comes from the Greek word "proteios", meaning "first" or "of prime importance" — because protein is in every single cell in your body.'
  },
  'Healthy fats': {
    emoji: '🫒',
    bodyPart: 'Brain & cells',
    headline: 'Gives your body essential fats it cannot make itself.',
    benefits: [
      'Supports healthy brain development and function.',
      'Helps your body absorb vitamins A, D, E and K.',
      'Provides a steady source of energy.'
    ],
    description: 'Fat is an important part of a healthy diet. Some fats — called unsaturated fats — are especially helpful for the heart and brain. Others, called saturated fats, are fine in small amounts. Omega-3 fats, found in oily fish and some plant foods, are particularly good for the brain.',
    fact: 'Your brain is about 60% fat — it needs a steady supply of healthy fats to grow and work properly, especially in the first years of life.'
  },
  'Fibre': {
    emoji: '🌾',
    bodyPart: 'Digestive system',
    headline: 'Keeps your tummy healthy and working well.',
    benefits: [
      'Helps your tummy work well and keeps digestion moving.',
      'Helps you feel full after eating.',
      'Supports healthy gut bacteria.'
    ],
    description: 'Fibre is found only in plant foods — fruit, vegetables, beans, wholegrains and nuts. Unlike other nutrients, fibre is not digested. Instead it travels through your gut and helps everything move smoothly. There are two types: soluble fibre, which dissolves in water, and insoluble fibre, which does not.',
    fact: 'Trillions of tiny bacteria live in your gut and they love fibre. Feeding them well helps your whole body stay healthy.'
  }
};

/* ============================================================
   STATE
   ============================================================ */

let currentGroup        = 'all';
let currentSearch       = '';
let lastGameId          = null;
let currentDetailFoodId = null;
let inDeepDive          = false;
let gameQueue           = [];

/* ============================================================
   UTILITY
   ============================================================ */

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function $(id) { return document.getElementById(id); }

/* ============================================================
   FILTERING
   ============================================================ */

function filterFoods() {
  const term = currentSearch.toLowerCase().trim();
  return foodData.filter(f => {
    const groupMatch = currentGroup === 'all' || f.group === currentGroup;
    if (!groupMatch) return false;
    if (!term) return true;
    const haystack = [f.name, f.group, ...f.searchKeywords].join(' ').toLowerCase();
    return haystack.includes(term);
  });
}

/* ============================================================
   RENDER CARDS
   ============================================================ */

function renderCards() {
  const grid      = $('food-grid');
  const noResults = $('no-results');
  const foods     = filterFoods();

  grid.innerHTML = '';

  if (foods.length === 0) {
    noResults.textContent = '🔍 No foods found for "' + currentSearch + '". Try another word!';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  foods.forEach(food => {
    const cfg   = groupConfig[food.group] || {};
    const clue  = food.nutrientRoles[0] ? clueMap[food.nutrientRoles[0]] : null;

    const card  = document.createElement('button');
    card.className   = 'food-card ' + (cfg.cls || '');
    card.setAttribute('aria-label', food.name + ' — ' + food.group);
    card.dataset.id  = food.id;

    const clueHtml = clue
      ? '<span class="card-clue ' + clue.cls + '">' + safeText(clue.label) + '</span>'
      : '';

    card.innerHTML =
      '<span class="card-emoji" aria-hidden="true">' + food.emoji + '</span>' +
      '<span class="card-name">'  + safeText(food.name)  + '</span>' +
      '<span class="card-group">' + safeText(food.group) + '</span>' +
      clueHtml;

    card.addEventListener('click', () => openDetail(food.id));
    grid.appendChild(card);
  });
}

/* ============================================================
   DETAIL PANEL
   ============================================================ */

function openDetail(id) {
  const food = foodData.find(f => f.id === id);
  if (!food) return;

  currentDetailFoodId = id;
  inDeepDive          = false;

  const cfg  = groupConfig[food.group] || {};
  const body = $('detail-body');

  /* ── nutrient tags — clickable ── */
  const tagsHtml = food.nutrientRoles.map(r => {
    const esc = r.replace(/"/g, '&quot;');
    return '<button class="tag tag--link ' + (nutrientTagMap[r] || '') + '" data-nutrient-name="' + esc + '" aria-label="Learn about ' + esc + '">' + safeText(r) + ' ›</button>';
  }).join('');

  /* ── vitamins & minerals — clickable when deep-dive data exists ── */
  const vitItems = [...food.vitamins, ...food.minerals];
  const vitsHtml = vitItems.length
    ? vitItems.map(v => {
        const esc = v.replace(/"/g, '&quot;');
        return Object.prototype.hasOwnProperty.call(vitaminData, v)
          ? '<button class="vit-pill vit-pill--link" data-vit-name="' + esc + '" aria-label="Learn about ' + esc + '">' + safeText(v) + ' ›</button>'
          : '<span class="vit-pill">' + safeText(v) + '</span>';
      }).join('')
    : '<span class="vit-pill">None highlighted for this food</span>';

  /* ── benefits ── */
  const benefitsHtml = food.benefits.map(b => '<li>' + safeText(b) + '</li>').join('');

  /* ── daily note ── */
  const portionNote = food.portionNote
    ? '<p>' + safeText(food.portionNote) + '</p>'
    : '';

  const grpEsc = food.group.replace(/"/g, '&quot;');

  body.innerHTML =
    '<div class="detail-hero">' +
      '<span class="d-emoji" aria-hidden="true">' + food.emoji + '</span>' +
      '<h2 id="detail-name">' + safeText(food.name) + '</h2>' +
      '<button class="detail-group-badge ' + cfg.badge + '" data-grp-name="' + grpEsc + '" aria-label="Learn about ' + grpEsc + ' food group">' +
        safeText(food.group) + ' ›' +
      '</button>' +
    '</div>' +

    '<div class="detail-section">' +
      '<h3>What does it give your body?</h3>' +
      '<div class="tags">' + tagsHtml + '</div>' +
    '</div>' +

    '<div class="detail-section">' +
      '<h3>Vitamins and minerals</h3>' +
      '<p class="tap-hint">Tap a vitamin or mineral to learn more.</p>' +
      '<div class="vit-list">' + vitsHtml + '</div>' +
    '</div>' +

    '<div class="detail-section">' +
      '<h3>How can it help?</h3>' +
      '<ul class="benefit-list">' + benefitsHtml + '</ul>' +
    '</div>' +

    '<div class="detail-section">' +
      '<h3>How does it fit into the day?</h3>' +
      '<div class="daily-box">' +
        '<p>' + safeText(food.dailyGuidance) + '</p>' +
        portionNote +
      '</div>' +
    '</div>' +

    '<div class="detail-section">' +
      '<h3>🌟 Tiny food fact</h3>' +
      '<div class="fact-box">' + safeText(food.fact) + '</div>' +
    '</div>' +

    '<div class="detail-section">' +
      '<h3>💬 Talk about it</h3>' +
      '<div class="talk-box">' + safeText(food.discussionQuestion) + '</div>' +
    '</div>';

  /* navigation chrome */
  $('detail-back').classList.add('hidden');
  $('choose-another').classList.remove('hidden');

  const overlay = $('detail-overlay');
  overlay.classList.remove('hidden');
  overlay.scrollTop = 0;

  $('close-detail').focus();
  overlay.addEventListener('keydown', trapFocus);
}

function closeDetail() {
  const overlay = $('detail-overlay');
  overlay.classList.add('hidden');
  overlay.removeEventListener('keydown', trapFocus);
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const panel      = $('detail-overlay').querySelector('.detail-panel');
  const focusable  = [...panel.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )].filter(el => !el.disabled);
  if (!focusable.length) return;
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault(); last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault(); first.focus();
  }
}

/* ============================================================
   DEEP DIVE — VITAMIN / MINERAL
   ============================================================ */

function openVitaminDeepDive(name) {
  const data = vitaminData[name];
  if (!data) return;

  inDeepDive = true;

  /* foods that list this vitamin or mineral */
  const foods = foodData.filter(f =>
    f.vitamins.includes(name) || f.minerals.includes(name)
  );

  const foodChipsHtml = foods.length
    ? foods.map(f =>
        '<button class="food-chip" data-food-id="' + f.id + '" aria-label="View ' + safeText(f.name) + '">' +
          '<span aria-hidden="true">' + f.emoji + '</span>' + safeText(f.name) +
        '</button>'
      ).join('')
    : '<span style="font-size:0.88rem;color:#6b7280;">Not highlighted in our current foods.</span>';

  $('detail-body').innerHTML =
    '<div class="dd-hero">' +
      '<span class="dd-emoji" aria-hidden="true">' + data.emoji + '</span>' +
      '<h2 class="dd-name">' + safeText(name) + '</h2>' +
      '<span class="dd-bodypart">' + safeText(data.bodyPart) + '</span>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">What does it do?</h3>' +
      '<p class="dd-headline">' + safeText(data.headline) + '</p>' +
      '<ul class="dd-benefit-list">' +
        data.benefits.map(b => '<li>' + safeText(b) + '</li>').join('') +
      '</ul>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">Foods that contain it</h3>' +
      '<div class="dd-food-chips">' + foodChipsHtml + '</div>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">🌟 Did you know?</h3>' +
      '<div class="fact-box">' + safeText(data.fact) + '</div>' +
    '</div>';

  $('detail-back').classList.remove('hidden');
  $('choose-another').classList.add('hidden');

  const overlay = $('detail-overlay');
  if (overlay.classList.contains('hidden')) overlay.classList.remove('hidden');
  overlay.scrollTop = 0;
  $('detail-back').focus();
}

/* ============================================================
   DEEP DIVE — NUTRIENT ROLE (Carbohydrates / Protein / etc.)
   ============================================================ */

function openNutrientDeepDive(name) {
  const data = nutrientRoleData[name];
  if (!data) return;

  inDeepDive = true;

  const foods = foodData.filter(f => f.nutrientRoles.includes(name));

  const foodChipsHtml = foods.length
    ? foods.map(f =>
        '<button class="food-chip" data-food-id="' + f.id + '" aria-label="View ' + safeText(f.name) + '">' +
          '<span aria-hidden="true">' + f.emoji + '</span>' + safeText(f.name) +
        '</button>'
      ).join('')
    : '<span style="font-size:0.88rem;color:#6b7280;">None highlighted yet.</span>';

  $('detail-body').innerHTML =
    '<div class="dd-hero">' +
      '<span class="dd-emoji" aria-hidden="true">' + data.emoji + '</span>' +
      '<h2 class="dd-name">' + safeText(name) + '</h2>' +
      '<span class="dd-bodypart">' + safeText(data.bodyPart) + '</span>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">What is it?</h3>' +
      '<p class="dd-headline">' + safeText(data.headline) + '</p>' +
      '<p style="font-size:0.9rem;line-height:1.55;margin-top:0.4rem;color:#374151;">' + safeText(data.description) + '</p>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">How can it help?</h3>' +
      '<ul class="dd-benefit-list">' +
        data.benefits.map(b => '<li>' + safeText(b) + '</li>').join('') +
      '</ul>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">Foods that provide it</h3>' +
      '<div class="dd-food-chips">' + foodChipsHtml + '</div>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">🌟 Did you know?</h3>' +
      '<div class="fact-box">' + safeText(data.fact) + '</div>' +
    '</div>';

  $('detail-back').classList.remove('hidden');
  $('choose-another').classList.add('hidden');

  const overlay = $('detail-overlay');
  if (overlay.classList.contains('hidden')) overlay.classList.remove('hidden');
  overlay.scrollTop = 0;
  $('detail-back').focus();
}

/* ============================================================
   DEEP DIVE — FOOD GROUP
   ============================================================ */

function openGroupDeepDive(name) {
  const data = groupPageData[name];
  if (!data) return;

  inDeepDive = true;

  const foods = foodData.filter(f => f.group === name);

  const foodChipsHtml = foods
    .map(f =>
      '<button class="food-chip" data-food-id="' + f.id + '" aria-label="View ' + safeText(f.name) + '">' +
        '<span aria-hidden="true">' + f.emoji + '</span>' + safeText(f.name) +
      '</button>'
    ).join('');

  $('detail-body').innerHTML =
    '<div class="dd-hero">' +
      '<span class="dd-emoji" aria-hidden="true">' + data.emoji + '</span>' +
      '<h2 class="dd-name">' + safeText(name) + '</h2>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">Why do we eat these foods?</h3>' +
      '<p class="dd-headline">' + safeText(data.headline) + '</p>' +
      '<ul class="dd-benefit-list">' +
        data.whyWeEat.map(b => '<li>' + safeText(b) + '</li>').join('') +
      '</ul>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">How much?</h3>' +
      '<div class="daily-box">' + safeText(data.portionGuidance) + '</div>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">Foods in this group</h3>' +
      '<div class="dd-food-chips">' + foodChipsHtml + '</div>' +
    '</div>' +

    '<div class="dd-section">' +
      '<h3 class="dd-section-title">🌟 Did you know?</h3>' +
      '<div class="fact-box">' + safeText(data.fact) + '</div>' +
    '</div>';

  $('detail-back').classList.remove('hidden');
  $('choose-another').classList.add('hidden');

  const overlay = $('detail-overlay');
  if (overlay.classList.contains('hidden')) overlay.classList.remove('hidden');
  overlay.scrollTop = 0;
  $('detail-back').focus();
}

/* ============================================================
   FILTER BUTTONS
   ============================================================ */

function setGroupFilter(group) {
  currentGroup = group;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const isActive = btn.dataset.group === group;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  renderCards();
}

/* ============================================================
   GAME
   ============================================================ */

const gameGroups = [
  { name: 'Fruit and vegetables',   emoji: '🥦', cls: 'grp-fruit'     },
  { name: 'Starchy carbohydrates',  emoji: '🍞', cls: 'grp-carbs'     },
  { name: 'Protein foods',          emoji: '🥚', cls: 'grp-protein'   },
  { name: 'Dairy and alternatives', emoji: '🥛', cls: 'grp-dairy'     },
  { name: 'Oils and spreads',       emoji: '🫒', cls: 'grp-oils'      },
  { name: 'Foods to enjoy less often', emoji: '🍪', cls: 'grp-sometimes' }
];

let currentGameFood = null;

function shuffleGameQueue() {
  /* Fisher-Yates shuffle of every food id */
  const ids = foodData.map(f => f.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  /* Avoid the last-shown food appearing first in the new deck */
  if (lastGameId && ids[0] === lastGameId && ids.length > 1) {
    [ids[0], ids[1]] = [ids[1], ids[0]];
  }
  gameQueue = ids;
}

function pickGameFood() {
  if (gameQueue.length === 0) shuffleGameQueue();
  const id = gameQueue.shift();
  return foodData.find(f => f.id === id);
}

function startGame() {
  gameQueue  = [];   // always deal a fresh full deck on game start
  lastGameId = null;
  $('game-intro').classList.add('hidden');
  $('game-play').classList.remove('hidden');
  nextGameFood();
}

function nextGameFood() {
  currentGameFood = pickGameFood();
  lastGameId      = currentGameFood.id;

  $('game-food').innerHTML =
    '<span class="gf-emoji" aria-hidden="true">' + currentGameFood.emoji + '</span>' +
    '<span class="gf-name">' + safeText(currentGameFood.name) + '</span>';

  const choicesEl = $('game-choices');
  choicesEl.innerHTML = '';

  gameGroups.forEach(grp => {
    const btn = document.createElement('button');
    btn.className = 'game-choice-btn';
    btn.setAttribute('aria-label', 'Choose: ' + grp.name);
    btn.dataset.group = grp.name;
    btn.innerHTML =
      '<span class="choice-emoji" aria-hidden="true">' + grp.emoji + '</span>' +
      safeText(grp.name);
    btn.addEventListener('click', () => checkAnswer(grp.name));
    choicesEl.appendChild(btn);
  });

  $('game-feedback').classList.add('hidden');
  $('game-feedback').className = 'game-feedback hidden';
  $('next-food').classList.add('hidden');
}

function checkAnswer(chosen) {
  const correct  = currentGameFood.group;
  const isMatch  = chosen === correct;
  const feedback = $('game-feedback');
  const nextBtn  = $('next-food');

  /* disable all buttons */
  $('game-choices').querySelectorAll('.game-choice-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.group === correct) btn.classList.add('correct');
    else                               btn.classList.add('wrong');
  });

  if (isMatch) {
    feedback.textContent  = 'That matches! This food belongs to: ' + correct + ' ' + (groupConfig[correct]?.emoji || '');
    feedback.className    = 'game-feedback feedback-match';
  } else {
    feedback.textContent  = 'Let\'s look together. This food belongs to: ' + correct + ' ' + (groupConfig[correct]?.emoji || '');
    feedback.className    = 'game-feedback feedback-look';
  }

  feedback.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
  nextBtn.focus();
}

/* ============================================================
   INIT & EVENT LISTENERS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* initial render */
  renderCards();

  /* search */
  $('food-search').addEventListener('input', e => {
    currentSearch = e.target.value;
    renderCards();
  });

  /* group filters */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setGroupFilter(btn.dataset.group));
  });

  /* detail close */
  $('close-detail').addEventListener('click', closeDetail);
  $('choose-another').addEventListener('click', closeDetail);

  /* back button — return to the food that was open */
  $('detail-back').addEventListener('click', () => {
    if (currentDetailFoodId) openDetail(currentDetailFoodId);
    else closeDetail();
  });

  /* event delegation for deep-dive clicks inside detail-body */
  $('detail-body').addEventListener('click', e => {
    const vitBtn      = e.target.closest('[data-vit-name]');
    const grpBtn      = e.target.closest('[data-grp-name]');
    const nutrientBtn = e.target.closest('[data-nutrient-name]');
    const chipBtn     = e.target.closest('[data-food-id]');
    if (vitBtn)           openVitaminDeepDive(vitBtn.dataset.vitName);
    else if (grpBtn)      openGroupDeepDive(grpBtn.dataset.grpName);
    else if (nutrientBtn) openNutrientDeepDive(nutrientBtn.dataset.nutrientName);
    else if (chipBtn)     openDetail(chipBtn.dataset.foodId);
  });

  /* close on overlay backdrop click */
  $('detail-overlay').addEventListener('click', e => {
    if (e.target === $('detail-overlay')) closeDetail();
  });

  /* close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('detail-overlay').classList.contains('hidden')) {
      closeDetail();
    }
  });

  /* game */
  $('start-game').addEventListener('click', startGame);
  $('next-food').addEventListener('click', nextGameFood);

});
