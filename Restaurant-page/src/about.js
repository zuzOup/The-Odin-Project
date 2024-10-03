import { info } from "./data.js";

const aboutData = {
  text: {
    p1: `Nestled in the heart of the city, <b>${info.name}</b> has been a local favorite since its founding in 2010. What started as a small, family-owned coffee shop has grown into a beloved community hub where people come to enjoy expertly brewed coffee, delicious pastries, and the warm, welcoming atmosphere. The café's origins trace back to the owners' passion for coffee culture and their desire to create a space that feels like a second home for customers. Over the years, they have remained committed to sourcing the finest beans from ethical farms around the world, ensuring that every cup of coffee served is of the highest quality.`,
    p2: "The café itself offers a cozy, rustic ambiance, with comfortable seating, wooden furnishings, and soft lighting that invites customers to sit back and stay awhile. The walls are often adorned with local artwork, and the smell of freshly ground coffee fills the air. The menu has expanded beyond traditional espresso drinks to include a variety of teas, iced beverages, and seasonal specialties, as well as a selection of freshly baked goods and light meals. From croissants and muffins to hearty soups and quiches, there's something to suit every palate. The café also prides itself on accommodating dietary preferences, offering vegan and gluten-free options.",
  },
  cafeInfo: {
    address: `<em>Address:</em> ${info.address}`,
    phone: `<em>Phone:</em> ${info.phone}`,
    email: `<em>Email:</em> <a href="mailto:${info.email}"  target="_blank">${info.email}</a>`,
    web: `<em>Website:</em> <a href="https://zuzoup.github.io/The-Odin-Project/Restaurant-page" target="_blank">${info.web}</a>`,
    insta: `<em>Instagram:</em> <a href="https://instagram.com" target="_blank">${info.insta}</a>`,
  },
  socials: "Follow us on social media for updates on events and new menu items.",
};

const about = document.createElement("div");
about.id = "about";

/*Text */
Object.values(aboutData.text).forEach((text) => {
  const aboutText = document.createElement("p");
  aboutText.classList.add("about-text");
  aboutText.innerHTML = text;

  about.appendChild(aboutText);
});

const aboutInfo = document.createElement("div");
aboutInfo.classList.add("about-info");

/* Info */
const aboutLeft = document.createElement("div");
aboutLeft.classList.add("about-left");

Object.values(aboutData.cafeInfo).forEach((info) => {
  const infoDiv = document.createElement("h3");
  infoDiv.classList.add("about-h3");
  infoDiv.innerHTML = info;

  aboutLeft.appendChild(infoDiv);
});

/* Hours */
const aboutRight = document.createElement("div");
aboutRight.classList.add("about-right");

const hours = document.createElement("h3");
hours.classList.add("about-h3");
hours.innerHTML = "<em>Hours:</em>";

const hoursDiv = document.createElement("div");
hoursDiv.classList.add("hours");

Object.values(info.hours).forEach((time) => {
  const hour = document.createElement("h4");
  hour.classList.add("hours-h4");
  hour.innerHTML = time;

  hoursDiv.appendChild(hour);
});

aboutRight.appendChild(hours);
aboutRight.appendChild(hoursDiv);

/*append*/

aboutInfo.appendChild(aboutLeft);
aboutInfo.appendChild(aboutRight);

about.appendChild(aboutInfo);

export default about;
