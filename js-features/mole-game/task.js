let molesKilled = 0;
let miss = 0;

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i +=1) {
    document.getElementById('hole'+[i]).onclick = () => getHole(document.getElementById('hole'+[i]));
}

function getHole(index) {
    if (index.className.includes('hole_has-mole')) {
        dead.textContent = ++molesKilled; 
    } else {
        lost.textContent = ++miss;
    }
    
    setTimeout( () => {
        if (molesKilled === 10) {
            molesKilled = 0;
            miss = 0;
            dead.textContent = molesKilled;
            lost.textContent = miss;
            alert('Вы победили!')
        } else if (miss === 5) {
            molesKilled = 0;
            miss = 0;        
            dead.textContent = molesKilled;
            lost.textContent = miss;
            alert('Вы проиграли!')
        }}, 500)
} 

