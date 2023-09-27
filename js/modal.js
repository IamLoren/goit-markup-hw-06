(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  // BURGER-MENU

const burger = document.querySelector('.header-burger');
const burgerFirstLine = document.querySelector('.firstLine');
const burgerSecondLine = document.querySelector('.secondLine');
const burgerthirdLine = document.querySelector('.thirdLine');
const nav = document.querySelector('.nav-bar');
const navLink = document.querySelectorAll('.pop-up');

burger.addEventListener('click', () => {
  burgerFirstLine.classList.toggle('rotate-down');
  burgerthirdLine.classList.toggle('rotate-up');
  burgerSecondLine.classList.toggle('disable');
  nav.classList.toggle('active-nav');
});

[...navLink].forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active-nav');
    burgerFirstLine.classList.remove('rotate-down');
    burgerthirdLine.classList.remove('rotate-up');
  });
});