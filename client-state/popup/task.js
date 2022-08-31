const modalContent = document.querySelector('#subscribe-modal');
const buttonClose = document.querySelector('.modal__close');

if (!getCookie('modalWindow')) {
  modalContent.classList.add('modal_active');
} else if (getCookie('modalWindow') === 'close') {
  modalContent.classList.remove('modal_active');
} else if (getCookie('modalWindow') === 'open') {
  modalContent.classList.remove('modal_active');
} else {
  setCookie('modalWindow', 'open');
}

buttonClose.addEventListener('click', (e) => {
  modalContent.classList.remove('modal_active');
  setCookie('modalWindow', 'close');
});

function getCookie(name) {
  if (!document.cookie) {
    return;
  }
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
