import { data } from "../data";
import { modalEdit } from "../modals/modal-edit";

import { modalTaskInner } from "../modals/modal-task-html";
import { modalFuncs } from "../modals/modalFuncs";

import { sortDiv } from "./sortDiv";

import { checkbox, checkBoxColor } from "../color";

import moment from "moment";

export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function removeTask(id) {
  const taskToRemove = document.getElementById(id);
  const parent = taskToRemove.parentElement;
  taskToRemove.classList.add("right");

  await wait(600);

  taskToRemove.remove();

  if (Array.from(parent.childNodes).map((x) => x.className).length === 1) {
    const msg = document.createElement("h4");
    msg.innerHTML = "No tasks to be done...";
    parent.appendChild(msg);
  }
}

function createTasks(task) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  newTask.id = task.id;
  newTask.style.backgroundColor = `var(--${task.priority})`;

  const input = document.createElement("input");
  input.type = "checkbox";

  if (task.checked) {
    newTask.classList.add("checked");
    input.style.backgroundImage = checkbox(checkBoxColor);
    input.click();
  }

  input.onclick = (e) => {
    newTask.classList.toggle("checked");
    data.checkTask(task);

    e.target.checked
      ? (input.style.backgroundImage = checkbox(checkBoxColor))
      : (input.style.backgroundImage = "none");

    if (main.dataset.type === "all" || main.dataset.type === "completed") {
      removeTask(task.id);
    }
  };

  const titleDetails = document.createElement("div");
  titleDetails.classList.add("title-details");

  const title = document.createElement("h3");
  title.innerHTML = task.title;

  const details = document.createElement("p");
  details.innerHTML = task.details;

  [title, details].forEach((x) => titleDetails.appendChild(x));

  const date = document.createElement("div");
  date.classList.add("task-date");

  // date.innerHTML = format(task.date, "PPP"); gives wrong date
  date.innerHTML = moment(task.date).format("LL");

  if (moment(task.date).format("L") < moment().format("L")) {
    date.classList.add("overdue");
  }

  const priority = document.createElement("div");

  priority.classList.add("task-priority");

  const priorityImg = document.createElement("div");
  priorityImg.classList.add(`priority-bar`);
  priorityImg.classList.add(task.priority);

  [1, 2, 3].forEach((x) => {
    const priorityBar = document.createElement("div");
    priorityBar.classList.add(`priority-bar-${x}`);
    priorityImg.appendChild(priorityBar);
  });

  const priorityTxt = document.createElement("div");

  priorityTxt.innerHTML = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

  priority.appendChild(priorityImg);
  priority.appendChild(priorityTxt);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  edit.id = `edit-` + task.id;

  edit.onclick = () => {
    modalEdit(task, edit);
  };

  const cancel = document.createElement("button");
  cancel.innerHTML = "✖";
  cancel.onclick = () => {
    data.deleteTask(task);
    removeTask(task.id);
  };

  buttons.appendChild(edit);
  buttons.appendChild(cancel);

  [input, titleDetails, date, priority, buttons].forEach((x) => newTask.appendChild(x));

  return newTask;
}

export function appendProject(main, tasks, title, id, sort = false) {
  const div = document.createElement("div");
  div.classList.add("projects");
  div.id = `project-${id}`;

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("project-header");

  const titleEl = document.createElement("h2");
  titleEl.innerHTML = title;

  titleDiv.appendChild(titleEl);

  div.appendChild(titleDiv);

  if (sort) div.appendChild(sortDiv(id));

  if (tasks.length === 0) {
    const msg = document.createElement("h4");
    msg.innerHTML = "No tasks to be done...";
    div.appendChild(msg);
  } else {
    tasks
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .sort((a, b) => a.checked - b.checked)
      .forEach((task) => {
        const taskEl = createTasks(task);
        div.appendChild(taskEl);
      });
  }

  if (sort) {
    const addButton = document.createElement("div");
    addButton.classList.add("project-add");
    addButton.innerHTML = "ADD TASK +";
    addButton.id = "add-button-project";

    addButton.addEventListener("click", () => {
      const modalContent = document.getElementById("modal-add-content");
      modalContent.innerHTML = modalTaskInner;
      modalFuncs.open("modal-add");
      modalFuncs.populateTask(title);
    });

    div.appendChild(addButton);
  }

  main.appendChild(div);
}
