
function digitalClock(){
const fullDate = new Date();
let hour = fullDate.getHours();
let minute = fullDate.getMinutes();
let second = fullDate.getSeconds();
//let millisecond = fullDate.getMilliseconds();
    
    
    hour < 10 ? hour = '0' + hour : '';
    minute < 10 ? minute = '0' + minute : '';
    second < 10 ? second = '0' + second : '';

document.getElementById('hour').innerText = hour;
document.getElementById('minute').innerText = ': ' + minute;
document.getElementById('second').innerText = ': ' + second;
//document.getElementById('millisecond').innerText = ': ' + millisecond;

}

setInterval(digitalClock, 1000)