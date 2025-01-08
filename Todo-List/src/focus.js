export let focus = "all-button";

export function isFocused(state, target) {
  if (target.id === state) return;

  const lastFocus = document.getElementById(state);
  lastFocus.classList.remove("focus");
  target.classList.add("focus");

  focus = target.id;

  // TODO:fix state on project when delete
}

const buttons = ["all-button", "today-button", "completed-button", "notes-button"].map(
  (x) => document.getElementById(x)
);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    isFocused(focus, e.target);
  });
});
