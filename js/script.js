//variables

const objetoImg = document.querySelector('#imagen');
const botonAvanzar = document.querySelector('#avanzar');
const botonRetroceder = document.querySelector('#retroceder');

const imagenes = ['img/foto1.jpg', 'img/foto2.jpg', 'img/foto3.jpg'];
let pagina = 1;


//funciones 

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
    objetoImg.setAttribute('src', imagenes[pagina - 1])
}

//eventos

botonAvanzar.addEventListener('click',avanzarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);

// inicio

render();