import { createHomePage } from "./helpers.js";
import { info } from "../data.js";

const hours = createHomePage.section();

const header = createHomePage.h3("Location & Hours");

const address = createHomePage.p(`📍<strong>${info.address}</strong>`);

const hourSub = createHomePage.subsection();

const hour1 = createHomePage.p(info.hours.weekday);
const hour2 = createHomePage.p(info.hours.weekend);

[hour1, hour2].forEach((x) => {
  hourSub.appendChild(x);
});

const contact = createHomePage.p(`<strong>📞 Contact Us: ${info.phone}</strong>`);

const emailLink = createHomePage.mail(info.email);

const email = createHomePage.p(`<strong>📧 Email: ${emailLink}</strong>`);

[header, address, hourSub, contact, email].forEach((x) => hours.appendChild(x));

export default hours;
