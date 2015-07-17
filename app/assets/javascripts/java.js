// JavaScript Document

$(document).on("page:change", function() {

  var date = "2015/08/04";

 $(".days")
  .countdown(date, function(event) {
    $(this).text(
      event.strftime('%D')
    );

   });
   
    $(".hours")
  .countdown(date, function(event) {
    $(this).text(
      event.strftime('%H')
    );
   });
   
    $(".minutes")
  .countdown(date, function(event) {
    $(this).text(
      event.strftime('%M')
    );
   });
   
    $(".seconds")
  .countdown(date, function(event) {
    $(this).text(
      event.strftime('%S')
    );
   });


});

