export const createHomePage = {
  section: function () {
    const section = document.createElement("div");
    section.classList.add("home-section");
    return section;
  },
  subsection: function () {
    const section = document.createElement("div");
    section.classList.add("home-subsection");
    return section;
  },
  h2: function (content) {
    const section = document.createElement("h2");
    section.classList.add("home-h2");
    section.innerHTML = content;
    return section;
  },
  h3: function (content) {
    const section = document.createElement("h3");
    section.classList.add("home-h3");
    section.innerHTML = content;
    return section;
  },
  h4: function (content) {
    const section = document.createElement("h4");
    section.classList.add("home-h4");
    section.innerHTML = content;
    return section;
  },
  p: function (content) {
    const section = document.createElement("p");
    section.classList.add("home-p");
    section.innerHTML = content;
    return section;
  },

  mail: function (href) {
    return `<a href="mailto:${href}" target="_blank">${href}</a>`;
  },
};


