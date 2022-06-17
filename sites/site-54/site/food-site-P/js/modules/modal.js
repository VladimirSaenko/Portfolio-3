function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
	if(modalTimerId) {
		clearTimeout(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);
	const modalCloseBtn = document.querySelector('[data-close]');  //data-close

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
	});

	modalCloseBtn.addEventListener('click', () => closeModal(modalSelector));

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
    const { pageYOffset } = window;
    const { clientHeight, scrollHeight } = document.documentElement;

    if (pageYOffset + clientHeight >= scrollHeight) {
        openModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
	}
	}

	window.addEventListener('scroll', showModalByScroll);

}

export default modal;

export { openModal, closeModal };