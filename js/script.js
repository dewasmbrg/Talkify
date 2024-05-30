'use strict';

const menuIcon = document.querySelector('.nav-menuIcon');
const closeIcon = document.querySelector('.nav-closeIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const navLogo = document.querySelector('.nav-logo');
const navLink = document.querySelector('.nav-links');

const toggleHide = () => {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    mobileMenu.classList.toggle('menu-slide');
    navLogo.classList.toggle('menu-slide');
    navLink.classList.toggle('menu-slide');
};

menuIcon.addEventListener('click', toggleHide);
closeIcon.addEventListener('click', toggleHide);

const redirect = () => {
    location.href = 'food.html';
};

// see more
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.scroll-link');

  for (const link of links) {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  }
});