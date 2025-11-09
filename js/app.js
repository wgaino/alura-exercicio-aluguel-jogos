let listaDeJogosAlugados = [];






function alterarStatus(idJogo){
    let containerJogo = document.getElementById(`game-${idJogo}`)
    let imagemJogo = containerJogo.querySelector('.dashboard__item__img')
    let botao = containerJogo.querySelector('.dashboard__item__button')
    let nomeDoJogo = containerJogo.querySelector('.dashboard__item__name').textContent;

    console.log(nomeDoJogo);


    let imagemApagada = ('dashboard__item__img--rented')
    let botaoApagado = ('dashboard__item__button--return')


    if(imagemJogo.classList.contains(imagemApagada)){
        imagemJogo.classList.remove(imagemApagada)
        botao.classList.remove(botaoApagado)
        botao.textContent = 'Alugar'
        alert ('Item devolvido, obrigado!');
        listaDeAlugados.pop(nomeDoJogo)
        console.log (listaDeJogosAlugados);



    } else {
        imagemJogo.classList.add(imagemApagada)
        botao.classList.add(botaoApagado)
        botao.textContent = 'Devolver'
        alert ('Item alugado, obrigado!')
        listaDeAlugados.push(nomeDoJogo)
        console.log(listaDeJogosAlugados);
    
    

    }


}