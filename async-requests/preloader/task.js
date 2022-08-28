loadCourse();
loader('https://netology-slow-rest.herokuapp.com', assigningValue);

function addElement(...args) {
  const items = document.querySelector('#items');
  const divItem = document.createElement('div');
  const divItemCode = document.createElement('div');
  const divItemValue = document.createElement('div');
  const divItemCurency = document.createElement('div');

  divItem.classList.add('item');
  divItemCode.classList.add('item__code');
  divItemValue.classList.add('item__value');
  divItemCurency.classList.add('item__currency');

  divItemCode.innerText = args[0];
  divItemValue.innerText = args[1];
  divItemCurency.innerText = 'руб.';

  items.appendChild(divItem);
  divItem.appendChild(divItemCode);
  divItem.appendChild(divItemValue);
  divItem.appendChild(divItemCurency);
}

function assigningValue(object) {
  if (document.querySelector('#items').querySelector('div') != null) {
    while (document.querySelector('#items').querySelector('div')) {
      document
        .querySelector('#items')
        .removeChild(document.querySelector('.item'));
    }
  }

  const keysValuteArr = Object.keys(object.response.Valute);
  const loader = document.querySelector('#loader');
  let country;
  let course;
  let arr = [];

  for (let index of keysValuteArr) {
    country = object.response.Valute[index].CharCode;
    course = object.response.Valute[index].Value;

    addElement(country, course);
    arr.push({ country, course });
  }
  localStorage.removeItem('exchangeRate');
  localStorage.setItem('exchangeRate', JSON.stringify(arr));
  loader.classList.remove('loader_active');
}

function loader(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.responseType = '';

  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      return callback(JSON.parse(xhr.response));
    }
  };
}

function loadCourse() {
  let arr = JSON.parse(localStorage.getItem('exchangeRate'));
  let country;
  let course;
  if (arr != null) {
    for (let index of arr) {
      country = index.country;
      course = index.course;

      addElement(country, course);
    }
  }
}
