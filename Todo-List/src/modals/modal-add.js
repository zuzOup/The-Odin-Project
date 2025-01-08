import { data } from "../data";

import { modalFuncs } from "./modalFuncs";

const modalHeader = document.getElementById("modal-add-header");

const modalButtons = [
  document.getElementById("modal-task-button"),
  document.getElementById("modal-project-button"),
];

const modalContent = document.getElementById("modal-add-content");

const modalButtonAdd = document.getElementById("modal-button-add");

//switch between task and project

modalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    modalFuncs.destroyAlerts();
    const target = e.target;
    //check if its the same button
    if (modalContent.getAttribute("button-id") === target.id) return;
    modalContent.setAttribute("button-id", target.id);
    // change menu buttons
    modalFuncs.focus(target, modalButtons);
    //change modal header
    modalHeader.innerHTML = `Add New ${button.getAttribute("type")}`;
    //change modal content
    modalContent.innerHTML = button.getAttribute("inner-html");
    //populate task content
    if (button.getAttribute("type") === "Task") {
      modalFuncs.populateTask();
    }

    //change submit button
    modalButtonAdd.innerHTML = `Add ${button.getAttribute("type")}`;

    modalButtonAdd.setAttribute("type", target.getAttribute("type"));
  });
});

//close modal without action

const modalClose = document.getElementById("modal-add-close");
modalClose.addEventListener("click", () => {
  modalFuncs.close("modal-add");
});

//action

modalButtonAdd.addEventListener("click", (e) => {
  const type = e.target.getAttribute("type");

  modalFuncs.destroyAlerts();

  //add task
  if (type === "Task") {
    const title = document.getElementById("modal-task-title").value;
    const projectName = document.getElementById("modal-task-project").value;
    let projectID = 0;

    if (title === "" && projectName === "") {
      modalFuncs.alerts("modal-task-title", "Task title is missing. Please add one");
      modalFuncs.alerts(
        "modal-task-project",
        "Project title is missing. Please select an option or enter a new name."
      );
      return;
    } else if (title === "") {
      modalFuncs.alerts("modal-task-title", "Task title is missing. Please add one");
      return;
    } else if (projectName === "") {
      modalFuncs.alerts(
        "modal-task-project",
        "Project title is missing. Please select an option or enter a new name."
      );
      return;
    }

    if (data.getProjectNames().includes(projectName)) {
      projectID = data.getProjectIDfromName(projectName);
    } else {
      projectID = Date.now();

      data.addProject(projectID, projectName);
    }

    const details = document.getElementById("modal-task-details").value;

    const date = document.getElementById("modal-task-date").value;

    const priority = Array.from(
      document.getElementById("radio-inputs").getElementsByTagName("input")
    ).filter((x) => x.checked === true)[0].id;

    data.addTask(projectID, title, priority, date, details);

    document.getElementById(`project-button-${projectID}`).click();

    //add projects
  } else if (type === "Project") {
    const title = document.getElementById("modal-project-title").value;

    if (title === "") {
      modalFuncs.alerts(
        "modal-project-title",
        "Project title is missing. Please select an option or enter a new name."
      );
      return;
    }
    if (data.getProjectNames().includes(title)) {
      modalFuncs.alerts(
        "modal-project-title",
        "Project already exists. Please enter a different name"
      );
      return;
    }

    const id = Date.now();

    data.addProject(id, title);

    document.getElementById(`project-button-${id}`).click();

      }

  modalFuncs.close("modal-add");
});
