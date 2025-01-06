let clockEl = document.getElementById("clock");

function Clock(){
    clockEl = new Date();

}
setInterval(Clock,1000);

Clock();