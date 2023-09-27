export function assetLoader() {
  loadSprite("grass", "./game/grass.png");
  loadSprite("blue_medium", "./game/blue_medium.png");
  loadSprite("brown_large", "./game/brown_large.png");
  loadSprite("brown_small", "./game/brown_small.png");
  loadSprite("glass_house", "./game/glass_house.png");
  loadSprite("green_small", "./game/green_small.png");
  loadSprite("rainbow", "./game/rainbow.png");
  loadSprite("windmill", "./game/windmill.png");
  loadSprite("lamp", "./game/lamp.png");
  loadSprite("tree_point", "./game/tree_point.png");
  loadSprite("tree_round", "./game/tree_round.png");
  loadSprite("boy", "./game/Boy.png");

  loadSpriteAtlas("./game/pathway.png", {
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
  loadSpriteAtlas("./game/chars.png", {
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
  loadSpriteAtlas("./game/flowers_rocks.png", {
    tree_stump: {
      x: 16,
      y: 0,
      width: 16,
      height: 16,
    },
    rock_one: {
      x: 16 * 4,
      y: 16 * 3,
      width: 16,
      height: 16,
    },
    purple_flower: {
      x: 16 * 4,
      y: 16 * 4,
      width: 16,
      height: 16,
    },
    blue_flower: {
      x: 16 * 5,
      y: 16 * 5,
      width: 16,
      height: 16,
    },
    bush: {
      x: 16,
      y: 16,
      width: 16,
      height: 16,
    },
  });

  loadSound("forest_song", "./game/forest_song.mp3");
}
