const content = document.getElementById("time");
const clock = document.getElementById("Clock");

const getClock = () => {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  content.textContent = hours + ":" + minutes + ":" + seconds;
};
setInterval(getClock, 1000);

const showClock = () => {
  clock.classList.replace("ClockHide", "ClockShow");
};
const showTimer = () => {
  clock.classList.replace("ClockShow", "ClockHide");
};
