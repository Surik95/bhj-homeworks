const arrReveal = [...document.querySelectorAll('.reveal')];

document.addEventListener('DOMContentLoaded', revealActive);

window.addEventListener('scroll', revealActive);

function revealActive() {
  for (let elem of arrReveal) {
    if (elem.getBoundingClientRect().bottom <= 600) {
      elem.classList.add('reveal_active');
    }
  }
}
