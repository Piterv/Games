const color = ['green', 'red', 'yellow', 'blue', 'wrong'];
const mySounds = {
  green: "sounds/green.mp3",
  red: "sounds/red.mp3",
  yellow: "sounds/yellow.mp3",
  blue: "sounds/blue.mp3",
  wrong: "sounds/wrong.mp3"
}
let userSequence = [];
let gameSequence = [];
let gameLevel = 0;

// Listen to keydown
$(document).on('keydown', (e) => {
  if (gameSequence.length === 0) {
    $('h1').text('Level:' + gameLevel);
    gameColorSequence();
  }
});
//Listen to click.
$('.btn').on('click', (e) => {

  userSequence.push(e.target.id);
  let i = 1 - userSequence.length;

  if (userSequence[i] === gameSequence[i]) {
    pressedButton(e.target.id);
    playSound(e.target.id);

    if (userSequence.length === gameSequence.length) {
      gameLevel++;
      setTimeout(function() {
        $('h1').text('Level:' + gameLevel);
      }, 800);
      setTimeout(function() {
        gameColorSequence();
      }, 600);
      userSequence = [];
    }
  } else {
    playSound('wrong');
    userSequence = [];
    gameSequence = [];
    gameLevel = ;
    $('h1').text('Press A Key to Start');
  }
});
//The function displays a sequence of colors from the Sequence game array.
function gameColorSequence() {
  rundomColor();
  console.log(gameSequence);
  for (let i = 1; i <= gameSequence.length; i++) {
    setTimeout(function() {
      pressedButton(gameSequence[i - 1]);
    }, 1200 * i);
  }
}
//Sound playback function.
function playSound(sound) {
  const audio = new Audio(mySounds[sound]);
  audio.play();
}
// Sets random color.
function rundomColor() {
  let rundomNumber = Math.floor(Math.random() * 4);
  gameSequence.push(color[rundomNumber]);
}
//Adds class that show pressed button.
function pressedButton(e) {
  $('#' + e).addClass('pressed').delay(250).queue(function(next) {
    $(this).removeClass('pressed');
    next();
  });
}
