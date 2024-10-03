import highlights from "./homeapage/highlights.js";
import offers from "./homeapage/offers.js";
import hours from "./homeapage/hours.js";
import testimonial from "./homeapage/testimonial.js";

const sections = {
  highlights,
  offers,
  hours,
  testimonial,
};

const home = document.createElement("div");
home.id = "home";

Object.values(sections).forEach((section) => {
  home.appendChild(section);
});

export default home;
