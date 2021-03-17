const burger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
const header = document.querySelector('.header');

function burgerActive() {
   burger.classList.toggle('active');
   menuBody.classList.toggle('active');
   body.classList.toggle('lock');
   header.classList.toggle('active');
}

burger.addEventListener('click', burgerActive);
