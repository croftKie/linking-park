import { SCALE_MULTIPLIER } from "../utils/calculations";

export function locationLoader(width, height) {
  const blue_medium_shadow = add([
    pos(1490 * SCALE_MULTIPLIER(), 710 * SCALE_MULTIPLIER()),
    anchor("bot"),
    rect(205 * SCALE_MULTIPLIER(), 40 * SCALE_MULTIPLIER()),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const blue_medium = add([
    sprite("blue_medium"),
    area({ scale: [0.9, 0.35] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(1490 * SCALE_MULTIPLIER(), 710 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "blue_medium",
  ]);
  const brown_large = add([
    sprite("brown_large"),
    area({ scale: [0.9, 0.55] }),
    anchor("bot"),
    scale(2.5 * SCALE_MULTIPLIER()),
    pos(220 * SCALE_MULTIPLIER(), 750 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "brown_large",
  ]);
  const brown_small_shadow = add([
    pos(210 * SCALE_MULTIPLIER(), 155 * SCALE_MULTIPLIER()),
    anchor("bot"),
    rect(170, 45),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const brown_small = add([
    sprite("brown_small"),
    area({ scale: [0.9, 0.35] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(210 * SCALE_MULTIPLIER(), 155 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "brown_small",
  ]);
  const glass_house_shadow = add([
    pos(760 * SCALE_MULTIPLIER(), 190 * SCALE_MULTIPLIER()),
    anchor("bot"),
    rect(220, 65),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const glass_house = add([
    sprite("glass_house"),
    area({ scale: [0.9, 0.35] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(760 * SCALE_MULTIPLIER(), 190 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "glass_house",
  ]);
  const green_small_shadow = add([
    pos(740 * SCALE_MULTIPLIER(), 520 * SCALE_MULTIPLIER()),
    anchor("bot"),
    rect(120, 65),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const green_small = add([
    sprite("green_small"),
    area({ scale: [0.9, 0.35] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(740 * SCALE_MULTIPLIER(), 520 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "green_small",
  ]);
  const rainbow_shadow = add([
    pos(1500 * SCALE_MULTIPLIER(), 480 * SCALE_MULTIPLIER()),
    anchor("bot"),
    rect(120, 65),
    color(30, 30, 30),
    opacity(0.1),
    area(),
  ]);
  const rainbow = add([
    sprite("rainbow"),
    area({ scale: [0.9, 0.35] }),
    anchor("bot"),
    scale(1.5 * SCALE_MULTIPLIER()),
    pos(1500 * SCALE_MULTIPLIER(), 480 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "rainbow",
  ]);
  const windmill_shadow = add([
    pos(1582 * SCALE_MULTIPLIER(), 240 * SCALE_MULTIPLIER()),
    anchor("bot"),
    rect(100, 65),
    color(30, 30, 30),
    opacity(0.1),
  ]);
  const windmill = add([
    sprite("windmill"),
    area({ scale: [0.6, 0.35] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(1582 * SCALE_MULTIPLIER(), 240 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
    "item",
    "windmill",
  ]);
  const lamp_one = add([
    sprite("lamp"),
    area({ scale: [0.9, 0.2] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(500 * SCALE_MULTIPLIER(), 300 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
  ]);
  const lamp_two = add([
    sprite("lamp"),
    area({ scale: [0.9, 0.2] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(500 * SCALE_MULTIPLIER(), 400 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
  ]);
  const lamp_three = add([
    sprite("lamp"),
    area({ scale: [0.9, 0.2] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(500 * SCALE_MULTIPLIER(), 680 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
  ]);
  const lamp_four = add([
    sprite("lamp"),
    area({ scale: [0.9, 0.2] }),
    anchor("bot"),
    scale(2 * SCALE_MULTIPLIER()),
    pos(750 * SCALE_MULTIPLIER(), 780 * SCALE_MULTIPLIER()),
    body({ isStatic: true }),
  ]);
}
