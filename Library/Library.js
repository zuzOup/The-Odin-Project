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

const removeBook = (id) => {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }

  const book = document.getElementById(id);
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
    console.log(x);

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

  library.appendChild(book);
};

const readFunction = (e) => {
  const index = myLibrary.findIndex((book) => book.id === e.target.parentNode.id);
  const book = myLibrary[index];
  book.read = e.target.checked;
  myLibrary[index] = book;
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
  const length = myLibrary.length;

  example_data.forEach((book, id) => {
    newElement({ ...book }, length + id);
    addBook({ ...book }, length + id);
  });
});

example.click();
