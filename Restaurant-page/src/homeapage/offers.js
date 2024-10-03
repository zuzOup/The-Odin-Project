import { createHomePage } from "./helpers.js";

const specialOffers = [
  {
    event: "Happy Hour",
    time: "Every Friday from 4 PM - 6 PM",
    details: "Join us for half-price drinks and complimentary pastries!",
  },
  {
    event: "Live Music Night",
    time: "Every Saturday at 7 PM",
    details:
      "Enjoy local talents while sipping your favorite brew. Check our calendar for details!",
  },
];

const offers = createHomePage.section();

const header = createHomePage.h3("Special Offers");
offers.appendChild(header);

specialOffers
  .map((offer) => {
    const sub = createHomePage.subsection();

    const event = createHomePage.h4(offer.event);
    const text = createHomePage.p(`<b>${offer.time}</b>: ${offer.details}`);

    sub.appendChild(event);
    sub.appendChild(text);

    return sub;
  })
  .forEach((offer) => {
    offers.appendChild(offer);
  });

export default offers;
