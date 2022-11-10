const menuMobile = document.querySelector('.menu-ham');
const aside = document.querySelector('.container-menu-mobile')
const closedMenu = document.querySelector('.close-menu');


menuMobile.addEventListener('click', showMenuMobile);
closedMenu.addEventListener('click', closedMenuMobile);

function showMenuMobile(){
  aside.classList.remove('inactive');
}

function closedMenuMobile(){
  aside.classList.add('inactive')
}