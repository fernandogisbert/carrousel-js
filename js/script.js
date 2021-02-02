//variables

const objetoImg = document.querySelector('#imagen');
const botonAvanzar = document.querySelector('#avanzar');
const botonRetroceder = document.querySelector('#retroceder');

const templateCirculos = document.querySelector('#template-circulo').content.firstElementChild;
const circulos = document.querySelector('#circulos');

const parar = document.querySelector('#parar');
const autoPLay = document.querySelector('#autoplay');
let intervalo = null;
const tiempoIntervalo = 1;

const imagenes = ['img/foto1.jpg', 'img/foto2.jpg', 'img/foto3.jpg'];
let pagina = 1;


//funciones 

function activarAutoPlay(){

    // el condicional es para que no vaya el doble de rápido
    if(intervalo === null) {
        intervalo = setInterval(function(){
            avanzarFoto();
        }, tiempoIntervalo * 1500);
    }

}

function cambiarPagina(nuevaPagina) {
    pagina = nuevaPagina;
    render();
}

function avanzarFoto() {
    pagina = pagina + 1;

    //verifico que no he alcanzado el limite y le pongo el valor a pagina
    if(imagenes.length + 1  <= pagina ) {
        pagina = 1
    }
    render();
}

function retrocederFoto() {

    pagina = pagina - 1;
    //verifico que no he alcanzado el limite
    if( pagina === 0 ) {
        pagina = imagenes.length;
    }
    
    render();
}

function render() {
    //imagenes
    objetoImg.setAttribute('src', imagenes[pagina - 1]);
    //circulos

    circulos.textContent = '';

    imagenes.forEach(function(imagen, indice){

        const nuevoCirculo = templateCirculos.cloneNode(true);

        nuevoCirculo.addEventListener('click', function() {
            cambiarPagina(indice + 1)
        });

        //mostramos el color relleno en el que este
        if(pagina === (indice + 1)) {
            nuevoCirculo.setAttribute('checked', true);
        }

        //mostramos
        circulos.appendChild(nuevoCirculo);
    })
}

//eventos

botonAvanzar.addEventListener('click',avanzarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);

autoplay.addEventListener('click',activarAutoPlay);
parar.addEventListener('click', function() {
    clearInterval(intervalo)
    intervalo = null;
});
// inicio

render();