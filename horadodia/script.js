function carregar(){
    var msg = window.document.getElementById('msg');
    var msgSaudacao = window.document.getElementById('msg-saudacao');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;
   
    if (hora >= 0 && hora < 11){
        //Bom dia!
        img.src = './images/manha.png';
        document.body.style.background =  '#f8ed63';
        msgSaudacao.innerHTML = `Bom Dia.`
    } else if (hora >= 12 && hora <= 17){
       //Boa tarde
       img.src = './images/tarde.png';
       document.body.style.background = '#e8af76';
       msgSaudacao.innerHTML = `Boa Tarde.`
      
    }else {
        //Boa noite
        img.src = './images/noite.png';
        document.body.style.background =  '#152a35';
        msgSaudacao.innerHTML = `Boa Noite.`
    }
}
