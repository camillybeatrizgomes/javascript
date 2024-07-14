function contar(){
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var passo = document.getElementById('txt3')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (var c = 1; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem decrescente
            for (var c = 1; c >= f; c+= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}