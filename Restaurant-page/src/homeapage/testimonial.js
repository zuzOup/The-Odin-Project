import { createHomePage } from "./helpers.js";

const testimonials = [
  {
    quote:
      "The best café in town! The coffee is always fresh, and the atmosphere is so cozy!",
    author: "Sarah T.",
  },
  {
    quote: "I love the variety of pastries! Their carrot cake muffin is a must-try!",
    author: "Mike R.",
  },
];

const testimonial = createHomePage.section();

const header = createHomePage.h3("Customer Testimonials");
testimonial.appendChild(header);

testimonials
  .map((testimon) => {
    const sub = createHomePage.subsection();

    const text1 = createHomePage.p(`<i>${testimon.quote}</i>`);
    const text2 = createHomePage.p(`- ${testimon.author}`);

    sub.appendChild(text1);
    sub.appendChild(text2);

    return sub;
  })
  .forEach((testimon) => {
    testimonial.appendChild(testimon);
  });

export default testimonial;
