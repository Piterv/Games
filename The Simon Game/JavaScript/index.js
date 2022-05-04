const color = ['green', 'red', 'yellow', 'blue'];
const mySounds = {
  green: "sounds/green.mp3",
  red: "sounds/red.mp3",
  yellow: "sounds/yellow.mp3",
  blue: "sounds/blue.mp3"
}
let userSequence = [];
let gameSequence = [];

$('.btn').on('click', (e) => {
  userSequence.push(e.target.id);
  console.log(userSequence);
  pressedButton(e);
  rundomColor();
});
//Function play sound.
function playSound(sound) {
  const audio = new Audio(mySounds[sound]);
  audio.play();
}
// Set rundom number.
function rundomColor() {
  let rundomNumber = Math.floor(Math.random() * 4);
  gameSequence.push(color[rundomNumber]);
  console.log(gameSequence);
}
//Add clase that show presed button.
function pressedButton(e) {
  playSound(e.target.id);
  $(e.target).addClass('pressed').delay(200).queue(function(next) {
    $(this).removeClass('pressed');
    next();
  });
}
