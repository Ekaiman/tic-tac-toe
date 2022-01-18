var gameboard = document.getElementById("gameboard");
var boxes = document.querySelectorAll(".box");
var oneWins = document.getElementById("oneWins");
var twoWins = document.getElementById("twoWins");
var whoseTurnText = document.getElementById("whoseTurn");

gameboard.addEventListener("click", choseSquare);

var game = new Game();

function choseSquare() {
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id && boxes[i].innerText === "") {
      game.pickASquare(event.target.id);
      displayIcon(boxes[i]);
      game.changeTurns();
    }
  }
  game.checkForWinner();
  game.checkForDraw();
  displayWhoseTurn();
  displayWins();
  setTimeout("clearBoxes()", 5000);
}

function displayIcon(box) {
  if (game.playerOnesTurn && !game.ended && box.innerText === "") {
    box.innerText = game.playerOne.token;
  } else if (!game.playerOnesTurn && !game.ended && box.innerText === "") {
    box.innerText = game.playerTwo.token;
  }
}

function clearBoxes() {
  if (game.ended) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    game.resetBoard();
    displayWhoseTurn();
  }
}

function displayWhoseTurn() {
  if (game.playerOnesTurn && !game.ended) {
    whoseTurnText.innerText = "Player 1's Turn";
  } else if (!game.playerOnesTurn && !game.ended) {
    whoseTurnText.innerText = "Player 2's Turn";
  }
}

function displayWins() {
  if (game.winner === 1) {
    var playerOneWins = game.playerOne.wins.length;
    oneWins.innerText = `Wins: ${playerOneWins}`;
    whoseTurnText.innerText = "Victory for Player One!";
  } else if (game.winner === 2) {
    var playerTwoWins = game.playerOne.wins.length;
    twoWins.innerText = `Wins: ${playerTwoWins}`;
    whoseTurnText.innerText = "Victory for Player Two!";
  } else if (game.ended) {
    whoseTurnText.innerText = "Draw!";
  }
}
