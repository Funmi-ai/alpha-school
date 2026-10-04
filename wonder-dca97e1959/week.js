// Wonder Hour: this week's wonders. Replace this file each Sunday; index.html stays the same.
window.WONDER_WEEK = {
  weekOf: "2026-10-05",
  label: "Week of 5 October",
  boxList: [
    { day: "Wed", item: "A mushroom", backups: ["a sealed bag with a bit of bread mould", "a sachet of dried yeast", "a photo of toadstools on a log"] }
  ],
  days: [
    {
      date: "2026-10-07",
      lens: "Object",
      interest: "Space",
      title: "Is a mushroom a plant?",
      thread: "A mushroom looks like it belongs with the plants, but it isn't one. And the real body of the fungus isn't the mushroom at all — it's hiding underground, and the biggest living thing ever found on Earth is one of these, spread for miles where nobody can see it.",
      tonight: ["Put a whole mushroom on the table, cap and stalk together. If you can't get one, use a sealed sandwich bag with a slice of bread growing mould, a sachet of dried yeast, or a photo of toadstools on a log.", "Have a magnifying glass or torch ready, for looking underneath the cap.", "Leave paper and a pencil out for 0:40."],
      need: ["A mushroom (or a backup)", "A magnifying glass", "A torch", "Paper and a pencil"],
      beats: [
        {
          name: "Meet it", time: "0:00", mins: 5, heading: "The mushroom",
          say: "Don't tell me what it is yet. Turn it upside down and tell me what you see underneath the cap.",
          ask: ["What do those lines remind you of?", "Does it feel wet, dry, spongy or smooth?", "Where do you think it grows — on soil, on wood, or both?"]
        },
        {
          name: "Did you know", time: "0:05", mins: 5, heading: "The biggest living thing on Earth is a fungus you'll never see all of",
          say: "There's a fungus living underground in a forest in America that's older than the pyramids, and so big you could walk for miles without ever reaching the other side of it.",
          ask: ["How big do you think something could get and still be one single living thing?", "Last week we found out fungi break down fallen leaves into soil. What else do you think fungi might be doing underground, out of sight?"],
          pocket: "It's called Armillaria ostoyae, nicknamed the 'Humongous Fungus', living under the Blue Mountains in Oregon, USA. It covers more than 2,200 acres, that's bigger than 1,500 football pitches, and scientists think it could be thousands of years old. Almost all of it is underground, as thread-like strands called mycelium. The mushrooms you sometimes see poking up in a forest are just the small part on show, a bit like the tip of an iceberg.",
          source: { label: "Humongous Fungus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Humongous_Fungus" }
        },
        {
          name: "Explore", time: "0:10", mins: 15, heading: "What kind of living thing is a fungus?",
          say: "A mushroom isn't a plant, and it isn't an animal either. Let's work out why.",
          ask: ["Plants make their own food from sunlight. Does this mushroom look like it's been sitting in the sun?", "Animals move around to find their food. Does a mushroom do that?", "If it's not a plant and not an animal, what do you think it could be?"],
          pocket: "Fungi (that's the plural of fungus) get their own kingdom of life, separate from plants and animals. They can't make food from sunlight the way plants do, so instead they feed by breaking things down — wood, old leaves, even other living things. Yeast, the stuff that makes bread rise, and the mould that grows on old bread, are fungi too."
        },
        {
          name: "Wonder", time: "0:25", mins: 15, heading: "Could you build a house out of a mushroom?",
          say: "NASA, the people who send rockets to space, are growing houses out of the part of a fungus you can't see: the underground threads. Why would anyone want to build with fungus instead of bricks?",
          ask: ["It would cost a fortune to carry bricks all the way to Mars. What if astronauts could grow the walls instead?", "What might a 'living' house be able to do that a brick one can't?", "What do you think could go wrong with a house that's alive?"],
          pocket: "Fungus threads, mycelium, can be grown into almost any shape, and once dried out they get surprisingly strong, tougher ounce for ounce than concrete. NASA's plan is for astronauts to carry a packed, dried-up fungus kit to the Moon or Mars, add water, and let it grow into the walls of a home in a few days, far cheaper than carrying bricks from Earth.",
          source: { label: "NASA Ames: Could future homes on the Moon and Mars be made of fungi?", url: "https://www.nasa.gov/centers-and-facilities/ames/could-future-homes-on-the-moon-and-mars-be-made-of-fungi" }
        },
        {
          name: "Do", time: "0:40", mins: 15, heading: "Map the mushroom",
          say: "Let's draw what's really there, not just what we can see.",
          askLabel: "How",
          ask: ["Draw the mushroom you can see, above ground.", "Now draw what you think is underneath it, spreading out — that's the mycelium.", "Label the parts: cap, gills, stalk, mycelium.", "If your mycelium went on for miles like the Oregon one, where would it reach on a map you know — the end of the street? The next town?"],
          pocketLabel: "No mushroom? Mould instead",
          pocket: "Look at the bread mould through the sealed bag, without opening it, with the magnifying glass. Those fuzzy threads are mycelium too, exactly the same kind of thing as the underground network, just smaller and slower."
        }
      ],
      carry: "If the biggest living thing in the world is one you'd never notice, what else might be hiding in plain sight?"
    }
  ]
};
