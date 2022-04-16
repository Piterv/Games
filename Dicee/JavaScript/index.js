
var imgDom = document.querySelectorAll(".container img");

//The Function creates and return one random image.
function randomDiceImage () {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var diceImage = "images/dice"+ randomNumber1 + ".png";
  return diceImage;
}
//Set event listener on hover over to img1 and img2.
imgDom.forEach(link => {
  link.addEventListener('mouseenter',  function(event){
    event.target.setAttribute("src", randomDiceImage())
  });
});
