var number = 0;
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
document.getElementById("display").innerHTML = number;
reset.onclick = function () {
    number = 0;
    document.getElementById("display").innerHTML = number;
};
increase.onclick = function () {
    number = number + 1;
    document.getElementById("display").innerHTML = number;
};
decrease.onclick = function () {
    number = number - 1;
    document.getElementById("display").innerHTML = number;
};