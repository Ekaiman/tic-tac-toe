var bottom = document.getElementById('bottom')

bottom.addEventListener('click', chosenSquare)

var game = new Game()

function chosenSquare() {
  //only should happen if that chosen box is 0
  // if ( game.gameBoardSquares[event.target.id])
  if (event.target.id === 'boxOne') {
    game.pickASquare('boxOne')
    game.changeTurns()
  } else if (event.target.id === 'boxTwo'){
    game.pickASquare('boxTwo')
    game.changeTurns()
  } else if (event.target.id === 'boxThree'){
    game.pickASquare('boxThree')
    game.changeTurns()
  } else if (event.target.id === 'boxFour'){
    game.pickASquare('boxFour')
    game.changeTurns()
  } else if (event.target.id === 'boxFive'){
    game.pickASquare('boxFive')
    game.changeTurns()
  } else if (event.target.id === 'boxSix'){
    game.pickASquare('boxSix')
    game.changeTurns()
  } else if (event.target.id === 'boxSeven'){
    game.pickASquare('boxSeven')
    game.changeTurns()
  } else if (event.target.id === 'boxEight'){
    game.pickASquare('boxEight')
    game.changeTurns()
  } else if (event.target.id === 'boxNine'){
    game.pickASquare('boxNine')
    game.changeTurns()
  }
game.winningSolutions()
}


function displayIcon() {
  // if the box is clicked by player one
  // change the inner html of the box to player ones token
  //if the box is clicked by player two
  //change the inner html of the box to player two tokens 
}
