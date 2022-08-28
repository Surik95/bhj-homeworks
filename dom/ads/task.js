const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 0;
let time = rotatorCase[counter].dataset.speed;
let interval;

rotator();

function rotator() {
  if (counter != 0) {
    rotatorCase[counter].style.color = rotatorCase[counter].dataset.color;
    rotatorCase[counter - 1].classList.remove('rotator__case_active');
    rotatorCase[counter].classList.add('rotator__case_active');
  } else if (counter === 0) {
    rotatorCase[counter].style.color = rotatorCase[counter].dataset.color;
    rotatorCase[rotatorCase.length - 1].classList.remove(
      'rotator__case_active'
    );
    rotatorCase[counter].classList.add('rotator__case_active');
  }
  time = rotatorCase[counter].dataset.speed;
  counter === rotatorCase.length - 1 ? (counter = 0) : (counter += 1);
  interval = setTimeout(rotator, time);
}
