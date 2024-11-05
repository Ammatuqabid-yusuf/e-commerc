// Script for navigation bar
const navbar = document.querySelector('.navbar');
const openNavbar = document.querySelector('.bar');
const closeNavbar = document.querySelector('.close');

openNavbar.addEventListener('click', function () {
  navbar.classList.add('active');
});

closeNavbar.addEventListener('click', function () {
  navbar.classList.remove('active');
});
