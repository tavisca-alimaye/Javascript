var ctx;
var x = 30;
var y = 240;
var dx = 5;
var dy = 5;
var init = function(){
	var can = document.getElementById("ballBoundry");
	ctx = can.getContext('2d');
	setInterval(draw,20);
}
var draw = function(){
	ctx.clearRect(0,0,600,500);
	ctx.beginPath();
	ctx.fillStyle = "#FF0000";
	ctx.arc(x,y,30,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	if(x > 570 || x < 30)
		dx = -dx;
	if(y > 470 || y < 30)
		dy = - dy;
	x += dx;
	y += dy;
}