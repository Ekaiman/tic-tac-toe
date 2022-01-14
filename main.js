var bottom = document.getElementById("bottom");
var boxes = document.querySelectorAll(".box");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var oneWins = document.getElementById("oneWins");
var twoWins = document.getElementById("twoWins");
var whoseTurnText = document.getElementById("whoseTurn");
// var boxOne = document.getElementById('boxOne')

bottom.addEventListener("click", chosenSquare);

var game = new Game();

function chosenSquare() {
  if (event.target.id === "boxOne" && boxOne.innerText === "") {
    game.pickASquare("boxOne");
    displayIcon(boxOne);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxTwo" && boxTwo.innerText === "") {
    game.pickASquare("boxTwo");
    displayIcon(boxTwo);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxThree" && boxThree.innerText === "") {
    game.pickASquare("boxThree");
    displayIcon(boxThree);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxFour" && boxFour.innerText === "") {
    game.pickASquare("boxFour");
    displayIcon(boxFour);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxFive" && boxFive.innerText === "") {
    game.pickASquare("boxFive");
    displayIcon(boxFive);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxSix" && boxSix.innerText === "") {
    game.pickASquare("boxSix");
    displayIcon(boxSix);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxSeven" && boxSeven.innerText === "") {
    game.pickASquare("boxSeven");
    displayIcon(boxSeven);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxEight" && boxEight.innerText === "") {
    game.pickASquare("boxEight");
    displayIcon(boxEight);
    game.changeTurns();
    whoseTurn();
  } else if (event.target.id === "boxNine" && boxNine.innerText === "") {
    game.pickASquare("boxNine");
    displayIcon(boxNine);
    game.changeTurns();
    whoseTurn();
  }
  game.winningSolutions();
  whoseTurn();
  displayWins();
  setTimeout("clearBoxes()", 5000);

  //make all boxes unclickable after someone winningS
}

function displayIcon(box) {
  if (game.playerOnesTurn && !game.ended && box.innerText === "") {
    box.innerText = game.playerOne.token;
  } else if (!game.playerOnesTurn && !game.ended && box.innerText === "") {
    box.innerText = game.playerTwo.token;
  }
}

// grid should clear when a player winnings
// or grid should clear when theres a draw
function clearBoxes() {
  if (game.ended) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    game.reset();
    whoseTurn();
  }
}

function whoseTurn() {
  if (game.playerOnesTurn && !game.ended) {
    // playerOne.style.fontSize = "150%";
    // playerTwo.style.fontSize = "100%";
    whoseTurnText.innerText = "Player 1's Turn";
  } else if (!game.playerOnesTurn && !game.ended) {
    // playerTwo.style.fontSize = "150%";
    // playerOne.style.fontSize = "100%";
    whoseTurnText.innerText = "Player 2's Turn";
    // } else {
    //   playerTwo.style.fontSize = "100%";
    //   playerOne.style.fontSize = "100%";
    // }
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
  } else if (game.ended) {
    whoseTurnText.innerText = "Draw!";
  }
}

// function disableClick() {
//   boxes.disabled = true;
// }

//chosenSquare other thoughts
//>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<
//only should happen if that chosen box is 0
// for (var i = 0; i < boxes.length; i++) {
//   if (boxes[i].id == event.target.id) {
//     game.pickASquare('boxOne')
//     displayIcon(boxOne)
//     game.changeTurns()
//   }
// }
//   var click = event.target.id
//   console.log(click)
// if ( game.gameBoardSquares[click]) {
//   console.log('hi')
//   console.log(game.gameBoardSquares[event.target.id])
//   game.pickASquare('boxOne')
//   displayIcon(boxOne)
//   game.changeTurns()
// }
//   var thisBox = [boxOne, boxTwo, boxThree]
//   for (var i = 0; i < thisBox.length; i++){
//
//     // debugger
//     if (event.target.id === `${thisBox[i]}` && thisBox[i].innerText === '') {
//       game.pickASquare(`${thisBox[i]}`);
//       displayIcon(thisBox[i]);
//       game.changeTurns();
//   }
// }
