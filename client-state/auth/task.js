const button = document.querySelector('#signin__btn');
const form = document.querySelector('#signin__form');
const windowWelcome = document.querySelector('#welcome');
const signin = document.querySelector('#signin');
const user = document.querySelector('#user_id');
const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
let buttonExit = document.querySelector('#button__exit');

autoEnterUser();

buttonExit.addEventListener('click', (e) => {
  signin.classList.add('signin_active');
  windowWelcome.classList.remove('welcome_active');
  localStorage.removeItem('userActiveId');
});

button.addEventListener('click', (e) => {
  upload(form, url, requestHandler);
  form.reset();
  e.preventDefault();
});

function upload(data, url, callback) {
  let xhr = new XMLHttpRequest();
  const formData = new FormData(data);
  xhr.open('POST', url, true);
  xhr.send(formData);
  xhr.responseType = 'json';
  xhr.onload = () => callback(xhr.response);
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
