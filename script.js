// const button = document.querySelector(".header__li-button")
// const modal = document.querySelector(".header-section")

// modal.classList.remove('main-nav--nojs');

// button.addEventListener("click", function(){
//     if (modal.classList.contains("header-section--closed")){
//         modal.classList.remove("header-section--closed");
//         modal.classList.add("header-section--open");
//     } else {
//         modal.classList.add("header-section--closed")
//         modal.classList.remove("header-section--open");
//     }
// });




//Скрипт для акции в первой секции после шапки

function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);


//Анимация при скроле
const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('square-animation');
    }
  });
});
observer.observe(document.querySelector('.main-section__h2'));
// observer.observe(document.querySelector('.main__section'));
// observer.observe(document.querySelector('.section-minu__ul'));




