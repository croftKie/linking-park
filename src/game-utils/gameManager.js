import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
import { assetLoader } from "./assetLoader.js";
import { levels, levelOptions } from "./levelLoader.js";
import { charLoader } from "./charLoader.js";
import { movementController } from "./movementController.js";
import { collisionController } from "./collisionController.js";
import { locationLoader } from "./locationLoader.js";
import { decorationLoader } from "./decorationLoader.js";

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
    locationLoader(width, height);
    // decorationLoader();
    const player = charLoader();
    movementController(player);
    collisionController(player, openLinks);
  });

  go("town");
}
