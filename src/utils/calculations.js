// exportable calcuations
export function SCALE_MULTIPLIER() {
  const DEFAULT_HEIGHT = 934;
  const DEFAULT_WIDTH = 1707;
  const USER_HEIGHT = window.innerHeight;
  const USER_WIDTH = window.innerWidth;

  if (DEFAULT_WIDTH === USER_WIDTH && DEFAULT_HEIGHT === USER_HEIGHT) {
    return 1;
  } else {
    return 1 - (DEFAULT_WIDTH - USER_WIDTH) / USER_WIDTH;
  }
}
