var date = new Date();

function updateTime() {
  date = new Date();
   // Ratio is: unit of time / 360 degrees//
  
  // Seconds
  var milliseconds = date.getMilliseconds();
  var millisecondsRatio = 1000/360;
  var millisecondsDegrees = milliseconds / millisecondsRatio;

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
  var dayRatio = 7/360;
  var dayDegrees = day / dayRatio;

  // // Months
   var month = date.getMonth();
   var monthRatio = 12/360;
   var monthDegrees = month /monthRatio;

   // // Year
   var year = date.getYear();
   var yearRatio = 12/360;
   var yearDegrees = year /yearRatio;

 $('.circle16').css('transform', 'rotate(' + millisecondsDegrees + 'deg)');
 $('.circle14').css('transform', 'rotate(' + millisecondsDegrees + 'deg)');
 $('.circle2').css('transform', 'rotate(' + secondsDegrees + 'deg)');
 $('.circle5').css('transform', 'rotate(' + minutesDegrees + 'deg)');
 $('.circle12').css('transform', 'rotate(' + hoursDegrees + 'deg)');
 $('.circle10').css('transform', 'rotate(' + dayDegrees + 'deg)');
 $('.circle13').css('transform', 'rotate(' + monthDegrees + 'deg)');
}






$(function() {
	updateTime();
	setInterval(updateTime, 50);
});




