// --------Side Menu------

$(".side-button").on("click", function() {
	$(".container").toggleClass("active")
	$(".side-button").toggleClass("clicked")
    if (window.matchMedia('(min-width: 1028px)').matches) {
        $(".resp").css("display", "none")
    }
});

// ---------Navbar Hover-----

$("nav").mouseover(function(){
    $("ul li a").css("color", "#fff")
    $(".logo").css("color", "#fff")
}).mouseout(function() {
    $("ul li a").css("color", "")
    $(".logo").css("color", "")
})  

