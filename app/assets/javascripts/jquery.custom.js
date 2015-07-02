$(document).on('page:change', function(){ 

    // $('#subscribe').on('shown.bs.modal', function () {
    //   $('#inputEmail').focus();     
    // });

    /* Tooltip */
    $('#social-icons li a').tooltip();
    
    /* Counter */
    var finished = false;
    var toDate = new Date('2015/08/01 00:00:00'); // Counter end date/time.
    
    function callback(event) {
      $this = $(this);
    	switch(event.type) {
    		case "seconds":
    		case "minutes":
    		case "hours":
    		case "days":
    		case "weeks":
    		case "daysLeft":
    		  $this.find('span#'+event.type).html(event.value);
    		  if(finished) {
    		    $this.fadeTo(0, 1);
    		    finished = false;
    		  }
    			break;
    		case "finished":
        $this.fadeTo('slow', .5);
        finished = true;
    			break;
    	}
    }
    
    $('div#countdown').countdown(toDate, callback);
    
  
    
});

$(document).ready(function () {

    $('#TheIntro').animate({opacity: 0.01}, 4000, function () {

        $(this).hide();
        $('#back-img').fadeIn(500);             

    });   
});