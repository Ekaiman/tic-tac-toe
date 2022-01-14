var bottom = document.getElementById('bottom')
var boxes = document.querySelectorAll('.box')
// var boxOne = document.getElementById('boxOne')

bottom.addEventListener('click', chosenSquare)

var game = new Game()

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

  if (event.target.id === 'boxOne') {
    game.pickASquare('boxOne')
    displayIcon(boxOne)
    game.changeTurns()
  } else if (event.target.id === 'boxTwo'){
    game.pickASquare('boxTwo')
    displayIcon(boxTwo)
    game.changeTurns()
  } else if (event.target.id === 'boxThree'){
    game.pickASquare('boxThree')
    displayIcon(boxThree)
    game.changeTurns()
  } else if (event.target.id === 'boxFour'){
    game.pickASquare('boxFour')
    displayIcon(boxFour)
    game.changeTurns()
  } else if (event.target.id === 'boxFive'){
    game.pickASquare('boxFive')
    displayIcon(boxFive)
    game.changeTurns()
  } else if (event.target.id === 'boxSix'){
    game.pickASquare('boxSix')
    displayIcon(boxSix)
    game.changeTurns()
  } else if (event.target.id === 'boxSeven'){
    game.pickASquare('boxSeven')
    displayIcon(boxSeven)
    game.changeTurns()
  } else if (event.target.id === 'boxEight'){
    game.pickASquare('boxEight')
    displayIcon(boxEight)
    game.changeTurns()
  } else if (event.target.id === 'boxNine'){
    game.pickASquare('boxNine')
    displayIcon(boxNine)
    game.changeTurns()
  }
var boolean = game.winningSolutions()
setTimeout('clearBoxes()', 5000)
//make all boxes unclickable after someone winningS

}


function displayIcon(box) {
  if (game.playerOnesTurn && !game.ended && box.innerText === '') {
    box.innerText = game.playerOne.token
  } else if (!game.playerOnesTurn && !game.ended && box.innerText === ''){
    box.innerText = game.playerTwo.token
  }
}

// grid should clear when a player winnings
// or grid should clear when theres a draw
function clearBoxes() {
  if (game.ended) {
  for (var i = 0; i < boxes.length; i++) {
  boxes[i].innerText = ''
}
game.reset()
}
}
