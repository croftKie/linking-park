export function locationLoader() {
  const house = add([
    sprite("house1"),
    area(),
    scale(0.2),
    pos(250, 100),
    body({ isStatic: true }),
    "item",
    "Folder One",
  ]);
  const house2 = add([
    sprite("house2"),
    area(),
    scale(0.2),
    pos(110, 10),
    body({ isStatic: true }),
    "item",
    "Folder Two",
  ]);
  const villa = add([
    sprite("villa"),
    area(),
    scale(0.15),
    pos(20, 80),
    body({ isStatic: true }),
    "item",
    "Folder Three",
  ]);
  const treehouse = add([
    sprite("treehouse"),
    area(),
    scale(0.15),
    pos(200, 0),
    body({ isStatic: true }),
    "item",
    "Folder Four",
  ]);
  const lemon = add([
    sprite("lemon"),
    area(),
    scale(0.2),
    pos(90, 30),
    body({ isStatic: true }),
    "item",
    "Folder Five",
  ]);
}
