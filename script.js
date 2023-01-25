const cells = Array.from(document.querySelectorAll(".board div"));

let currentPlayer = "X";
let gameOver = false;

cells.forEach((cells) => cells.addEventListener("click", handleClick));

function handleClick() {
  if (this.innerHTML !== "" || gameOver) return;

  this.innerHTML = currentPlayer;

  checkForWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
