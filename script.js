//your code here
let hourHand = document.getElementsByClassName("hour-hand")[0];
let minuteHand = document.getElementsByClassName("min-hand")[0];
let secondHand = document.getElementsByClassName("second-hand")[0];
setInterval(() => {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();
    // console.log(currentHour, ":", currentMinute," : ", currentSecond)
    let hourHandRotation = currentHour*30 + currentMinute/2 + currentSecond/120;
    let minuteHandRotation = currentMinute*6 + currentSecond/10;
    let secondHandRotation = currentSecond*6;
    //console.log(hourHandRotation, ":", minuteHandRotation," : ", secondHandRotation);
    hourHand.style.transform = `rotate(${90+hourHandRotation}deg)`
    minuteHand.style.transform = `rotate(${90+minuteHandRotation}deg)`
    secondHand.style.transform = `rotate(${90+secondHandRotation}deg)`
}, 1000);