import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
import { assetLoader } from "./assetLoader.js";
import { levels, levelOptions } from "./levelLoader.js";
import { charLoader } from "./charLoader.js";
import { movementController } from "./movementController.js";
import { collisionController } from "./collisionController.js";
import { locationLoader } from "./locationLoader.js";

export function main(height, width, openLinks) {
  kaboom({
    width: width,
    height: height,
    scale: 1,
    canvas: document.querySelector("canvas"),
  });

  assetLoader();

  scene("town", () => {
    setBackground(Color.fromHex("#509B66"));
    const groundTiles = addLevel(levels[0], levelOptions[0]);
    const player = charLoader();
    const TreeBoundrayLayer = addLevel(levels[1], levelOptions[1]);
    locationLoader(width, height);
    const innerTreeLayer = addLevel(levels[2], levelOptions[1]);

    if (true) {
      const music = play("forest_song", {
        volume: 0.8,
        loop: true,
      });
    }

    movementController(player);
    collisionController(player, openLinks);
  });

  go("town");
}
