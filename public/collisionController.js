import { links } from "./linkManager.js";
export function collisionController(player) {
  onCollide("player", "house1", () => {
    const loadingText = add([
      text("Press E to open your Work Tabs", {
        size: 10,
      }),
      pos(width() / 2, height() - 16),
      anchor("center"),
    ]);
    const click = onKeyPress("e", () => {
      onClick(0, loadingText, "Work");
    });
    onCollideEnd("player", "house1", () => {
      loadingText.destroy();
      click.cancel();
    });
  });

  onCollide("player", "house2", () => {
    const loadingText = add([
      text("Press E to open your Wake Tabs", {
        size: 10,
      }),
      pos(width() / 2, height() - 16),
      anchor("center"),
    ]);
    const click = onKeyPress("e", () => {
      onClick(1, loadingText, "Wake");
    });
    onCollideEnd("player", "house2", () => {
      console.log("fired");
      loadingText.destroy();
      click.cancel();
    });
  });

  onCollide("player", "market1", () => {
    const loadingText = add([
      text("Press E to open your Sleep Tabs", {
        size: 10,
      }),
      pos(width() / 2, height() - 16),
      anchor("center"),
    ]);
    const click = onKeyPress("e", () => {
      onClick(2, loadingText, "Sleep");
    });
    onCollideEnd("player", "market1", () => {
      loadingText.destroy();
      click.cancel();
    });
  });
}

// COllISION UTILITY FUNCTIONS

function fetchLinks(activeLink) {
  const linksList = JSON.parse(localStorage.getItem(`${links[activeLink]}`));
  return linksList;
}

function openWindows(linksList) {
  console.log(linksList);
  linksList.forEach((link) => {
    window.open(`https://${link}`);
  });
}

function errorText() {
  const errorText = add([
    text(`You have no tabs in ${mode} Mode yet`, {
      size: 10,
    }),
    pos(width() / 2, height() - 16),
    anchor("center"),
  ]);
  setTimeout(() => {
    errorText.destroy();
  }, 2000);
}

function onClick(number, loadingText, mode) {
  const linksList = fetchLinks(number);
  if (linksList && linksList.length > 0) {
    openWindows(linksList);
    loadingText.destroy();
  } else {
    errorText();
  }
}
