function verificar(){   
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
       var fsex = document.getElementsByName('radsex');
       var idade = ano - Number(fano.value);
       res.innerHTML = `Idade calculada ${idade}`;
       var gênero = '';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');

       if(fsex[0].checked){
            gênero = 'Homem';
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', './images/foto-bebe-m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', './images/foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './images/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', './images/foto-idoso-m.png')
            }

       }else{
           gênero = 'Mulher';
           if(idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src', './images/foto-bebe-f.png')
            }else if(idade < 21){
            //Jovem
            img.setAttribute('src', './images/foto-jovem-f.png')
            }else if(idade < 50){
            //adulto
            img.setAttribute('src', './images/foto-adulto-f.png')
            }else{
            //idoso
            img.setAttribute('src', './images/foto-idoso-f.png')
            }
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)
   }
}
