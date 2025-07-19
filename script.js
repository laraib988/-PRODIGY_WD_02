// script.js
let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let lapsContainer = document.getElementById("laps");
let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (!timer) {
    timer = setInterval(stopwatch, 1000);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  lapsContainer.innerHTML = "";
  timer = null;
}

function lap() {
  if (timer) {
    const li = document.createElement("li");
    li.innerText = display.innerText;
    lapsContainer.appendChild(li);
  }
}
