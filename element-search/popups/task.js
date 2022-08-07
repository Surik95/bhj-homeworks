const modalMain = document.getElementById('modal_main') 
const modalSuccess = document.getElementById('modal_success')
const btnMain = document.querySelector('#modal_main .btn')
const btnClose = document.querySelectorAll('.modal__close_times')
const body = document.querySelectorAll('body > div')

Array.from(body).forEach(item => {
    if (item.className === '') {
        item.onclick = () => 
        modalMain.classList.add('modal_active')
    }
})

btnMain.onclick = (() => {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active')
})


Array.from(btnClose).forEach(item => {
item.onclick = () => {
    modalSuccess.classList.remove('modal_active')
    modalMain.classList.remove('modal_active')
}})
