const msgStatus = document.querySelector('.msg-status');
const contactBox = document.querySelectorAll('.contact-box');
const rodo = document.querySelector('#rodo');
const form = document.querySelector('#form');
const inputCheckBox = document.querySelectorAll('input');

function checkeChoice() {
	const check = this.parentElement.parentElement.querySelectorAll('input');
	check.forEach((int) => {
		if (int !== this) {
			if (!this.classList.contains('rodo')) {
				int.checked = false;
			}
		}
		if (int.checked === true) {
			int.parentElement.parentElement
				.querySelector('.contact-box--error')
				.classList.remove('error');
		}
	});
}
function checkImput() {
	contactBox.forEach((con) => {
		const check = con.querySelectorAll('input');
		let quantity = 0;
		if (check.length > 0) {
			check.forEach((el) => {
				if (el.checked === true) {
					quantity = 1;
				}
			});
			if (quantity === 0) {
				const infoError = con.querySelector('.contact-box--error');
				infoError.classList.add('error');
			} else {
				const infoError = con.querySelector('.contact-box--error');
				infoError.classList.remove('error');
			}
		}
	});

	const textArea = document.querySelector('#msg');

	if (textArea.value === '' || textArea.value.length <= 3) {
		textArea.classList.add('error');
		textArea.parentElement
			.querySelector('.contact-box--error')
			.classList.add('error');
	} else {
		textArea.classList.remove('error');
		textArea.parentElement
			.querySelector('.contact-box--error')
			.classList.remove('error');
	}

	if (rodo.checked) {
		document.querySelector('.rodoText').classList.remove('error');
	} else {
		document.querySelector('.rodoText').classList.add('error');
	}
}

function checkError(e) {
	const error = document.querySelectorAll('.error');
	if (error.length !== 0) {
		e.preventDefault();
	}
}
function checkForm(e) {
	// e.preventDefault();
	checkImput();
	checkError(e);
}

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Wiadomość wysłana!';
	console.log('ok');
	setTimeout(() => {
		msgStatus.classList.remove('success');
		window.location.replace(
			'http://localhost:3000/Desktop/nVc/MotoCzwartek/www.motoczwartek.pl/index.html#form'
		);
	}, 300);
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Wystąpił błąd.';
	console.log('error');
	setTimeout(() => {
		msgStatus.classList.remove('error');
		window.location.replace(
			'http://localhost:3000/Desktop/nVc/MotoCzwartek/www.motoczwartek.pl/index.html#form'
		);
	}, 300);
}
form.addEventListener('submit', checkForm);
inputCheckBox.forEach((int) => int.addEventListener('input', checkeChoice));
