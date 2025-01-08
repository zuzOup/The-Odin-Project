import { data } from "../data";
import { appendProject } from "./helpers";

const buttonAllTasks = document.getElementById("all-button");
buttonAllTasks.onclick = () => allTaskFunc();

export function allTaskFunc() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.dataset.type = "all";

  const projects = data.getProjectIDs();

  if (projects.length === 0) {
    const div = document.createElement("h4");
    div.innerHTML =
      "Aren't you a busy bee! Click on Add New Button to create new projects and to-do's!";
    main.appendChild(div);
    return;
  }

  projects.forEach((projectID) => {
    appendProject(
      main,
      data.getTasksPending(projectID),
      data.getProjectName(projectID),
      projectID
    );
  });
}
