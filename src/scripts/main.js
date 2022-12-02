'use strict';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-is-open');
  } else {
    document.body.classList.remove('page__body--menu-is-open');
  }
});

//swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  slidesPerView: 1,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    400: {
      slidesPerView: 1.3,
    },
    500: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
    1800: {
      slidesPerView: 6,
    }
  },

  modules: [Scrollbar],
});

// form
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});

//select
const select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select();
