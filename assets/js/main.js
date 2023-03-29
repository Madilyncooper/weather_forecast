openWeatherKey = 'f3e720e15d3544494b126bdef5a6745b';

var cityFormEl = document.querySelector('#city-name-input')
var cityInputEl = document.querySelector('#cityInput');
var mainEl = document.querySelector('main');
var firstRowMainEl = document.querySelector('#first-row-main')
var sectionEl = document.querySelector('section');
var currentCityArticle = document.querySelector('#current-city-weather');

// TODO: Line breaks for main block
// TODO: Add weather for city cards
// TODO: Local Storage adds
// TODO: README. and Deploy

function citySubmission(event) {
    event.preventDefault();

    var cityInputValue = cityInputEl.value;
    var apiOpenWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${openWeatherKey}&q=${cityInputValue}&units=imperial`
    console.log(apiOpenWeatherUrl);
   
    fetch(apiOpenWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            currentCityArticle.innerHTML = '';

            var iconImageEl = document.createElement('img');
            var icon = data.weather[0].icon
            iconImg = `https://openweathermap.org/img/wn/${icon}.png`
            iconImageEl.setAttribute('src', iconImg);           

            var currentCityHeader = document.createElement('h3');
            currentCityHeader.classList.add('card-title', 'fw-bold');
            currentCityHeader.textContent = data.name;

            var currentCitySubtitle = document.createElement('h6');
            currentCitySubtitle.classList.add('card-subtitle', 'mb-3', 'text-body-secondary', 'fw-bold', 'fs-6');
            currentCitySubtitle.setAttribute('id', 'currentDay');

            var currentCityPara = document.createElement('p');
            currentCityPara.textContent = `Temp: ${data.main.temp} `;
            currentCityPara.textContent += `Wind: ${data.wind.speed} MPH `;
            currentCityPara.textContent += `Humidity ${data.main.humidity}%`;

            currentCityHeader.appendChild(iconImageEl);
            currentCityArticle.appendChild(currentCityHeader);
            currentCityArticle.appendChild(currentCitySubtitle);
            currentCityArticle.appendChild(currentCityPara);
            firstRowMainEl.appendChild(currentCityArticle);
            mainEl.appendChild(firstRowMainEl);


    




            function updateTime() {
                var todaysTime = dayjs();
                document.querySelector('#currentDay').textContent = todaysTime.format('ddd, MM/DD/YYYY');

                var plusOne = todaysTime.add(1, 'day');
                document.querySelector('#plus-one').textContent = plusOne.format('MM/DD/YYYY')

                var plusTwo = todaysTime.add(2, 'day');
                document.querySelector('#plus-two').textContent = plusTwo.format('MM/DD/YYYY')

                var plusThree = todaysTime.add(3, 'day');
                document.querySelector('#plus-three').textContent = plusThree.format('MM/DD/YYYY')

                var plusFour = todaysTime.add(4, 'day');
                document.querySelector('#plus-four').textContent = plusFour.format('MM/DD/YYYY')

                var plusFive = todaysTime.add(5, 'day');
                document.querySelector('#plus-five').textContent = plusFive.format('MM/DD/YYYY')
            }

            updateTime();


        });

}

cityFormEl.addEventListener('submit', citySubmission);




// `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

















