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
    "      22WMME        2           221      2      ",
    "     111WMME       11          11               ",
    "        WMME                      1  1          ",
    "        WMME         211               WNNENNNNN",
    "        WMME        11                 WMMMMMMMM",
    "        WMME                           WMMMMMMMM",
    "     MMMMMME   M            22         WMMESSSSS",
    "    2   WMMENNNMNNNNNNNNNNNNNNNNNNNNMNNWMME     ",
    "   1    WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMME     ",
    "        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMME     ",
    "        WMMESSSSSSSSMSSSSSSSSSSSSSSSSSSWMME     ",
    "    11  WMME       WME              222WMME     ",
    "     122WMME       WME             11  WMME   1 ",
    "       1WMME  22   WME                 WMME  2  ",
    "    MMMMMMME     1 WME    11           WMME     ",
    "    M   WSSE   222 WME     21          WMME     ",
    "    M          11  WME       2         WMME     ",
    "    M              WME                 WMME     ",
    "    M1 1           WME             22  WMMMMM   ",
    "    M 2            WME               11WMME  1  ",
    "    M12             M                  WMME   1 ",
    "    M               MMMMM              WMME     ",
    "    MMMMMMM                            WMME     ",
    "                   2             22    WMME     ",
    "                  11            11     WMME     ",
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
    "    ABCD                                        ",
    "    EFGH                                        ",
    "    IJKL                                        ",
    "    MNOP                                        ",
    "    QRST                                        ",
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
    "                      ABCD                      ",
    "                      EFGH                      ",
    "                      IJKL                      ",
    "                      MNOP                      ",
    "                       RST                      ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
  ],
  [
    "                                                ",
    "                                                ",
    "              ABC                               ",
    "              DEF                               ",
    "              GHI                               ",
    "              JKL                               ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                           abc  ",
    "                                           def  ",
    "                                           ghi  ",
    "                                           jkl  ",
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
    "                                                ",
    "                                                ",
    "                                  abcde         ",
    "                                  fghij         ",
    "                                  klmno         ",
    "                                  pqrst         ",
    "                                  uvwxy         ",
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
    "        ABCDE                                   ",
    "        FGHIJ                                   ",
    "        KLMNO                                   ",
    "        PQRST                                   ",
    "        UVWXY                                   ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
    "                                                ",
  ],
];

