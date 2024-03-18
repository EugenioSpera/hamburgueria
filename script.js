/* chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
colchetes [ ] para indicar um array;
dois pontos : para separar a chave e seu valor correspondente;
vírgula , para indicar a separação entre os elementos. */

let cards = document.querySelector('.item')

//faz a leitura de alguma informação(requisita)
fetch('hamburgueria.json')
//Captura a resposta de uma call function
//a função then sempre irá receber a resposta
// e irá armazená-la em uma variável
.then(resposta => resposta.json())
.then(dados => dados.forEach((cards) => {


        // criar um card padrao
        let card = document.createElement('div')
        //da uma classe css para o elemento especificado
        card.classList.add('card')
        //cria um elemento filho dentro do elemento especificado
        cards.appendChild(card)


        card.innerHTML =`
        <li class="cards-type">Tradicional</li>
        <li class="cards-name">Texas Burguer</li>
        <li class="cards-price">R$ 25,50</li>
        `
    }))

/*<span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4>*/