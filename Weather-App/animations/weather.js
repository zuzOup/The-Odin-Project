/*blowing leaves*/

const leaves = Array.from(document.getElementsByClassName("leaf"));

function restartLeaves() {
  leaves.forEach((leaf, i) => {
    leaf.classList.remove(`leaf${i + 1}`);
  });

  leaves.forEach((leaf) => void leaf.offsetWidth);
  leaves.forEach((leaf, i) => {
    leaf.classList.add(`leaf${i + 1}`);
  });
}

window.setInterval(restartLeaves, 10000);

/*rain*/

const rainy = Array.from(document.getElementsByClassName("drop"));

function rainyFrequency() {
  rainy.forEach((drop) => {
    drop.style.animationDelay = `${Math.round(Math.random() * 50) / 10}s`;
    drop.style.animationDuration = `${Math.round(Math.random() * 10 + 11) / 10}s`;
  });
}

rainyFrequency();

const bolt = document.getElementById("bolt");

function lightning() {
  bolt.classList.remove(`bolt`);
  void bolt.offsetWidth;
  bolt.classList.add(`bolt`);
}

window.setInterval(lightning, 6000);

/*snow*/

const snowy = Array.from(document.getElementsByClassName("snowflake"));

function snowyFrequency() {
  snowy.forEach((snowflake) => {
    snowflake.style.animationDelay = `${Math.round(Math.random() * 50) / 10}s`;
    snowflake.style.animationDuration = `${Math.round(Math.random() * 10 + 35) / 10}s`;
  });
}

snowyFrequency();
