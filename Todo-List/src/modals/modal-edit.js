import moment from "moment";
import { data } from "../data";
import { modalFuncs } from "./modalFuncs";

const close = () => {
  modalFuncs.close("modal-edit");
  const old_modalEditButton = document.getElementById("modal-button-edit");
  const new_modalEditButton = old_modalEditButton.cloneNode(true);
  old_modalEditButton.parentNode.replaceChild(new_modalEditButton, old_modalEditButton);
};

const modalEditButtonClose = document.getElementById("modal-edit-close");
modalEditButtonClose.onclick = () => close();

export function modalEdit(task, edit) {
  const title = document.getElementById("modal-edit-title");
  title.value = task.title;

  const details = document.getElementById("modal-edit-details");
  details.value = task.details;

  const project = document.getElementById("modal-edit-project");
  project.value = data.getProjectName(task.projectid);

  const date = document.getElementById("modal-edit-date");

  date.value = task.date;

  const priorityButton = document.getElementById(`${task.priority}-edit`);
  priorityButton.checked = true;

  modalFuncs.open("modal-edit");

  const modalEditButton = document.getElementById("modal-button-edit");
  modalEditButton.addEventListener("click", () => {
    const priority = Array.from(
      document.getElementById("radio-edit-inputs").getElementsByTagName("input")
    ).reduce((acc, cur) => {
      return cur.checked === true ? cur.id.split("-").shift() : acc;
    }, "");

    modalEditButtonFunc(task, title, date, details, priority);

    /*disconnect and connect element, so that the listener has updated data */
    const old_edit = document.getElementById(`edit-${task.id}`);
    const new_edit = old_edit.cloneNode(true);
    old_edit.parentNode.replaceChild(new_edit, old_edit);

    new_edit.onclick = () => {
      modalEdit(
        {
          id: task.id,
          projectid: task.projectid,
          checked: task.checked,
          title: title.value,
          date: date.value,
          details: details.value,
          priority,
        },
        edit
      );
    };
  });
}

const modalEditButtonFunc = (task, title, date, details, priority) => {
  data.editTask(
    task.projectid,
    task.id,
    title.value,
    date.value,
    details.value,
    priority
  );

  const taskDOM = document.getElementById(task.id);

  const titleDOM = Array.from(taskDOM.getElementsByTagName("h3"))[0];
  titleDOM.innerHTML = title.value;

  const detailsDOM = Array.from(taskDOM.getElementsByTagName("p"))[0];
  detailsDOM.innerHTML = details.value;

  const dateDOM = Array.from(taskDOM.getElementsByClassName("task-date"))[0];
  // dateDOM.innerHTML = format(date.value, "PPP"); gives wrong date
  dateDOM.innerHTML = moment(task.date).format("LL");

  const priorityDOM = Array.from(taskDOM.getElementsByClassName("task-priority"))[0];

  priorityDOM.children[0].classList.remove(priorityDOM.children[0].classList[1]);
  priorityDOM.children[0].classList.add(priority);
  priorityDOM.children[1].innerHTML =
    priority.charAt(0).toUpperCase() + priority.slice(1);

  taskDOM.style.backgroundColor = `var(--${priority})`;

  close();
};
