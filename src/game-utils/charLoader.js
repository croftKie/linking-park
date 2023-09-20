import { SCALE_MULTIPLIER } from "../utils/calculations";
export const charLoader = () => {
  return add([
    pos(width() / 2, height() / 2 - 60),
    sprite("hero"),
    area({ shape: new Rect(vec2(0), 16, 16) }),
    anchor("bot"),
    body(),
    scale(2.5 * SCALE_MULTIPLIER()),
    "player",
  ]);
};
