import { info } from "../data.js";
import { createHomePage } from "./helpers.js";

const welcome = createHomePage.section();

const wel1 = createHomePage.h2(`Welcome to ${info.name}!`);
const wel2 = createHomePage.h3("Brewing Joy, One Cup at a Time");

const wel3 = createHomePage.h4(
  `Discover your new favorite spot in the heart of the city! At ${info.name}, we believe in crafting delightful experiences through our carefully curated coffee and comfort food.`
);

[wel1, wel2, wel3].forEach((x) => {
  welcome.appendChild(x);
});

export default welcome;

// import img from "../img.jpg";
// img: function (src, alt) {
//   const img = document.createElement("img");
//   img.src = src;
//   img.alt = alt;
//   return img;
// },

// const wel3 = createHomePage.img(
//   img,
//   "cafe interior || Photo by Petr Sevcovic on Unsplash"
// );
