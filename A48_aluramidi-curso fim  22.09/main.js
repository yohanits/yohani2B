function tocasom(idElementAudio) {
    document.querySelector(idElementAudio).play()
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {

const tecla = ListaDeTeclas[contador]
const instrumento = Tecla.classList[1];

    console.log(instrumento)


   tecla.onclick = function () {
        tocasom(idAudio)
    }
    contador = contador + 1;

    console. log(contador);

}
    
    
        
