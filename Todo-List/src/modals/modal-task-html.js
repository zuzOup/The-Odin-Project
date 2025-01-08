export const modalTaskInner = `
            <div>
              <input id="modal-task-title" name="modal-task-title" placeholder="" />
              <label for="modal-task-title">Title</label>
            </div>
            <div>
              <input id="modal-task-details" name="modal-task-details" placeholder="" />
              <label for="modal-task-details">Details</label>
            </div>
            <div class="due-priority">
              <div class="project">
                <input
                  list="modal-task-project-list"
                  id="modal-task-project"
                  name="modal-task-project"
                  placeholder=""
                />
                <label for="modal-task-project">Project</label>
                <datalist id="modal-task-project-list"></datalist>
              </div>
              <div class="due">
                <input
                  type="date"
                  id="modal-task-date"
                  name="modal-task-date"
                  placeholder=""
                />
                <label for="modal-task-date">Due Date</label>
              </div>
              <div class="priority">
                <div class="inputs">
                  <div class="radio-inputs" id="radio-inputs">
                    <input type="radio" id="low" name="priority" checked />
                    <label for="low" class="low">Low</label>
                    <input type="radio" id="medium" name="priority" />
                    <label for="medium" class="medium">Medium</label>
                    <input type="radio" id="high" name="priority" />
                    <label for="high" class="high">High</label>
                  </div>
                  <div class="label">Priority</div>
                </div>
              </div>
            </div>
          `;

const modalTaskButton = document.getElementById("modal-task-button");
modalTaskButton.setAttribute("inner-html", modalTaskInner);
