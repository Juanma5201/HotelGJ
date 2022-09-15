document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: 'img/habsup1.jpg' }, 
        { img: 'img/habsup2.jpg' },
        { img: 'img/habsup3.jpg' },
        { img: 'img/habsup4.jpg' },
        { img: 'img/habsup5.jpg' },
        { img: 'img/habsup6.jpg' },
        { img: 'img/habsup7.jpg' },
        { img: 'img/habsup8.jpg' },
        { img: 'img/habes1.jpg' },
        { img: 'img/habes2.jpg' },
        { img: 'img/habes3.jpg' },
        { img: 'img/habes4.jpg' },
        { img: 'img/habes5.jpg' },
        { img: 'img/habes6.jpg' },
        { img: 'img/habes7.jpg' },
        { img: 'img/habes8.jpg' },    
        { img: 'img/habec1.jpg' }, 
        { img: 'img/habec2.jpg' }, 
        { img: 'img/habec3.jpg' },  
        { img: 'img/habec4.jpg' }, 
        { img: 'img/habec5.jpg' }, 
        { img: 'img/habec6.jpg' }, 
        { img: 'img/habec7.jpg' },
        { img: 'img/habec8.jpg' },  

    ]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.habitaciones img')
    const img_slideshows = document.querySelector('.slideshow img')


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden";
    }
   /* let habitaciones = [
        {tipo: "single", tamaño: 38, baño: "si", imgUrl:"https",imgUrl:"https",imgUrl:"https"}, 
        {tipo: "doble" , tamaño: 42, baño: "si", imgUrl:"https",imgUrl:"https",imgUrl:"https"},
        {tipo: "triple", tamaño: 42, baño: "si", imgUrl:"https",imgUrl:"https",imgUrl:"https"}, 
        {tipo: "suit"  , tamaño: 48, baño: "si", imgUrl:"https",imgUrl:"https",imgUrl:"https"}, 
    ]
    let habitaciones = tipo.filter((baño) => {
        if (si) {
            return true;
        } else {
            return false;
        }
    })*/ 
});
   //Constantes para el div contenedor de los imputs y el boton de agregar
const contenedor = document.querySelector('#dinamic');
const btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click', function() {
    //Crear el div que contiene los 2 sub-divs
    const div_principal = document.createElement('div');
    //Crear el div para el span e input del nombre
    const div_nombre = document.createElement('div');
    //crear el div para el span e imput del email
    const div_email = document.createElement('div');
    //crear el div para el span e imput del Asunto
    const div_asunto = document.createElement('div');
    //crear el div para el span e imput del mensaje
    const div_mensaje = document.createElement('div');
    //crear los span de las 4 categorias
    const span_nombre = create('span');
    span_nombre.innerHTML = 'nombre';

    const span_email = create('span');
    span_email.innerHTML = 'email';
    
    const span_asunto = create('span');
    span_nombre.innerHTML = 'asunto';

    const span_mensaje = create('span');
    span_mensaje.innerHTML = 'mensaje';
    //crear los imputs de las 4 categorias
    const input_nombre = create('span');
    input_nombre.type = 'text';
    input_nombre.name = 'nombre';
    const input_email = create('span');
    input_email.type = 'text';
    input_email.name = 'email';
    const input_asunto = create('span');
    input_asunto.type = 'text';
    input_asunto.name = 'asunto';
    const input_mensaje = create('span');
    input_mensaje.type = 'text';
    input_mensaje.name = 'mensaje';
    //agregar cada etuiqueta a su nodo padre
    div_email.appendChild(span_email, input_email);

    console.log( div_email);
    //agregar el div del primer comentario al contenedor con id #container
    let div = document.createElement('div');
    div.innerHTML = `<Label>${total++}</label> - <input type="text" name="nombre[]" placeholder="Nombre" required><button onclick="eliminar(this)"></button>`;
    contenedor.appendChild(div);
})
/*Método para eliminar el div contenedor del input
@param {this} e
*/

const eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre)
    actualizarContador();
};
//Método para actualizar el contador de los elementos agregados
const actualizarContador = () => {
    let divs = contenedor.children;
    total = 1;
    for (let i=0; i <divs.length; i++) {
        divs[i].children[0].innerHTML = total++;}};