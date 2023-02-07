"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameOn = true;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (gameOn) {
    if (!guess) {
      displayMessage("⛔️ No number");
    } else if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      displayMessage("Correct number ✅");
      gameOn = false;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess < secretNumber ? "Too low" : "Too high");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("You lost...");
        document.querySelector(".score").textContent = 0;
        gameOn = false;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  gameOn = true;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
});
