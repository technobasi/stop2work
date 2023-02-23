window.onload = function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var timeInput = document.getElementById('time-input').value;
        var targetTime = new Date();
        targetTime.setHours(timeInput.split(':')[0]);
        targetTime.setMinutes(timeInput.split(':')[1]);
        targetTime.setSeconds(0);
        startTimer(targetTime);
    });
}
var intervalId

function startTimer(targetTime) {
    if (intervalId) {
        clearInterval(intervalId)
    }

    var counter = document.getElementById('counter');
    intervalId = setInterval(function () {
        var now = new Date();
        var diff = now.getTime() - targetTime.getTime();
        var hours = Math.floor(diff / (1000 * 60 * 60));
        var minutes = Math.floor((diff / (1000 * 60)) % 60);
        var seconds = Math.floor((diff / 1000) % 60);

        counter.innerHTML = "Du arbeitest seit:" + hours + ":" + pad(minutes) + ":" + pad(seconds);
    }, 1000);
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}