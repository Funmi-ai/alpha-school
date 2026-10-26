// Wonder Hour: this week's wonders. Replace this file each Sunday; index.html stays the same.
window.WONDER_WEEK = {
  weekOf: "2026-10-26",
  label: "Week of 26 October",
  boxList: [
    { day: "Wed", item: "A photo or video of the mouse", backups: ["a toy mouse", "a tape measure", "a torch"] }
  ],
  days: [
    {
      date: "2026-10-28",
      lens: "Happening now",
      interest: "Space",
      title: "How did it even get in?",
      thread: "The mouse you caught could probably have squeezed through a gap smaller than a pencil, and its faraway cousins have been living on a space station, discovering something scientists still can't explain.",
      tonight: ["Have the photo or video of the mouse ready, if you got one. If not, a toy mouse or just the tape measure will do; a house mouse is about 9cm long, not counting the tail.", "Have a torch ready for a house hunt after dark.", "Leave paper and a pencil out for 0:40."],
      need: ["A photo or video of the mouse (or a toy mouse)", "A tape measure", "A torch", "Paper and a pencil"],
      beats: [
        {
          name: "Meet it", time: "0:00", mins: 5, heading: "The mouse we caught",
          say: "Tell me the whole story again, right from the start. Where did you first see it, and what did it do?",
          ask: ["How big was it really? Show me with your hands, then let's check against the tape measure.", "Was it more scared of us, or were we more scared of it?"]
        },
        {
          name: "Did you know", time: "0:05", mins: 5, heading: "A mouse can get through a hole smaller than a pencil",
          say: "Our mouse got into the whole house through a gap somewhere. Guess how small that gap could have been.",
          ask: ["Hold your fingers apart to show me your guess.", "Why do you think something with a whole body can fit through somewhere so small?"],
          pocket: "A house mouse can squeeze through a gap about the width of a pencil, roughly 6 millimetres, because its skull can flex slightly and it has no rigid collarbone to get in the way. If the head fits, the rest of the mouse follows. That's why the advice is to seal any gap you could poke a pencil through.",
          source: { label: "CDC: How to Seal Up to Prevent Rodents", url: "https://www.cdc.gov/healthy-pets/rodent-control/seal-up.html" }
        },
        {
          name: "Explore", time: "0:10", mins: 15, heading: "Where's the gap in our house?",
          say: "Let's go on a hunt for every gap in this house that's pencil-sized or bigger.",
          ask: ["Walk round the skirting boards, doors and pipes with the torch.", "Hold a pencil up to any gap you find. Does it fit through?", "Which gap do you think our mouse actually used?"],
          pocket: "Mice come inside mostly for warmth and food, especially as it gets colder outside in autumn. They're most active at night, which is usually when they're spotted."
        },
        {
          name: "Wonder", time: "0:25", mins: 15, heading: "What are mice doing up in space?",
          say: "Our mouse's distant cousins have had a much bigger adventure. Some mice have lived on the International Space Station, 400km above us. And they did something scientists still can't fully explain.",
          ask: ["What do you think a mouse would do with no gravity, floating instead of walking?", "Why do you think scientists study mice in space instead of just studying astronauts?", "What's your best guess for why they'd start running in circles?"],
          pocket: "In 2014, NASA sent young mice to live on the International Space Station. Within about two weeks, the younger mice started running laps round the walls of their habitat, over and over, like tiny motorbike stunt riders. Scientists still aren't sure why: it might be exercise, it might be how they move in zero gravity, or it might be something no one's thought of yet. Older mice on the same mission never did it at all.",
          source: { label: "NASA: Quirky Circling Behavior in Mice Informs Research on Humans in Space", url: "https://www.nasa.gov/general/quirky-circling-behavior-in-mice-aboard-the-iss/" }
        },
        {
          name: "Do", time: "0:40", mins: 15, heading: "Mouse-proof the house",
          say: "Let's finish the job properly. Every gap you found gets marked.",
          askLabel: "How",
          ask: ["Draw a quick map of the house.", "Mark every gap you found on the hunt, even tiny ones.", "Pick one gap and decide what could safely block it.", "If you were a mouse looking for a way in, is there anywhere we haven't checked?"],
          pocketLabel: "Rather not go hunting again?",
          pocket: "Draw the mouse's whole adventure instead, from wherever it got in, through the house, to wherever you let it go."
        }
      ],
      carry: "If a creature that small can get anywhere in our house without us noticing, what else might be sharing our home that we've never seen?"
    }
  ]
};
