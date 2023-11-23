import { levels } from "../game-utils/levelLoader";

// exportable calcuations
export function SCALE_MULTIPLIER() {
  const DEFAULT_HEIGHT = 26 * 16;
  const DEFAULT_WIDTH = 48 * 16;
  const USER_HEIGHT = window.innerHeight;
  const USER_WIDTH = window.innerWidth;

  const height_scale = 1 + (0.95 - DEFAULT_HEIGHT / USER_HEIGHT);
  const width_scale = 1 + (0.95 - DEFAULT_WIDTH / USER_WIDTH);

  return (height_scale + width_scale) / 2;
}
