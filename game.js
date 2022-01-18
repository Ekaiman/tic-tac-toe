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

    this.winningConditions = [
      ["boxOne", "boxTwo", "boxThree"],
      ["boxFour", "boxFive", "boxSix"],
      ["boxSeven", "boxEight", "boxNine"],
      ["boxOne", "boxFour", "boxSeven"],
      ["boxTwo", "boxFive", "boxEight"],
      ["boxThree", "boxSix", "boxNine"],
      ["boxOne", "boxFive", "boxNine"],
      ["boxThree", "boxFive", "boxSeven"],
    ];

    this.winner;
    this.ended = false;
  }

  changeTurns(event) {
    if (this.playerOnesTurn) {
      this.playerOnesTurn = false;
    } else {
      this.playerOnesTurn = true;
    }
  }

  pickASquare(chosenSquare) {
    if (this.playerOnesTurn && this.gameBoardSquares[chosenSquare] === 0) {
      this.gameBoardSquares[chosenSquare] = 1;
    } else if (!this.playerOnesTurn && this.gameBoardSquares[chosenSquare] === 0) {
      this.gameBoardSquares[chosenSquare] = 2;
    }
  }

  checkForWinner() {
    for (var i = 0; i < this.winningConditions.length; i++) {
      if (
        this.gameBoardSquares[this.winningConditions[i][0]] > 0 &&
        this.gameBoardSquares[this.winningConditions[i][0]] ===
          this.gameBoardSquares[this.winningConditions[i][1]] &&
        this.gameBoardSquares[this.winningConditions[i][0]] ===
          this.gameBoardSquares[this.winningConditions[i][2]]
      ) {
        this.winner = this.gameBoardSquares[this.winningConditions[i][0]];
        this.recordWinner();
        this.ended = true;
        return;
      }
    }
  }

  checkForDraw() {
    if (
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
      this.ended = true;
    }
  }


  resetBoard() {
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
  }

  recordWinner() {
    if (this.winner === 1 && !this.ended) {
      this.playerOne.wins.push(this.gameBoardSquares);
    } else if (this.winner === 2 && !this.ended) {
      this.playerTwo.wins.push(this.gameBoardSquares);
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
