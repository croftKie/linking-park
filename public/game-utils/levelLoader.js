export const levels = [
  [
    "#######oo#####",
    "##==###oo##===",
    "#####oooo####=",
    "#######oo==###",
    "##==###oo=####",
    "#####==oo#####",
    "######=oo##o##",
    "oooooooooooooo",
  ],
];

export const levelOptions = [
  {
    tileWidth: 24,
    tileHeight: 24,
    tiles: {
      "#": () => [sprite("grass-plain"), area(), scale(0.5)],
      "=": () => [sprite("grass-long"), area(), scale(0.5)],
      o: () => [sprite("path"), area(), scale(0.5)],
    },
  },
];
