import "./style/style.css";
import "./style/menu.css";
import "./style/modal.css";
import "./style/notes.css";
import "./style/task.css";
import "./style/project.css";

import { dataCreate, data } from "./data";

import "./modals/modal-project-html";

import "./modals/modal-add";
import "./modals/modal-delete-project.js";

import { modalTaskInner } from "./modals/modal-task-html";
import { modalFuncs } from "./modals/modalFuncs";

import "./focus";

import { allTaskFunc } from "./content/all-tasks";

import "./content/today";
import "./content/completed";
import "./content/notes.js";

import { colorFunction } from "./color.js";

//populate menu, modals
window.onload = () => {
  if (!localStorage.getItem("data")) {
    data.localStorageUpdate();
  } else {
    data.localStorageGet();
  }

  dataCreate.populateMenu();
  allTaskFunc();

  document.getElementById("modal-task-button").classList.add("focus");
};

//open modal
const addButton = document.getElementById("add-button");

addButton.onclick = () => {
  const modalContent = document.getElementById("modal-add-content");
  modalContent.innerHTML = modalTaskInner;

  modalFuncs.open("modal-add");

  let project = false;

  if (main.dataset.type === "projects") {
    project = data.getProjectName(main.firstElementChild.id.split("-")[1]);
  }

  modalFuncs.populateTask(project);
};
