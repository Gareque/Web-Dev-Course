var legendaryLords = [
  {
    faction: "Khorne",
    lords: ["Skarbrand", "Skulltaker", "Arbaal the Undefeated", "Skarr Bloodwrath", "Scylla Anfingrimm"]
  },
  {
    faction: "Nurgle",
    lords: ["Ku'gath Plaguefather", "Festus the Leechlord", "Tamurkhan", "Kayzk the Befouled", "Epidemius"]
  },
  {
    faction: "Tzeentch",
    lords: ["Kairos Fateweaver", "The Changeling", "Vilitch the Curseling"]
  },
  {
    faction: "Slaanesh",
    lords: ["N'Kari", "Azazel", "Sigvald the Magnificent"]
  },
  {
    faction: "Grand Cathay",
    lords: ["Miao Ying, the Storm Dragon", "Zhao Ming, the Iron Dragon", "Yuan Bo, the Jade Dragon"]
  },
  {
    faction: "Kislev",
    lords: ["Tzarina Katarin", "Kostaltyn", "Boris Ursus", "Mother Ostankya"]
  },
  {
    faction: "Ogre Kingdoms",
    lords: ["Greasus Goldtooth", "Skrag the Slaughterer", "Golgfag Maneater"]
  },
  {
    faction: "Chaos Dwarfs",
    lords: ["Astragoth Ironhand", "Drazhoath the Ashen", "Zhatan the Black"]
  },
  {
    faction: "Warriors of Chaos",
    lords: ["Archaon the Everchosen", "Be'lakor", "Kholek Suneater", "Valkia the Bloody"]
  },
  {
    faction: "Empire",
    lords: ["Karl Franz", "Volkmar the Grim", "Balthasar Gelt", "Markus Wulfhart", "Elspeth von Draken"]
  },
  {
    faction: "Dwarfs",
    lords: ["Thorgrim Grudgebearer", "Ungrim Ironfist", "Belegar Ironhammer", "Thorek Ironbrow", "Grombrindal", "Malakai Makaisson"]
  },
  {
    faction: "Vampire Counts",
    lords: ["Mannfred von Carstein", "Vlad von Carstein", "Isabella von Carstein", "Helman Ghorst"]
  },
  {
    faction: "Skaven",
    lords: ["Queek Headtaker", "Lord Skrolk", "Deathmaster Snikch", "Tretch Craventail", "Throt the Unclean"]
  },
  {
    faction: "Lizardmen",
    lords: ["Lord Mazdamundi", "Kroq-Gar", "Tehenhauin", "Gor-Rok", "Nakai the Wanderer", "Oxyotl"]
  },
  {
    faction: "High Elves",
    lords: ["Tyrion", "Teclis", "Alarielle the Radiant", "Alith Anar", "Eltharion the Grim"]
  },
  {
    faction: "Vampire Coast",
    lords: ["Luthor Harkon", "Count Noctilus", "Aranessa Saltspite", "Cylostra Direfin"]
  },
  {
    faction: "Dark Elves",
    lords: [
      "Malekith", "Morathi", "Crone Hellebron", "Malus Darkblade", "Lokhir Fellheart", "Rakarth"]
  },
  {
    faction: "Wood Elves",
    lords: ["Orion", "Durthu", "Sisters of Twilight", "Drycha"]
  },
  {
    faction: "Bretonnia",
    lords: ["Louen Leoncoeur", "Fay Enchantress", "Alberic de Bordeleaux", "Repanse de Lyonesse"]
  },
  {
    faction: "Greenskins",
    lords: ["Grimgor Ironhide", "Skarsnik", "Wurrzag da Great Green Prophet", "Azhag the Slaughterer", "Gorbad Ironclaw", "Snagla Grobspit"]
  },
  {
    faction: "Norsca",
    lords: ["Wulfrik the Wanderer", "Throgg"]
  },
  {
    faction: "Beastmen",
    lords: ["Khazrak the One-Eye", "Malagor the Dark Omen", "Morghur the Shadowgave", "Taurox the Brass Bull"]
  },
  {
    faction: "Tomb Kings",
    lords: ["Settra the Imperishable", "High Queen Khalida", "Grand Hierophant Khatep", "Arkhan the Black"]
  }
];

const raceIndex = Math.floor(Math.random() * legendaryLords.length);
var faction = legendaryLords[raceIndex].faction;
var lord = legendaryLords[raceIndex].lords.length;
console.log(lord);