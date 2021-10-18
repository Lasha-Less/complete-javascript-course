"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 21;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no (correct) input.
  if (!guess) {
    document.querySelector(".message").textContent = "Not a number! ⛔";

    // When player wins.
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#87CEEB";

    document.querySelector(".number").style.width = "30rem";

    // When guess is too high.
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🥴 Too high!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😈 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too low.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤪 Too low!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😈 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

/*
Perhaps you can set a new const to substutute the 
secretNumber above + copy the entire game logic
within this code below.
*/

// adding Again function

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
