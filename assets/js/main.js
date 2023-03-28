openWeatherKey = 'f3e720e15d3544494b126bdef5a6745b';

var cityFormEl = document.querySelector('#city-name-input')
var cityInputEl = document.querySelector('#cityInput');


function citySubmission (event) {
event.preventDefault();

var cityInputValue = cityInputEl.value;
console.log('user input: ' + cityInputValue);

var apiOpenWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${openWeatherKey}&q=${cityInputValue}&units=imperial`
console.log(apiOpenWeatherUrl);

fetch(apiOpenWeatherUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})

}

cityFormEl.addEventListener('submit', citySubmission);




















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

