let counterSeg;
let counterMin;
let counterHrs;

function getSecondsSinceStartOfDay() {
    var ahora = {
        segundos: new Date().getSeconds(),
        minutos: new Date().getMinutes(),
        horas: new Date().getHours()
    }   
    return ahora;
}
      
setInterval( function() {
    let time = getSecondsSinceStartOfDay();
    counterSeg = 180+(time.segundos*6);
    counterMin = 180+(time.minutos*6);
    counterHrs = 180+(time.horas*30);
    console.log(counterSeg);
    document.querySelector("#seconds").style.transform = "rotate("+counterSeg+"deg)"; 
    document.querySelector("#minutes").style.transform = "rotate("+counterMin+"deg)";  
    document.querySelector("#hour").style.transform = "rotate("+counterHrs+"deg)";   
}, 1000);