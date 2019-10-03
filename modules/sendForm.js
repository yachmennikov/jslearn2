
const sendForm = () => {

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem;';

    const validInputs = () => {
        document.addEventListener('input', (event) => {
                let item = event.target;
                if(item.classList.contains('form-name')) { 
                    item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
                } else if (item.classList.contains('form-phone')){
                    item.value = item.value.replace(/[^0-9\+]/, '');
                } else if (item.classList.contains('form-email')){
                    item.value = item.value.replace(/[^\w+@\w+.\w{2,3}]/g, '');
                } else if (item.classList.contains('mess')){
                    item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
                } else if (item.classList.contains('top-form')){
                    item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
                } else {
                    return;
                }  
        }); 
    };
    validInputs();

	document.addEventListener('submit', (event) => {
		event.preventDefault();
		let target = event.target;
		statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
		target.appendChild(statusMessage);
		statusMessage.textContent = loadMessage;
		const formData = new FormData(target);
		let body = {};

		formData.forEach((val, key) => {
			body[key] = val;
		});
		target.reset();

		postData(body)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error('статус ответа не равен 200');
				}
				statusMessage.textContent = successMessage;
			})
			.catch((error) => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});


		const popUpClose = () => {
			const popup = document.querySelector('.popup');
			popup.style.display = 'none';
		};
		setTimeout(popUpClose, 2000);
	});


	const postData = (body) => {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'aplication/json',
			},
			body: JSON.stringify(body)
		});
	};
};
                          
export default sendForm;