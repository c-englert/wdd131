document.getElementById('anoatual').textContent = new Date().getFullYear();
document.getElementById('ultimaModificacao').textContent = document.lastModified;

const botao = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu-lista');

botao.addEventListener('click', () => {
    menu.classList.toggle('esconder');

    if (menu.classList.contains('esconder')) {
        botao.innerHTML = '&#9776;';
        botao.setAttribute('aria-label', 'Abrir menu');
    } else {
        botao.innerHTML = '&#10006;';
        botao.setAttribute('aria-label', 'Fechar menu');
    }
});