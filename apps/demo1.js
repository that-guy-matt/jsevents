let total = 0;
let combo = 0;
let timer = 1200;
var comboTimer;
let scoreTxt = document.querySelector("#totalCount");
let comboTxt = document.querySelector("#comboCount");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  increaseScore();
  increaseCombo();
  clearInterval(comboTimer);
  moveButton();
  startTimer();
});

function increaseScore() {
  total++;
  scoreTxt.textContent = total;
}

function increaseCombo() {
  combo++;
  comboTxt.textContent = combo;
}

function resetCombo() {
  combo = 0;
  comboTxt.textContent = combo;
}

function moveButton() {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  btn.style.top = `${y}px`;
  btn.style.left = `${x}px`;
}

function startTimer() {
  comboTimer = setInterval(function () {
    moveButton();
    resetCombo();
  }, timer);
}

startTimer();
