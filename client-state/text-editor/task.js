const textArea = document.querySelector('#editor');
const button = document.querySelector('#button');

enterText('text', textArea);

button.addEventListener('click', (e) => {
  e.preventDefault();
  textArea.value = '';
  saveText('text', textArea.value);
});

window.addEventListener('unload', (e) => {
  saveText('text', textArea.value);
});

function saveText(keyname, value) {
  localStorage.setItem(keyname, value);
}

function enterText(keyname, element) {
  let cash = localStorage.getItem(keyname);
}
