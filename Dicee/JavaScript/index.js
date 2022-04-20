const playerNameButtons = document.querySelectorAll('.container button');
//
const imgDom = document.querySelectorAll(".container img");
const heading = document.querySelector(".result");
//
const playerOneScoreDom = document.querySelector(".score-Player1");
const playerTwoScoreDom = document.querySelector(".score-Player2");
//
const player1 = document.querySelector('.player1-name');
const player2 = document.querySelector('.player2-name');
// Default game score.
var playerOneScore = 0;
var playerTwoScore = 0;
// Store player name.
var playerOneName;
var playerTwoName;
//Add event listener for all buttons.
const userNameButtons = document.querySelectorAll('button').forEach(buttonUserName => {
  buttonUserName.addEventListener('click', event => {
    startGame(event);
  });
});
// Function start game.
function startGame(event) {
  if (event.target.name === 'button1' || event.target.name === 'button2') {
    setName(event);
  } else if (event.target.name === 'start') {
    if (playerOneScore === 0 && playerTwoScore === 0) {
      setName(event);
      setTimeout(() => {
        setImage()
      }, 500);
      setTimeout(() => {
        gameResult();
      }, 1500);
    } else {
      setTimeout(() => {
        setImage();
      }, 100);
      setTimeout(() => {
        gameResult();
      }, 1000);
    }
  } else if (event.target.name === 'reload') {
    buttonNameToggle(event);
  }
}
//The Function creates and return one random image.
function randomDiceImage() {
  const randomNumber = Math.floor((Math.random() * 6) + 1);
  const randomImage = "images/dice" + randomNumber + ".png";
  return randomImage;
}
//Function rundomly set imiges by clicking button Start.
function setImage() {
  const imgForPlayerOne = imgDom[0].setAttribute("src", randomDiceImage());
  const imgForPlayerTwo = imgDom[1].setAttribute("src", randomDiceImage());
}
//Function determines winer.
function gameResult() {
  //The number of the dice image from player 1.
  var player1 = Array.from(imgDom[0].getAttribute('src'))[11];
  //The number of the dice image from player 2.
  var player2 = Array.from(imgDom[1].getAttribute('src'))[11];

  if (player1 > player2) {
    playerOneScore++;
    document.querySelector(".result").textContent = "Player1 won";
  } else if (player1 === player2) {
    document.querySelector(".result").textContent = "Draw";
  } else {
    playerTwoScore++;
    document.querySelector(".result").textContent = "Player2 won";
  }
  playerOneScoreDom.textContent = playerOneScore;
  playerTwoScoreDom.textContent = playerTwoScore;
}
//Set player's name.
function setName(event) {

  if (event.target.name == 'button1') {
    playerOneName = prompt("type your name");
    if (playerOneName === "") {
      buttonNameToggle(event);
      playerOneName = player1.textContent = "Player1";
    } else if (playerOneName === null) {
      buttonNameToggle(event);
      playerOneName = player1.textContent = "Player1";
    } else {
      buttonNameToggle(event);
      playerOneName = player1.textContent = playerOneName;
    }
  } else if (event.target.name == 'button2') {
    playerTwoName = prompt("type your name");
    if (playerTwoName === "") {
      buttonNameToggle(event)
      playerTwoName = player2.textContent = "Player2";
    } else if (playerTwoName === null) {
      buttonNameToggle(event)
      playerTwoName = player2.textContent = "Player2";
    } else {
      buttonNameToggle(event)
      player2.textContent = playerTwoName;
    }
  } else if (event.target.name == 'start') {
    if (playerOneName === undefined && playerTwoName === undefined) {
      buttonNameToggle(event)
      playerOneName = player1.textContent = "Player1";
      playerTwoName = player2.textContent = "Player2";
    } else if (typeof playerOneName === 'string' && typeof playerTwoName === 'undefined') {
      buttonNameToggle(event)
      playerTwoName = player2.textContent = "Player2";
    } else if (typeof playerOneName === 'undefined' && typeof playerTwoName === 'string') {
      buttonNameToggle(event)
      playerOneName = player1.textContent = "Player1";
    }
  }
}
//Toggle buttons Add name.
function buttonNameToggle(event) {

  if (event.target.name === 'button1') {
    playerNameButtons[0].hidden = true;
  } else if (event.target.name === 'button2') {
    playerNameButtons[1].hidden = true;
  } else if (event.target.name === 'reload') {
    if (playerNameButtons[0].hasAttribute("hidden") === true && playerNameButtons[1].hasAttribute("hidden") === false) {
      player1.textContent = "";
      playerOneName = undefined;
      player1.appendChild(playerNameButtons[0]);
      playerNameButtons[0].hidden = false;
    } else if (playerNameButtons[0].hasAttribute("hidden") === false && playerNameButtons[1].hasAttribute("hidden") === true) {
      playerTwoName = undefined;
      player2.textContent = "";
      player2.appendChild(playerNameButtons[1]);
      playerNameButtons[1].hidden = false;
    } else if (playerNameButtons[0].hasAttribute("hidden") === true && playerNameButtons[1].hasAttribute("hidden") === true) {
      playerOneScore = 0;
      playerTwoScore = 0;
      playerOneName = undefined;
      playerTwoName = undefined;
      //
      player1.textContent = "";
      player2.textContent = "";
      player1.appendChild(playerNameButtons[0]);
      player2.appendChild(playerNameButtons[1]);
      playerNameButtons[0].hidden = false;
      playerNameButtons[1].hidden = false;
      playerOneScoreDom.textContent = playerOneScore;
      playerTwoScoreDom.textContent = playerTwoScore
      document.querySelector(".result").textContent = "Refresh Me";
    }
  } else if (event.target.name === 'start') {
    if (playerNameButtons[0].hasAttribute("hidden") === false && playerNameButtons[1].hasAttribute("hidden") === false) {
      playerNameButtons[0].hidden = true;
      playerNameButtons[1].hidden = true;
    } else if (playerNameButtons[0].hasAttribute("hidden") === true && playerNameButtons[1].hasAttribute("hidden") === false) {
      playerNameButtons[1].hidden = true;
    } else if (playerNameButtons[0].hasAttribute("hidden") === false && playerNameButtons[1].hasAttribute("hidden") === true) {
      playerNameButtons[0].hidden = true;
    }
  }
}
