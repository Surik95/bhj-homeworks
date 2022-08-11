const menuLink = document.querySelectorAll('.menu__link');
const menu = document.querySelectorAll('.menu');
const menuItem = document.querySelectorAll('.menu__item');
const chekList = document.querySelectorAll('.menu__item > li');

Array.from(menuLink).forEach((link) => {
  if (chekList) {
    link.onclick = () => {
      if (
        Array.from(
          link.closest('.menu__item').querySelector('.menu').classList
        ).includes('menu_active')
      ) {
        link
          .closest('.menu__item')
          .querySelector('.menu')
          .classList.remove('menu_active');
      } else {
        link
          .closest('.menu_main')
          .querySelectorAll('.menu_sub')
          .forEach((item) => item.classList.remove('menu_active'));
        link
          .closest('.menu__item')
          .querySelector('.menu')
          .classList.add('menu_active');
      }

      return false;
    };
  } else {
    link.onclick = () => {
      document
        .querySelectorAll('.menu_sub')
        .forEach((item) => item.classList.remove('menu_active'));
    };
  }
});
