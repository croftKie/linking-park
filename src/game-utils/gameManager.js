import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
import { assetLoader } from "./assetLoader.js";
import { levels, levelOptions } from "./levelLoader.js";
import { charLoader } from "./charLoader.js";
import { movementController } from "./movementController.js";
import { collisionController } from "./collisionController.js";
import { SCALE_MULTIPLIER } from "../utils/calculations.js";

export function main(height, width, openLinks) {
  kaboom({
    width: 48 * 16,
    height: 26 * 16,
    scale: SCALE_MULTIPLIER(),
    canvas: document.querySelector(".game-content>canvas"),
  });

  assetLoader();

  scene("town", () => {
    setBackground(Color.fromHex("#5088d8"));

    // INIT LEVELS AND CHAR
    levels.forEach((level, index) => {
      if (index < 3) {
        addLevel(levels[index], levelOptions[index]);
      }
    });
    const player = charLoader();
    levels.forEach((level, index) => {
      if (index >= 3) {
        addLevel(levels[index], levelOptions[index]);
      }
    });

    if (false) {
      const music = play("forest_song", {
        volume: 0.2,
        loop: true,
      });
    }

    movementController(player);
    collisionController(player, openLinks);
  });

  go("town");
}
