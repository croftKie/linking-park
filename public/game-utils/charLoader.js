export const charLoader = () => {
  return add([
    pos(width() / 2, height() / 2),
    sprite("player"),
    area({ shape: new Rect(vec2(0), 16, 16) }),
    anchor("bot"),
    body(),
    scale(0.8),
    "player",
  ]);
};
