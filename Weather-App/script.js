const submitButton = document.getElementById("submit");
const input = document.getElementById("input");

submitButton.onclick = () => {
  weatherFetch(input.value);
  input.value = "";
};

input.onkeydown = (e) => {
  if (e.key === "Enter") {
    weatherFetch(input.value);
    input.value = "";
  }
};

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

async function weatherFetch(location) {
  loader();

  try {
    // await delay(1000);      // test loading delay

    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=NJSTGFTD3LY79UU2FHHLVX8XV&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await res.json();

    const place = data.resolvedAddress;
    const description = data.description;

    const today = data.days.slice(0, 1).map((x) => {
      return {
        icon: x.icon,
        date: x.datetime,
        temp: FtoC(x.temp),
        tempmax: FtoC(x.tempmax),
        tempmin: FtoC(x.tempmin),
        feelslike: FtoC(x.feelslike),
      };
    })[0];

    const forecast = data.days
      .slice(0, 8)
      .slice(1)
      .map((x) => {
        return {
          icon: x.icon,
          date: x.datetime,
          tempmax: FtoC(x.tempmax),
          tempmin: FtoC(x.tempmin),
        };
      });

    displayWeather(place, description, today, forecast);
  } catch (err) {
    displayError();
  }
}

/*------DOM manipulation ------- */

const todayDiv = document.getElementById("today");
const forecastDiv = document.getElementById("forecast");
const animation = document.getElementById("animation");

function displayWeather(place, description, today, forecast) {
  clear();
  todayDiv.innerHTML = `<h2>${place}</h2>
  <h3>${formatDate(today.date)}</h3> 
  <h4>${description}</h4>
  <div id="temps">
    <div id="temp">${today.temp}°C</div>
    <div id="temp-mmf">
      <div class="temp">Min: ${today.tempmin}°C</div>
      <div class="temp">Max: ${today.tempmax}°C</div>
      <div class="temp">Feels like: ${today.feelslike}°C</div>
    </div>
  </div>  `;

  animation.classList.add(today.icon);

  forecast.forEach((x) => {
    const day = document.createElement("div");
    day.innerHTML = `<div class='forecat-day'>${getDayOfWeek(x.date)}</div>
      <div class="forecast-icon">${weatherIcons[x.icon]}</div>
      <div class="forecast-temp">Min: ${x.tempmin}°C</div>
      <div class="forecast-temp">Max: ${today.tempmax}°C</div>`;

    forecastDiv.appendChild(day);
  });
}

function displayError() {
  clear();

  const errMsg = document.createElement("h4");
  errMsg.innerHTML =
    "Uh-oh! That place doesn’t seem to exist on our map. Give it another look and try again";

  todayDiv.appendChild(errMsg);
}

function loader() {
  clear();
  const loader = document.createElement("div");
  loader.id = "loader";
  todayDiv.appendChild(loader);
}

function clear() {
  todayDiv.innerHTML = "";
  forecastDiv.innerHTML = "";
  animation.removeAttribute("class");
}

/*-------Helpers-------*/

function FtoC(temp) {
  return Math.round(((temp - 32) * 5) / 9);
}

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayOfWeek(dateString) {
  const date0 = new Date(dateString);
  const date = new Date(date0.getTime() - date0.getTimezoneOffset() * -60000);

  return daysOfWeek[date.getDay()];
}

function formatDate(dateString) {
  const date0 = new Date(dateString);

  const date = new Date(date0.getTime() - date0.getTimezoneOffset() * -60000);

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

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const ordinal = (n) => {
    if (n > 3 && n < 21) return "th"; // Covers 11th through 19th
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${dayOfWeek}, ${month} ${day}${ordinal(day)} ${year}`;
}

const weatherIcons = {
  snow: "❄️",
  rain: "🌧️",
  fog: "🌫️",
  wind: "💨",
  cloudy: "☁️",
  "partly-cloudy-day": "⛅",
  // "partly-cloudy-night": "🌤️",
  "clear-day": "☀️",
  // "clear-night": "🌙",
};
