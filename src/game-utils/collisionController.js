export function collisionController(player, openLinks) {
  onCollide("player", "item", (p, h) => {
    const spot_name = Object.keys(h.inspect()).find((element) =>
      element.includes("spot")
    );
    const background = add([
      pos(width() / 2, height() - 80),
      anchor("center"),
      rect(600, 80, { radius: 20 }),
      color(146, 227, 169),
      outline(2, Color.fromHex("FFFFFF")),
      opacity(1),
    ]);
    const text_text = add([
      text(`My ${spot_name} Tabs... (Click E)`, {
        size: 23,
      }),
      pos(width() / 2 + 30, height() - 80),
      anchor("center"),
    ]);
    const portrait = add([
      sprite("boy"),
      anchor("center"),
      scale(2),
      pos(width() / 2 - 220, height() - 80),
    ]);
    const click = onKeyPress("e", () => {
      openLinks(spot_name);
    });
    onCollideEnd("player", "item", () => {
      text_text.destroy();
      portrait.destroy();
      background.destroy();
      click.cancel();
    });
  });
}
