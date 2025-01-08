import { data } from "../data";
import { modalFuncs } from "./modalFuncs";

const modalDeleteButtonClose = document.getElementById("modal-delete-project-close");
const modalDeleteButtons = document.getElementById("modal-delete-buttons");

const close = () => {
  modalFuncs.close("modal-delete-project");
  modalDeleteButtons.innerHTML = "";
};

modalDeleteButtonClose.onclick = () => {
  close();
};

const buttons = (id) => {
  const noButton = document.createElement("button");
  noButton.id = "modal-delete-no";
  noButton.innerHTML = "NO";

  noButton.addEventListener("click", () => {
    close();
  });

  const yesButton = document.createElement("button");
  yesButton.id = "modal-delete-yes";
  yesButton.innerHTML = "YES";

  yesButton.addEventListener("click", () => {
    data.deleteProject(id);

    document.getElementById("all-button").click();
    document.getElementById(`project-button-${id}`).outerHTML = "";

    close();
  });

  modalDeleteButtons.appendChild(yesButton);
  modalDeleteButtons.appendChild(noButton);
};

export function modalDeleteProject(id) {
  document.getElementById(
    "modal-delete-text"
  ).innerHTML = `Do you really want to delete project ${data.getProjectName(id)}?`;

  modalFuncs.open("modal-delete-project");

  buttons(id);
}
