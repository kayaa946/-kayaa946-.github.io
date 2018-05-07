var date = new Date();

function updateTime() {
  date = new Date();
  
  var seconds = date.getSeconds();
  
  // Ratio is: unit of time / 360 degrees
  var secondsRatio = 60/360;
  var secondsDegrees = seconds / secondsRatio;
  
  $('.circle15').css('transform', 'rotate(' + secondsDegrees + 'deg)');
}

$(function() {
	updateTime();
	setInterval(updateTime, 50);


});

var date = new Date();
function updateTime() {
date = new Date();

var hours = date.hours();

var hoursRatio = 24/360;
  var hoursDegrees = hours / hoursRatio;
  
  $('.circle12').css('transform', 'rotate(' + hoursDegrees + 'deg)');
}

$(function() {
	updateTime();
	setInterval(updateTime, 50);

});