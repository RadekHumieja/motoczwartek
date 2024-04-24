const body = document.querySelector('body');
const parList = document.querySelector('.parList');
const img = parList.querySelectorAll('img');

let imgClick;
let imgShow;

function show() {
	imgClick = this;
	boxImg();
	arrow();
	coloseBox();
}
function boxImg() {
	const allBox = document.querySelectorAll('.parList_card-img--box');
	const box = imgClick.parentElement.querySelector('.parList_card-img--box');
	allBox.forEach((int) => {
		if (int.classList.contains('show')) {
			int.style.opacity = '0';
			int.classList.remove('show');
			int.innerHTML = '';
		}
	});
	box.innerHTML =
		imgClick.outerHTML +
		` <button class="btn-left">&#8810;</button>
    <button class="btn-right">&#8811;</button>
    <button class="btn-out">&#215;</button>`;
	// body.style.overflow = 'hidden';
	box.classList.add('show');
	setTimeout(() => {
		box.style.opacity = '1';
	}, 200);
}
function coloseBox() {
	const btnOut = document.querySelector('.btn-out');
	btnOut.addEventListener('click', () => {
		const btnOutParents = btnOut.parentElement;
		body.style.overflowY = 'scroll';
		btnOutParents.style.opacity = '0';
		setTimeout(() => {
			btnOutParents.innerHTML = '';
			btnOutParents.classList.remove('show');
		}, 500);
	});
}
function arrow() {
	const parListCardImg = imgClick.parentElement;
	const elements = parListCardImg.querySelectorAll('img');
	for (let i = 0; i < elements.length - 1; i++) {
		const el = elements[i];
		if (el.outerHTML == imgClick.outerHTML) {
			imgShow = i;
		}
	}
	const btnLeft = parListCardImg.querySelector('.btn-left');
	const btnRight = parListCardImg.querySelector('.btn-right');
	btnLeft.addEventListener('click', () => {
		if (imgShow == 0) {
			imgClick = elements[elements.length-2];
		} else {
            imgShow -= 1;
			imgClick = elements[imgShow];
		}
		boxImg();
		arrow();
		coloseBox();
	});
	btnRight.addEventListener('click', () => {
		if (imgShow == elements.length-2) {
			imgClick = elements[0];
		} else {
            imgShow += 1;
			imgClick = elements[imgShow];
		}
		boxImg();
		arrow();
		coloseBox();
	});
}

img.forEach((img) => img.addEventListener('click', show));
