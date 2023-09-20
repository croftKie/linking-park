export function locationLoader(width, height) {
  const blue_medium_shadow = add([
    pos(width * 0.81, height * 0.78),
    rect(205, 40),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const blue_medium = add([
    sprite("blue_medium"),
    area(),
    scale(2),
    pos(width * 0.81, height * 0.65),
    body({ isStatic: true }),
    "item",
    "blue_medium",
  ]);
  const brown_large = add([
    sprite("brown_large"),
    area(),
    scale(2.5),
    pos(width * 0.03, height * 0.53),
    body({ isStatic: true }),
    "item",
    "brown_large",
  ]);
  const brown_small_shadow = add([
    pos(width * 0.08, height * 0.16),
    rect(170, 45),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const brown_small = add([
    sprite("brown_small"),
    area(),
    scale(2),
    pos(width * 0.08, height * 0.04),
    body({ isStatic: true }),
    "item",
    "brown_small",
  ]);
  const glass_house_shadow = add([
    pos(width * 0.395, height * 0.19),
    rect(220, 65),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const glass_house = add([
    sprite("glass_house"),
    area(),
    scale(2),
    pos(width * 0.395, height * 0.1),
    body({ isStatic: true }),
    "item",
    "glass_house",
  ]);
  const green_small_shadow = add([
    pos(width * 0.41, height * 0.55),
    rect(120, 65),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const green_small = add([
    sprite("green_small"),
    area(),
    scale(2),
    pos(700, 440),
    body({ isStatic: true }),
    "item",
    "green_small",
  ]);
  const rainbow_shadow = add([
    pos(width * 0.865, height * 0.5),
    rect(120, 65),
    color(30, 30, 30),
    opacity(0.1),
    area(),
  ]);
  const rainbow = add([
    sprite("rainbow"),
    area(),
    scale(1.5),
    pos(width * 0.865, height * 0.44),
    body({ isStatic: true }),
    "item",
    "rainbow",
  ]);
  const windmill_shadow = add([
    pos(width * 0.915, height * 0.2),
    rect(100, 65),
    color(30, 30, 30),
    opacity(0.1),
    area(),
  ]);
  const windmill = add([
    sprite("windmill"),
    area(),
    scale(2),
    pos(width * 0.89, height * 0.025),
    body({ isStatic: true }),
    "item",
    "windmill",
  ]);
  const lamp_one = add([
    sprite("lamp"),
    area(),
    scale(2),
    pos(width * 0.2975, height * 0.28),
    body({ isStatic: true }),
  ]);
  const lamp_two = add([
    sprite("lamp"),
    area(),
    scale(2),
    pos(width * 0.2975, height * 0.45),
    body({ isStatic: true }),
  ]);
  const lamp_three = add([
    sprite("lamp"),
    area(),
    scale(2),
    pos(width * 0.2975, height * 0.69),
    body({ isStatic: true }),
  ]);
  const lamp_four = add([
    sprite("lamp"),
    area(),
    scale(2),
    pos(width * 0.44, height * 0.85),
    body({ isStatic: true }),
  ]);
  const tree_one = add([
    sprite("tree_round"),
    area(),
    scale(3),
    pos(width * 0.81, height * 0.455),
    body({ isStatic: true }),
  ]);
  const tree_two = add([
    sprite("tree_round"),
    area(),
    scale(3),
    pos(width * 0.175, height * 0.09),
    body({ isStatic: true }),
  ]);
  const tree_three = add([
    sprite("tree_round"),
    area(),
    scale(3),
    pos(width * 0.5, height * 0.7),
    body({ isStatic: true }),
  ]);
  const tree_four = add([
    sprite("tree_point"),
    area(),
    scale(3),
    pos(width * 0.15, height * 0.7),
    body({ isStatic: true }),
  ]);
  const tree_five = add([
    sprite("tree_point"),
    area(),
    scale(3),
    pos(width * 0.04, height * 0.7),
    body({ isStatic: true }),
  ]);
}
