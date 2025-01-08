import moment from "moment";
import { data } from "../data";
import { appendProject } from "./helpers";

const buttonToday = document.getElementById("today-button");
buttonToday.onclick = () => todayTaskFunc();

export function todayTaskFunc() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.dataset.type = "today";

  const projects = data.getProjectIDs().reduce((acc, cur) => {
    const date = moment().format("yyyy-MM-DD");

    if (data.getTasks(cur).every((x) => x.date !== date)) return [...acc];

    return [...acc, cur];
  }, []);

  if (projects.length === 0) {
    const div = document.createElement("h4");
    div.innerHTML = "Nothing for today!";
    main.appendChild(div);
    return;
  }

  projects.forEach((projectID) => {
    appendProject(
      main,
      data.getTasksToday(projectID),
      data.getProjectName(projectID),
      projectID
    );
  });
}
