import {revistasQuadrinho} from './database.js'

const urlParams = new URLSearchParams(window.location.search);
const generoId = urlParams.get('id');
switch (generoId) {
    case 'acao':
        var generoName = "Ação";
        break;
    case 'suspense':
        var generoName = "Suspense";
        break;
    case 'drama':
        var generoName = "Drama";
        break;
}
const revistasFiltradas = revistasQuadrinho.filter(revista => revista.genero === generoName); // filtra as revistas com o genero de mesmo nome do Genero da URL

window.onload = function() {
    // Criando o header de acordo com o gênero
    // Imagem do Gênero
    const generoImg = document.createElement('img');
    generoImg.classList.add('rounded-circle', 'genero-icon');
    generoImg.src = "assets/icones/" + generoId + ".png";
    // Titulo do genero
    const generoTitle = document.createElement('h5');
    generoTitle.classList.add('genero-title');
    generoTitle.textContent = generoName;

    document.getElementById("genero-header").appendChild(generoImg);
    document.getElementById("genero-header").appendChild(generoTitle);

    // Para cada objeto dentro do array revistasFiltradas é montado um Card com os dados do objeto
    revistasFiltradas.forEach(function(revista){
        const titulo_completo = revista.titulo;
        if (revista.titulo.includes(":")){
            const titulo_dividido = titulo_completo.split(":").map(item => item.trim());
            var titulo = titulo_dividido[0];
            var subtitulo = titulo_dividido[1];
        }else{
            var titulo = titulo_completo;
            var subtitulo = null;
        }

        // Criando a estrutura do card
        const col = document.createElement('div');
        col.classList.add('col');
        
        const card = document.createElement('div');
        card.classList.add('card', 'genero-hq-card');
        
        // Card Imagem
        const cardImg = document.createElement('img');
        cardImg.classList.add('img-fluid', 'rounded-top', 'hq-img');
        cardImg.src = "assets/" + revista.imagem;

        const flexbox = document.createElement('div');
        flexbox.classList.add('d-flex', 'flex-column');

        // Card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'px-2', 'py-2');
        
        const divCardBody = document.createElement('div');
        divCardBody.classList.add('w-auto', 'mb-1');
        // Título do Card
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('fw-semibold', 'mb-0', 'hq-title');
        cardTitle.textContent = titulo;
        // Tag de Gênero do Card
        const cardTag = document.createElement('span');
        cardTag.classList.add('badge', 'rounded-pill', 'fw-light', 'hq-tag');
        cardTag.textContent = revista.genero;

        const divCardBtn = document.createElement('div');
        divCardBtn.classList.add('mt-auto');
        // Link Card Button
        const linkCardBtn = document.createElement('a');
        linkCardBtn.classList.add('hq-link-btn');
        linkCardBtn.href = `./interna.html?id=${revista.id}`
        // Card Button
        const cardBtn = document.createElement('div');
        cardBtn.classList.add('btn','btn-sm','hq-btn');
        cardBtn.textContent = "Veja mais";
        linkCardBtn.appendChild(cardBtn);

        
        divCardBody.appendChild(cardTitle);
        // Subtitulo do Card
        if (subtitulo != null){
            const cardSubtitle = document.createElement('p');
            cardSubtitle.classList.add('mb-1', 'hq-subtitle');
            cardSubtitle.textContent = subtitulo;
            divCardBody.appendChild(cardSubtitle); // adicionando o subtitulo, caso tenha, dentro do Card Body
        }
        divCardBody.appendChild(cardTag);
        cardBody.appendChild(divCardBody);
        divCardBtn.appendChild(linkCardBtn);
        cardBody.appendChild(divCardBtn);
        flexbox.appendChild(cardBody);

        card.appendChild(cardImg);
        card.appendChild(flexbox);
        col.appendChild(card);

        document.getElementById("listar-hqs").appendChild(col);

    })
};