var hummingbird = document.getElementById("hummingbird");

var section = document.getElementById("parallaxSection");

var layerZero = document.getElementById("layerZero");
var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1700 / 2) - (1700 / 2);

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
    console.log(event.pageX);
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    hummingbird.style.left = mouseX - 45 + "px";
    hummingbird.style.top = mouseY - 45 + "px";

    layerZero.style.left = -mouseX * 0.00 + centerScreen + "px"
    layerOne.style.left = -mouseX * 0.01 + centerScreen + "px";
    layerTwo.style.left = -mouseX * 0.03 + centerScreen + "px";
    layerThree.style.left = -mouseX * 0.06 + centerScreen + "px";
    layerFour.style.left = -mouseX * 0.09 + centerScreen + "px";
    layerFive.style.left = -mouseX * 0.12 + centerScreen + "px";
    layerSix.style.left = -mouseX * 0.15 + centerScreen + "px";

}