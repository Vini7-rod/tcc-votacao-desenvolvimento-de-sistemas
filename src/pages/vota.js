const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('navigation-menu');

menuIcon.addEventListener('click',function() {
   menuIcon.classList.toggle('open');
   navMenu.classList.toggle('visibilidade');
});