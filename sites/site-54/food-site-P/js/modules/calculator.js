function calculator() {
    const result = document.querySelector('.calculating__result span');
	let gender, height, weight, age, ratio;

	if(localStorage.getItem('gender')) {
		gender = localStorage.getItem('gender');
	} else {
		gender = 'female';
		localStorage.setItem('gender', gender);
	}

	if(localStorage.getItem('ratio')) {
		ratio = Number(localStorage.getItem('ratio'));
	} else {
		ratio = 1.375;
		localStorage.setItem('ratio', ratio);
	}

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);
		elements.forEach(element => {
			element.classList.remove(activeClass);
			if(element.getAttribute('id') === localStorage.getItem('gender')) {
				element.classList.add(activeClass);
			}

			if(element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
				element.classList.add(activeClass);
			}
		})
	}

	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

	function calcTotal() {
		if (!gender || !height || !weight || !age || !ratio) {
			result.textContent = '____';
			return;
		}
		if (gender === 'female') {
			// const bmr = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age));
			// const caloricValue = bmr * ratio;
			// result.textContent = Math.floor(caloricValue);
			result.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			result.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}
	calcTotal();

	function getStaticInformation(selector, activeClass) {
		const elements = document.querySelectorAll(selector);
		elements.forEach(elem => {
			elem.addEventListener('click', (e) => {
				if(e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', ratio);
				} else {
					gender = e.target.getAttribute('id');
					localStorage.setItem('gender', gender);
				}
				elements.forEach(elem => {
					elem.classList.remove(activeClass);
				});
				e.target.classList.add(activeClass);
				calcTotal();
			});
		});
	}

	getStaticInformation('#gender div', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

	function getDynamicInfo(selector) {
    const input = document.querySelector(selector);
    // console.log(input);
    input.addEventListener('input', () => {
        // console.log(input.value);
		switch (input.getAttribute('id')) {
			case 'height':
				height = Number(input.value);
				// height = +input.value;
			break;
			case 'weight':
				weight = Number(input.value);
			break;
			case 'age':
				age = Number(input.value);
			break;
			default:
				// console.warn('Error: Vas slomala SBU');
				console.warn(`Unexcepted ${input.getAttribute('id')} in calculator`);
				// console.error(`Unexcepted ${input.getAttribute('id')} in calculator`);
			break;
		}
		calcTotal();
    })
}

getDynamicInfo('#height');
getDynamicInfo('#weight');
getDynamicInfo('#age');

}

export default calculator;