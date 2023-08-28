function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if(formAno.value.lenght == 0 || formAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','criança-M.png')
            } else if (idade < 21){
                img.setAttribute('src','adolescente-M.png')
            } else if (idade < 50){
                img.setAttribute('src','adulto-M.png')
            }else {
                img.setAttribute('src','idoso-M.png')
            }        
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','criança-F.png')
            } else if (idade < 21){
                img.setAttribute('src','adolescente-F.png')
            } else if (idade < 50){
                img.setAttribute('src','adulto-F.png')
            }else {
                img.setAttribute('src','idoso-F.png')
            }    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
