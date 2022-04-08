var lastPositionOfX, lastPositionOfY;

var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");
colour = "Red";
widthOfLine = 2;

canvas.addEventListener("mouseup" , my_mouseup)
function my_mouseup(e){
    mouseEvent = "mouseUp";
    

}

canvas.addEventListener("mousedown" , my_mousedown)
function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave" , my_mouseleave)
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    currentPostionOfMouseX= e.clientX-canvas.offsetLeft;
    currentPostionOfMouseY= e.clientY-canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
       ctx.beginPath();
       ctx.strokeStyle = colour;
       ctx.lineWidth = widthOfLine;
       ctx.moveTo(lastPositionOfX,lastPositionOfY);
       ctx.arc(currentPostionOfMouseX, currentPostionOfMouseY, 40, 0, 2 * Math.PI); 
       ctx.stroke();

    }

    lastPositionOfX = currentPostionOfMouseX;
    lastPositionOfY = currentPostionOfMouseY;
}
