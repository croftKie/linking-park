import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
import { assetLoader } from "./assetLoader.js";
import { levels, levelOptions } from "./levelLoader.js";
import { charLoader } from "./charLoader.js";
import { movementController } from "./movementController.js";
import { collisionController } from "./collisionController.js";
import { locationLoader } from "./locationLoader.js";
import { decorationLoader } from "./decorationLoader.js";

kaboom({
  width: 300,
  height: 190,
  scale: 4,
  canvas: document.querySelector("canvas"),
});

assetLoader();

scene("town", () => {
  // const groundTiles = addLevel(levels[0], levelOptions[0]);
  locationLoader();
  decorationLoader();

  const player = charLoader();
  movementController(player);
  collisionController(player);
});

go("town");
