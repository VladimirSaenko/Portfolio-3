import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

	forms.forEach((item) => {
		bindPostData(item);
	})

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы свяжемся с вами',
		failure: 'Что-то пошло не так...'
	}

	async function bindPostData(form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			
			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;

			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);
			const formDataObject = Object.fromEntries(formData.entries())
			const json = JSON.stringify(formDataObject);

			try {
				await postData('https://jsonplaceholder.typicode.com/posts', json);
				showThanksModal(message.success);
				statusMessage.remove();
			} catch(error) {
				// if(!(error instanceof Error)){
				// 	throw error;
				// }
				showThanksModal(message.failure);
				console.log(error.message);
				//console.error(error.message);
			} finally {
				form.reset();
			}
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');
		prevModalDialog.classList.add('hide');
		openModal('.modal', modalTimerId);
		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
					<div data-close class="modal__close">&times;</div>
					<div class="modal__title">${message}</div>
			</div>		
		`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add("show");
			prevModalDialog.classList.remove("hide");
			closeModal('.modal');
		}, 4000);
		
	}
}

export default forms;