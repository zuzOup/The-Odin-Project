import { data } from "../data";
import { modalDeleteProject } from "../modals/modal-delete-project";

const sort = {
  ["sort-checked-up"]: function (arr) {
    return arr.sort(
      (a, b) =>
        [...b.classList].includes("checked") - [...a.classList].includes("checked")
    );
  },
  ["sort-checked-down"]: function (arr) {
    return arr.sort(
      (a, b) =>
        [...a.classList].includes("checked") - [...b.classList].includes("checked")
    );
  },
  ["sort-title-up"]: function (arr, projectID) {
    return arr.sort((a, b) => {
      if (data.getTask(projectID, a.id).title < data.getTask(projectID, b.id).title) {
        return -1;
      }
      if (data.getTask(projectID, a.id).title > data.getTask(projectID, b.id).title) {
        return 1;
      }
    });
  },
  ["sort-title-down"]: function (arr, projectID) {
    console.log(1);

    return arr.sort((a, b) => {
      if (data.getTask(projectID, a.id).title > data.getTask(projectID, b.id).title) {
        return -1;
      }
      if (data.getTask(projectID, a.id).title < data.getTask(projectID, b.id).title) {
        return 1;
      }
    });
  },
  ["sort-date-up"]: function (arr, projectID) {
    return arr.sort(
      (a, b) =>
        new Date(data.getTask(projectID, a.id).date) -
        new Date(data.getTask(projectID, b.id).date)
    );
  },
  ["sort-date-down"]: function (arr, projectID) {
    return arr.sort(
      (a, b) =>
        new Date(data.getTask(projectID, b.id).date) -
        new Date(data.getTask(projectID, a.id).date)
    );
  },
  ["sort-priority-up"]: function (arr, projectID) {
    return arr.sort((a, b) => {
      const order = { low: 1, medium: 2, high: 3 };
      return (
        order[data.getTask(projectID, b.id).priority] -
        order[data.getTask(projectID, a.id).priority]
      );
    });
  },
  ["sort-priority-down"]: function (arr, projectID) {
    return arr.sort((a, b) => {
      const order = { low: 1, medium: 2, high: 3 };
      return (
        order[data.getTask(projectID, a.id).priority] -
        order[data.getTask(projectID, b.id).priority]
      );
    });
  },
};

export function sortDiv(id) {
  const div = document.createElement("div");
  div.classList.add("sort");

  const checked = document.createElement("div");
  checked.id = "sort-checked";
  const title = document.createElement("div");
  title.id = "sort-title";
  const date = document.createElement("div");
  date.id = "sort-date";
  const priority = document.createElement("div");
  priority.id = "sort-priority";

  [checked, title, date, priority].forEach((x) => {
    const up = document.createElement("button");

    up.id = `${x.id}-up`;
    up.classList.add("up");
    up.innerHTML = "↑";

    const down = document.createElement("button");

    down.id = `${x.id}-down`;
    down.classList.add("down");
    down.innerHTML = "↓";

    [up, down].forEach((ud) => {
      ud.addEventListener("click", (e) => {
        const project = document.getElementById(`project-${id}`);
        const projectTasks = Array.from(project.getElementsByClassName("task"));

        const addButton = document.getElementById("add-button-project");

        [...sort[e.target.id](projectTasks, id), addButton].forEach((x) =>
          project.appendChild(x)
        );
      });
    });

    x.appendChild(up);
    x.appendChild(down);
    div.appendChild(x);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "✖";
  deleteButton.id = `delete-button-project`;

  deleteButton.onclick = () => {
    modalDeleteProject(id);
  };

  div.appendChild(deleteButton);

  return div;
}
