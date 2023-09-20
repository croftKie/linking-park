export function collisionController(player, openLinks) {
  onCollide("player", "item", (p, h) => {
    const name = Object.keys(h.inspect())[6];
    const loadingText = add([
      text(`Press E to open your tabs`, {
        size: 30,
      }),
      pos(width() / 2, height() - 16),
      anchor("center"),
    ]);
    const click = onKeyPress("e", () => {
      openLinks(name);
    });
    onCollideEnd("player", "item", () => {
      loadingText.destroy();
      click.cancel();
    });
  });
}
