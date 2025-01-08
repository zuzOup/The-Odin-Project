import { data } from "../data";
import { appendProject } from "./helpers";

export function projectTaskFunc(target) {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.dataset.type = "projects";

  const id = target.id.split("-").pop();

  appendProject(main, data.getTasks(id), target.innerHTML, id, true);
}
