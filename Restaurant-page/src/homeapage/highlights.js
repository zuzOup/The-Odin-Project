import { createHomePage } from "./helpers.js";

const menuHighlights = {
  coffeBeans: [
    {
      name: "San Jerónimo - Guatemala",
      description: "Milk chocolate, golden raisin & buttery",
    },
    {
      name: "El Retiro 'Filter' - El Salvador",
      description: "Tangerine, cocoa & juicy",
    },
  ],
  soup: [
    {
      name: "Tomato Basil Soup",
      description: "A creamy blend of ripe tomatoes and fresh basil,",
    },
    {
      name: "Butternut Squash Soup",
      description: "Silky and smooth,  offering a delightful autumn flavor",
    },
  ],
};

const highlights = createHomePage.section();

const header = createHomePage.h3("Menu Highlights");

/*coffes*/

const beans = createHomePage.h4("Coffe beans");

const beansSub = createHomePage.subsection();

menuHighlights.coffeBeans.forEach((bean) => {
  const newBean = createHomePage.p(`<b>${bean.name}</b>: ${bean.description}`);
  beansSub.appendChild(newBean);
});

/*soup*/

const soup = createHomePage.h4("Soup of the Day");

const soupSub = createHomePage.subsection();

menuHighlights.soup.forEach((soup) => {
  const newSoup = createHomePage.p(`<b>${soup.name}</b>: ${soup.description}`);
  soupSub.appendChild(newSoup);
});

[header, beans, beansSub, soup, soupSub].forEach((x) => {
  highlights.appendChild(x);
});

export default highlights;
