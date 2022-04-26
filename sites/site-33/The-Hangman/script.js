
"use strict";

const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['notification', 'javascript', 'hamburger', 'assassin', 'metallica',
'austria', 'ukraine', 'italia', 'romania', 'england', 'scotland', 'subscribe', 'hurricane', 'marshall', 'undefined', 'triangle',
'republic', 'principiality', 'subnatica', 'underground', 'correct','rammstein', 'overlord', 'darkness',
'winston', 'january', 'february', 'revolution', 'communism', 'socialism',
'function', 'nightwish', 'belgium', 'luxemburg','container', 'ambulance',
'instagramm', 'alexander','letter', 'powerwolf', 'portugal', 'venesuela', 'nilfgaard',
'madagascar', 'bucharest', 'budapest','frankfurt', 'netherland', 'pakistan', 'senegal','greenland', 'bulgaria', 'argentina',
'banrain', 'burundi', 'gibraltar','guatemala','skellige', 'explorer', 'telecaster', 'stratocaster', 'sherlock', 'hungary','macedonia', 'ferdinand',
'brotherhood', 'revelation', 'airplane', 'viverna', 'endriaga','cybertron', 'transformer', 'donatella',
'multiplayer', 'lightsaber', 'spitfire','saturday', 'nightmare', 'singleplayer', 'fortnite',
'prussia', 'dreamland', 'mouseclick', 'profiler', 'firewall', 'moonlight', 'strasburg', 'federation', 'confederation',
'vallonia', 'flandria', 'playstation', 'coffescript', 'typescript', 'legendary'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true;
let correctLetters = [];
let wrongLetters = [];

// Show hidden word
function displayWord() {
	wordEl.innerHTML = `
	${selectedWord.split('').map(letter => `
	<span class="letter">
	${correctLetters.includes(letter) ? letter : ''}</span>`
	).join('')}`;

	// console.log(wordEl.innerHTML);
	// console.log(wordEl.innerText);
	// console.log(innerWord);
	const innerWord = wordEl.innerText.replace(/\n/g, '');
	if(innerWord === selectedWord) {
		finalMessage.innerText = 'Congratulations!';
		finalMessageRevealWord.innerText = '';
		popup.style.display = 'flex';
		playable = false;
	}
}

// Update the wrong letters
function updateWrongLettersEl() {
	wrongLettersEl.innerHTML = `
	${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
	${wrongLetters.map(letter => `<span>${letter}</span>`)}
	`;

	figureParts.forEach((part, index) => {
		const errors = wrongLetters.length;
		if(index < errors) {
			part.style.display = 'block';
		}
		else {
			part.style.display = 'none';
		}
	});

	if(wrongLetters.length === figureParts.length) {
		finalMessage.innerHTML = 'You lost,';
		finalMessageRevealWord.innerHTML = `the word: ${selectedWord}`;
		popup.style.display = 'flex';
		playable = false;
	}
}

// Show notification
function showNotification() {
	notification.classList.add('show');
	setTimeout(() => {
		notification.classList.remove('show');
	}, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
	if (playable) {
		if (e.keyCode >= 65 && e.keyCode <= 90) {
			const letter = e.key.toLowerCase();
			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					correctLetters.push(letter);
					displayWord();
				} else {
					showNotification();
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					wrongLetters.push(letter);
					updateWrongLettersEl();
				} else {
					showNotification();
				}
			}
		}
	}
});

displayWord();

// Restart game and play again

playAgainBtn.addEventListener('click', () => {
	playable = true;
	correctLetters.splice(0);
	// correctLetters = [];
	wrongLetters.splice(0);
	// wrongLetters = [];
	selectedWord = words[Math.floor(Math.random() * words.length)];
	displayWord();
	updateWrongLettersEl();
	popup.style.display = 'none';
})
