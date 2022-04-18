const imgDom = document.querySelectorAll(".container img");
const heading = document.querySelector(".result");
const scorePlayer1Dom = document.querySelector(".score-Player1");
const scorePlayer2Dom = document.querySelector(".score-Player2");
// Default game score.
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// Add event listener to the button Add name.
var player1Name;
var player2Name;

const userNameButtons = document.querySelectorAll('button.player').forEach(buttonUserName => {
  buttonUserName.addEventListener('click', event => {
    console.log(event.target.name);

    if (event.target.name == 'button1') {
      player1Name = prompt("type your name");
      const hiddenButtonPlayer1 = event.target.hidden = true;
      const showPlayer1Name = document.querySelector('.player1-name').innerHTML = player1Name;

    } else {
      player2Name = prompt("type your name");
      const hiddenButtonPlayer2 = event.target.hidden = true;
      const showPlayer2Name = document.querySelector('.player2-name').innerHTML = player2Name;

    }
  });
});

//The Function creates and return one random image.
function randomDiceImage() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var diceImage = "images/dice" + randomNumber1 + ".png";
  return diceImage;
}
//Function rundomly set imiges by clicking button Start.
function setImage() {
  setTimeout(() => {
    const img1 = imgDom[0].setAttribute("src", randomDiceImage());
  }, 400);
  setTimeout(() => {
    const img2 = imgDom[1].setAttribute("src", randomDiceImage());
  }, 700);

  setTimeout(() => {
    gameResult();
  }, 1000);

}
//Function determines winer.
function gameResult() {
  //The variable stores the number of the dice image from player 1.
  var player1 = Array.from(imgDom[0].getAttribute('src'));
  player1 = player1[11];
  //The variable stores the number of the dice image from player 2.
  var player2 = Array.from(imgDom[1].getAttribute('src'));
  player2 = player2[11];

  //Game result flow control
  if (player1 > player2) {
    scorePlayer1++;
    document.querySelector(".result").innerHTML = "Player1 won";
  } else if (player1 === player2) {
    document.querySelector(".result").innerHTML = "Draw";
  } else {
    scorePlayer2++;
    document.querySelector(".result").innerHTML = "Player2 won";
  }

  const setScorePlayer1 = document.querySelector(".score-Player1").innerHTML = scorePlayer1;
  const setScorePlayer2 = document.querySelector(".score-Player2").innerHTML = scorePlayer2;
}

// Player name.

function userName(event) {

  const userName = event.name;

  console.log(userName);
}
