let tabNavigation = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');
let tab = document.querySelector('#tabs1')

tab.addEventListener('click', (e) => {
    if (e.target.closest('.tab'))
    activeContent(e.target, tabNavigation, tabContent)
})


function activeContent(e, arr1, arr2) {
    arr1.forEach(element => element.classList.remove('tab_active'))
    arr2.forEach(element => element.classList.remove('tab__content_active'))
    e.classList.add('tab_active')
    arr2[Array.from(arr1).indexOf(e)].classList.add('tab__content_active')
}