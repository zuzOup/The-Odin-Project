import { focus, isFocused } from "./focus";
import { projectTaskFunc } from "./content/projects";

import { dataset } from "./dataset";
import moment from "moment";

export const data = (() => {
  const deepCopy = (item) => {
    return JSON.parse(JSON.stringify(item));
  };

  let data = deepCopy(dataset);

  const printAll = () => {
    console.log(data);
  };

  const getAll = () => {
    return deepCopy(data);
  };

  const localStorageUpdate = () => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  const localStorageGet = () => {
    data = JSON.parse(localStorage.getItem("data"));
  };

  /*-------------Projects-----------*/

  const getProjects = () => {
    return Object.entries(data).filter((x) => {
      return x[0] !== "notes";
    });
  };

  const getProjectIDfromName = (projectName) => {
    const id = Object.entries(data).reduce((acc, cur) => {
      return cur[1].name === projectName ? cur[0] : acc;
    }, []);

    return id;
  };

  const getProjectIDs = () => {
    return Object.keys(data).filter((x) => x !== "notes");
  };

  const getProjectName = (id) => {
    return data[id].name;
  };

  const getProjectNames = () => {
    return Object.values(data).map((x) => x.name);
  };

  const addProject = (id, projectName) => {
    data[id] = { name: projectName, tasks: [] };

    const menu = document.getElementById("menu-projects");
    const project = dataCreate.createProjectMenu(id, projectName);

    menu.appendChild(project);

    localStorageUpdate();
  };

  const deleteProject = (id) => {
    delete data[id];
    localStorageUpdate();
  };

  /*-------------Tasks-----------*/

  const getTasks = (project) => {
    return getAll()[project].tasks;
  };

  const getTask = (projectID, taskID) => {
    return data[projectID].tasks.filter((x) => x.id === taskID)[0];
  };

  const getTasksPending = (project) => {
    return getTasks(project).filter((x) => !x.checked);
  };

  const getTasksToday = (project) => {
    const date = moment().format("yyyy-MM-DD");

    return getTasks(project).filter((x) => x.date === date);
  };

  const getTasksCompleted = (project) => {
    return getTasks(project).filter((x) => x.checked);
  };

  const addTask = (projectID, title, priority, date, details) => {
    const id = `task-${Date.now()}`;

    const updatedProject = [
      ...data[projectID].tasks,
      { title, priority, date, details, checked: false, id, projectid: projectID },
    ];

    data[projectID].tasks = updatedProject;

    localStorageUpdate();
  };

  const editTask = (projectID, taskID, title, date, details, priority) => {
    const project = getTasks(projectID).map((task) => {
      if (task.id === taskID) {
        return {
          id: task.id,
          projectid: task.projectid,
          checked: task.checked,
          title,
          date,
          details,
          priority,
        };
      }
      return task;
    });

    data[projectID].tasks = project;

    localStorageUpdate();
  };

  const checkTask = (task) => {
    const projectID = task.projectid;

    const updatedTask = { ...task };
    updatedTask.checked = !task.checked;

    const tasks = data[projectID].tasks.reduce((acc, cur) => {
      if (cur.id === task.id) return [...acc, updatedTask];
      return [...acc, cur];
    }, []);

    const updatedProject = deepCopy(data[projectID]);
    updatedProject.tasks = tasks;

    data[projectID] = updatedProject;

    localStorageUpdate();
  };

  const deleteTask = (task) => {
    // const projectName = data[task.projectid].name;
    const newProject = data[task.projectid].tasks.filter((x) => x.id !== task.id);
    data[task.projectid].tasks = newProject;

    localStorageUpdate();
  };

  // ---------Notes----------

  const getNotes = () => {
    return Object.entries(data.notes);
  };

  const getNote = (id) => {
    return data.notes[id];
  };

  const addNote = (id) => {
    const notes = deepCopy(data.notes);

    notes[id] = "";

    data.notes = notes;

    localStorageUpdate();
  };

  const editNote = (id, newText) => {
    const notes = deepCopy(data.notes);

    notes[id] = newText;

    data.notes = notes;
    localStorageUpdate();
  };

  const deleteNote = (id) => {
    const notes = deepCopy(data.notes);
    delete notes[id];

    data.notes = notes;
    localStorageUpdate();
  };

  return {
    printAll,
    getAll,
    localStorageUpdate,
    localStorageGet,

    getProjects,
    getProjectIDfromName,
    getProjectIDs,
    getProjectName,
    getProjectNames,
    addProject,
    deleteProject,

    getTasks,
    getTask,
    getTasksPending,
    getTasksToday,
    getTasksCompleted,
    addTask,
    editTask,

    checkTask,
    deleteTask,

    getNotes,
    getNote,
    addNote,
    editNote,
    deleteNote,
  };
})();

export const dataCreate = (() => {
  function createProjectMenu(id, projectName) {
    const project = document.createElement("button");
    project.classList.add("project-tile");
    project.id = `project-button-${id}`;
    project.innerHTML = projectName;

    project.addEventListener("click", (e) => {
      isFocused(focus, e.target);
      projectTaskFunc(e.target);
    });

    return project;
  }
  const populateMenu = () => {
    const menu = document.getElementById("menu-projects");
    data.getProjects().forEach((x) => {
      const project = createProjectMenu(x[0], x[1].name);
      menu.appendChild(project);
    });
  };

  const populateOptions = () => {
    const datalist = document.getElementById("modal-task-project-list");
    data.getProjectIDs().forEach((projectID) => {
      const option = document.createElement("option");
      option.value = data.getProjectName(projectID);
      option.id = `project-option-${projectID}`;
      datalist.appendChild(option);
    });
  };
  return { createProjectMenu, populateMenu, populateOptions };
})();
