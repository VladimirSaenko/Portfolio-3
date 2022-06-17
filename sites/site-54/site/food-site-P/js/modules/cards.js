function cards() {
    class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			
			this.parent = document.querySelector(parentSelector);
			
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			element.innerHTML = `
				<div class="menu__item">
					<img src=${this.src} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">${this.descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
							<div class="menu__item-cost">Цена:</div>
							<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>
				</div>
			`;

			this.parent.append(element);
		}
	}

	// new MenuCard(
	// 	"img/tabs/vegy.jpg",
	// 	"vegy",
	// 	'Меню "Фитнес"',
	// 	'Меню "ФитнесВ - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	// 	9,
	// 	".menu .container"
	// ).render();

	// new MenuCard(
	// 	"img/tabs/post.jpg",
	// 	"post",
	// 	'Меню "Постное"',
	// 	"Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
	// 	14,
	// 	".menu .container"
	// ).render();

	// new MenuCard(
	// 	"img/tabs/elite.jpg",
	// 	"elite",
	// 	"Меню “Премиум”",
	// 	"В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
	// 	21,
	// 	".menu .container"
	// ).render();

	async function renderFoodCards() {
		const data = await getResource('http://localhost:3000/menu');
		data.forEach(({img, altimg, title, descr, price}) => {
			new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
		});
	}
	renderFoodCards();

	async function getResource(url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return res.json();
	}
}

export default cards;