export function assetLoader() {
  loadSprite("grass", "../public/grass.png");
  loadSprite("blue_medium", "../public/blue_medium.png");
  loadSprite("brown_large", "../public/brown_large.png");
  loadSprite("brown_small", "../public/brown_small.png");
  loadSprite("glass_house", "../public/glass_house.png");
  loadSprite("green_small", "../public/green_small.png");
  loadSprite("rainbow", "../public/rainbow.png");
  loadSprite("windmill", "../public/windmill.png");
  loadSprite("lamp", "../public/lamp.png");
  loadSprite("tree_point", "../public/tree_point.png");
  loadSprite("tree_round", "../public/tree_round.png");

  loadSpriteAtlas("../public/pathway.png", {
    left_path: {
      x: 16,
      y: 16,
      width: 16,
      height: 16,
    },
    right_path: {
      x: 48,
      y: 16,
      width: 16,
      height: 16,
    },
    upper_path: {
      x: 32,
      y: 0,
      width: 16,
      height: 16,
    },
    upper_path_right: {
      x: 48,
      y: 0,
      width: 16,
      height: 16,
    },
    upper_path_left: {
      x: 16,
      y: 0,
      width: 16,
      height: 16,
    },
    lower_path: {
      x: 32,
      y: 32,
      width: 16,
      height: 16,
    },
    lower_path_left: {
      x: 16,
      y: 32,
      width: 16,
      height: 16,
    },
    lower_path_right: {
      x: 48,
      y: 32,
      width: 16,
      height: 16,
    },
    small_hori: {
      x: 32,
      y: 48,
      width: 16,
      height: 16,
    },
    small_hori_right: {
      x: 48,
      y: 48,
      width: 16,
      height: 16,
    },
    small_hori_left: {
      x: 16,
      y: 48,
      width: 16,
      height: 16,
    },
    small_vert: {
      x: 0,
      y: 16,
      width: 16,
      height: 16,
    },
    small_vert_end: {
      x: 0,
      y: 0,
      width: 16,
      height: 16,
    },
    small_vert_start: {
      x: 0,
      y: 32,
      width: 16,
      height: 16,
    },
    flat: {
      x: 32,
      y: 16,
      width: 16,
      height: 16,
    },
    dot: {
      x: 0,
      y: 48,
      width: 16,
      height: 16,
    },
  });
  loadSpriteAtlas("../public/fence.png", {
    upper_left: {
      x: 0,
      y: 0,
      width: 16,
      height: 16,
    },
    upper_mid: {
      x: 16,
      y: 0,
      width: 16,
      height: 16,
    },
    upper_right: {
      x: 32,
      y: 0,
      width: 16,
      height: 16,
    },
    lower_left: {
      x: 0,
      y: 32,
      width: 16,
      height: 16,
    },
    lower_mid: {
      x: 16,
      y: 32,
      width: 16,
      height: 16,
    },
    lower_right: {
      x: 32,
      y: 32,
      width: 16,
      height: 16,
    },
    mid_left: {
      x: 0,
      y: 16,
      width: 16,
      height: 16,
    },
    mid_right: {
      x: 32,
      y: 16,
      width: 16,
      height: 16,
    },
  });
  loadSpriteAtlas("../public/chars.png", {
    hero: {
      x: 0,
      y: 32,
      width: 160,
      height: 16,
      sliceX: 10,
      anims: {
        idle_down: { from: 0, to: 0 },
        idle_up: { from: 1, to: 1 },
        idle_side: { from: 2, to: 2 },
        run_down: { from: 4, to: 5, loop: true },
        run_up: { from: 6, to: 7, loop: true },
        run_side: { from: 8, to: 9, loop: true, speed: 12 },
      },
    },
  });
}
