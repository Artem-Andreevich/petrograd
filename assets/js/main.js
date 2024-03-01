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
			event.preventDefault()
			submitBtn.removeAttribute('disabled')
			event.target.reset()
			succsesMes.classList.remove('hidden')
		}
	})
	/* END FORM VALIDATION */





	const textTl = gsap.timeline()
	textTl.to('.text-wrap p:first-child', {
		scrollTrigger: {
			scrub: 1,
			start: '+=100',
			end: '+=4500',
		},
		x: '+=1550'
	})
	textTl.to('.text-wrap p:last-child', {
		scrollTrigger: {
			scrub: 1,
			start: '+=100',
			end: '+=4500',
		},
		x: '-=1550'
	})


	const prodSection = gsap.timeline({

		scrollTrigger: {
			trigger: ".product-section",
			pin: true,
			start: "top top",
			scrub: 1,
			// onEnter: () => { console.log('enter')}
		}
	})

	prodSection.add(gsap.fromTo('.product-wrap', {

		scrollTrigger: {
			trigger: ".product-section",
			pin: true,
			scrub: 1,
			start: "top center",
		},

		y: '300',
		rotate: '60'
	},
	{
		y: '0',
		rotate: '0'
	}
	))
	// prodSection.add(gsap.fromTo('.product', 
	// 	{
	// 		y: '0',

	// 	},
	// 	{
	// 		y: '-1000',

	// 	}
	// ))



});







document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});