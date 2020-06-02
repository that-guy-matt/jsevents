let total = 0;
let combo = 0;
let timer = 1200;
let totalTxt = document.querySelector("#totalCount");
let comboTxt = document.querySelector("#comboCount");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  total++;
  combo++;
  updateScore(totalTxt, total);
  updateScore(comboTxt, combo);
});

function updateScore(item, n) {
  item.textContent = n;
}

function moveButton() {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  btn.style.top = `${y}px`;
  btn.style.left = `${x}px`;
  setTimeout(function () {
    moveButton();
    combo = 0;
    updateScore(comboTxt, combo);
  }, timer);
}

moveButton();
