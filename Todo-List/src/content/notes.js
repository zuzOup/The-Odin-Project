import { data } from "../data";

const notesButton = document.getElementById("notes-button");
notesButton.onclick = () => notesFunc();

function notesFunc() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.dataset.type = "notes";

  const notes = document.createElement("div");
  notes.id = "notes-grid";

  const h2 = document.createElement("h2");
  h2.innerHTML = "Notes";

  notes.appendChild(h2);

  const div = document.createElement("div");
  div.classList.add("notes");

  populateNotes().forEach((x) => {
    div.append(x);
  });

  notes.appendChild(div);

  main.appendChild(notes);
}

function createNote(id, text) {
  const noteDiv = document.createElement("div");
  noteDiv.id = "note-" + id;
  noteDiv.classList.add("note");

  const noteInput = document.createElement("div");

  noteInput.innerHTML = text;

  noteInput.contentEditable = "plaintext-only";

  noteInput.setAttribute("placeholder", "Start writing here...");

  noteInput.addEventListener("input", (e) => {
    data.editNote(id, e.target.innerText);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "✖";
  deleteButton.contentEditable = "false";
  deleteButton.addEventListener("click", () => {
    data.deleteNote(id);
    noteDiv.remove();
  });

  noteDiv.appendChild(deleteButton);
  noteDiv.appendChild(noteInput);

  return noteDiv;
}

function populateNotes() {
  const notes = data.getNotes().map((x) => createNote(x[0], x[1]));

  const button = document.createElement("button");
  button.id = "notes-add-button";
  button.classList.add("note");
  button.innerHTML = "ADD NOTE +";
  button.onclick = (e) => {
    const id = Date.now();
    const newNote = createNote(id, "");

    e.target.parentNode.insertBefore(newNote, e.target);

    data.addNote(id);
  };

  return [...notes, button];
}
