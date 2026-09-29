// Wonder Hour: this week's wonders. Replace this file each Sunday; index.html stays the same.
window.WONDER_WEEK = {
  weekOf: "2026-09-28",
  label: "Week of 28 September",
  boxList: [
    { day: "Wed", item: "The leaf you already have" },
    { day: "Thu", item: "A feather", backups: ["a sycamore “helicopter”", "a paper aeroplane", "an empty cardboard box"] },
    { day: "Fri", item: "An alarm clock", backups: ["a wristwatch", "an egg timer", "a kitchen timer"] }
  ],
  days: [
    {
      date: "2026-09-30",
      lens: "Happening now",
      interest: "Numbers & time",
      title: "Why is the leaf changing colour?",
      thread: "The yellow in that leaf was there all summer, hidden. The tree is getting ready for winter because the Earth is tilting away from the Sun, and nobody knows for sure why some trees bother turning red.",
      tonight: ["Put the leaf on the table. There's nothing else to find.", "Have a torch and an orange (or the globe) nearby.", "Leave coats by the door for 0:40."],
      need: ["The leaf", "A torch", "An orange or the globe", "Paper and a pencil", "Coats"],
      beats: [
        {
          name: "Meet it", time: "0:00", mins: 5, heading: "The leaf",
          say: "Don't tell me what it is. Tell me every colour you can find in it. Look really closely.",
          ask: ["What does it feel like? Does it bend or snap?", "Hold it up to the window. What can you see now?"],
          optionsLabel: "What your leaf's colour tells you",
          options: [
            { name: "Still green", colour: "#4E8A3E", text: "Chlorophyll, the green stuff that makes food from sunlight, is still working. The tree hasn't shut this part down yet." },
            { name: "Yellow or orange", colour: "#E0A526", text: "These colours were in the leaf all summer, hidden under the green. They're the same colours that are in carrots." },
            { name: "Red or purple", colour: "#B23A3A", text: "This colour is new. The tree makes it in autumn, and nobody is sure why. That's the wonder at 0:25." },
            { name: "Brown", colour: "#7A5634", text: "Everything else has broken down, and what's left is tannin, the same stuff that makes tea brown." }
          ]
        },
        {
          name: "Did you know", time: "0:05", mins: 5, heading: "One leaf a second, for over a week",
          say: "A big oak tree can have hundreds of thousands of leaves, and it drops every one. If you picked up one leaf every second, with no sleeping and no eating, how long do you think it would take?",
          ask: ["Let them guess: an hour? A day? Then tell them: more than a week.", "How many seconds do you think are in one day? (86,400)", "Where do all those leaves go?"],
          pocket: "Estimates vary a lot with the size of the tree. Some put a large oak at around 700,000 leaves, and 700,000 seconds is just over 8 days. Oak leaves start to turn as early as August, and by December the tree is bare. Fallen leaves are eaten by worms, fungi and minibeasts, and become soil that feeds the tree next year.",
          source: { label: "Woodland Trust, English oak", url: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/" }
        },
        {
          name: "Explore", time: "0:10", mins: 15, heading: "How does a tree know it's autumn?",
          say: "The torch is the Sun and the orange is the Earth. Let's work out why it's getting dark earlier.",
          ask: ["Tilt the orange and walk it round the torch. Which half gets more light now?", "Have you noticed it's darker at bedtime than in the summer?", "A tree has no eyes and no calendar. How could it tell autumn is coming?"],
          pocket: "The Earth is tilted. Last week was the autumn equinox, when day and night are about the same length everywhere. From now until just before Christmas, nights in the UK get longer. Around now, each day is nearly four minutes shorter than the day before. Trees sense the longer nights, and cooler weather, and start shutting their leaves down to save energy for winter."
        },
        {
          name: "Wonder", time: "0:25", mins: 15, heading: "Why do some trees bother to make red?",
          say: "Here's something scientists are still arguing about. Yellow was hiding in the leaf all along. But red? The tree makes red brand new, just before the leaf falls off. Why would it bother?",
          ask: ["What's your best guess? There's no wrong one.", "If you were a scientist, how could you test your idea?", "Why doesn't every tree turn red?"],
          pocket: "There are two main ideas. One is that red works like sun cream, protecting the leaf while the tree pulls useful goodness back out of it. The other is that red is a warning sign to insects, like aphids, that this tree is well defended and not worth laying eggs on. Scientists have argued about this for more than 20 years, and both could be partly true. If the boys come up with a third idea, it's as good a starting point as any scientist's.",
          source: { label: "Red and yellow autumn leaves: hypotheses, agreements and disagreements (2022)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9804425/" }
        },
        {
          name: "Do", time: "0:40", mins: 15, heading: "Count a tree",
          say: "We can't count every leaf on a tree, but we can make a clever guess. Coats on.",
          askLabel: "How",
          ask: ["Pick one tree. Count the leaves on one small twig.", "Count how many twigs are on one branch.", "Count, or guess, how many branches there are.", "Multiply at the kitchen table. Write the answer somewhere you'll see it again."],
          pocketLabel: "Raining? Leaf drop test instead",
          pocket: "Drop the leaf, a flat sheet of paper and a scrunched-up ball of paper from the top of the stairs. Which falls slowest? Why does the leaf flutter and spin? Aeroplane designers study exactly this: how shape changes the way something moves through air."
        }
      ],
      carry: "A tree drops every leaf and grows all new ones in spring. So is it still the same tree?"
    },
    {
      date: "2026-10-01",
      lens: "Listen",
      interest: "Planes",
      title: "Can music fly?",
      thread: "A violin pretending to be a skylark, climbing higher and higher. It was written in 1914, the same year people were still working out how aeroplanes should fly, and both started by watching birds.",
      tonight: ["Put a feather on the table. If you can't find one, use a sycamore “helicopter”, a paper aeroplane or an empty cardboard box.", "Queue up Vaughan Williams, “The Lark Ascending”. You'll only play the first 6 minutes.", "Leave a stack of A4 paper out for paper planes."],
      need: ["A feather (or a backup)", "“The Lark Ascending” queued", "A4 paper", "A tape measure or long ruler"],
      beats: [
        {
          name: "Meet it", time: "0:00", mins: 5, heading: "A feather",
          say: "Hold it by the stem and wave it slowly through the air. Now wave it fast. What do you feel?",
          ask: ["Why is it so light?", "Run your finger along it the wrong way, then smooth it back. What happens?"],
          pocket: "Feathers are made of keratin, the same stuff as your fingernails. The little strands hook together like a zip, and a bird can “zip” them back together with its beak when they come apart. That's what happens when you smooth it back."
        },
        {
          name: "Did you know", time: "0:05", mins: 5, heading: "The first aeroplane pilots copied birds",
          say: "The Wright brothers, who flew the first aeroplane, spent ages watching birds. They noticed birds steer by twisting the tips of their wings. And the idea for how to copy it came from twisting an empty cardboard box.",
          ask: ["Show them: hold an empty box at both ends and twist it. See how one end tips up and the other down?", "Flap your arms. How would you turn left?"],
          pocket: "In 1899 Wilbur Wright was twisting a long, empty box in his bicycle shop and realised a wing could twist the same way. They called it “wing warping”. Four years later, in December 1903, their plane made the first powered flight. It lasted 12 seconds.",
          source: { label: "Wright brothers (Wikipedia)", url: "https://en.wikipedia.org/wiki/Wright_brothers" }
        },
        {
          name: "Explore", time: "0:10", mins: 15, heading: "Listen: “The Lark Ascending”",
          say: "This music is about a little bird called a skylark. Close your eyes. When do you think the bird takes off? When is it highest?",
          ask: ["Play the first 6 minutes. Then: what was the bird doing?", "Which instrument is the bird?", "Did it ever land?"],
          pocket: "Ralph Vaughan Williams started writing it in 1914. The story goes that while he was jotting notes on the coast, watching ships, a boy thought he was a spy writing secret code and reported him, and he was arrested. It's been voted Britain's favourite piece of classical music many times. The solo violin is the lark. Real skylarks sing as they climb, sometimes so high you can hear them but can't see them.",
          source: { label: "The Lark Ascending (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Lark_Ascending_(Vaughan_Williams)" }
        },
        {
          name: "Wonder", time: "0:25", mins: 15, heading: "How can music sound like flying?",
          say: "Nobody told you it was about a bird, and you still heard something flying. How did the music do that?",
          ask: ["What would music sound like if it were about a jumbo jet? Or a rocket?", "Can music be about something without any words?", "Why do you think the skylark sings while it's flying? Isn't that tiring?"],
          pocket: "There's no answer to how music makes pictures in our heads. It's one of the things people still argue about. Composers use tricks: notes climbing higher, getting quieter as something moves away, fast little notes for fluttering. Scientists think skylarks sing while climbing to show other birds how strong and fit they are, but a lot about birdsong is still being worked out."
        },
        {
          name: "Do", time: "0:40", mins: 15, heading: "The paper plane test",
          say: "Let's be the Wright brothers. Everyone makes two planes with different wings, and we measure which one flies furthest.",
          askLabel: "How",
          ask: ["Each child folds two planes: one with wide wings, one with narrow wings.", "Throw each one three times from the same spot.", "Measure how far it went and write it down.", "Try bending the wing tips up or down, like the Wright brothers. What happens?"],
          pocketLabel: "Quieter option",
          pocket: "Play the music again and ask them to draw the lark's flight as a line across the page, going up and down with the music."
        }
      ],
      carry: "If you could only use sounds, not words, how would you tell someone you were happy?"
    },
    {
      date: "2026-10-02",
      lens: "A big decision",
      interest: "Wildcard",
      title: "Should the clocks stop changing?",
      thread: "On Sunday 25 October, the whole country will change its clocks by an hour. Some people want to stop doing that. Politicians have been stuck on this decision for years, so today the boys get to decide.",
      tonight: ["Put an alarm clock on the table. If you haven't got one, use a wristwatch, an egg timer or a kitchen timer.", "Have the torch and the orange (or globe) ready again.", "Leave paper and crayons out for posters."],
      need: ["A clock (or a backup)", "The torch and orange", "Paper and crayons"],
      beats: [
        {
          name: "Meet it", time: "0:00", mins: 5, heading: "A clock",
          say: "Listen to it. Watch the hands, or the numbers. Who decided what time it is right now?",
          ask: ["What would happen if everyone's clock said something different?", "How did people know the time before clocks?"],
          pocket: "Before trains, every town in Britain kept its own time, set by the Sun. Bristol was about 10 minutes behind London. Railways made everyone agree on one time in the 1840s, because timetables didn't work otherwise."
        },
        {
          name: "Did you know", time: "0:05", mins: 5, heading: "Concorde landed before it took off",
          say: "There used to be a plane called Concorde that flew faster than sound. It left London at half past ten in the morning and landed in New York at half past nine. By the clocks, it arrived an hour before it set off.",
          ask: ["How is that possible?", "Did the passengers really travel back in time?"],
          pocket: "The flight took about three and a half hours. But New York's clocks are five hours behind London's, so the time on the clocks went backwards. Concorde stopped flying in 2003.",
          source: { label: "Concorde (Wikipedia)", url: "https://en.wikipedia.org/wiki/Concorde" }
        },
        {
          name: "Explore", time: "0:10", mins: 15, heading: "Why do we change the clocks?",
          say: "Let's use the torch and orange again. When it's morning here, where is it still night?",
          ask: ["Find New York on the orange or globe. Is it morning there yet?", "In winter it gets light late. Would you rather it was light for the walk to the park, or light after tea?"],
          pocket: "A builder called William Willett noticed people kept their curtains shut on bright summer mornings, and campaigned to move the clocks. He died in 1915. The next year, in 1916, Britain started British Summer Time to save coal during the First World War. The clocks go back on 25 October, so mornings get lighter and evenings get darker.",
          source: { label: "British Summer Time (Wikipedia)", url: "https://en.wikipedia.org/wiki/British_Summer_Time" }
        },
        {
          name: "Wonder", time: "0:25", mins: 15, heading: "Who wins and who loses?",
          say: "If we stopped changing the clocks, some people would be happy and some would be cross. Let's be them.",
          ask: ["You're a farmer who milks cows at dawn. What do you want?", "You're a child in Scotland walking to school. In winter, it might still be dark at 9 o'clock. What do you want?", "You're a shopkeeper, or a grandparent who likes evening walks. What do you want?", "If we stopped, which time should we keep for ever?"],
          pocket: "From 1968 to 1971, Britain tried keeping summer time all year round, then went back, partly because winter mornings in the north were so dark. In 2019 the European Parliament voted to stop changing the clocks, but the countries never agreed which time to keep, so nothing has changed. It's a real decision that's still stuck."
        },
        {
          name: "Do", time: "0:40", mins: 15, heading: "The family vote",
          say: "Each of you makes a poster for your side. Then we vote.",
          askLabel: "How",
          ask: ["Each child picks: keep changing, or stop.", "Make a poster with one reason, and one person it would help.", "Each gets one minute to make their case.", "Vote and count. Can anyone be convinced to change their mind?"],
          pocketLabel: "Friday ritual",
          pocket: "Before you finish, ask each child to find one object from the house or garden for next week. You get the weekend to look up its story."
        }
      ],
      carry: "If you could add one extra hour to one day of the year, which day would you choose, and what would you do with it?"
    }
  ]
};
