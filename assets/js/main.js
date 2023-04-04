openWeatherKey = 'f3e720e15d3544494b126bdef5a6745b';

var cityFormEl = document.querySelector('#city-name-input')
var cityInputEl = document.querySelector('#cityInput');
var mainEl = document.querySelector('main');
var firstRowMainEl = document.querySelector('#first-row-main')
var FiveDayForecastEl = document.querySelector('#five-day-forecast-row');
var currentCityArticle = document.querySelector('#current-city-weather');
var cityButtonsEl = document.querySelector('#city-buttons');
var navEl = document.querySelector('nav');



// TODO: README. and Deploy
//margin breaks for smaller screens
//TODO IF TIME: fix margin of bottom cards when there are lots of past searches.
//TODO IF TIME: Add 404 page for not a city/errors
//How to not repeat cities.
var weatherHistory = JSON.parse(localStorage.getItem('Weather')) || [];

for (var i = 0; i < weatherHistory.length; i++) {
    
        var citySearchBtnEl = document.createElement('button');
        var citySearchValue = citySearchBtnEl.textContent = weatherHistory[i].city;
        citySearchBtnEl.setAttribute('type', 'button');
        citySearchBtnEl.setAttribute('class', 'btn');
        citySearchBtnEl.setAttribute('id', 'button-style');
        
        cityButtonsEl.appendChild(citySearchBtnEl);
        cityFormEl.appendChild(cityButtonsEl);
        navEl.appendChild(cityFormEl);

}


