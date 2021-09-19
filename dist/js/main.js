const mobileInit = () => {
	const open = document.querySelector('.header__menu')
	const close = document.querySelector('.mobile__close')
	const mobile = document.querySelector('.mobile')
	
	if (!open || !close || !mobile) return
	
	open.addEventListener('click', () => {
		mobile.classList.add('active')
	})
	
	close.addEventListener('click', () => {
		mobile.classList.remove('active')
	})
}

const swiperInit = () => {
	new Swiper('.reviews__slider', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}
	});
}

const init = () => {
	mobileInit()
	swiperInit()
}

document.addEventListener('DOMContentLoaded', init)
