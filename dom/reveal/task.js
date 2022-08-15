const reveal = document.querySelector('.reveal');

document.addEventListener('DOMContentLoaded', revealActive);

window.addEventListener('scroll', revealActive);

function revealActive() {
  console.log(
    reveal.getBoundingClientRect().bottom,
    reveal.getBoundingClientRect().top
  );
  if (reveal.getBoundingClientRect().bottom <= 600) {
    reveal.classList.add('reveal_active');
  }
}
