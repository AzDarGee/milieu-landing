$(document).on("ready page:load", function() {

	var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    $('.close-data').on('click', function(e) {
    	e.preventDefault();

    	
    })
});