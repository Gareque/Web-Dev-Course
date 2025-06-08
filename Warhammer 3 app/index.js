const legendaryLords = [
  {
    faction: "Khorne",
    lords: ["Skarbrand", "Skulltaker"]
  },
  {
    faction: "Nurgle",
    lords: ["Ku'gath Plaguefather", "Festus the Leechlord"]
  }
];

const randomIndex = Math.floor(Math.random() * legendaryLords.length);
const Faction = legendaryLords[randomIndex].faction;

console.log("Random faction:", Faction);