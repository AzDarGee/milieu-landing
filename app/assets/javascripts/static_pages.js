var clock = document.getElementById("timer");
var targetDate = new Date(2015, 08, 01);
 
  clock.innerHTML = countdown(targetDate).toString();
  setInterval(function(){
    clock.innerHTML = countdown(targetDate).toString();
  }, 1000);