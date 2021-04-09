// Move mouse pointer to where you want https://www.geeksforgeeks.org/how-to-move-mouse-pointer-to-a-specific-position-using-javascript/

var x;
var y;
var delayInMilliseconds = 1000; //1 second

window.onload = init;

function init() {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
}

 function getCursorXY(e) {

    x = (window.Event) ? e.pageX : clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    y = (window.Event) ? e.pageY : clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

	document.getElementById('cursorX').value = x;
	document.getElementById('cursorY').value = y;
    wait(x,y);
} 

function move(x,y) {
    var object = document.getElementById('item');
    object.style.top = y + 'px';
    object.style.left = x + 'px';
}

function wait() {
    setTimeout(function() {
        move(x,y);
    }, delayInMilliseconds);
}
