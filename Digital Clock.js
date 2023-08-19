const HoursE1 = document.getElementById("Hours");
const MinutesE1 = document.getElementById("Minutes");
const SecondsE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let date = new Date();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let ampm = "AM";

    if (Hours > 12) {
        Hours = Hours - 12;
        ampm = "PM"
    }

    Hours = Hours <10 ? "0" + Hours:Hours;
    Minutes = Minutes <10 ? "0" + Minutes:Minutes;
    Seconds = Seconds <10 ? "0" + Seconds:Seconds;

    HoursE1.innerText = Hours,
    MinutesE1.innerText = Minutes;
    SecondsE1.innerText = Seconds;
   
    

     setTimeout(updateClock,1000)
}
updateClock()