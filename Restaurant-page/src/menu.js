import { cafeMenu } from "./data";

const menu = document.createElement("div");
menu.id = "menu";

Object.entries(cafeMenu).forEach((section) => {
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.innerHTML = section[0];

  menuSection.appendChild(menuHeader);

  section[1].forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<b>${item.name}</b> - $${item.price.toFixed(1)}`;

    menuSection.appendChild(menuItem);
  });

  menu.appendChild(menuSection);
});

export default menu;
