var browser = document.getElementById("browserWindow");
var e= document.getElementById("addBallButton");
var w = window.innerWidth;
var h = window.innerHeight;
var ballCount = 0;


var ball = function(){
    this.xCoord = Math.floor((Math.random()*w)+1);
    this.yCoord =Math.floor((Math.random()*h)+1);
    this.id = ballCount;
    this.dx = 5;
    this.dy = 5;
    this.add= addBall.call(this);
}


 var addBall=function(){
    var newBall = document.createElement("div");
    newBall.id = "ball"+ballCount;
    ballCount++;
    newBall.style.background="#f00";
    newBall.style.width="20px";
    newBall.style.height="20px";
    newBall.style.borderRadius="50%";
    newBall.style.position = "absolute";
    newBall.style.left = this.xCoord+"px";
    newBall.style.top = this.yCoord+"px";
    browser.appendChild(newBall);
 }


var moveBall = function(ballObj){
    var ballDivId = "ball"+ballObj.id;
    var currentball = document.getElementById(ballDivId);
    //while(true)
    //{
        w = window.innerWidth;
        h = window.innerHeight;

        var x = parseInt(currentball.style.left,10);
        var y = parseInt(currentball.style.top,10);
        currentball.style.left = (x+50)+"px";
        currentball.style.top = (y+50)+"px";
        alert("moved");
    //}
}


e.onclick = function(){
    var b=new ball();
    moveBall(b);
}

