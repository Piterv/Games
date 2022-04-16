const imgDom = document.querySelectorAll(".container img");
const heading = document.querySelector(".result");

//The Function creates and return one random image.
function randomDiceImage() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var diceImage = "images/dice" + randomNumber1 + ".png";
  return diceImage;
}
//Function determines winer.
function result() {
  //The variable stores the number of the dice image from player 1.
  var player1 = Array.from(imgDom[0].getAttribute('src'));
  player1 = player1[11];
  //The variable stores the number of the dice image from player 2.
  var player2 = Array.from(imgDom[1].getAttribute('src'));
  player2 = player2[11];

  //Game result flow control
  if (player1 > player2) {
    document.querySelector(".result").innerHTML = "Player1 won";
  } else if (player1 === player2) {
    document.querySelector(".result").innerHTML = "Draw";
  } else {
    document.querySelector(".result").innerHTML = "Player2 won";
  }
}

//Function Set img by clicking button Start.
function setImage() {
  const img1 = imgDom[0].setAttribute("src", randomDiceImage());
  const img2 = imgDom[1].setAttribute("src", randomDiceImage());

  result();
}
