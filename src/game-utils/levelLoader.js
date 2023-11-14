import { SCALE_MULTIPLIER } from "../utils/calculations";
const SCALE = 2 * SCALE_MULTIPLIER();

export const levels = [
  [
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
  ],
  [
    "        WMME                                    ",
    "        WMME                                    ",
    "        WMME                                    ",
    "        WMME         211               WNNENNNNN",
    "        WMME        11                 WMMMMMMMM",
    "        WMME                           WMMMMMMMM",
    "        WMME                 WNE       WMMESSSSS",
    "    2   WMMENNNNNNNNNNNNNNNNNNMNNNNNNNNWMME     ",
    "   1    WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMME     ",
    "        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMME     ",
    "        WMMESSSSSSSSMSSSSSSSSSSSSSSSSSSWMME     ",
    "        WMME       WME                 WMME     ",
    "        WMME       WME                 WMME     ",
    "        WMME       WME                 WMME     ",
    "        WMME       WME    11           WMME     ",
    "        WSSE       WME     21          WMME     ",
    "                   WME       2         WMME     ",
    "                   WME                 WMME     ",
    "                   WME                 WMME     ",
    "                   WSE                 WMME     ",
    "        11                             WMME     ",
    "         21                            WMME     ",
    "       1112                            WMME     ",
    "                                       WMME     ",
    "                                       WMME     ",
  ],
  [
    "wNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNn",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "W                                              E",
    "sSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSe",
  ],
  [
    "                                                ",
    "    ABCD                     ABCD               ",
    "    EFGH         ABCD        EFGH               ",
    "    IJKL         EFGH        IJKL               ",
    "    MNOP         IJKL        MNOP               ",
    "    QRST         MNOP        QRST               ",
    "                 QRST                           ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                 ABCD           ",
    "                                 EFGH           ",
    "    ABCD                         IJKL           ",
    "    EFGH                         MNOP           ",
    "    IJKL                         QRST           ",
    "    MNOP                                        ",
    "    QRST              ABCD                      ",
    "                      EFGH                      ",
    "                      IJKL                      ",
    "                      MNOP                      ",
    "                      QRST                      ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
  ],
];

export const levelOptions = [
  {
    tileWidth: 32 * SCALE_MULTIPLIER(),
    tileHeight: 32 * SCALE_MULTIPLIER(),
    tiles: {
      " ": () => [sprite("MID_GRASS"), scale(SCALE)],
    },
  },
  {
    tileWidth: 32 * SCALE_MULTIPLIER(),
    tileHeight: 32 * SCALE_MULTIPLIER(),
    tiles: {
      W: () => [sprite("W"), scale(SCALE)],
      M: () => [sprite("MID"), scale(SCALE)],
      E: () => [sprite("E"), scale(SCALE)],
      S: () => [sprite("S"), scale(SCALE)],
      N: () => [sprite("N"), scale(SCALE)],
      1: () => [sprite("grass_one"), scale(SCALE)],
      2: () => [sprite("grass_two"), scale(SCALE)],
    },
  },
  {
    tileWidth: 32 * SCALE_MULTIPLIER(),
    tileHeight: 32 * SCALE_MULTIPLIER(),
    tiles: {
      N: () => [sprite("B_N"), scale(SCALE), area(), body({ isStatic: true })],
      S: () => [sprite("B_S"), scale(SCALE), area(), body({ isStatic: true })],
      E: () => [sprite("B_E"), scale(SCALE), area(), body({ isStatic: true })],
      W: () => [sprite("B_W"), scale(SCALE), area(), body({ isStatic: true })],
      n: () => [sprite("B_NE"), scale(SCALE), area(), body({ isStatic: true })],
      s: () => [sprite("B_SW"), scale(SCALE), area(), body({ isStatic: true })],
      e: () => [sprite("B_SE"), scale(SCALE), area(), body({ isStatic: true })],
      w: () => [sprite("B_NW"), scale(SCALE), area(), body({ isStatic: true })],
      1: () => [
        sprite("water"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
    },
  },
  {
    tileWidth: 32 * SCALE_MULTIPLIER(),
    tileHeight: 32 * SCALE_MULTIPLIER(),
    tiles: {
      A: () => [sprite("one_one"), scale(SCALE)],
      B: () => [sprite("one_two"), scale(SCALE)],
      C: () => [sprite("one_three"), scale(SCALE)],
      D: () => [sprite("one_four"), scale(SCALE)],
      E: () => [
        sprite("two_one"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      F: () => [
        sprite("two_two"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      G: () => [
        sprite("two_three"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      H: () => [
        sprite("two_four"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      I: () => [
        sprite("three_one"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      J: () => [
        sprite("three_two"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      K: () => [
        sprite("three_three"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      L: () => [
        sprite("three_four"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      M: () => [
        sprite("four_one"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      N: () => [
        sprite("four_two"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      O: () => [
        sprite("four_three"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      P: () => [
        sprite("four_four"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
      ],
      Q: () => [sprite("five_one"), scale(SCALE)],
      R: () => [
        sprite("five_two"),
        scale(SCALE),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_one",
      ],
      S: () => [sprite("five_three"), scale(SCALE)],
      T: () => [sprite("five_four"), scale(SCALE)],
    },
  },
];
