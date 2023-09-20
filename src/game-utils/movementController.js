export function movementController(player) {
  onKeyDown("w", () => {
    player.move(0, -150);
  });
  onKeyPress("w", () => {
    player.play("run_up");
  });
  onKeyRelease("w", () => {
    player.play("idle_up");
  });
  //down movement
  onKeyDown("s", () => {
    player.move(0, 150);
  });
  onKeyPress("s", () => {
    player.play("run_down");
  });
  onKeyRelease("s", () => {
    player.play("idle_down");
  });
  // left movement
  onKeyDown("a", () => {
    player.move(-150, 0);
    player.flipX = true;
  });
  onKeyPress("a", () => {
    player.play("run_side");
  });
  onKeyRelease("a", () => {
    player.play("idle_side");
  });
  // right movement
  onKeyDown("d", () => {
    player.move(150, 0);
    player.flipX = false;
  });
  onKeyPress("d", () => {
    player.play("run_side");
  });
  onKeyRelease("d", () => {
    player.play("idle_side");
  });
}
