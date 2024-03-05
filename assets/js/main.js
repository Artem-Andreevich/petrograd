$(function (){

	/* GLOBAL CONST */
	const windowWidth = window.innerWidth
	/* END GLOBAL CONST */





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
		simulateTouch: false,

		mousewheel: {
			enabled: true,
			noMousewheelClass: true,
		},

	});
	  
	const swiper2 = new Swiper('.my-swiper2', {
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
		simulateTouch: false,

		mousewheel: {
			enabled: true,
			noMousewheelClass: true,
		},

	});
	/* END SWIPER INIT*/

	



	/* TEXT ANIMATE */

	const textFirst = document.querySelector('.text-wrap__top p')
	const textFirstContent = textFirst.innerHTML 
	const textLast = document.querySelector('.text-wrap__bottom p')
	const textLastContent = textFirst.innerHTML 


	function cloneText(text, content) {
		while (windowWidth * 3 > text.offsetWidth) {
			text.insertAdjacentHTML('beforeend', `
				${content}
			`) 
		}
	}

	function changeText(selector, content){
		selector.innerHTML = ""
		cloneText(selector, `<span>${content}</span>`)
	}


	cloneText(textFirst, textFirstContent)
	cloneText(textLast, textLastContent)



	const textAnimRight = anime({
		targets: textFirst,
		translateX: ['0px', `-${ ((textFirst.children[0].offsetWidth + 40) * 2)}px`],
		duration: 2200,
		easing: 'linear',
		autoplay: false,
		complete: function(anim) {
			anim.restart()
		}
	})

	const textAnimLeft = anime({
		targets: textLast,
		translateX: [`-${ ((textLast.children[0].offsetWidth + 40) * 2)}px`, '0px'],
		duration: 2200,
		easing: 'linear',
		autoplay: false,
		complete: function(anim) {
			anim.restart()
		}
	})


	swiper2.on('slideChange', function(swiper) {

		if ( swiper.slides[0].classList.contains('swiper-slide-visible') ) {

			changeText(textFirst, "Видео")
			changeText(textLast, "Видео")

		} else {

			changeText(textFirst, "Велосипед")
			changeText(textLast, "Велосипед")
		}

	})
	/* END TEXT ANIMATE */


	


	/* INTERSECTION OBSERVER */
	const productScreen = document.querySelector('.product-section')

	if(productScreen) {

		const observeOptions = { 
			threshold: [0.1], 
			rootMargin: "100px", 
		}

		function isVsible( entries ) {
			entries.forEach( entry => {

				if(entry.isIntersecting && window.innerWidth >= 991) {
					prodVideo?.play()
				} 

				if(entry.isIntersecting) {
					document.querySelector('header').classList.add('header--white')
					textAnimRight.play()
					textAnimLeft.play()
				} else {
					document.querySelector('header').classList.remove('header--white')
				}
			});
		}

		const observer = new IntersectionObserver(isVsible, observeOptions);

		observer.observe(productScreen) 
	}
	/* END INTERSECTION OBSERVER */



});







document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});