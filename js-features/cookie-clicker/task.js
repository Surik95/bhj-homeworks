const cookie = document.getElementById('cookie')
let counter = 0;
let time;
let time1 = Date.now();
let time2;

cookie.onmousedown = () => cookie.style.width = '400px';
cookie.onclick = () => {
    counter += 1;

    time2 = Date.now();
    time = 1 / ((time2 - time1)/1000)

    document.getElementById('clicker__counter').textContent = counter;
    document.getElementById('clicker__time').textContent = (Math.round(time*100))/100
    
    cookie.style.width = '200px', 300;
    
    time1 = time2
}