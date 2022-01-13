class Game {
  constructor() {
    //two player instances
    this.playerOne = new Player(1, "X");
    this.playerTwo = new Player(2, "O");
    //data for game board
    this.playerOnesTurn = true;
    this.gameBoardSquares = {
      boxOne: 0,
      boxTwo: 0,
      boxThree: 0,
      boxFour: 0,
      boxFive: 0,
      boxSix: 0,
      boxSeven: 0,
      boxEight: 0,
      boxNine: 0,
    };
    this.winner;
    // gameboards data for win conditions
    // game is a draw
    //reset gameboard to new games
    // ???for in loop???
  }

  changeTurns() {
    //if player one just went, chane playerOnesTurn to false
    //if player two just went, change playerOnesTurn to true
    if (this.playerOnesTurn) {
      this.playerOnesTurn = false;
    } else {
      this.playerOnesTurn = true;
    }
  }

  pickASquare(chosenSquare, existingSquare) {
    /*

    if its players one turn if a box is clicked by player one, update this.gameBoardSquares
    correlationg box to 1,

    if its clicked by player two, update to 2
    */
    if (this.playerOnesTurn && this.gameBoardSquares[chosenSquare] === 0) {
      this.gameBoardSquares[chosenSquare] = 1;
    }

    if (!this.playerOnesTurn && this.gameBoardSquares[chosenSquare] === 0) {
      this.gameBoardSquares[chosenSquare] = 2;
    }

    // console.log(this.gameBoardSquares[chosenSquare])
    return this.gameBoardSquares[chosenSquare];
  }

  winningSolutions() {
    // if box one two three match
    // 4 5 6
    // 7 8 9
    // 1 4 7
    // 2
    //
    var winningScenarioArray = [
      {
        boxOne: 1,
        boxTwo: 1,
        boxThree: 1,
      },
    ];

    // var winningConditionOne = (this.gameBoardSquares.boxOne > 0 &&
    //   this.gameBoardSquares.boxOne === this.gameBoardSquares.boxTwo &&
    //   this.gameBoardSquares.boxOne === this.gameBoardSquares.boxThree)

    // }
    //
    //   // this works

    // if (winningConditionOne) {
    //   console.log(`Player ${this.winner} won!`)
    // }
    if (
      this.gameBoardSquares.boxOne > 0 &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxTwo &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxThree
    ) {
      this.winner = this.gameBoardSquares.boxOne;
      console.log(`Player ${this.winner} won!`);
    }
    //if box one four seven match
    else if (
      this.gameBoardSquares.boxOne > 0 &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxSeven &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxFour
    ) {
      this.winner = this.gameBoardSquares.boxOne;
      console.log(`Player ${this.winner} won!`);
    }
    //if box seven eight nine match
    else if (
      this.gameBoardSquares.boxSeven > 0 &&
      this.gameBoardSquares.boxSeven === this.gameBoardSquares.boxEight &&
      this.gameBoardSquares.boxSeven === this.gameBoardSquares.boxNine
    ) {
      this.winner = this.gameBoardSquares.boxSeven;
      console.log(`Player ${this.winner} won!`);
    }
    //if box three six nine match
    else if (
      this.gameBoardSquares.boxOne > 0 &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxSeven &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxFour
    ) {
      this.winner = this.gameBoardSquares.boxOne;
      console.log(`Player ${this.winner} won!`);
    }
    // if boxe two five eight match
    else if (
      this.gameBoardSquares.boxTwo > 0 &&
      this.gameBoardSquares.boxTwo === this.gameBoardSquares.boxFive &&
      this.gameBoardSquares.boxTwo === this.gameBoardSquares.boxEight
    ) {
      this.winner = this.gameBoardSquares.boxTwo;
      console.log(`Player ${this.winner} won!`);
    }
    //if box four five six match
    else if (
      this.gameBoardSquares.boxFour > 0 &&
      this.gameBoardSquares.boxFour === this.gameBoardSquares.boxFive &&
      this.gameBoardSquares.boxFour === this.gameBoardSquares.boxSix
    ) {
      this.winner = this.gameBoardSquares.boxFour;
      console.log(`Player ${this.winner} won!`);
    }
    //if box one five nine match
    else if (
      this.gameBoardSquares.boxOne > 0 &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxFive &&
      this.gameBoardSquares.boxOne === this.gameBoardSquares.boxNine
    ) {
      this.winner = this.gameBoardSquares.boxOne;
      console.log(`Player ${this.winner} won!`);
      //if box three five seven match
    } else if (
      this.gameBoardSquares.boxThree > 0 &&
      this.gameBoardSquares.boxThree === this.gameBoardSquares.boxSeven &&
      this.gameBoardSquares.boxThree === this.gameBoardSquares.boxFIve
    ) {
      this.winner = this.gameBoardSquares.boxOne;
      console.log(`Player ${this.winner} won!`);
    } else if (
      this.gameBoardSquares.boxOne > 0 &&
      this.gameBoardSquares.boxTwo > 0 &&
      this.gameBoardSquares.boxThree > 0 &&
      this.gameBoardSquares.boxFour > 0 &&
      this.gameBoardSquares.boxFive > 0 &&
      this.gameBoardSquares.boxSix > 0 &&
      this.gameBoardSquares.boxSeven > 0 &&
      this.gameBoardSquares.boxEight > 0 &&
      this.gameBoardSquares.boxNine > 0
    ) {
      console.log(`Draw`);
    }
  }
}

//>>> the number that is matching is the player that wins

//     //else its a draw
//   }
// }
