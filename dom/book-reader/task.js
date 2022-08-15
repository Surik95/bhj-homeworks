const fontSize = Array.from(document.querySelectorAll('.font-size'));
const colorText = Array.from(
  document.querySelectorAll('.book__control_color > .color')
);
const bgColor = Array.from(
  document.querySelectorAll('.book__control_background > .color')
);
const bookСontent = document.querySelector('.book__content');

fontSize.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    fontSize.forEach((fSA) => fSA.classList.remove('font-size_active'));
    if (e.target.dataset.size === 'small') {
      e.target.classList.add('font-size_active');
      bookСontent.classList.remove('book_fs-big');
      bookСontent.classList.add('book_fs-small');
    } else if (e.target.dataset.size === 'big') {
      e.target.classList.add('font-size_active');
      bookСontent.classList.remove('book_fs-small');
      bookСontent.classList.add('book_fs-big');
    } else {
      e.target.classList.add('font-size_active');
      bookСontent.classList.remove('book_fs-small');
      bookСontent.classList.remove('book_fs-big');
    }
  });
});

colorText.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    colorText.forEach((cT) => cT.classList.remove('color_active'));
    if (e.target.dataset.textColor === 'black') {
      e.target.classList.add('color_active');
      bookСontent.classList.remove('book_color-gray');
      bookСontent.classList.remove('book_color-whitesmoke');
      bookСontent.classList.add('book_color-black');
    } else if (e.target.dataset.textColor === 'gray') {
      e.target.classList.add('color_active');
      bookСontent.classList.remove('book_color-black');
      bookСontent.classList.remove('book_color-whitesmoke');
      bookСontent.classList.add('book_color-gray');
    } else {
      e.target.classList.add('color_active');
      bookСontent.classList.remove('book_color-black');
      bookСontent.classList.remove('book_color-gray');
      bookСontent.classList.add('book_color-whitesmoke');
    }
  });
});

bgColor.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    bgColor.forEach((bgC) => bgC.classList.remove('color_active'));
    if (e.target.dataset.bgColor === 'black') {
      e.target.classList.add('color_active');
      bookСontent.classList.remove('book_bg-gray');
      bookСontent.classList.remove('book_bg-white');
      bookСontent.classList.add('book_bg-black');
    } else if (e.target.dataset.bgColor === 'gray') {
      e.target.classList.add('color_active');
      bookСontent.classList.remove('book_bg-black');
      bookСontent.classList.remove('book_bg-white');
      bookСontent.classList.add('book_bg-gray');
    } else {
      e.target.classList.add('color_active');
      bookСontent.classList.remove('book_bg-black');
      bookСontent.classList.remove('book_bg-gray');
      bookСontent.classList.add('book_bg-white');
    }
  });
});
