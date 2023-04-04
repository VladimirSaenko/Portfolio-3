"use strict";

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice') ;
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// let resultText = document.getElementById('result');

let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    // diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    // resultText.classList.add('hidden');
};

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // 0 == '0' true
    // 0 === '0' false
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
    if(playing) {
        // const dice = Math.floor(Math.random() * 6);
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;
        if(dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
        // Math.floor(19.5) // 19
        // Math.floor(-19.5) // -20
        // Math.trunc(19.5) // 19
        // Math.trunc(-19.5) // -19  
    }
});

btnNew.addEventListener('click', init);

btnHold.addEventListener('click', () => {
    if(playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            // alert(`Player ${activePlayer + 1} Winner!`);
            // console(`Player ${activePlayer + 1} Winner!`);
            document.getElementById(`name--${activePlayer}`).innerText = 'Winner!';
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            // resultText.classList.remove('hidden');
            // resultText.innerText = `Player ${activePlayer + 1} Winner !`;
        } else {
            switchPlayer();
        }
    }
});
