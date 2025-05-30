import {revistasQuadrinho} from './database.js'
window.onload = function() {
    // Para cada objeto dentro do array revistasQuadrinho é montado um Card com os dados do objeto
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

        // Criando a estrutura do card
        const card = document.createElement('div');
        card.classList.add('card','border-light', 'mb-3', 'hq-card');

        const row = document.createElement('div');
        row.classList.add('row', 'g-0');

        const col5 = document.createElement('div');
        col5.classList.add('col-5');
        // Card Imagem
        const cardImg = document.createElement('img');
        cardImg.classList.add('img-fluid', 'rounded-start');
        cardImg.src = "assets/" + revista.imagem;

        const col7 = document.createElement('div');
        col7.classList.add('col-7', 'd-flex', 'flex-column');
        // Card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'px-2');
        
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

        col5.appendChild(cardImg);// adicionando a Imagem dentro da coluna
        row.appendChild(col5); // adicionando na linha

        divCardBody.appendChild(cardTitle); // adicionando titulo do card dentro do card body
        // Subtitulo do Card
        if (subtitulo != null){
            const cardSubtitle = document.createElement('p');
            cardSubtitle.classList.add('mb-1', 'hq-subtitle');
            cardSubtitle.textContent = subtitulo;
            divCardBody.appendChild(cardSubtitle); // adicionando o subtitulo, caso tenha, dentro do Card Body
        }
        divCardBody.appendChild(cardTag); // adicionando a Tag depois do subtitulo ou titulo
        divCardBtn.appendChild(linkCardBtn);
        cardBody.appendChild(divCardBody);
        cardBody.appendChild(divCardBtn)
        col7.appendChild(cardBody);// adicionando o card body dentro da coluna
        row.appendChild(col7); // adicionando na linha, abaixo da col5

        card.appendChild(row);

        document.getElementById("listar-itens").appendChild(card);
    })
};