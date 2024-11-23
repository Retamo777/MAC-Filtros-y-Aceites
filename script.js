// script.js
let index = 0;

const search = () => {
    const searchbox = document.getElementById("item-searched").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1 && product[i].style.display !== "none") {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

function filterProducts(category) {
    var products = document.querySelectorAll('.product');
    var filterMessage = document.getElementById('filter-message');
    var filterText = document.getElementById('filter-text');

    products.forEach(function(product) {
        if (category === 'todo') {
            product.style.display = 'block';
        } else {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });

    if (category === 'todo') {
        filterMessage.style.display = 'none';
    } else {
        filterText.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        filterMessage.style.display = 'block';
    }
}

function simulatePurchase() {
    alert("¡Gracias por tu compra! El proceso se ha simulado exitosamente.");
}

/*
const inputField = document.getElementById('item-searched');

// Obtén el div con la clase 'filters' que contiene los botones
const filtersDiv = document.querySelector('.filters');

// Selecciona todos los botones dentro de ese div
const botones = filtersDiv.querySelectorAll('button');

// Recorre todos los botones y agrega el evento de clic
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        // Si el botón es el de "Todo", vacía el input
        if (boton.id === 'todo') {
            inputField.value = ''; // Vacía el input
        } else {
            // De lo contrario, establece el valor del input al texto del botón
            inputField.value = boton.textContent.substring(0, boton.textContent.length - 1);
        }
        search()
    });
});

 */

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // Actualizamos el índice
    index += step;

    // Aseguramos que el índice no sea mayor al número de imágenes o menor que 0
    if (index >= totalSlides) {
        index = 0; // Volver al inicio
    } else if (index < 0) {
        index = totalSlides - 1; // Volver al final
    }

    // Realizamos la animación deslizante
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-index * 100}%)`; // Mueve el slider al índice correspondiente
}

document.getElementById("menu-toggle").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("nav-open")) {
        navLinks.classList.remove("nav-open");
    } else {
        navLinks.classList.add("nav-open");
    }
});

function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    var secciones = document.getElementsByClassName('contenido-seccion');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }
    // Mostrar la sección seleccionada
    document.getElementById(seccionId).style.display = 'block';
     // Ocultar otros elementos de la pantalla de inicio excepto el pie de página
    var otrosElementos = document.querySelectorAll('.container, .map');
    otrosElementos.forEach(function(elemento) {
        if(seccionId === 'nosotros' || seccionId === 'productos') {
            elemento.style.display = 'none';
        } else {
            elemento.style.display = 'block';
        }
    });
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animación suave
    });
}

function showDetails(id) {
    var details = document.getElementById(id);
    details.style.display = 'block';
}

function hideDetails(id) {
    var details = document.getElementById(id);
    details.style.display = 'none';
}

function showDetailsAndNavigate(detailId) {
    showDetails(detailId); // Muestra los detalles del producto
    mostrarSeccion('productos'); // Cambia a la sección "productos"
}

// Seleccionar el contenedor del slider
const slider = document.querySelector('.slider');

// Obtener todas las slides
const slides = document.querySelectorAll('.slide');

// Variables para controlar el movimiento
let currentIndex = 0; // Slide actual
const slideWidth = slider.offsetWidth; // Ancho de cada slide

// Función para mover el slider
function moveSlider() {
    currentIndex++; // Incrementa el índice
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Reinicia al inicio si llega al final
    }

    // Calcular posición de desplazamiento
    const scrollPosition = currentIndex * slideWidth;

    // Mover el slider
    slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth', // Movimiento suave
    });
}

// Ejecutar la función automáticamente cada 5 segundos
setInterval(moveSlider, 5000);