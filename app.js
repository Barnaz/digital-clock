var displayClock = document.querySelector('.clock');

function showDate(){
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var formatHours = getFormat(hours);
    hours = checkTime(hours);

    hours = addZeroes(hours)
    minutes = addZeroes(minutes);
    seconds = addZeroes(seconds);

    displayClock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + formatHours;
}

function getFormat(time){
    var format;
    if(time <= 12){
        format = 'AM'
    } else{
        format = 'PM';
    }
    return format;
}

function checkTime(time){
    if(time > 12){
        time = time - 12;
    }
    if(time === '0'){
        time = 12;
    }
    return time;
}

function addZeroes(time){
    if (time < 10){
        time = '0' + time;
    }
    return time;
}

setInterval(showDate, 1000);
