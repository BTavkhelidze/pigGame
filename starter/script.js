'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const player1score = document.querySelector('#score--0');
const player2score = document.querySelector('#score--1');

const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.querySelector('#current--1');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

const dice = document.querySelector('.dice');

const images = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

player1score.textContent = 0;
player2score.textContent = 0;

let total = +player1score.textContent;

rollBtn.addEventListener('click', () => {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  total += diceNumber;

  if (player1.classList.contains('player--active')) {
    player1CurrentScore.textContent = total;

    if (diceNumber === 1) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      total = 0;
      player1CurrentScore.textContent = 0;
    }
  } else if (player2.classList.contains('player--active')) {
    player2CurrentScore.textContent = total;

    if (diceNumber === 1) {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      total = 0;
      player2CurrentScore.textContent = 0;
    }
  }
  dice.src = `./${images[diceNumber - 1]}`;

  //   for (let i = 0; i < images.length; i++) {
  // }

  //   console.log(dice.src);
});

holdBtn.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    let currentRes = +player1score.textContent;

    player1score.textContent = currentRes + total;
    player1CurrentScore.textContent = 0;
    total = 0;
    console.log(+player1score.textContent >= 100);
    if (Number(player1score.textContent) >= 10) {
      player1.classList.add('player--winner');
      console.log('first');
      dice.classList.add('hidden');
      holdBtn.classList.add('hidden');
      dice.classList.add('hidden');
      rollBtn.classList.add('hidden');
    } else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else if (player2.classList.contains('player--active')) {
    let currentRes = +player2score.textContent;

    player2score.textContent = currentRes + total;
    player2CurrentScore.textContent = 0;
    total = 0;
    if (Number(player2score.textContent) >= 10) {
      player2.classList.add('player--winner');

      dice.classList.add('hidden');
      holdBtn.classList.add('hidden');
      dice.classList.add('hidden');
      rollBtn.classList.add('hidden');
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

newGameBtn.addEventListener('click', () => {
  if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
    dice.classList.remove('hidden');
    holdBtn.classList.remove('hidden');
    dice.classList.remove('hidden');
    rollBtn.classList.remove('hidden');
    player1CurrentScore.textContent = 0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    player1score.textContent = 0;
  } else if (player2.classList.contains('player--winner')) {
    player2.classList.remove('player--active');
    player2score.textContent = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--winner');
    dice.classList.remove('hidden');
    holdBtn.classList.remove('hidden');
    dice.classList.remove('hidden');
    rollBtn.classList.remove('hidden');
    player2CurrentScore.textContent = 0;
  }
});
