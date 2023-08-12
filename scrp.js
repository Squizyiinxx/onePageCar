const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
const topBurger = document.querySelector(".burger span:nth-child(1)");
const centerBurger = document.querySelector(".burger span:nth-child(2)");
const bottomBurger = document.querySelector(".burger span:nth-child(3)");

burger.addEventListener('click', function(){
    nav.classList.toggle('right');
    topBurger.classList.toggle('top-burger');
    centerBurger.classList.toggle('center-burger');
    bottomBurger.classList.toggle('bottom-burger');
})