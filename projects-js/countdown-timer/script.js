const newYears = '1 Jan 2023';

const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('mins');
const secondsElem = document.getElementById('seconds');


function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const differenceInSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(differenceInSeconds / 3600  / 24 );
    const hours = Math.floor( differenceInSeconds / 3600 ) % 24;
    const minutes = Math.floor(differenceInSeconds / 60 ) % 60;
    const seconds = Math.floor(differenceInSeconds % 60 );

    daysElem.innerHTML = formatWhenZero(days);
    hoursElem.innerHTML = formatWhenZero(hours);
    minutesElem.innerHTML = formatWhenZero(minutes);
    secondsElem.innerHTML = formatWhenZero(seconds);
}

function formatWhenZero(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);