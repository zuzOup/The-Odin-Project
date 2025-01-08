export let checkBoxColor = "#687864";

export function checkbox(color) {
  return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 32 32" xml:space="preserve"><path style="fill: %23${color.slice(
    1
  )}" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>')`;
}

const color1 = document.getElementById("color-div1");
const color2 = document.getElementById("color-div2");
// const color3 = document.getElementById("color-div3");

[color1, color2 /*color3*/].forEach((x) => {
  x.addEventListener("click", (e) => {
    colorFunction(e.target.id);
  });
});

export function colorFunction(color) {
  Object.keys(colorSchemes[color]).forEach((property) => {
    document.documentElement.style.setProperty(property, colorSchemes[color][property]);
  });

  const checkboxes = Array.from(document.getElementsByTagName("input")).filter(
    (ch) => ch.type === "checkbox" && ch.checked
  );

  checkBoxColor = colorSchemes[color]["--menu"];

  checkboxes.forEach((ch) => {
    ch.style.backgroundImage = checkbox(checkBoxColor);
  });
}

const colorSchemes = {
  "color-div1": {
    "--menu": "#687864",
    "--background": "#f7f9fb",
    "--gray": "#bebebe",

    "--text": "black",
    "--text-disabled": "#515151",

    "--text-menu": "black",
    "--text-menu-focus": "#f7f9fb",

    "--alert": "#e74c3c",
    "--task-input": "#f7f9fb",
    "--task-input-text": "#black",

    "--modal-label": "#dcdcdc",

    "--low": "#8fc1e3",
    "--medium": "#5085a5",
    "--high": "#31708e",
  },
  "color-div2": {
    "--menu": "#5da2d5",
    "--background": "#ececec",
    "--gray": "#d6d6d6",

    "--text": "black",
    "--text-disabled": "#515151",

    "--text-menu": "black",
    "--text-menu-focus": "#f7f9fb",

    "--alert": "#a72e22",
    "--task-input": "#ececec",
    "--task-input-text": "#black",

    "--modal-label": "#bcbcbc",

    "--low": "#90ccf4",
    "--medium": "#f3d250",
    "--high": "#f78888",
  },
  "color-div3": {
    "--menu": "#161c2a",
    "--background": "#3f454d",
    "--gray": "#4e6773",

    "--text": "#fefdf2",
    "--text-disabled": "#161c2a",

    "--text-menu": "#fefdf2",
    "--text-menu-focus": "#e74c3c",

    "--alert": "#e74c3c",
    "--task-input": "#fefdf2",
    "--task-input-text": "#161c2a",

    "--modal-label": "#4e66773",

    "--low": "#48516c",
    "--medium": " #956a71",
    "--high": "#713e47",
  },
};
