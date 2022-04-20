//
var buttonName1 = document.querySelector('.player1-name button');
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
  } else {

    StartOver(event);
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
  setTimeout(() => {
    const imgForPlayerOne = imgDom[0].setAttribute("src", randomDiceImage());
  }, 400);
  setTimeout(() => {
    const imgForPlayerTwo = imgDom[1].setAttribute("src", randomDiceImage());
  }, 700);
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

  const name1Type = typeof playerOneName;
  const name2Type = typeof playerTwoName;

  if (event.target.name == 'button1') {
    playerOneName = prompt("type your name");
    if (playerOneName === "") {
        buttonToggle(event);

      playerOneName = player1.textContent = "Player1";
    } else if (playerOneName === null) {
      event.target.hidden = true;
      playerOneName = player1.textContent = "Player1";
    } else {
      event.target.hidden = true;
      player1.textContent = playerOneName;
    }
  } else if (event.target.name == 'button2') {
    playerTwoName = prompt("type your name");
    if (playerTwoName === "") {
      event.target.hidden = true;
      playerTwoName = player2.textContent = "Player2";
    } else if (playerTwoName === null) {
      event.target.hidden = true;
      playerTwoName = player2.textContent = "Player2";
    } else {
      event.target.hidden = true;
      player2.textContent = playerTwoName;
    }
  } else if (event.target.name == 'start') {
    if (playerOneName === undefined && playerTwoName === undefined) {
      document.querySelector('.player1-name button').hidden = true;
      playerOneName = player1.textContent = "Player1";
      document.querySelector('.player2-name button').hidden = true;
      playerTwoName = player2.textContent = "Player2";
    } else if (name1Type === 'string' && name2Type === 'undefined') {
      document.querySelector('.player2-name button').hidden = true;
      playerTwoName = player2.textContent = "Player2";
    } else if (name1Type === 'undefined' && name2Type === 'string') {
      document.querySelector('.player1-name button').hidden = true;
      playerOneName = player1.textContent = "Player1";
    }
  }
}
//
function buttonToggle(event) {
  console.log(buttonName1);
if (true) {
  buttonName1.toggleAttribute('hidden');
}else {
  buttonName1.toggleAttribute('hidden');
}


}

//Function reset all parameters to default.
function StartOver(event) {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneName = '';
  playerTwoName = '';

  player1.textContent = '';
  player2.textContent = '';

  document.querySelector(".result").textContent = "Refresh Me";
  playerOneScoreDom.textContent = playerOneScore;
  playerTwoScoreDom.textContent = playerTwoScore;

  buttonToggle(event);


}
//Toggle between hiding and showing an element.
