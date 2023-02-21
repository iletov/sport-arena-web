// ----Toggle button---

$(document).ready(function() {
	$('.menu-icon').on('click', function() {
		$('nav ul').toggleClass('showing');
	});
});

// ------Scrolling Effect------

$(window).on('scroll', function() {
	
	if($(window).scrollTop()) {
		$('nav').addClass('sticky');
	}
	else {
		$('nav').removeClass('sticky');
	}
})

// ------To Top Button----

$(window).scroll(function() {
	if($(this).scrollTop() > 0){
		$('#top').fadeIn();
	} else {
		$('#top').fadeOut();
	}
});

$('#top').on('click', function() {
	$('html, body').animate({scrollTop: 0}, 400);
	return false;
});


