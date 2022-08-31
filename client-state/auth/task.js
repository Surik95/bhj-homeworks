const button = document.querySelector('#signin__btn');
const form = document.querySelector('#signin__form');
const windowWelcome = document.querySelector('#welcome');
const signin = document.querySelector('#signin');
const user = document.querySelector('#user_id');
const formData = new FormData();
const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
let buttonExit = document.querySelector('#button__exit');

autoEnterUser();

function newObjForm(element) {
  let inputArr = [...element.closest('form').querySelectorAll('input')];
  for (let elem of inputArr) {
    formData.append(elem.name, elem.value);
  }
}

buttonExit.addEventListener('click', (e) => {
  signin.classList.add('signin_active');
  windowWelcome.classList.remove('welcome_active');
  localStorage.removeItem('userActiveId');
});

button.addEventListener('click', (e) => {
  newObjForm(e.target);
  upload(formData, url, requestHandler);
  e.preventDefault();
});

function upload(file, url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open('POST', url, true);
  xhr.send(file);
  xhr.onload = () => callback(JSON.parse(xhr.response));
}

function saveActiveUser(user) {
  localStorage.setItem('userActiveId', user);
}

function requestHandler(response) {
  if (response.success === true) {
    signin.classList.remove('signin_active');
    windowWelcome.classList.add('welcome_active');
    user.innerText = response.user_id;
    saveActiveUser(user.textContent);
  } else if (response.success === false) {
    alert('Неверный логин/пароль');
  }
}

function autoEnterUser() {
  if (localStorage.getItem('userActiveId')) {
    signin.classList.remove('signin_active');
    windowWelcome.classList.add('welcome_active');
    user.innerText = localStorage.getItem('userActiveId');
  }
}
