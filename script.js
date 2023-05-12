const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('.name ul')
const menu = document.querySelector('.name ul li a')
const menu1 = document.querySelector('.name ul li .tentangSaya')
const menu2 = document.querySelector('.name ul li .sekolahSaya')

menuToggle.addEventListener ('click', function() {
    nav.classList.toggle('slide')
})

menu.addEventListener ('click', function(){
    nav.classList.toggle('slide')
})

menu1.addEventListener ('click', function(){
    nav.classList.toggle('slide')
})

menu2.addEventListener ('click', function(){
    nav.classList.toggle('slide')
})

document.title = "mhmdriduan.13"

const clickbait = () => {
    alert('jangan lupa follow instagram aing ya!!!')
}