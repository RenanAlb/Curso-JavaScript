function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique o dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/img-crianca.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/img-jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/img-homem.png');
            } else {
                img.setAttribute('src', 'img/img-idoso.png');
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/img-menina.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/img-jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/img-mulher.png');
            } else {
                img.setAttribute('src', 'img/img-idosa.png');
            }
            
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`;
        res.appendChild(img);// vai adicionar a imagem em baixo
    }
}