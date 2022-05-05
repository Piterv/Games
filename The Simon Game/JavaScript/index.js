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
let gameLevel = [];

// Listen to keydown
$(document).on('keydown', (e) => {
  if (gameSequence.length === 0) {
    $('h1').text('Level:' + gameLevel.length);
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
      gameColorSequence();
      userSequence = [];
    }
  } else {
    playSound('wrong');
    userSequence = [];
    gameSequence = [];
    gameLevel = [];
  }

});
//Function display color sequence from game Sequence array.\
function gameColorSequence() {
  rundomColor();
  console.log(gameSequence);
  for (let i = 1; i <= gameSequence.length; i++) {
    setTimeout(function() {
      pressedButton(gameSequence[i - 1]);
    }, 1200 * i);
  }
}
//Function play sound.
function playSound(sound) {
  const audio = new Audio(mySounds[sound]);
  audio.play();
}
// Set rundom number.
function rundomColor() {
  let rundomNumber = Math.floor(Math.random() * 4);
  gameSequence.push(color[rundomNumber]);
}
//Add clase that show presed button.
function pressedButton(e) {
  $('#' + e).addClass('pressed').delay(250).queue(function(next) {
    $(this).removeClass('pressed');
    next();
  });
}