export const levelOptions = [
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      " ": () => [sprite("flat_grass")],
    },
  },
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      W: () => [sprite("path-3")],
      M: () => [sprite("path-4")],
      E: () => [sprite("path-5")],
      S: () => [sprite("path-7")],
      N: () => [sprite("path-1")],
      1: () => [sprite("grass-0")],
      2: () => [sprite("grass-1")],
    },
  },
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      N: () => [sprite("border-1"), area(), body({ isStatic: true })],
      S: () => [sprite("border-7"), area(), body({ isStatic: true })],
      E: () => [sprite("border-5"), area(), body({ isStatic: true })],
      W: () => [sprite("border-3"), area(), body({ isStatic: true })],
      n: () => [sprite("border-2"), area(), body({ isStatic: true })],
      s: () => [sprite("border-6"), area(), body({ isStatic: true })],
      e: () => [sprite("border-8"), area(), body({ isStatic: true })],
      w: () => [sprite("border-0"), area(), body({ isStatic: true })],
      1: () => [sprite("border-4"), area(), body({ isStatic: true })],
    },
  },
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      A: () => [sprite("mid_blue-0")],
      B: () => [sprite("mid_blue-1")],
      C: () => [sprite("mid_blue-2")],
      D: () => [sprite("mid_blue-3")],
      E: () => [sprite("mid_blue-4"), area(), body({ isStatic: true })],
      F: () => [sprite("mid_blue-5"), area(), body({ isStatic: true })],
      G: () => [sprite("mid_blue-6"), area(), body({ isStatic: true })],
      H: () => [sprite("mid_blue-7"), area(), body({ isStatic: true })],
      I: () => [sprite("mid_blue-8"), area(), body({ isStatic: true })],
      J: () => [sprite("mid_blue-9"), area(), body({ isStatic: true })],
      K: () => [sprite("mid_blue-10"), area(), body({ isStatic: true })],
      L: () => [sprite("mid_blue-11"), area(), body({ isStatic: true })],
      M: () => [sprite("mid_blue-12"), area(), body({ isStatic: true })],
      N: () => [sprite("mid_blue-13"), area(), body({ isStatic: true })],
      O: () => [sprite("mid_blue-14"), area(), body({ isStatic: true })],
      P: () => [sprite("mid_blue-15"), area(), body({ isStatic: true })],
      Q: () => [sprite("mid_blue-16")],
      R: () => [
        sprite("mid_blue-17"),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_one",
      ],
      S: () => [sprite("mid_blue-18")],
      T: () => [sprite("mid_blue-19")],
    },
  },
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      A: () => [sprite("mid_red-0")],
      B: () => [sprite("mid_red-1")],
      C: () => [sprite("mid_red-2")],
      D: () => [sprite("mid_red-3")],
      E: () => [sprite("mid_red-4"), area(), body({ isStatic: true })],
      F: () => [sprite("mid_red-5"), area(), body({ isStatic: true })],
      G: () => [sprite("mid_red-6"), area(), body({ isStatic: true })],
      H: () => [sprite("mid_red-7"), area(), body({ isStatic: true })],
      I: () => [sprite("mid_red-8"), area(), body({ isStatic: true })],
      J: () => [sprite("mid_red-9"), area(), body({ isStatic: true })],
      K: () => [sprite("mid_red-10"), area(), body({ isStatic: true })],
      L: () => [sprite("mid_red-11"), area(), body({ isStatic: true })],
      M: () => [sprite("mid_red-12"), area(), body({ isStatic: true })],
      N: () => [sprite("mid_red-13"), area(), body({ isStatic: true })],
      O: () => [sprite("mid_red-14"), area(), body({ isStatic: true })],
      P: () => [sprite("mid_red-15"), area(), body({ isStatic: true })],
      Q: () => [sprite("mid_red-16")],
      R: () => [
        sprite("mid_red-17"),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_two",
      ],
      S: () => [sprite("mid_red-18")],
      T: () => [sprite("mid_red-19")],
    },
  },
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      A: () => [sprite("small-0")],
      B: () => [sprite("small-1")],
      C: () => [sprite("small-2")],
      D: () => [sprite("small-3")],
      E: () => [sprite("small-4"), area(), body({ isStatic: true })],
      F: () => [sprite("small-5"), area(), body({ isStatic: true })],
      G: () => [sprite("small-6"), area(), body({ isStatic: true })],
      H: () => [sprite("small-7"), area(), body({ isStatic: true })],
      I: () => [sprite("small-8"), area(), body({ isStatic: true })],
      J: () => [sprite("small-9"), area(), body({ isStatic: true })],
      K: () => [sprite("small-10"), area(), body({ isStatic: true })],
      L: () => [
        sprite("small-11"),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_three",
      ],
      a: () => [sprite("small-12")],
      b: () => [sprite("small-13")],
      c: () => [sprite("small-14")],
      d: () => [sprite("small-15")],
      e: () => [sprite("small-16"), area(), body({ isStatic: true })],
      f: () => [sprite("small-17"), area(), body({ isStatic: true })],
      g: () => [sprite("small-18"), area(), body({ isStatic: true })],
      h: () => [sprite("small-19"), area(), body({ isStatic: true })],
      i: () => [sprite("small-20"), area(), body({ isStatic: true })],
      j: () => [sprite("small-21"), area(), body({ isStatic: true })],
      k: () => [sprite("small-22"), area(), body({ isStatic: true })],
      l: () => [
        sprite("small-23"),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_four",
      ],
    },
  },
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      A: () => [sprite("large-0")],
      B: () => [sprite("large-1")],
      C: () => [sprite("large-2")],
      D: () => [sprite("large-3")],
      E: () => [sprite("large-4"), area(), body({ isStatic: true })],
      F: () => [sprite("large-5"), area(), body({ isStatic: true })],
      G: () => [sprite("large-6"), area(), body({ isStatic: true })],
      H: () => [sprite("large-7"), area(), body({ isStatic: true })],
      I: () => [sprite("large-8"), area(), body({ isStatic: true })],
      J: () => [sprite("large-9"), area(), body({ isStatic: true })],
      K: () => [sprite("large-10"), area(), body({ isStatic: true })],
      L: () => [sprite("large-11"), area(), body({ isStatic: true })],
      M: () => [sprite("large-12"), area(), body({ isStatic: true })],
      N: () => [sprite("large-13"), area(), body({ isStatic: true })],
      O: () => [sprite("large-14"), area(), body({ isStatic: true })],
      P: () => [sprite("large-15"), area(), body({ isStatic: true })],
      Q: () => [sprite("large-16"), area(), body({ isStatic: true })],
      R: () => [sprite("large-17"), area(), body({ isStatic: true })],
      S: () => [sprite("large-18"), area(), body({ isStatic: true })],
      T: () => [sprite("large-19"), area(), body({ isStatic: true })],
      U: () => [sprite("large-20"), area(), body({ isStatic: true })],
      V: () => [sprite("large-21"), area(), body({ isStatic: true })],
      W: () => [
        sprite("large-22"),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_five",
      ],
      X: () => [sprite("large-23"), area(), body({ isStatic: true })],
      Y: () => [sprite("large-24"), area(), body({ isStatic: true })],
      a: () => [sprite("large-25")],
      b: () => [sprite("large-26")],
      c: () => [sprite("large-27")],
      d: () => [sprite("large-28")],
      e: () => [sprite("large-29"), area(), body({ isStatic: true })],
      f: () => [sprite("large-30"), area(), body({ isStatic: true })],
      g: () => [sprite("large-31"), area(), body({ isStatic: true })],
      h: () => [sprite("large-32"), area(), body({ isStatic: true })],
      i: () => [sprite("large-33"), area(), body({ isStatic: true })],
      j: () => [sprite("large-34"), area(), body({ isStatic: true })],
      k: () => [sprite("large-35"), area(), body({ isStatic: true })],
      l: () => [sprite("large-36"), area(), body({ isStatic: true })],
      m: () => [sprite("large-37"), area(), body({ isStatic: true })],
      n: () => [sprite("large-38"), area(), body({ isStatic: true })],
      o: () => [sprite("large-39"), area(), body({ isStatic: true })],
      p: () => [sprite("large-40"), area(), body({ isStatic: true })],
      q: () => [sprite("large-41"), area(), body({ isStatic: true })],
      r: () => [sprite("large-42"), area(), body({ isStatic: true })],
      s: () => [sprite("large-43"), area(), body({ isStatic: true })],
      t: () => [sprite("large-44"), area(), body({ isStatic: true })],
      u: () => [sprite("large-45"), area(), body({ isStatic: true })],
      v: () => [sprite("large-46"), area(), body({ isStatic: true })],
      w: () => [
        sprite("large-47"),
        area(),
        body({ isStatic: true }),
        "item",
        "spot_six",
      ],
      x: () => [sprite("large-48"), area(), body({ isStatic: true })],
      y: () => [sprite("large-49"), area(), body({ isStatic: true })],
    },
  },
];
