const time = document.querySelector(".timer");
let hours = 0;
let minutes = 0;
let seconds = 0;
document.querySelector("#stop").style.display = "none";
let startStatus = true;

function timer() {
  if (startStatus === false) {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);
    seconds = seconds + 1;
    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes == 60) {
      hours = hours + 1;
      minutes = 0;
      seconds = 0;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
  }
}

function startClock() {
  if (startStatus) {
    startStatus = false;
    setInterval(timer, 1000);
    document.querySelector("#start").style.display = "none";
    document.querySelector("#stop").style.display = "block";
  }
}
function stopClock() {
  if (startStatus == false) {
    startStatus = true;
    document.querySelector("#start").style.display = "block";
    document.querySelector("#stop").style.display = "none";
  }
}
function clockReset() {
  time.innerHTML = "00:00:00";
  startStatus = true;
  hours = 0;
  minutes = 0;
  seconds = 0;
}
