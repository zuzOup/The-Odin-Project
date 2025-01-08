import { dataCreate } from "../data";
import { format } from "date-fns";

export const modalFuncs = (() => {
  const focus = (button, buttonsAll) => {
    buttonsAll.forEach((x) => {
      x.classList.remove("focus");
    });
    button.classList.add("focus");
  };

  const populateTask = (project) => {
    document.getElementById("modal-task-date").value = format(new Date(), "yyyy-MM-dd");

    if (project) {
      document.getElementById("modal-task-project").value = project;
    }
    dataCreate.populateOptions();
  };

  const open = (modal) => {
    const modalElement = document.getElementById(modal);

    modalElement.classList.remove("hidden");
    modalElement.classList.add("open");
  };

  const close = (modal) => {
    const modalElement = document.getElementById(modal);

    modalElement.classList.remove("open");
    modalElement.classList.add("hidden");
  };

  const alerts = (divID, msg) => {
    const position = document.getElementById(divID).getBoundingClientRect();

    const alert = document.createElement("div");
    alert.innerHTML = msg;

    alert.classList.add("alert");

    alert.style.top = `${position.bottom + 4}px`;
    alert.style.left = `${position.left}px`;

    document.body.appendChild(alert);
  };
  const destroyAlerts = () => {
    const alerts = Array.from(document.getElementsByClassName("alert"));
    alerts.forEach((x) => x.remove());
  };

  return { focus, populateTask, open, close, alerts, destroyAlerts };
})();
