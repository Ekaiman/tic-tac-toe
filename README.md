# Tic-Tac-Toe

This project allows users to play tic tac toe with a friend sitting nearby. The program will automatically switch turns between plays, and asses for a win or a draw. Once the game has ended, after a few moments the board will refresh and it will record who one that game.

![Gif 1](https://media.giphy.com/media/wk6xnQmbXmplJRDKGN/giphy.gif)

![Gif 2](https://media.giphy.com/media/rZaQItzaC8LQYBIPCi/giphy.gif)

## Contributors
- [Emili Kaiman](https://github.com/Ekaiman)

## Technologies Used
- JavaScript
- Html
- CSS

## Local Set up Instructions
- From the tic-tac-toe-SOLO repo click the code button and copy the SSH link. <img width="915" alt="Screen Shot 2022-01-20 at 10 29 35 AM" src="https://user-images.githubusercontent.com/93098905/150390803-c97cde45-4e6c-44aa-938d-7b16c434325d.png">
- or use this - git@github.com:Ekaiman/tic-tac-toe-SOLO.git
- Open terminal by pressing command + space bar, and search for terminal
- Inside of you terminal type "git clone" and then paste the ssh link should look like "git clone git@github.com:Ekaiman/tic-tac-toe-SOLO.git"
- In your terminal type "cd tic-tac-toe-SOLO"
- Then type "open index.html"
- The browser should then deploy

## Instructions For Use
- On opening the browser, it is player ones turn.
- Click on a square, or use tab and enter to place your token.
- Then its player twos turn.
- Repeat until there is a winner.
- The board will automatically refresh and switch which player begins the next round.

## Code Architecture
- This project consists of 5 different files - index.html, css.styles, main.js, game.js, player.js.
- game.js and player.js are both classes that hold the data models.
- game.js holds all neccesary information for the games logic including :
        - Game board data
        - Win conditions
        - If the game is still active
        - Which players turn
        - Who starts
- The game board data gameBoardSquares is an object. Each key in the project directly corresponds to a box in the HTML and has the same naming as its corresponding boxs' id. 
- The game starts all of the properties start with a value of 0.
- As the players pick a square, the number changes to a 1 or a 2 depending on whos placed in that sqaure.
- Win conditions is an array of arrays holding the box property names that make a win. 
- The win conditions array is iterated through in the checkForWin method.

- player.js is a class that hold the players id and their token
- a new instance of player is created in the game class 
 
## Future Additions
- Create an option to play against a computer.
- Allow users to pick their token from a drop down menu.
- Add music to browser.

## Wins and Challenges
- Seperating the data model and the DOM was a challenge at first, but got easier to understand with more time.
- Using bracket notation for variables and creating dynamic functions was challenging, and a win at the same time.
- Completeing the project was a win! 
- Learning how to effectively use the console to troubleshoot isues and manually run the game was a huge win! 🥳
