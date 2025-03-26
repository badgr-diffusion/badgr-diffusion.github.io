window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', () => {
	bulmaCarousel.attach('#results-carousel1', {
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  loop: true,
	});
  
	bulmaCarousel.attach('#results-carousel', {
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  loop: true,
	});
  });

$(document).ready(function() {

    const options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	bulmaCarousel.attach('#results-carousel1', options);
	bulmaCarousel.attach('#results-carousel', options);

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

	var carousels1 = bulmaCarousel.attach('.carousel1', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels1.length; i++) {
    	// Add listener to  event
    	carousels1[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

})
