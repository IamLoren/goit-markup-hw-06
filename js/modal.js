(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      body: document.querySelector('[data-page\]'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle('no-scroll');
    }
  })();

  $("#user-phone").mask("+38(999)999-9999");


  // BURGER-MENU

  (() => {
    const headerBurger = document.querySelector('.header-burger');
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const burgerFirstLine = document.querySelector('.firstLine');
    const burgerSecondLine = document.querySelector('.secondLine');
    const burgerthirdLine = document.querySelector('.thirdLine');



    headerBurger.addEventListener('click', function () {
      burgerFirstLine.classList.toggle('rotate-down');
    burgerthirdLine.classList.toggle('rotate-up');
    burgerSecondLine.classList.toggle('disable');
      if (this.classList.contains('js-open-menu')) {
        this.classList.remove('js-open-menu');
        this.classList.add('js-close-menu');
      } else if (this.classList.contains('js-close-menu')) {
        this.classList.remove('js-close-menu');
        this.classList.add('js-open-menu');
      }
    });

    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();