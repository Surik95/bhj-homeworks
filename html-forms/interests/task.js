const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach((element) => {
  element.addEventListener('click', (e) => checkboxButton(e));
});

function checkboxButton(element) {
  if (element.currentTarget.checked) {
    Array.from(
      element.currentTarget
        .closest('.interest')
        .querySelectorAll('ul .interest__check')
    ).forEach((elem) => (elem.checked = true));
  } else if (!element.currentTarget.checked) {
    Array.from(
      element.currentTarget
        .closest('.interest')
        .querySelectorAll('ul .interest__check')
    ).forEach((elem) => (elem.checked = false));
  }

  checkboxButtonChildren(element.currentTarget);
}

function checkboxButtonChildren(element) {
  if (element.closest('ul').closest('.interest') === null) {
    return;
  }

  let arrayInterestCheked = Array.from(
    element.closest('ul').querySelectorAll('.interest__check')
  ).map((elem) => elem.checked);

  if (arrayInterestCheked.indexOf(false) === -1) {
    element
      .closest('ul')
      .closest('.interest')
      .querySelector('.interest__check').indeterminate = false;
    element
      .closest('ul')
      .closest('.interest')
      .querySelector('.interest__check').checked = true;
  } else if (arrayInterestCheked.indexOf(true) === -1) {
    element
      .closest('ul')
      .closest('.interest')
      .querySelector('.interest__check').indeterminate = false;
    element
      .closest('ul')
      .closest('.interest')
      .querySelector('.interest__check').checked = false;
  } else if (arrayInterestCheked.includes(false)) {
    element
      .closest('ul')
      .closest('.interest')
      .querySelector('.interest__check').indeterminate = true;
  }
  checkboxButtonChildren(
    element.closest('ul').closest('.interest').querySelector('.interest__check')
  );
}
