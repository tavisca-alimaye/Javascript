var init = function(){
	var can = document.getElementById("myCanvas");
	var ctx = can.getContext("2d");
	ctx.beginPath();
	ctx.fillStyle = "#FF0000";
	ctx.arc(30,270,30,0,2*Math.PI);
	ctx.fill();
}