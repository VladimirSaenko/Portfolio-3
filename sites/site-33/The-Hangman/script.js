
"use strict";

const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['play', 'notification', 'javascript', 'amogus', 'abobus', 'kitty', 'squid', 'hangman', 'update', 'pizza', 'hamburger', 'display',
'popit', 'circle', 'france', 'james', 'jonny', 'assassin', 'country', 'altair', 'sirius', 'potter', 'window', 'update', 'delete', 'metallica',
'austria', 'ukraine', 'select', 'italia', 'romania', 'england', 'scotland', 'india', 'subscribe', 'hurricane', 'marshall', 'undefined', 'triangle',
'soviet', 'republic', 'empire', 'kingdoom', 'principiality', 'space', 'studio', 'music', 'subnatica', 'underground', 'correct', 'germany', 'witcher',
'rammstein', 'geralt', 'lindemann', 'october', 'august', 'april','overlord', 'stalin', 'adolf', 'rocker', 'darkness', 'upper', 'lower', 'github',
'winston', 'paris','ludendorf', 'separatist', 'january', 'february', 'december', 'november', 'revolution', 'communism', 'socialism', 'democratica',
'function', 'nightwish', 'marvel', 'geforce', 'dota', 'croatia', 'slovenia', 'slovakia', 'czechoslovakia', 'poland', 'belgium', 'luxemburg',
'turkey','container', 'mathematic', 'ambulance', 'romanov', 'suleiman', 'nikolay', 'leonardo', 'florencia', 'auditore', 'stupid', 'tiktok','facebook',
'instagramm','vkontakte','motherland', 'napoleon', 'alexander','document', 'letter', 'word', 'vendetta', 'occupation', 'annex', 'finland', 'score',
'master', 'puppet', 'powerwolf', 'slayer', 'slash', 'belarus', 'benin', 'summer', 'octoberfest', 'portugal', 'venesuela', 'vietham', 'greece','steam',
'vesemir', 'kaedwen', 'nilfgaard', 'aedirn', 'cintra', 'cidaris', 'rivia','livia','egypt', 'persia', 'ireland', 'iceland', 'canada', 'china', 'korea',
'latvia', 'estonia', 'madagascar', 'mexico', 'bucharest', 'budapest','frankfurt','monako', 'mongol', 'japan', 'netherland', 'pakistan',
'senegal', 'serbia', 'bosnia', 'herzegovina', 'america', 'tailand', 'togoland', 'colonia', 'octavian','severus','septima', 'borgia', 'montain', 'river',
'winter', 'vatican', 'greenland', 'travel', 'random', 'imposter', 'guitar', 'fender', 'gibson', 'murmansk', 'world', 'hello', 'bulgaria', 'volga','argentina',
'banrain', 'burundi', 'ecuador', 'brazilia', 'gibraltar','guatemala','skellige', 'explorer', 'telecaster', 'stratocaster', 'sherlock', 'novus','candy', 'hungary',
'kenya', 'macedonia', 'ferdinand', 'style', 'moldova', 'holland', 'district', 'cordoba', 'cloud', 'apple', 'samsung', 'motobike', 'bicycle', 'sweden', 'escape',
'brotherhood', 'revelation', 'istambul', 'constantin', 'syria', 'taiwan', 'uganda', 'virtual', 'speaker', 'cruella', 'clothe', 'united', 'syndicate',
'snickers', 'airplane', 'uruguay', 'train', 'crazy', 'anton', 'edison', 'osman', 'never', 'witch', 'skills', 'viverna', 'endriaga', 'neron', 'autumn',
'cybertron', 'transformers', 'khan', 'arabia', 'saudi', 'ozzy', 'joker', 'batman', 'covid', 'virus', 'paper', 'donatella', 'rafael','badcomedian', 'final',
'countdown', 'again', 'machine', 'anime', 'discovery', 'multiplayer', 'clock', 'lightsaber', 'anakin', 'spitfire', 'firefly', 'notepad', 'millenium', 'plague',
'moscow', 'petersburg', 'cappadocia', 'saturday', 'nightmare', 'wonderful', 'isolation', 'normandia', 'singleplayer', 'fortnite', 'ubisoft', 'netflix',
'prussia', 'illyria', 'frederick', 'dreamland', 'steamland', 'mouseclick', 'keydown', 'keyup', 'profiler', 'firewall', 'moonlight', 'converse',
'brussel', 'strasburg', 'gangsta', 'paradise', 'railway', 'berlin', 'hellraiser', 'valencia', 'federation', 'confederation', 'galatiic', 'fireplace',
'vallonia', 'flandria', 'bitbox', 'audio', 'computer', 'playstation', 'mandarin', 'sturgeon', 'darknest', 'splice', 'coffescript', 'typescript', 'legendary'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

let correctLetters = [];
let wrongLetters = [];

// Show hidden word
function displayWord() {
	wordEl.innerHTML = `
	${selectedWord.split('').map(letter => `
	<span class="letter">
	${correctLetters.includes(letter) ? letter : ''}<span/>`
	).join('')}`;

	// Add Congratulations

	// console.log(wordEl.innerHTML);
	// console.log(wordEl.innerText);
	// console.log(innerWord);
	const innerWord = wordEl.innerText.replace(/\n/g, '');
	if(innerWord === selectedWord) {
		finalMessage.innerText = `Congratulations!, the word: ${selectedWord}`;
		finalMessageRevealWord.innerText = '';
		popup.style.display = 'flex';
		playable = false;
	}
}

// Update the wrong letters
function updateWrongLettersEl() {
	wrongLettersEl.innerHTML = `
	${wrongLetters.length > 0 ? '<p>Wrong<p/>' : ''}
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
		finalMessage.innerHTML = 'YOU LOST!';
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
