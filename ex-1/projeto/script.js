function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data. getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "manha-img.png";
        document.body.style.background = '#E8B45A';
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde-img.png';
        document.body.style.background = '#A64F47';
    } else {
        //boa noite
        img.src = 'noite-img.png';
        document.body.style.background = ' rgb(65, 123, 233)';
    }
}