function citySubmission(event) {
    event.preventDefault();   
    var cityInputValue = cityInputEl.value;
    var apiOpenWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${openWeatherKey}&q=${cityInputValue}&units=imperial`;

    var citySearchBtnEl = document.createElement('button');
    var citySearchValue = citySearchBtnEl.textContent = cityInputValue;

    citySearchBtnEl.setAttribute('type', 'button');
    citySearchBtnEl.setAttribute('class', 'btn');
    citySearchBtnEl.setAttribute('id', 'button-style');

    cityButtonsEl.appendChild(citySearchBtnEl);
    cityFormEl.appendChild(cityButtonsEl);
    navEl.appendChild(cityButtonsEl);

    var searchValueUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${openWeatherKey}&q=${citySearchValue}&units=imperial`;

// citySearchBtnEl.addEventListener('click', searchCityHistory);

// function searchCityHistory (event) {
//     event.preventDefault()

//     cityInputEl.value = '';

//     fetch(searchValueUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {

//         currentCityArticle.innerHTML = '';
//         FiveDayForecastEl.innerHTML = '';

//         var iconImageEl = document.createElement('img');
//         var icon = data.weather[0].icon
//         var iconImg = `https://openweathermap.org/img/wn/${icon}.png`
//         iconImageEl.setAttribute('src', iconImg);

//         var currentCityHeader = document.createElement('h3');
//         currentCityHeader.classList.add('card-title', 'fw-bold');
//         currentCityHeader.textContent = data.name;

//         var currentCitySubtitle = document.createElement('h6');
//         currentCitySubtitle.classList.add('card-subtitle', 'mb-3', 'text-body-secondary', 'fw-bold', 'fs-6');
//         currentCitySubtitle.setAttribute('id', 'currentDay');

//         var currentCityPara = document.createElement('p');
//         currentCityPara.textContent = `Temp: ${data.main.temp} `;
//         currentCityPara.textContent += `Wind: ${data.wind.speed} MPH `;
//         currentCityPara.textContent += `Humidity ${data.main.humidity}%`;
//         currentCityPara.setAttribute('class', 'text-wrap');
//         currentCityPara.setAttribute('style', 'width: 8em;');

//         currentCityHeader.appendChild(iconImageEl);
//         currentCityArticle.appendChild(currentCityHeader);
//         currentCityArticle.appendChild(currentCitySubtitle);
//         currentCityArticle.appendChild(currentCityPara);
//         firstRowMainEl.appendChild(currentCityArticle);
//         mainEl.appendChild(firstRowMainEl);

//         var forecastObj = {
//             city: citySearchValue,
//             temp: data.main.temp,
//             wind: data.wind.speed,
//             humidity: data.main.humidity,
//             icon: iconImg,
//         }

//         var weatherHistory = JSON.parse(localStorage.getItem('Weather')) || [];
//         weatherHistory.push(forecastObj);
//         localStorage.setItem('Weather', JSON.stringify(weatherHistory));

//         var cityLat = data.coord.lat;
//         var cityLon = data.coord.lon;
//         var fiveDayForecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=${openWeatherKey}`;

//         fetch(fiveDayForecastApiUrl)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {

//                 var fiveDayInfoArr = [];
//                 for (var x = 0; x < data.list.length; x++) {
//                     if (x % 8 === 0) {
//                         var forecastIndex = data.list[x];
//                         fiveDayInfoArr.push(forecastIndex);
//                     }
//                 }
//                 function updateFiveDayTime() {
//                     var todaysTime = dayjs();
//                     var plusOne = todaysTime.add((i + 1), 'day');
//                     document.querySelector(`#plus-${[i]}`).textContent = plusOne.format('MM/DD/YYYY');

//                     var cardHeaderIds = document.querySelector(`#plus-${[i]}`);
//                     var fiveDayIconEl = document.createElement('img');
//                     var iconFD = (fiveDayInfoArr[i]).weather[0].icon;
//                     var iconFDUrl = `https://openweathermap.org/img/wn/${iconFD}.png`
//                     fiveDayIconEl.setAttribute('src', iconFDUrl);

//                     var divOneParaEl = document.createElement('p');
//                     divOneParaEl.textContent = `Temp: ${(fiveDayInfoArr[i]).main.temp} `;
//                     divOneParaEl.textContent += `Wind: ${(fiveDayInfoArr[i]).wind.speed} MPH `;
//                     divOneParaEl.textContent += `Humidity: ${(fiveDayInfoArr[i]).main.humidity}%`;
//                     divOneParaEl.setAttribute('class', 'text-wrap');
//                     divOneParaEl.setAttribute('style', 'width: 8rem;');

//                     cardHeaderIds.appendChild(fiveDayIconEl);
//                     cardHeaderIds.appendChild(divOneParaEl);
//                 }
//                 function fiveDayCardsDate() {
//                     var fiveDayDivOneEl = document.createElement('div');
//                     fiveDayDivOneEl.classList.add('col-3', 'p-2', 'card', 'text-white', 'bg-secondary');
//                     fiveDayDivOneEl.setAttribute('style', 'width: 10em;');

//                     var divOneHeaderEl = document.createElement('h5');
//                     divOneHeaderEl.classList.add('card-title', 'fs-6', 'fw-bold');
//                     divOneHeaderEl.setAttribute('id', `plus-${[i]}`);

//                     fiveDayDivOneEl.appendChild(divOneHeaderEl);
//                     FiveDayForecastEl.appendChild(fiveDayDivOneEl);
//                 };
//                 for (var i = 0; i < 5; i++) {
//                     fiveDayCardsDate([i]);
//                     updateFiveDayTime([i]);
//                 };
//             });
//         function updateCurrentTime() {
//             var todaysTime = dayjs();
//             document.querySelector('#currentDay').textContent = todaysTime.format('ddd, MM/DD/YYYY');
//         }
//         updateCurrentTime();
//     });
// }





    fetch(apiOpenWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            currentCityArticle.innerHTML = '';
            FiveDayForecastEl.innerHTML = '';

            var iconImageEl = document.createElement('img');
            var icon = data.weather[0].icon
            var iconImg = `https://openweathermap.org/img/wn/${icon}.png`
            iconImageEl.setAttribute('src', iconImg);

            var currentCityHeader = document.createElement('h3');
            currentCityHeader.classList.add('card-title', 'fw-bold');
            currentCityHeader.textContent = data.name;

            var currentCitySubtitle = document.createElement('h6');
            currentCitySubtitle.classList.add('card-subtitle','text-body-secondary', 'fw-bold', 'fs-6');
            currentCitySubtitle.setAttribute('id', 'currentDay');

            var currentCityPara = document.createElement('p');
            currentCityPara.textContent = `Temp: ${data.main.temp} `;
            currentCityPara.textContent += `Wind: ${data.wind.speed} MPH `;
            currentCityPara.textContent += `Humidity ${data.main.humidity}%`;
            currentCityPara.setAttribute('class', 'text-wrap');
            currentCityPara.setAttribute('style', 'width: 8em;');

            currentCityHeader.appendChild(iconImageEl);
            currentCityArticle.appendChild(currentCityHeader);
            currentCityArticle.appendChild(currentCitySubtitle);
            currentCityArticle.appendChild(currentCityPara);
            firstRowMainEl.appendChild(currentCityArticle);
            mainEl.appendChild(firstRowMainEl);

            var weatherObj = {
                city: citySearchValue,
                temp: data.main.temp,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                icon: iconImg,
            }
    
            var weatherHistory = JSON.parse(localStorage.getItem('Weather')) || [];
            weatherHistory.push(weatherObj);
            localStorage.setItem('Weather', JSON.stringify(weatherHistory));

            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;
            var fiveDayForecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=${openWeatherKey}`;

            fetch(fiveDayForecastApiUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var fiveDayInfoArr = [];
                    for (var x = 0; x < data.list.length; x++) {
                        if (x % 8 === 0) {
                            var forecastIndex = data.list[x];
                            fiveDayInfoArr.push(forecastIndex);
                        }
                    }
                    function updateFiveDayTime() {
                        var todaysTime = dayjs();
                        var plusOne = todaysTime.add((i + 1), 'day');
                        document.querySelector(`#plus-${[i]}`).textContent = plusOne.format('MM/DD/YYYY');

                        var cardHeaderIds = document.querySelector(`#plus-${[i]}`);
                        var fiveDayIconEl = document.createElement('img');
                        var iconFD = (fiveDayInfoArr[i]).weather[0].icon;
                        var iconFDUrl = `https://openweathermap.org/img/wn/${iconFD}.png`
                        fiveDayIconEl.setAttribute('src', iconFDUrl);

                        var divOneParaEl = document.createElement('p');
                        divOneParaEl.textContent = `Temp: ${(fiveDayInfoArr[i]).main.temp} `;
                        divOneParaEl.textContent += `Wind: ${(fiveDayInfoArr[i]).wind.speed} MPH `;
                        divOneParaEl.textContent += `Humidity: ${(fiveDayInfoArr[i]).main.humidity}%`;
                        divOneParaEl.setAttribute('class', 'text-wrap');
                        divOneParaEl.setAttribute('style', 'width: 8rem;');

                        cardHeaderIds.appendChild(fiveDayIconEl);
                        cardHeaderIds.appendChild(divOneParaEl);
                    }
                    function fiveDayCardsDate() {
                        var fiveDayDivOneEl = document.createElement('div');
                        fiveDayDivOneEl.classList.add('col-3', 'p-2', 'card', 'text-white', 'bg-secondary');
                        fiveDayDivOneEl.setAttribute('style', 'width: 10em;');

                        var divOneHeaderEl = document.createElement('h5');
                        divOneHeaderEl.classList.add('card-title', 'fs-6', 'fw-bold');
                        divOneHeaderEl.setAttribute('id', `plus-${[i]}`);

                        fiveDayDivOneEl.appendChild(divOneHeaderEl);
                        FiveDayForecastEl.appendChild(fiveDayDivOneEl);
                    };
                    for (var i = 0; i < 5; i++) {
                        fiveDayCardsDate([i]);
                        updateFiveDayTime([i]);
                    };
                });
            function updateCurrentTime() {
                var todaysTime = dayjs();
                document.querySelector('#currentDay').textContent = todaysTime.format('ddd, MM/DD/YYYY');
            }
            updateCurrentTime();
        });
}

cityFormEl.addEventListener('submit', citySubmission);







