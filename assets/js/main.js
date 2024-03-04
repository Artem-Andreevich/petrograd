$(function (){


	/* FORM VALIDATION */
	if (jQuery.fn.inputmask) {
		$('.phone-mask').inputmask({
			mask: "+7 999-999-99-99", 
			showMaskOnHover: false, 
			// clearIncomplete: true,
			greedy: false,
			onincomplete: function(e){ e.target.classList.add('error')},
			oncomplete: function(e){ e.target.classList.remove('error') },
		});
	}

	const form = document.querySelector('.form')
	form.addEventListener('submit', (event) => {

		const validField = event.target.querySelector('input[type="tel"]')
		const submitBtn = event.target.querySelector('button')
		const succsesMes = event.target.querySelector('.succses-message')

		if( validField.classList.contains('error') ) { 
			event.preventDefault()
			submitBtn.setAttribute('disabled', 'true')
		} else {
			submitBtn.removeAttribute('disabled')
			event.target.reset()
			succsesMes.classList.remove('hidden')
			event.preventDefault()
		}
	})
	/* END FORM VALIDATION */







	/* PRODUCT VIDEO PLAY */
	const playButton = document.querySelector('.product__btn--play')
	const prodVideo = document.querySelector('.product video')

	playButton?.addEventListener('click', () => { prodVideo?.play() })
	/* END PRODUCT VIDEO PLAY */




	/* SWIPER INIT*/
	const swiper = new Swiper('.my-swiper', {
		direction: "vertical",
		speed: 600,

		mousewheel: {
			enabled: true,
			noMousewheelClass: true,
		},

	});
	  
	var swiper2 = new Swiper('.my-swiper2', {
		direction: "vertical",
		speed: 600,
		effect: "creative",
		creativeEffect: {
			prev: {
				translate: [0, "-125%", 0],
				rotate: [0, 0, -90],
			},
			next: {
				translate: [0, "125%", 0],
				rotate: [0, 0, 90],
			},
		},
		nested: true,
		mousewheel: {
			enabled: true,
			noMousewheelClass: true,
		},
	});
	/* END SWIPER INIT*/

	




	const productScreen = document.querySelector('.product-section')

	if(productScreen) {

		const observeOptions = { 
			threshold: [0.1], 
			rootMargin: "100px", 
		}

		function isVsible( entries ) {
			entries.forEach( entry => {

				if(entry.isIntersecting) {

					document.querySelector('header').classList.add('header--white')
					prodVideo?.play()

				} else {
					document.querySelector('header').classList.remove('header--white')
				}
			});
		}

		const observer = new IntersectionObserver(isVsible, observeOptions);

		observer.observe(productScreen) 
	}

});







document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});