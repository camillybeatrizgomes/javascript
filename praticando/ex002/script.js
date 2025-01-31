// for(let contador = 0; contador <= 20; contador++){
//     console.log(contador);
// }

function somaProgressaoAritmetica(numeroInicial, numeroFinal, razao){
    let soma = 0;
    for(let numeroAtual = numeroInicial; numeroAtual <= numeroFinal; numeroAtual += razao){
        soma += numeroAtual;
    }
    return soma;
}

console.log(somaProgressaoAritmetica(2, 20, 2))
