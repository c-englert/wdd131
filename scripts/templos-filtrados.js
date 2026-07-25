document.querySelector('#anoatual').textContent = new Date().getFullYear();
document.querySelector('#ultimaModificacao').textContent = document.lastModified;

const galeria = document.querySelector('#galeria-templos');
const titulo = document.querySelector('#titulo-filtro');
const menuLista = document.querySelector('#menu-lista');
const botaoMenu = document.querySelector('#menu-hamburguer');

botaoMenu.addEventListener('click', () => {
    menuLista.classList.toggle('esconder');
});

function obterAno(consagracao) {
    return Number(consagracao.split(',')[0]);
}

function exibirTemplos(lista) {
    galeria.innerHTML = '';

    lista.forEach(templo => {
        const card = document.createElement('figure');

        const img = document.createElement('img');
        img.src = templo.urlDaImagem;
        img.alt = `Templo de ${templo.nomeDoTemplo}`;
        img.loading = 'lazy';
        img.width = 400;
        img.height = 250;

        const legenda = document.createElement('figcaption');
        legenda.innerHTML = `
            <strong>${templo.nomeDoTemplo}</strong><br>
            Local: ${templo.localizacao}<br>
            Consagração: ${templo.consagracao}<br>
            Área: ${templo.area.toLocaleString('pt-BR')} pés²
        `;

        card.appendChild(img);
        card.appendChild(legenda);
        galeria.appendChild(card);
    });
}

function aplicarFiltro(filtro) {
    let resultado = templos;

    if (filtro === 'antigos') {
        resultado = templos.filter(t => obterAno(t.consagracao) < 1900);
    } else if (filtro === 'novos') {
        resultado = templos.filter(t => obterAno(t.consagracao) > 2000);
    } else if (filtro === 'grandes') {
        resultado = templos.filter(t => t.area > 90000);
    } else if (filtro === 'pequenos') {
        resultado = templos.filter(t => t.area < 10000);
    }

    exibirTemplos(resultado);
}

menuLista.addEventListener('click', (evento) => {
    const link = evento.target.closest('a');
    if (!link) return;
    evento.preventDefault();

    const filtro = link.dataset.filtro;
    titulo.textContent = link.textContent;
    aplicarFiltro(filtro);

    if (window.innerWidth < 640) {
        menuLista.classList.add('esconder');
    }
});

exibirTemplos(templos);