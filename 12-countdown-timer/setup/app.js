const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getMinutes();


let futureDate = new Date(tempYear + 60, tempMonth, tempDay + 10, 11, 30);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}pm`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t/oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  // set values array;
  const values = [days, hours, minutes, seconds];
  items.forEach((item, idx) => {
    item.innerHTML = values[idx];
  });
  
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, your time on earth is over</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();