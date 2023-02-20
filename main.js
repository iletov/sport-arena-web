
$(".side-button").on("click", function() {
	$(".container").toggleClass("active")
	$(".side-button").toggleClass("clicked")
    if (window.matchMedia('(min-width: 1028px)').matches) {
        $(".resp").css("display", "none")
    }
});


