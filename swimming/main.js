$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$('.second-nav').css('top', 0);
		$('.second-nav').addClass('shadow')
	}
	else {
		$('.second-nav').css('top', 30);
		$('.second-nav').removeClass('shadow')
	}
})