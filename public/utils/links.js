import { links } from "../linkManager.js";
const input = document.querySelector(".site-input");
const button = document.getElementById("button-submit");
const linkNav = document.querySelector(".link-nav");
const list = document.querySelector(".list-group");

let activeLink = 0;

navStylingManager();

button.addEventListener("click", (e) => {
  e.preventDefault();
  addNewItem(input);
});

function fetchLinks(activeLink) {
  const linkData = JSON.parse(localStorage.getItem(links[activeLink]));
  return linkData;
}

function drawListItems(activeLink) {
  const links = fetchLinks(activeLink);
  list.innerHTML = "";
  if (links) {
    links.forEach((item) => {
      const card = document.createElement("a");
      card.classList.add("list-group-item");
      card.classList.add("list-group-item-action");
      card.classList.add("d-flex");
      card.classList.add("gap-3");
      card.classList.add("py-3");

      card.innerHTML = `
        <img
          src="https://github.com/twbs.png"
          alt="twbs"
          class="rounded-circle flex-shrink-0"
          width="32"
          height="32" />
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 class="mb-0">${item}</h6>
            <p class="mb-0 opacity-75">added: ${new Date()}</p>
          </div>
        </div>`;
      list.appendChild(card);
    });
  }
}

function navStylingManager() {
  Array.from(linkNav.children).forEach((child, index) => {
    child.addEventListener("click", () => {
      activeLink = index;
      drawListItems(activeLink);
      Array.from(linkNav.children).forEach((child) => {
        child.id = "";
        child.children[0].classList.remove("active");
        child.children[0].classList.add("text-white");
      });
      child.id = "active";
      child.children[0].classList.add("active");
      child.children[0].classList.remove("text-white");
    });
  });
}

function addNewItem(input) {
  const l = JSON.parse(localStorage.getItem(links[activeLink])) || [];

  if (input.value.startsWith("https://")) {
    l.push(input.value.replace("https://", ""));
  } else if (input.value.startsWith("www.")) {
    l.push(`${input.value}`);
  } else {
    l.push(`www.${input.value}`);
  }

  localStorage.setItem(links[activeLink], JSON.stringify(l));
  drawListItems(activeLink, links[activeLink]);
}
