const timer = document.getElementById('status');
let time = new Date;
time = time.setHours(0, 0, 5);
interval = setInterval ( () => {
    time = time - 1000;
    timeCounter = new Date(time);
    let hours = settingTheTime(timeCounter.getHours());
    let minuts = settingTheTime(timeCounter.getMinutes());
    let seconds = settingTheTime(timeCounter.getSeconds());
    timer.textContent = `До начала загрузки осталось: ${hours}:${minuts}:${seconds}`;
    if (time === timeCounter.getTime(timeCounter.setHours(0,0,0))) {
        location.assign('https://browser.yandex.ru/download?banerid=0500000134&statpromo=true&bitness=64')
        clearInterval(interval)
    } 
},
1000
)

function  settingTheTime(time) {
    time = time < 10 ? `0${time}` : `${time}`;
    return time;   
}