// ScrollReveal
ScrollReveal({ distance: '60px', delay: '200', duration: 1000, });
ScrollReveal().reveal('.sr-in');
ScrollReveal().reveal('.sr-up', 	{ origin: 'bottom' });
ScrollReveal().reveal('.sr-down', 	{ origin: 'top' });
ScrollReveal().reveal('.sr-left', 	{ origin: 'right' });
ScrollReveal().reveal('.sr-right', 	{ origin: 'left' });

ScrollReveal().reveal('.sr-delay-1', { delay: '100' });
ScrollReveal().reveal('.sr-delay-2', { delay: '200' });
ScrollReveal().reveal('.sr-delay-3', { delay: '300' });
ScrollReveal().reveal('.sr-delay-4', { delay: '400' });
ScrollReveal().reveal('.sr-delay-5', { delay: '500' });
ScrollReveal().reveal('.sr-delay-6', { delay: '600' });

// Heading
$(".heading").each(function() {
	var firstWord,
	openSpan = '<span>',
	closeSpan = '</span>';
	firstWord = $(this).text().split(" ");
	firstWord.unshift(openSpan);
	firstWord.splice(2, 0, closeSpan);
	firstWord = firstWord.join(" ");
	$(this).html(firstWord);
});
			
// Smooth Scroll
//$('a[href*="#"]')
$('a.anchor-link')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
				scrollTop: target.offset().top - 80
				}, 1500, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
					return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	}
);

// Slide Menu
smoothScroll.init();
$(document).ready(function() {
	$('.menu-link').menuFullpage({
		side:"right",
		menuWidth:"100%",
	});
});

// Add Class onScroll (Header)
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("header").addClass("onscroll");
    } else {
        $("header").removeClass("onscroll");
    }
	
	if (scroll >= 400) {
		$(".floaters").addClass("show");
    } else {
		$(".floaters").removeClass("show");
	}
});

//Loader
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

// Change text on collapse
$('.btn-more').click(function() {
	$(this).text(function(i,old) {
		return old=='Read More' ?  'Read Less' : 'Read More';
	});
});

// ScrollSpy
$('body').scrollspy({ offset: 100 })
var scroll = new SmoothScroll('a[href*="#"]', {
	offset: 100,
	speed: 1000
});

// Modal: Close Link
$(document).ready(function(){
    // Hide modal on button click
    $(".link-close").click(function(){
        $(".modal").modal('hide');
    });
});