// 2. Se debe construir una página web que permita pedir hasta 10 stickers de los 3 tipos
//    disponibles. Para eso deberá existir un input debajo de cada imagen donde el
//    usuario podrá ingresar un número. En caso de que la suma de todos los stickers
//    seleccionados sea menor o igual 10 se indicará en un párrafo nuevo la cantidad de
//    stickers llevados. Ejemplo "llevas 5 stickers" en cualquier otro caso se mostrará un
//    texto que dice "Llevas demasiados stickers". (Total: 4 puntos)
//          A. El párrafo muestra la cantidad de stickers seleccionados (2 puntos)
//          B. El párrafo muestra que lleva demasiados stickers en caso de que la cantidad
//             sea mayor que 10. (2 puntos)

function fnCantidadStickers(){
    let stickersOcto=document.querySelector("#idStkOctocat").value;
    let stickersSlack=document.querySelector("#idStkSlack").value;
    let stickersGit=document.querySelector("#idStkGit").value;
    let totalStickers = Number(stickersOcto)+ Number(stickersSlack)+Number(stickersGit);
    let mensaje="";
    let mensajeStickers = document.querySelector("#idMensajeStickers");
    if (Number(stickersOcto)<0 || isNaN(Number(stickersOcto))){
        mensajeStickers.innerHTML = mensaje.concat("Error en cantidad total de Stickers: Octocat");
        return;
    }
    if (Number(stickersSlack)<0 || isNaN(Number(stickersSlack))){
        mensajeStickers.innerHTML = mensaje.concat("Error en cantidad total de Stickers: Slack");
        return;
    }
    if (Number(stickersGit)<0 || isNaN(Number(stickersGit))){
        mensajeStickers.innerHTML = mensaje.concat("Error en cantidad total de Stickers: Git");
        return;
    }
    if (totalStickers > 10)
        mensajeStickers.innerHTML = mensaje.concat("Llevas demasiados stickers");
    else
        mensajeStickers.innerHTML = mensaje.concat("Lleva ", totalStickers," Stickers");
    return 0;
}