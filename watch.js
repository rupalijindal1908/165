window.onload = function(){
    var seconds = 0;
    var milliseconds= 0;
    var appendmilliseconds = document.getElementById("milliseconds");
    var appendseconds = document.getElementById("seconds");
    var Start = document.getElementById("Start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var Interval;
    Start.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };
    stop.onclick = function () {
        clearInterval(Interval);
    };
    reset.onclick = function () {
        clearInterval(Interval);
        milliseconds = 0;
        seconds = 0;
        appendmilliseconds.innerHTML = "00";
        appendseconds.innerHTML = "00";
    };
    function startTimer(){
        milliseconds++;
        if (milliseconds <= 9){
            appendmilliseconds.innerHTML = "0" + milliseconds;
        }
        else{
            appendmilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            appendseconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            milliseconds = 0;
            appendmilliseconds.innerHTML = "00";
        }
    }
};