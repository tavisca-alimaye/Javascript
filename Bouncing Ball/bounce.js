var browser = document.getElementById("browserWindow");
var e= document.getElementById("addBallButton");
var w = window.innerWidth;
var h = window.innerHeight;
var ballCount = 0;
var dx = new Array();
var dy = new Array();


var ball = function(){
    this.xCoord = Math.floor((Math.random()*w)+1);
    this.yCoord =Math.floor((Math.random()*h)+1);
    this.id = ballCount;
    this.add= addBall.call(this);
}


 var addBall=function(){
    var newBall = document.createElement("div");
    newBall.id = "ball"+ballCount;
    dx.push(Math.floor((Math.random()*5)+1));
    dy.push(Math.floor((Math.random()*5)+1));
    ballCount++;
    newBall.style.background='#'+ Math.floor(Math.random()*16777215).toString(16);;
    newBall.style.width="20px";
    newBall.style.height="20px";
    newBall.style.borderRadius="50%";
    newBall.style.position = "absolute";
    newBall.style.left = this.xCoord+"px";
    newBall.style.top = this.yCoord+"px";
    browser.appendChild(newBall);
 }


var moveBall = function(){
    for(var i =0; i < ballCount;i++)
    {
        w = window.innerWidth;
        h = window.innerHeight;

        var ballDivId = "ball"+i;
        var currentball = document.getElementById(ballDivId);
        //console.log(currentball.id);
        var x = parseInt(currentball.style.left,10);
        var y = parseInt(currentball.style.top,10);
        if(x > w - 10 || x < 0)
            dx[i] = -dx[i];
        if(y > h - 10 || y < 0)
            dy[i] = -dy[i];
        currentball.style.left = (x+dx[i])+"px";
        currentball.style.top = (y+dy[i])+"px";
    }
    //while(true)
    //{
        
        /*var x = parseInt(currentball.style.left,10);
        var y = parseInt(currentball.style.top,10);
        currentball.style.left = (x+50)+"px";
        currentball.style.top = (y+50)+"px";
        alert("moved");*/
    //}
}

var move = function(){
    setInterval(moveBall,40);
}

e.onclick = function(){
    var b=new ball();
}

