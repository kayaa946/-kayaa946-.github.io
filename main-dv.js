var date = new Date();

function updateTime() {
  date = new Date();
   // Ratio is: unit of time / 360 degrees//
  
  // Seconds
  var seconds = date.getSeconds();
  var secondsRatio = 60/360;
  var secondsDegrees = seconds / secondsRatio;
  
  // Minutes
  var minutes = date.getMinutes();
  var minutesRatio = 60/360;
  var minutesDegrees = minutes / minutesRatio;

  // Hours
  var hours = date.getHours();
  var hoursRatio = 24/360;
  var hoursDegrees = hours / hoursRatio;

 // Days
  var day = date.getDay();
  var dayRatio = 24/360;
  var dayDegrees = day / dayRatio;

 $('.circle15').css('transform', 'rotate(' + secondsDegrees + 'deg)');
 $('.circle12').css('transform', 'rotate(' + minutesDegrees + 'deg)');
 $('.circle9').css('transform', 'rotate(' + hoursDegrees + 'deg)');
 $('.circle7').css('transform', 'rotate(' + dayDegrees + 'deg)');
}






$(function() {
	updateTime();
	setInterval(updateTime, 50);


});

