const dropdown = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');

dropdown.addEventListener('click', () =>
  dropdownList.classList.add('dropdown__list_active')
);

Array.from(dropdownLink).forEach((item) =>
  item.addEventListener('click', dropdownListFunc)
);

function dropdownListFunc(e) {
  dropdown.textContent = e.target.textContent;
  dropdownList.classList.remove('dropdown__list_active');
  e.preventDefault();
}
