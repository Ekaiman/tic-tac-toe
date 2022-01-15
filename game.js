class Game {
  constructor() {
    this.playerOne = new Player(1, "🍄");
    this.playerTwo = new Player(2, "🌱");
    this.playerOnesTurn = true;
    this.whoStarts = 1;
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
    this.ended = false;
    this.trophyEarned = 0;
  }

  changeTurns() {
    if (this.playerOnesTurn) {
      this.playerOnesTurn = false;
    } else {
      this.playerOnesTurn = true;
    }
  }

  pickASquare(chosenSquare) {
    if (this.playerOnesTurn && this.gameBoardSquares[chosenSquare] === 0) {
      this.gameBoardSquares[chosenSquare] = 1;
      // this.winningSolutions()
    }

    if (!this.playerOnesTurn && this.gameBoardSquares[chosenSquare] === 0) {
      this.gameBoardSquares[chosenSquare] = 2;
      // this.winningSolutions()
    }
    return this.gameBoardSquares[chosenSquare];
    displayIcon();
  }

  winningSolutions(firstBox, secondBox, thirdBox) {
    if (
        this.gameBoardSquares[firstBox] > 0 &&
        this.gameBoardSquares[firstBox] === this.gameBoardSquares[secondBox] &&
        this.gameBoardSquares[firstBox] === this.gameBoardSquares[thirdBox]
      ) {
        this.winner = this.gameBoardSquares[firstBox];

        console.log(`Player ${this.winner} won!`);
        this.recordWinner();
        this.ended = true;

}
}

  //   if (
  //     this.gameBoardSquares.boxOne > 0 &&
  //     this.gameBoardSquares.boxOne === this.gameBoardSquares.boxTwo &&
  //     this.gameBoardSquares.boxOne === this.gameBoardSquares.boxThree
  //   ) {
  //     this.winner = this.gameBoardSquares.boxOne;
  //
  //     console.log(`Player ${this.winner} won!`);
  //     this.recordWinner();
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxOne > 0 &&
  //     this.gameBoardSquares.boxOne === this.gameBoardSquares.boxSeven &&
  //     this.gameBoardSquares.boxOne === this.gameBoardSquares.boxFour
  //   ) {
  //     this.winner = this.gameBoardSquares.boxOne;
  //     console.log(`Player ${this.winner} won!`);
  //     this.recordWinner();
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxSeven > 0 &&
  //     this.gameBoardSquares.boxSeven === this.gameBoardSquares.boxEight &&
  //     this.gameBoardSquares.boxSeven === this.gameBoardSquares.boxNine
  //   ) {
  //     this.winner = this.gameBoardSquares.boxSeven;
  //     console.log(`Player ${this.winner} won!`);
  //     this.recordWinner();
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxThree > 0 &&
  //     this.gameBoardSquares.boxThree === this.gameBoardSquares.boxSix &&
  //     this.gameBoardSquares.boxThree === this.gameBoardSquares.boxNine
  //   ) {
  //     this.winner = this.gameBoardSquares.boxThree;
  //     console.log(`Player ${this.winner} won!`);
  //     this.recordWinner();
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxTwo > 0 &&
  //     this.gameBoardSquares.boxTwo === this.gameBoardSquares.boxFive &&
  //     this.gameBoardSquares.boxTwo === this.gameBoardSquares.boxEight
  //   ) {
  //     this.winner = this.gameBoardSquares.boxTwo;
  //     this.recordWinner();
  //     console.log(`Player ${this.winner} won!`);
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxFour > 0 &&
  //     this.gameBoardSquares.boxFour === this.gameBoardSquares.boxFive &&
  //     this.gameBoardSquares.boxFour === this.gameBoardSquares.boxSix
  //   ) {
  //     this.winner = this.gameBoardSquares.boxFour;
  //     this.recordWinner();
  //     console.log(`Player ${this.winner} won!`);
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxOne > 0 &&
  //     this.gameBoardSquares.boxOne === this.gameBoardSquares.boxFive &&
  //     this.gameBoardSquares.boxOne === this.gameBoardSquares.boxNine
  //   ) {
  //     this.winner = this.gameBoardSquares.boxOne;
  //     this.recordWinner();
  //     console.log(`Player ${this.winner} won!`);
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxThree > 0 &&
  //     this.gameBoardSquares.boxThree === this.gameBoardSquares.boxSeven &&
  //     this.gameBoardSquares.boxThree === this.gameBoardSquares.boxFive
  //   ) {
  //     this.winner = this.gameBoardSquares.boxThree;
  //     this.recordWinner();
  //     console.log(`Player ${this.winner} won!`);
  //     this.ended = true;
  //   } else if (
  //     this.gameBoardSquares.boxOne > 0 &&
  //     this.gameBoardSquares.boxTwo > 0 &&
  //     this.gameBoardSquares.boxThree > 0 &&
  //     this.gameBoardSquares.boxFour > 0 &&
  //     this.gameBoardSquares.boxFive > 0 &&
  //     this.gameBoardSquares.boxSix > 0 &&
  //     this.gameBoardSquares.boxSeven > 0 &&
  //     this.gameBoardSquares.boxEight > 0 &&
  //     this.gameBoardSquares.boxNine > 0
  //   ) {
  //     console.log(`Draw`);
  //     this.ended = true;
  //   }
  // }

  reset() {
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
    this.alternateStartingPlayer();
    this.winner = 0;
    this.ended = false;
    game.trophyEarned = 0;
  }

  recordWinner() {
    if (this.winner === 1 && !this.ended) {
      this.playerOne.wins.push(1);
    } else if (this.winner === 2 && !this.ended) {
      this.playerTwo.wins.push(1);
    }
  }

  alternateStartingPlayer() {
    if (this.whoStarts === 1) {
      this.whoStarts = 2;
      this.playerOnesTurn = false;
    } else {
      this.whoStarts = 1;
      this.playerOnesTurn = true;
    }
  }
}
