var burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
    if(burger.classList.contains('burger-icon')) {
        burger.classList.remove('burger-icon')
        burger.classList.add('close-icon')
        burger.src = "images/icon-close.svg";
        document.querySelector('nav .column2').style.transform = 'translateY(15px)';
    } else {
        burger.classList.add('burger-icon')
        burger.classList.remove('close-icon')
        burger.src = "images/icon-hamburger.svg";
        document.querySelector('nav .column2').style.transform = 'translateY(-200%)';
    }
})

window.addEventListener('resize', intro())
window.addEventListener('load', intro())

function intro() {
    var bg = document.querySelector('#intro .bg');
    if(window.innerWidth <= 700 || screen.width <= 700) {
        bg.src = "images/bg-intro-mobile.svg";
    } else {
        bg.src = "images/bg-intro-desktop.svg";
    }
}