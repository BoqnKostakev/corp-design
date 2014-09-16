(function($){
		
		var sliderUl = $('div.slider').find('ul'),
			slides = $(sliderUl).find('li'),
			slideWidth = slides.width(),
			slidesLen = slides.length,
			current = 1,
			totalSlidesWidth = slideWidth * slidesLen;
			
		$('.slider-frame').find('a').on('click', function(event) {
			event.preventDefault();
			var direction = $(this).data('dir'),
				loc = slideWidth;

			if(direction === 'next') {
				current += 1;
			} else {
				current -= 1;
			}

			if(current === 0) {
				current = slidesLen;
				loc = totalSlidesWidth - slideWidth;
				direction = 'next';
			} else if(current - 1 === slidesLen) {
				current = 1;
				loc = 0;
			}

			transition(sliderUl, loc, direction);
		});

		function transition(container, loc, direction) {
					var unit;	// use var unit to store the + or - value infront of loc - which is the value of left-margin we want to add
					
					if(direction && loc !== 0) { // as long as usser doesn't trying to reset unit will be -= or +=
						if(direction === 'next') {
							unit = '-=';
						} else {
							unit = '+=';
						}
					}
					
					container.animate({						// then we animate the container(sliderUl) and we want to adjust margin-left
						'margin-left': unit ? (unit + loc) : loc 
					});
		}

	})(jQuery);

	

	(function($){
	
	var sliderInt = 1;
		sliderNext = 2;

	$(document).ready(function() {
		$('li').fadeIn(300);
		startSlider();
	});

	function startSlider() {
		var count = $('.slider').find('li').length;
		
		var loop = window.setInterval(function() {

			if(sliderNext > count) {
				sliderNext = 1;
				sliderInt = 1;
			}

			$('.slider li').fadeOut(300);
			$('.slider #slide-' + sliderNext).fadeIn(300);

			sliderInt = sliderNext;
			sliderNext += 1;
		}, 4000);

		function stopLoop() {
			clearInterval(loop);
		}

		$('.slider li').hover(
			function() {
				stopLoop();
			}, function() {
				startSlider();
			});

	};
})(jQuery);