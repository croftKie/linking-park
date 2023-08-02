export function assetLoader() {
  loadSpriteAtlas("../public/game-utils/assets/char/chars.png", {
    player: {
      x: 0,
      y: 32,
      width: 160,
      height: 16,
      sliceX: 10,
      anims: {
        idle_down: {
          from: 0,
          to: 0,
          speed: 2,
          loop: true,
        },
        idle_up: {
          from: 1,
          to: 1,
          speed: 2,
          loop: true,
        },
        idle_side: {
          from: 2,
          to: 2,
          speed: 2,
          loop: true,
        },
        run_down: {
          from: 4,
          to: 5,
          speed: 4,
          loop: true,
        },
        run_up: {
          from: 6,
          to: 7,
          speed: 4,
          loop: true,
        },
        run_side: {
          from: 8,
          to: 9,
          speed: 4,
          loop: true,
        },
      },
    },
  });

  loadSprite("house1", "../public/game-utils/assets/locations/house1.png");
  loadSprite("house2", "../public/game-utils/assets/locations/house2.png");
  loadSprite("villa", "../public/game-utils/assets/locations/villa.png");
  loadSprite("treehouse", "../public/game-utils/assets/locations/treehouse.png");
  loadSprite("lemon", "../public/game-utils/assets/locations/lemon.png");

  loadSprite("grass-plain", "../public/game-utils/assets/tileset/grass-plain.png");
  loadSprite("grass-long", "../public/game-utils/assets/tileset/grass-long.png");
  loadSprite("path", "../public/game-utils/assets/tileset/path.png");
}
