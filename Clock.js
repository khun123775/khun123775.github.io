
const clockElement = document.getElementById("nav-clock-time");

// Add more cities here in the future.
const clockConfig = {
  timeZone: "Asia/Bangkok",
  locale: "en-GB",
  hour12: false
};

const clockFormatter = new Intl.DateTimeFormat(
  clockConfig.locale,
  {
    timeZone: clockConfig.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: clockConfig.hour12
  }
);

function updateClock() {
  if (!clockElement) return;

  clockElement.textContent =
    clockFormatter.format(new Date());
}

updateClock();
setInterval(updateClock, 1000);
