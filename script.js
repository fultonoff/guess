'use strict';

/*
console.log(document.querySelector('.message').textContent = 'Makasuka');
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;

console.log( document.querySelector('.guess').value = 23);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// console.log(secretNumber);
let score = 20;

let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No number Entered!!!';
    displayMessage('❌ No number Entered!!!');

    // WHEN THE PLAY WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Corect!!!';
    displayMessage('🎉 Corect!!!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too hight' :'📉Too Low';
      displayMessage(guess > secretNumber ? '📈Too hight' :'📉Too Low')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😥You lost the Game';
      displayMessage('😥You lost the Game')
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // } else if (guess > secretNumber) {
  //   //When guess is too high
  // } else if (guess < secretNumber) {
  //   //When guess is too low

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low';
  //     document.querySelector('.score').textContent = score;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😥You lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
