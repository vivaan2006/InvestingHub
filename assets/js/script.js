'use strict';

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

const navExpandDuration = 400; 
const navCollapseDuration = 300; 

const navToggleFunc = () => {
  if (nav.classList.contains('active')) {
    nav.style.transitionDuration = `${navCollapseDuration}ms`;
  } else {
    nav.style.transitionDuration = `${navExpandDuration}ms`;
  }
  nav.classList.toggle('active');
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

const themeBtns = document.querySelectorAll('.theme-btn');
const transitionDuration = 200;

function themeBtnClick() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  for (const btn of themeBtns) {
    btn.style.transitionDuration = `${transitionDuration}ms`;
    btn.classList.toggle('light');
    btn.classList.toggle('dark');
  }
}
if (localStorage.getItem('theme') === 'dark') {
  themeBtnClick();
}

for (const btn of themeBtns) {
  btn.addEventListener('click', () => {

    if (document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    themeBtnClick();
  });
}
