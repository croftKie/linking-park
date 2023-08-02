export function locationLoader() {
  const house = add([
    sprite("house1"),
    area(),
    scale(0.3),
    pos(505, 200),
    body({ isStatic: true }),
    "item",
    "Folder One",
  ]);
  const house2 = add([
    sprite("house2"),
    area(),
    scale(0.25),
    pos(275, 10),
    body({ isStatic: true }),
    "item",
    "Folder Two",
  ]);
  const villa = add([
    sprite("villa"),
    area(),
    scale(0.15),
    pos(142.5, 150),
    body({ isStatic: true }),
    "item",
    "Folder Three",
  ]);
  const treehouse = add([
    sprite("treehouse"),
    area(),
    scale(0.25),
    pos(450, 0),
    body({ isStatic: true }),
    "item",
    "Folder Four",
  ]);
  const lemon = add([
    sprite("lemon"),
    area(),
    scale(0.2),
    pos(250, 40),
    body({ isStatic: true }),
    "item",
    "Folder Five",
  ]);
}
