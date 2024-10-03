import "./styles.css";
import { greeting } from "./greeting.js";
import { info } from "./data.js";

import welcome from "./homeapage/welcome.js";

import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";

/*Header*/
const headerName = document.getElementById("headerName");
headerName.innerHTML = info.name;

const headerInfo = document.getElementById("headerInfo");
headerInfo.appendChild(welcome);

/*Import Home Page */

const content = document.getElementById("content");
content.appendChild(home);

/*Buttons */

const tabs = { home, about, menu };
const buttons = Array.from(Array.from(document.getElementsByTagName("nav"))[0].children);

buttons.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    if (butt.id !== Array.from(content.children)[0].id) {
      content.innerHTML = "";
      content.appendChild(tabs[butt.id]);
    }
  });
});

// test

console.log(greeting);
