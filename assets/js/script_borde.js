// REQUERIMIENTOS
// 1. Se debe construir una página con una única imagen, al hacerle click a la imagen se
//    le debe agregar un borde rojo de 2 pixeles, al hacerle click nuevamente se le debe
//    quitar el borde. (Total: 2 puntos)
//        A. Agregar borde con el click (1 punto)
//        B. Si tiene borde, quitarle el borde con el click (1 punto)
// https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

// element.addEventListener
// ------------------------
// tipo
// Una cadena representando el tipo de EVENTO a escuchar.

// listener
// El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre.
// Debe ser un objeto implementando la interfaz EventListener o solo una FUNCION EN JAVASCRIPT.

const imgclick = document.querySelector("#idOctocat");

let muestraBorde = true; // Variable de inicio para establecer/quitar borde

imgclick.addEventListener("click", borde);

function borde(){
    // Si el borde no es visible, es decir, es false
    if (muestraBorde===true){
        // Se agrega el borde y bordevisible a true
        imgclick.style.border = "2px solid red";
        muestraBorde = false;
    }else{ // Si el borde es visible, es decir, es true
        // Se quita el borde y cambia bordevisible a false
        imgclick.style.border = "none"
        muestraBorde = true;
    }
    return 0;
}


