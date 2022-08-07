const img = Array.from(document.querySelectorAll('.slider__item'))
const next =  document.querySelector('.slider__arrow_next')
const prev =  document.querySelector('.slider__arrow_prev')
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'))
let index = 0;

sliderDot.forEach(item => {
    item.onclick = () => {
        sliderDot.forEach(items => items.classList.remove('slider__dot_active'))
        index = sliderDot.indexOf(item)
        slider(index)
        sliderDotFunc(sliderDot.indexOf(index))
}})

next.onclick = (() => {
    index === img.length - 1 ?  slider(index = 0) : slider(++index)  
})

prev.onclick = (() => {
    index === 0 ?  slider(index = img.length - 1) : slider(--index)  
})

function slider(index) {
    for (item of img) {
        img.forEach(item => item.classList.remove('slider__item_active'))
        sliderDot.forEach(item => item.classList.remove('slider__dot_active'))
        img[index].classList.add('slider__item_active')
        sliderDot[index].classList.add('slider__dot_active')
    }
}    

function sliderDotFunc(item) {
    sliderDot[item].classList.add('slider__dot_active')
}

