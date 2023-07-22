'use strict';

// Navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// Navbar animation variables
const navExpandDuration = 400; // Duration for the navbar expand animation
const navCollapseDuration = 300; // Duration for the navbar collapse animation

// NavToggle function
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

// Theme toggle variables
const themeBtns = document.querySelectorAll('.theme-btn');
const transitionDuration = 200; // Duration for the theme transition

// ThemeBtnClick function
function themeBtnClick() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  for (const btn of themeBtns) {
    // Add smooth transition for theme toggle
    btn.style.transitionDuration = `${transitionDuration}ms`;
    btn.classList.toggle('light');
    btn.classList.toggle('dark');
  }
}

// LocalStorage check
if (localStorage.getItem('theme') === 'dark') {
  themeBtnClick();
}

// ThemeBtnClick listener
for (const btn of themeBtns) {
  btn.addEventListener('click', () => {
    // Toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`.
    if (document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    themeBtnClick();
  });
}
