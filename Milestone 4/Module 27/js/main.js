// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardButtonPress(e) {
  const playerPressed = e.key;
  // console.log('Player pressed', playerPressed)

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed,expectedAlphabet);
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");

    const currentScore = getTextElementValueById("current-score");

    const updatedScore = currentScore + 1;

    setTextElementById("current-score", updatedScore);

    // // Get the id
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText
    // const currentScore = parseInt(currentScoreText);
    // // New Score
    // // Set the new score
    // currentScoreElement.innerText = newScore;
    // const newScore = currentScore + 1;

    colorChangeOff(expectedAlphabet);
    conitnueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // const currentLifeElement = document.getElementById('current-life');
    // const currentlifeCount = currentLifeElement.innerText;
    // const currentlife = parseInt(currentlifeCount);
    // const lifeUpdated = currentlife - 1;
    // currentLifeElement.innerText = lifeUpdated;
    console.log("You Lost a life");
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function conitnueGame() {
  const alphabet = getARandomAlphabet();
  // console.log('Your random alphabet is', alphabet)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  const color = colorChange(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("playground");
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);
  conitnueGame();
}

function gameOver() {
  hideElementById("playground");
  showElementById("final-score");
  const lastScore = getTextElementValueById('current-score');
  setTextElementById('last-score', lastScore);

  const currentAlphabet = getElementTextById('current-alphabet');
  colorChangeOff(currentAlphabet);
}
