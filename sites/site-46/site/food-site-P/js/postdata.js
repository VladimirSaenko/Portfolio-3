async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    });
    
    if (!res.ok) {
        throw new Error('post failed');
    }

    return res.json();
}
forms.forEach((item) => {
    bindPostData(item);
})

const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы свяжемся с вами',
    failure: 'Что-то пошло не так...'
}

async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    });
    
    if (!res.ok) {
        throw new Error('post failed');
    }

    return res.json();
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
            showThanksModal(message.failure);
            console.log(error.message);
        } finally {
            form.reset();
        }
    });
}