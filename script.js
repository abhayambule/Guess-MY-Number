'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayNumber = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayNumber('⁜⁜⁜ Enter a Number');
    // document.querySelector('.message').textContent = '⁜⁜⁜ Enter a Number';
  } else if (guess === number) {
    displayNumber('🎇🎇You won the game');
    // document.querySelector('.message').textContent = '🎇🎇You won the game';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayNumber(guess > number ? 'To high' : 'To low');

      // document.querySelector('.message').textContent =
      //   guess > number ? 'To high' : 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayNumber('😥😥You lose the game');

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayNumber('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
