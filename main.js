var bottom = document.getElementById('bottom');
var boxes = document.querySelectorAll('.box');
var playerOne = document.getElementById('playerOne')
var playerTwo = document.getElementById('playerTwo')
var oneWins = document.getElementById('oneWins')
// var boxOne = document.getElementById('boxOne')

bottom.addEventListener("click", chosenSquare);

var game = new Game();

function chosenSquare() {
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

  if (event.target.id === "boxOne" && boxOne.innerText === '') {
    game.pickASquare("boxOne");
    displayIcon(boxOne);
    game.changeTurns();
  } else if (event.target.id === "boxTwo" && boxTwo.innerText === '') {
    game.pickASquare("boxTwo");
    displayIcon(boxTwo);
    game.changeTurns();
  } else if (event.target.id === "boxThree" && boxThree.innerText === '') {
    game.pickASquare("boxThree");
    displayIcon(boxThree);
    game.changeTurns();
  } else if (event.target.id === "boxFour" && boxFour.innerText === '') {
    game.pickASquare("boxFour");
    displayIcon(boxFour);
    game.changeTurns();
  } else if (event.target.id === "boxFive" && boxFive.innerText === '') {
    game.pickASquare("boxFive");
    displayIcon(boxFive);
    game.changeTurns();
  } else if (event.target.id === "boxSix" && boxSix.innerText === '') {
    game.pickASquare("boxSix");
    displayIcon(boxSix);
    game.changeTurns();
  } else if (event.target.id === "boxSeven" && boxSeven.innerText === '') {
    game.pickASquare("boxSeven");
    displayIcon(boxSeven);
    game.changeTurns();
  } else if (event.target.id === "boxEight" && boxEight.innerText === '') {
    game.pickASquare("boxEight");
    displayIcon(boxEight);
    game.changeTurns();
  } else if (event.target.id === "boxNine" && boxNine.innerText === '') {
    game.pickASquare("boxNine");
    displayIcon(boxNine);
    game.changeTurns();
  }
  whoseTurn()
  game.winningSolutions();
  displayWins()
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
    whoseTurn()
  }
}

function whoseTurn() {
  if (game.playerOnesTurn) {
    playerOne.style.fontSize = '150%'
    playerTwo.style.fontSize = '100%'
  } else if (!game.playerOnesTurn) {
    playerTwo.style.fontSize = '150%'
    playerOne.style.fontSize = '100%'
}
}


function displayWins(){
  if (game.winner === 1) {
    oneWins.innerText += '🏆'
  } else if (game.winner === 2) {
    twoWins.innerText += '🏆'
  }
}
