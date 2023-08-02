export function collisionController() {
  onCollide("player", "item", (p, h) => {
    const name = Object.keys(h.inspect())[6];
    const loadingText = add([
      text(`Press E to open your ${name} Tabs`, {
        size: 10,
      }),
      pos(width() / 2, height() - 16),
      anchor("center"),
    ]);
    const click = onKeyPress("e", () => {
      onClick(name, loadingText);
    });
    onCollideEnd("player", "item", () => {
      loadingText.destroy();
      click.cancel();
    });
  });
}

// COllISION UTILITY FUNCTIONS

function fetchLinks(activeFolder) {
  const linksList = JSON.parse(localStorage.getItem(`${activeFolder}`));
  return linksList;
}

function openWindows(linksList) {
  console.log(linksList);
  linksList.forEach((link) => {
    window.open(`https://${link}`);
  });
}

function errorText(activeFolder) {
  const errorText = add([
    text(`You have no tabs in ${activeFolder} yet`, {
      size: 10,
    }),
    pos(width() / 2, height() - 16),
    anchor("center"),
  ]);
  setTimeout(() => {
    errorText.destroy();
  }, 2000);
}

function onClick(activeFolder, loadingText) {
  const linksList = fetchLinks(activeFolder);
  if (linksList && linksList.length > 0) {
    openWindows(linksList);
    loadingText.destroy();
  } else {
    loadingText.destroy();
    errorText(activeFolder);
  }
}
