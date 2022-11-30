const botaoMenu = document.querySelector('.header__botao');
const botaoMenuFechar = document.querySelector('.header__menu__botao');
const fundoEscuro = document.querySelector('.header__fundo');
const nav = document.querySelector('.header > nav');

function toggleMenu() {
  nav.classList.toggle('menuAberto');
}

botaoMenu.addEventListener('click', toggleMenu);
botaoMenuFechar.addEventListener('click', toggleMenu);
fundoEscuro.addEventListener('click', toggleMenu);
