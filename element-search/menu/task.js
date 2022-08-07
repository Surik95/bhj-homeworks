const menuLink = document.querySelectorAll('.menu__link')
const menu = document.querySelectorAll('.menu')

Array.from(menuLink).forEach( link => {
    if (link.textContent === 'О компании') {
        link.onclick = (() => {
            link.closest('.menu_main').querySelectorAll('.menu_sub').forEach( item => 
            item.classList.remove('menu_active'))
            link.closest('.menu__item').querySelector('.menu').classList.add('menu_active')
            return false
    })} else if (link.textContent === 'Услуги') {
        link.onclick = (() => {
            link.closest('.menu_main').querySelectorAll('.menu_sub').forEach( item => 
            item.classList.remove('menu_active'))
            link.closest('.menu__item').querySelector('.menu').classList.add('menu_active')
            return false
    })} else if (link.textContent === 'Главная' || 'Контакты') {
        link.onclick = (() => {
            document.querySelectorAll('.menu_sub').forEach( item => 
            item.classList.remove('menu_active'))
    })}
})