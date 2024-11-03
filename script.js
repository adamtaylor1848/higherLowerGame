'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct secretNumber!🎉';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No number entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 😒';

    // Winning number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!🎉';

    //Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Lower!';
      score--;
      document.querySelector('.score').textContent = score;

      // guess too low
    } else {
      document.querySelector('.message').textContent = 'Loser!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Higher!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
