// 3. Se debe construir una página con 3 select y opciones con dígitos del 1 al 9, al hacer
//   click a la opción ingresar se debe verificar que el password sea 911 y en ese caso
//   mostrar debajo del botón ingresar, un párrafo con el contenido "password 1
//   correcto", en caso de que el password sea 714 se debe mostrar en el párrafo
//   "password 2 es correcto", si ingresa otro valor se debe mostrar "password
//   incorrecto". (Total: 4 puntos)
//          A. Se muestra correctamente el párrafo "password 1 correcto" al ingresar el
//             password 911 utilizando los select y luego presionando botón con el texto
//             ingresar. (1 punto)
//          B. Adicionalmente se muestra correctamente el párrafo "password 2 correcto" al
//             ingresar el password 714 utilizando los select y luego presionando botón con el
//             texto ingresar. (2 puntos)
//          C. Se muestra password incorrecto al seleccionar cualquier otro password (1
//             punto).


let Pass="";
let Password="";
let mensajePassword = document.querySelector("#idMensajePassword");

function fnConstruyePassword(){
    let idSelector01 = document.querySelector("#select01");
    let valorSelector01 = idSelector01.options[idSelector01.selectedIndex].value;

    let idSelector02 = document.querySelector("#select02");
    let valorSelector02 = idSelector02.options[idSelector02.selectedIndex].value;

    let idSelector03 = document.querySelector("#select03");
    let valorSelector03 = idSelector03.options[idSelector03.selectedIndex].value;

    return Pass.concat(String(valorSelector01),String(valorSelector02),String(valorSelector03));
}

function fnValidaPassword(){
    Password = fnConstruyePassword();
    switch(Password) {
        case "911":
            {
                mensajePassword.innerHTML = "password 1 correcto"; //se debe mostrar debajo del botón ingresar
                break;
            }
        case "714":
            {
                mensajePassword.innerHTML = "password 2 correcto";;
                break;
            }
        default:
                mensajePassword.innerHTML ="password incorrecto";
    }

    return 0;
}