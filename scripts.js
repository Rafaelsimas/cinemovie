let filmes;
function requisicao() {
    const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/')
    promessa.then(popularFilmes)

    promessa.catch(exibeErro)

}

function popularFilmes(resposta){
    filmes = resposta.data
    renderizaFimes()
}


function renderizaFimes(){
    const caixaFilmes = document.querySelector('.secao-flex')
    caixaFilmes.innerHTML = ' '

    for(let i = 0; i < filmes.length; i++){
        caixaFilmes.innerHTML += `
        
        <div class="filme">
             <img src="${filmes[i].imagem}" alt="">
             <div class="titulo"> <h1>${filmes[i].titulo}</h1></div>
             <div class="descricao"><p>${filmes[i].descricao}</p></div>
             <button onclick="comprar()">
             <ion-icon name="cart-outline"></ion-icon>
             Comprar</button>
         </div>
        
        `
    }
}
requisicao()



function exibeErro(){
    alert('Não retornou')
}


function comprar(){
    alert('Em breve esta opção estará disponível')
}























/* 






*/