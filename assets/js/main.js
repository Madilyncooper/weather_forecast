openWeatherKey = 'f3e720e15d3544494b126bdef5a6745b';

























function updateTime() {
    var todaysTime = dayjs();
    document.querySelector('#currentDay').textContent = todaysTime.format('ddd, MM/DD/YYYY');

    var plusOne = todaysTime.add(1, 'day');
    document.querySelector('#plus-one').textContent = plusOne.format('ddd, MM/DD/YYYY')
  }
  
  updateTime();

