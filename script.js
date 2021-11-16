function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formularioGen = document.getElementsByName('radgen')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formularioGen[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imgs/bebe-f.png')
            } else if (idade >= 10 && idade <= 24) {
                //Jovem
                img.setAttribute('src', 'imgs/jovem-f.png')
            } else if (idade > 24 && idade < 50) {
                //Adulto
                img.setAttribute('src','imgs/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idoso-f.png')
            }
        } else if (formularioGen[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imgs/bebe-m.png')
            } else if (idade >= 10 && idade <= 24) {
                //Jovem
                img.setAttribute('src', 'imgs/jovem-m.png')
            } else if (idade > 24 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imgs/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}