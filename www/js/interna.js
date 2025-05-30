import {revistasQuadrinho} from './database.js'

const urlParams = new URLSearchParams(window.location.search);
const hqId = Number(urlParams.get('id'));
const hq = revistasQuadrinho.find(revista => revista.id === hqId);

const img = document.querySelector('#hq-img')
document.querySelector('.voltar').addEventListener('click', function(event) {
    event.preventDefault();
    history.back();
});

if (hq) {
    document.querySelector('#hq-titulo').textContent = hq.titulo;
    document.querySelector('#hq-descricao').textContent = hq.descricao;
    img.src = "assets/" + hq.imagem;
    document.querySelector('#hq-autor').textContent = hq.autor;
    var dataEdicao = hq.dataEdicao
    document.querySelector('#hq-dataEdicao').textContent = `${dataEdicao.dia} ${dataEdicao.mes}, ${dataEdicao.ano}`;
    const links = hq.links
    links.forEach((link)=>{
        const divLoja = document.createElement('li');
        divLoja.classList.add('list-group-item','d-flex', 'justify-content-between');

        const nomeLoja = document.createElement('span');
        nomeLoja.classList.add('nome-loja');
        nomeLoja.textContent = link.loja;
        divLoja.appendChild(nomeLoja);

        const linkLoja = document.createElement('a');
        linkLoja.classList.add('link-secondary','link-loja');
        linkLoja.href = link.url
        linkLoja.target = '_blank';
        linkLoja.textContent = "Clique aqui";
        divLoja.appendChild(linkLoja);

        document.getElementById("lista-links").appendChild(divLoja);
    })
    
} else {
    document.body.innerHTML = '<p>HQ não encontrada!</p>';
}