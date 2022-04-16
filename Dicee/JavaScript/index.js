var imgDom = document.querySelectorAll(".container img");

//The Function creates and return one random image.
function randomDiceImage() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var diceImage = "images/dice" + randomNumber1 + ".png";
  return diceImage;
}
//Function Set img by clicking button Start.
function setImage() {
  const img1 = imgDom[0].setAttribute("src", randomDiceImage());
  const img2 = imgDom[1].setAttribute("src", randomDiceImage());
}
