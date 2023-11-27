import { SCALE_MULTIPLIER } from "../utils/calculations";

const SPEED = 120 / SCALE_MULTIPLIER();

export function movementController(player) {
  onKeyDown("w", () => {
    if (isKeyDown("a") || isKeyDown("s") || isKeyDown("d")) {
      return;
    }
    player.move(0, -SPEED);
  });
  onKeyPress("w", () => {
    if (isKeyDown("a") || isKeyDown("s") || isKeyDown("d")) {
      return;
    }
    player.play("run_up");
  });
  onKeyRelease("w", () => {
    if (isKeyDown("a") || isKeyDown("s") || isKeyDown("d")) {
      return;
    }
    player.play("idle_up");
  });
  //down movement
  onKeyDown("s", () => {
    if (isKeyDown("w") || isKeyDown("a") || isKeyDown("d")) {
      return;
    }
    player.move(0, SPEED);
  });
  onKeyPress("s", () => {
    if (isKeyDown("w") || isKeyDown("a") || isKeyDown("d")) {
      return;
    }
    player.play("run_down");
  });
  onKeyRelease("s", () => {
    if (isKeyDown("w") || isKeyDown("a") || isKeyDown("d")) {
      return;
    }
    player.play("idle_down");
  });
  // left movement
  onKeyDown("a", () => {
    if (isKeyDown("w") || isKeyDown("s") || isKeyDown("d")) {
      return;
    }
    player.move(-SPEED, 0);
    player.flipX = true;
  });
  onKeyPress("a", () => {
    if (isKeyDown("w") || isKeyDown("s") || isKeyDown("d")) {
      return;
    }
    player.play("run_side");
  });
  onKeyRelease("a", () => {
    if (isKeyDown("w") || isKeyDown("s") || isKeyDown("d")) {
      return;
    }
    player.play("idle_side");
  });
  // right movement
  onKeyDown("d", () => {
    if (isKeyDown("w") || isKeyDown("s") || isKeyDown("a")) {
      return;
    }
    player.move(SPEED, 0);
    player.flipX = false;
  });
  onKeyPress("d", () => {
    if (isKeyDown("w") || isKeyDown("s") || isKeyDown("a")) {
      return;
    }
    player.play("run_side");
  });
  onKeyRelease("d", () => {
    if (isKeyDown("w") || isKeyDown("s") || isKeyDown("a")) {
      return;
    }
    player.play("idle_side");
  });
}
