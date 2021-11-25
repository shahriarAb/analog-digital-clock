const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

});

//digital clock
const digital = document.getElementById('digital');

const updateTime = () => {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minute = formatTime(date.getMinutes());
    const second = formatTime(date.getSeconds());

    digital.innerText = `${hour}: ${minute}: ${second}`
}

const formatTime = (time) => {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setInterval(updateTime, 1000);