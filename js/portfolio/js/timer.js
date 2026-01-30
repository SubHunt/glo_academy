const timerBlock = document.querySelector(".timer__time");
const deadline = "1 february 2026";

let interval;

updateClock = () => {
  const date = new Date().getTime();
  //   const date2 = new Date().getDate();
  //   console.log(date2);

  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor(timeRemaining / 60 / 60) % 24;
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  //   const date = new Date();
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const seconds = date.getSeconds();

  //   const pmhours = hours % 24;

  const fhours = hours < 10 ? `0${hours}` : hours;
  const fminutes = minutes < 10 ? `0${minutes}` : minutes;
  const fseconds = seconds < 10 ? `0${seconds}` : seconds;

  timerBlock.textContent = `${days}:${fhours}:${fminutes}:${fseconds}`;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `00:00:00`;
  }
};

interval = setInterval(updateClock, 500);
