const library = document.getElementById("library");
const button = document.getElementById("form-button");

button.addEventListener("click", addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(e) {
  e.preventDefault();

  const form = document.getElementById("form");

  const data = new Book(
    form.title.value || "Book's Title",
    form.author.value || "Author's Name",
    form.pages.value || 0,
    form.read.checked
  );

  const id = `${Date.now()}`;

  newElement(data, id);

  addBook(data, id);

  form.reset();
}

const removeBook = async (id) => {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }

  const book = document.getElementById(id);

  book.classList.add("remove");

  await new Promise((r) => setTimeout(r, 300));

  book.remove();
};

const addBook = (data, id) => {
  const book = data;
  book.id = id;
  myLibrary.push(book);
};

const newElement = (data, id) => {
  const book = document.createElement("div");
  book.classList.add("book");
  book.id = id;

  Object.keys(data).forEach((x) => {
    if (x !== "read") {
      const subDiv = document.createElement("div");
      subDiv.innerHTML = data[x];
      subDiv.classList.add(x);
      book.appendChild(subDiv);
    } else {
      const read = document.createElement("input");
      read.classList.add(x);

      read.type = "checkbox";

      read.checked = data[x];

      read.addEventListener("change", readFunction);

      book.appendChild(read);
    }
  });

  const button = document.createElement("button");

  button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"></path>
    <path d="M15 16L17.5 18.5M20 21L17.5 18.5M17.5 18.5L20 16M17.5 18.5L15 21"></path>
       </svg>`;

  button.classList.add = "remove";
  button.addEventListener("click", () => {
    removeBook(id);
  });

  book.append(button);
  book.style.background = randomBackground();

  library.appendChild(book);
};

const readFunction = (e) => {
  const index = myLibrary.findIndex((book) => book.id === e.target.parentNode.id);
  const book = myLibrary[index];
  book.read = e.target.checked;
  myLibrary[index] = book;
};

const randomBackground = () => {
  const colors = [
    "rgb(252, 216, 186)",
    "rgb(255, 218, 207)",
    "rgb(250, 203, 195)",
    "rgb(255, 221, 163)",
    "#fff0ec",
  ];

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const color1 = randomColor();
  const color2 = randomColor();

  const patterns = [
    `repeating-conic-gradient(from 45deg, ${color1} 0% 25%, ${color2} 0% 50%)`,
    `conic-gradient(from 116.56deg at calc(100%/3) 0, #0000 90deg,${color1} 0),
      conic-gradient(from -63.44deg at calc(200%/3) 100%, #0000 90deg,${color1} 0)
      ${color2}`,
    `radial-gradient(farthest-side at -33.33% 50%,#0000 52%,${color1} 54% 57%,#0000 59%) 0 calc(40px/2),
      radial-gradient(farthest-side at 50% 133.33%,#0000 52%,${color1} 54% 57%,#0000 59%) calc(40px/2) 0,
      radial-gradient(farthest-side at 133.33% 50%,#0000 52%,${color1} 54% 57%,#0000 59%),
      radial-gradient(farthest-side at 50% -33.33%,#0000 52%,${color1} 54% 57%,#0000 59%),
      ${color2}`,
    ` linear-gradient(135deg,#0000 18.75%,${color1} 0 31.25%,#0000 0),
      repeating-linear-gradient(45deg,${color1} -6.25% 6.25%,${color2} 0 18.75%)`,
    `radial-gradient(27% 29% at right, #0000 83%,${color1} 85% 99%,#0000 101%) calc(10px/2) 10px,
      radial-gradient(27% 29% at left, #0000 83%,${color1} 85% 99%,#0000 101%) calc(10px/-2) 10px,
      radial-gradient(29% 27% at top, #0000 83%,${color1} 85% 99%,#0000 101%) 0 calc(10px/2),
      radial-gradient(29% 27% at bottom, #0000 83%,${color1} 85% 99%,#0000 101%) 0 calc(10px/-2)
      ${color2}`,
    `radial-gradient(at 80% 80%,${color2} 25.4%,#0000 26%),
      radial-gradient(at 20% 80%,${color2} 25.4%,#0000 26%),
      conic-gradient(from -45deg at 50% 41%,${color2} 90deg,${color1} 0) 
        10px 0`,
  ];

  return patterns[Math.floor(Math.random() * patterns.length)];
};

/*example */

const example = document.getElementById("example");

const example_data = [
  new Book("Tress of the Emerald Sea", "Brandon Sanderson", 384, true),
  new Book("The Last Wish", "Andrzej Sapkowski", 288, true),
  new Book("The Dragon Reborn", "Robert Jordan", 624, true),
  new Book("The Host", "Stephenie Meyer", 616, true),
];

example.addEventListener("click", function () {
  const idStamp = `${Date.now()}`;

  example_data.forEach((book, id) => {
    newElement({ ...book }, idStamp + id);
    addBook({ ...book }, idStamp + id);
  });
});

example.click();

/*delete */

const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function () {
  myLibrary.splice(0, myLibrary.length);

  const books = Array.from(library.children);

  books.forEach((book) => book.remove());
});
