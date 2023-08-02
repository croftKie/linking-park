export function movementController(player) {
  onKeyDown("w", () => {
    player.move(0, -75);
  });
  onKeyPress("w", () => {
    player.play("run_up");
  });
  onKeyDown("s", () => {
    player.move(0, 75);
    player.play("run_down");
  });
  onKeyDown("a", () => {
    player.move(-75, 0);
    player.flipX = true;
    player.play("run_side");
  });
  onKeyDown("d", () => {
    player.move(75, 0);
    player.flipX = false;
    player.play("run_side");
  });
}
