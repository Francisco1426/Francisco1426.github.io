// const temaContenido = document.querySelectorAll(".tema-contenido");

// temaContenido.forEach((item, index) =>{
//     let div = item.querySelector("div");
//     div.addEventListener("click",() => {
//         item.classList.toggle("open");

//         let mensaje = item.querySelector(".mensaje");
//         if(item.classList.contains("open")){
//             mensaje.style.height = `${mensaje.scrollHeight}px`;
//             item.querySelector("i").classList.replace("fa-plus","fa-minus");
//         }else{
//             mensaje.style.height = "0px";
//             item.querySelector("i").classList.replace("fa-minus","fa-plus");
//         }
//         console.log(mensaje);

//     })
// })

const opcion = document.querySelectorAll('.opcion');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

    // Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function(e){

        // Alteranmos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });


});