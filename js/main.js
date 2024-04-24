const daysCard = document.querySelector('.time_card-days');
const hoursCard = document.querySelector('.time_card-hours');
const minutesCard = document.querySelector('.time_card-minutes');
const timeTitle = document.querySelector('.time_title');
const timeEnd = document.querySelector('.time_end');

let usersTime = new Date(2024, 3, 28, 12);

const setTime = () => {
	const currentTime = new Date();
	const result = usersTime - currentTime;

	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;

	if (days >= 0 && hours >= 0 && minutes >= 0) {
		daysCard.textContent = days;
		hoursCard.textContent = hours;
		minutesCard.textContent = minutes;
	} else {
		timeTitle.textContent = 'Wydarzenie w trakcie.';
		timeEnd.style.display = 'none';
	}
};
setTime();

setInterval(() => {
	setTime();
}, 60000);
