export function collisionController(player, openLinks) {
  onCollide("player", "item", (p, h) => {
    const name = Object.keys(h.inspect())[7];
    const background = add([
      pos(width() / 2, height() - 80),
      anchor("center"),
      rect(650, 80),
      color(30, 30, 30),
      opacity(0.75),
    ]);
    const text_text = add([
      text(`My X Tabs... (Click E to Open)`, {
        size: 30,
      }),
      pos(width() / 2 + 30, height() - 80),
      anchor("center"),
    ]);
    const portrait = add([
      sprite("boy"),
      anchor("center"),
      scale(2),
      pos(width() / 2 - 270, height() - 80),
    ]);
    const click = onKeyPress("e", () => {
      openLinks(name);
    });
    onCollideEnd("player", "item", () => {
      text_text.destroy();
      portrait.destroy();
      background.destroy();
      click.cancel();
    });
  });
}
