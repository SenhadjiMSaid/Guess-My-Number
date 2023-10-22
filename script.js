'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = ' 🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;

*/

function numberBetween(k, n, m) {
  if (k >= n && k <= m) {
    return true;
  } else {
    return false;
  }
}

function getRandomNumber(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = getRandomNumber(1, 100);
let score = 20;
let highScore = 0;

function theGame() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || !numberBetween(guess, 1, 100)) {
    // Case 1: the player does somthing wrong
    displayMessage('⛔ No number');
  } else if (guess === secretNumber) {
    // Case 2: The player wins.
    displayMessage(' 🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    //Case 3: guess is wrown
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : ' 📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (score === 1) {
        score--;
        document.querySelector('.score').textContent = score;
      }
      displayMessage(' 💥 You lost the game');
      document.querySelector('body').style.backgroundColor = '#970a0a';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }
  }
}

document.querySelector('.check').addEventListener('click', theGame);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    theGame();
  }
});

// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getRandomNumber(1, 100);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.reset').addEventListener('click', function () {
  window.location.reload();
});
