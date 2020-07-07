var min = 0;
var sec = 0;
var milsec = 0;
var interval;

function timer(){
    milsec++
    document.getElementById("milsec").innerHTML=milsec;
    if(milsec==100){
        sec++
        document.getElementById("sec").innerHTML=sec
        milsec=0
    }
    if(sec==60){
        min++;
        document.getElementById("min").innerHTML=min
        sec=1
    }
}

function start(){
    interval= setInterval(timer,10)
    document.getElementById("startb").disabled=true
}
function pause(){
    clearInterval(interval)
    document.getElementById("startb").disabled=false
}
function reset(){
    milsec=0
    document.getElementById("milsec").innerHTML=milsec;
    sec=0
    document.getElementById("sec").innerHTML=sec;
    min=0
    document.getElementById("min").innerHTML=min;
    clearInterval(interval)
}
