import {revistasQuadrinho} from './database.js'
window.onload = function() {
    revistasQuadrinho.forEach(function(revista){
        const titulo_completo = revista.titulo;
        if (revista.titulo.includes(":")){
            const titulo_dividido = titulo_completo.split(":").map(item => item.trim());
            var titulo = titulo_dividido[0];
            var subtitulo = titulo_dividido[1];
        }else{
            var titulo = titulo_completo;
            var subtitulo = null;
        }

        //Criando a estrutura do layout
        const row = document.createElement('div');
        row.classList.add('row');
        const col5 = document.createElement('div');
        col5.classList.add('col-5');
        const col7 = document.createElement('div');
        col7.classList.add('col-7', 'px-0');

        // Criando a estrutura do card
        const card = document.createElement('div');
        card.classList.add('card','border-light', 'mb-3', 'hq-card');
        // Card Imagem
        const cardImg = document.createElement('img');
        cardImg.classList.add('img-fluid', 'rounded-start');
        cardImg.src = "assets/" + revista.imagem;
        // Card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'px-0');
        // Título do Card
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('fw-semibold', 'mb-0', 'hq-title');
        cardTitle.textContent = titulo;
        // Tag de Gênero do Card
        const cardTag = document.createElement('span');
        cardTag.classList.add('badge', 'rounded-pill', 'fw-light', 'hq-tag');
        cardTag.textContent = revista.genero;

        col5.appendChild(cardImg);// adicionando a Imagem dentro da coluna
        row.appendChild(col5); // adicionando na linha

        cardBody.appendChild(cardTitle); // adicionando titulo do card dentro do card body
        // Subtitulo do Card
        if (subtitulo != null){
            const cardSubtitle = document.createElement('p');
            cardSubtitle.classList.add('mb-1', 'hq-subtitle');
            cardSubtitle.textContent = subtitulo;
            cardBody.appendChild(cardSubtitle); // adicionando o subtitulo, caso tenha, dentro do Card Body
        }
        cardBody.appendChild(cardTag); // adicionando a Tag depois do subtitulo ou titulo
        col7.appendChild(cardBody);// adicionando o card body dentro da coluna
        row.appendChild(col7); // adicionando na linha, abaixo da col5

        card.appendChild(row);

        document.getElementById("listar-itens").appendChild(card);
    })
};