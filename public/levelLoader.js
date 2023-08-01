export const levels = [
  [
    " []||     [] # #|#| ",
    " []#||    []   |#| ",
    " []#   {--+]  |#|| ",
    " []    (__+]~~~~~~~",
    "-+] ||||  []       ",
    "__)  |||| []  |||#  ",
    "  ~    || []    #  ",
    "  ~  ~~~  []  ~ |  ",
    " |~~~~~~~~[+---}   ",
    " |#  ~~~  (___+]   ",
    " #| |  #      []   ",
    "  |##  ||#|   []   ",
    "  ||#         [] |#",
  ],
];

export const levelOptions = [
  {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
      " ": () => [sprite("plain_grass"), area()],
      "|": () => [sprite("tall_grass"), area()],
      "#": () => [sprite("flower_grass"), area()],
      "[": () => [sprite("path_midleft"), area()],
      "]": () => [sprite("path_midright"), area()],
      "{": () => [sprite("path_topleft"), area()],
      "}": () => [sprite("path_topright"), area()],
      "(": () => [sprite("path_botleft"), area()],
      ")": () => [sprite("path_botright"), area()],
      "-": () => [sprite("path_top"), area()],
      _: () => [sprite("path_bot"), area()],
      "+": () => [sprite("path_mid"), area()],
      "~": () => [sprite("stone_path"), area()],
    },
  },
];
