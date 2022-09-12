const chat = document.querySelector('.chat-widget');
const chatMessage = document.querySelector('#chat-widget__messages');
const chatInput = document.querySelector('#chat-widget__input');
let message;
let intervalIndex;

chat.addEventListener('click', () => {
  if (!Array.from(chat).includes('chat-widget_active')) {
    chat.classList.add('chat-widget_active');
  }
});

chatInput.addEventListener('focus', () => {
  intervalIndex = intervalFunc();
});

chatInput.addEventListener('blur', () => {
  clearInterval(intervalIndex);
  console.log(2);
});

chatInput.addEventListener('change', () => {
  console.log(1);
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.currentTarget.value.trim() === '') {
    clearInterval(intervalIndex);
    e.currentTarget.value = e.currentTarget.defaultValue;
    intervalIndex = intervalFunc();
  } else if (e.key === 'Enter') {
    clearInterval(intervalIndex);
    addMassegies(e.currentTarget.value.trim(), 'message_client');
    addMassegies(messageBot());
    scroll();
    e.currentTarget.value = e.currentTarget.defaultValue;
    intervalIndex = intervalFunc();
  }
});

function intervalFunc() {
  let elemInterval = setInterval(() => {
    addMassegies('Общаться будем');
    scroll();
  }, 30000);
  return elemInterval;
}
function addMassegies(messageText, classTagUser = null) {
  let time = settingTheTime();
  chatMessage.innerHTML += `<div class="message ${classTagUser}">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${messageText}
      </div>
    </div>`;
}

function scroll() {
  message = document.querySelectorAll('.message');
  message[message.length - 1].scrollIntoView(false);
}

function messageBot() {
  const messageArray = [
      'bob',
      'awesome',
      'я люблю netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'я люблю popcorn',
      'cinema',
      'love',
      'я люблю javascript',
      'я люблю kitkat',
    ],
    index = Math.floor(Math.random() * messageArray.length);

  return messageArray[index];
}

function settingTheTime() {
  let currentDate = new Date();
  hours =
    currentDate.getHours() < 10
      ? `0${currentDate.getHours()}`
      : `${currentDate.getHours()}`;
  minuts =
    currentDate.getMinutes() < 10
      ? `0${currentDate.getMinutes()}`
      : `${currentDate.getMinutes()}`;

  return `${hours}:${minuts}`;
}

console.log(settingTheTime());
