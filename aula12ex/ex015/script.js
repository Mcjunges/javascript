function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                //Garoto
                img.setAttribute('src', 'img/garoto.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'img/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 21) {
                //Garota
                img.setAttribute('src', 'img/garota.png')
            } else if (idade < 65) {
                //Adulta
                img.setAttribute('src', 'img/adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}