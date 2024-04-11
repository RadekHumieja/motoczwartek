const daysCard = document.querySelector('.time_card-days');
const hoursCard = document.querySelector('.time_card-hours');
const minutesCard = document.querySelector('.time_card-minutes');

let usersTime = new Date(2024, 3, 20, 9);

const setTime = () => {
	const currentTime = new Date();
	const result = usersTime - currentTime;

	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;

	daysCard.textContent = days;
	hoursCard.textContent = hours;
	minutesCard.textContent = minutes;
};
setTime();

setInterval(() => {
	setTime();
}, 60000);
