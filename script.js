function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)    
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebeHomem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemHomem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adultoHomem.jpg')
            } else {
                img.setAttribute('src', 'img/idosoHomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebeMulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemMulher.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adultaMulher.jpg')
            } else {
                img.setAttribute('src', 'img/idosaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}