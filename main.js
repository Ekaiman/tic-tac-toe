var bottom = document.getElementById("bottom");
var boxes = document.querySelectorAll(".box");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var oneWins = document.getElementById("oneWins");
var twoWins = document.getElementById("twoWins");
var whoseTurnText = document.getElementById("whoseTurn");

bottom.addEventListener("click", chosenSquare);

var game = new Game();

//rename start game
function chosenSquare() {
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id && boxes[i].innerText === '') {
      game.pickASquare(event.target.id);
      displayIcon(boxes[i]);
    }
  }
  // put gmae logic in property
  game.winningSolutions();
  game.draw()
  game.changeTurns();
  whoseTurn();
  displayWins();
  setTimeout("clearBoxes()", 5000);
}

//make this interact with gameboardsquares
//if gameboardsquares is one, show player one displayIcon
//if game board squares is two, show player two icson
//if === 0 show nothing = ''
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
    game.reset();
    whoseTurn();
  }
}

//displayWhosETurn
//pass in player
function whoseTurn() {
  if (game.playerOnesTurn && !game.ended) {
    whoseTurnText.innerText = "Player 1's Turn";
  } else if (!game.playerOnesTurn && !game.ended) {
    whoseTurnText.innerText = "Player 2's Turn";
  }
}

function displayWins() {
  if (game.winner === 1 && game.trophyEarned === 0) {
    oneWins.innerText += "🏆";
    whoseTurnText.innerText = "Victory for Player One!";
    game.trophyEarned++;
  } else if (game.winner === 2 && game.trophyEarned === 0) {
    twoWins.innerText += "🏆";
    whoseTurnText.innerText = "Victory for Player Two!";
    game.trophyEarned++;
  } else if (game.ended && game.trophyEarned === 0) {
    whoseTurnText.innerText = "Draw!";
  }
}
