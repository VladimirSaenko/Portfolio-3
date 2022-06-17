import tabs from './modules/tabs';
import timer from './modules/timer';
import calculator from './modules/calculator';
import forms from './modules/forms';
import modal, { openModal } from './modules/modal';
// import { openModal } from './modules/modal';
import slider from './modules/slider';
// import cards from './modules/cards';
import calculateFoodCosts from './modules/calculateFoodCosts';

window.addEventListener('DOMContentLoaded', function() {
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 6000);
	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	timer('2022-05-20', '.timer');
	modal('[data-modal]', '.modal', modalTimerId);
	slider({ 
		container:'.offer__slider', 
		slide: '.offer__slide', 
		prevArrow: '.offer__slider-prev', 
		nextArrow: '.offer__slider-next', 
		totalCounter: '#total', 
		currentCounter: '#current', 
		wrapper: '.offer__slider-wrapper', 
		field: '.offer__slider-inner'});
	calculator();
	forms('form',modalTimerId);
	calculateFoodCosts('.cost');
	// cards();
});
