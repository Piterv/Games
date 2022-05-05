const color = ['green', 'red', 'yellow', 'blue'];

let gamePattern = [];
let userClickedPattern = [];

var started = false;
let gameLevel = 0;

// Listen to keydown
$(document).on('keydown', (e) => {
  if (!started) {
    $('h1').text('Level:' + gameLevel);
    gameColorSequence();

    started = true;
  }
});
//Listen to click.
$('.btn').on('click', (e) => {

  gamePattern.push(e.target.id);

  let i = gamePattern.length - 1;

  if (gamePattern[i] === userClickedPattern[i]) {
    pressedButton(e.target.id);
    playSound(e.target.id);

    if (gamePattern.length === userClickedPattern.length) {
      gameLevel++;
      setTimeout(function() {
        $('h1').text('Level:' + gameLevel);
      }, 700);
      setTimeout(function() {
        gameColorSequence();
      }, 400);
      gamePattern = [];
    }
  } else {
    playSound('wrong');
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();

  }
});
//The function displays a sequence of colors from the Sequence game array.
function gameColorSequence() {
  rundomColor();
  for (let i = 1; i <= userClickedPattern.length; i++) {
    setTimeout(function() {
      pressedButton(userClickedPattern[i - 1]);
    }, 1000 * i);
  }
}
//Sound playback function.
function playSound(sound) {
  const audio = new Audio("sounds/" + sound + ".mp3"); //
  audio.play();
}
// Sets random color.
function rundomColor() {
  let rundomNumber = Math.floor(Math.random() * 4);
  userClickedPattern.push(color[rundomNumber]);
}
//Adds class that show pressed button.
function pressedButton(e) {
  $('#' + e).addClass('pressed').delay(250).queue(function(next) {
    $(this).removeClass('pressed');
    next();
  });
}
// Function Start set game information to the begining.
function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  gameLevel = 0;
  started = false;
  $('h1').text('Press A Key to Start');
}
