export const levels = [
  [
    "               oo        ",
    "               oo        ",
    "               oo        ",
    "          ooooooo        ",
    "               oo        ",
    "               oo        ",
    "               oo        ",
    "               oo        ",
    "               oo        ",
    "               oo        ",
    "      ooo      oo        ",
    "        o      oo     o  ",
    "        o      oo     o  ",
    "ooooooooooooooooooooooooo",
    "ooooooooooooooooooooooooo",
    "   oo                    ",
    "   oo                    ",
  ],
];

export const levelOptions = [
  {
    tileWidth: 24,
    tileHeight: 24,
    tiles: {
      " ": () => [sprite("grass-plain"), area(), scale(0.5)],
      "=": () => [sprite("grass-long"), area(), scale(0.5)],
      o: () => [sprite("path"), area(), scale(0.5)],
    },
  },
];
