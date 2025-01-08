import { data } from "../data";
import { appendProject } from "./helpers";

const buttonCompleted = document.getElementById("completed-button");
buttonCompleted.onclick = () => completedTaskFunc();

export function completedTaskFunc() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.dataset.type = "completed";

  const projects = data.getProjectIDs().reduce((acc, cur) => {
    if (data.getTasks(cur).every((x) => x.checked === false)) return [...acc];

    return [...acc, cur];
  }, []);

  if (
    projects.every((project) => {
      return data.getTasksCompleted(project).length === 0;
    })
  ) {
    const div = document.createElement("h4");
    div.innerHTML = "Oh, look, nothing's finished yet! Chop-chop, let's get to it!";
    main.appendChild(div);
    return;
  }

  projects.forEach((projectID) => {
    appendProject(
      main,
      data.getTasksCompleted(projectID),
      data.getProjectName(projectID),
      projectID
    );
  });
}
