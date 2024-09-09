/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Función para detectar si un elemento está en la ventana visible (viewport)
// Función para detectar si un elemento está en la ventana visible (viewport)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Selecciona todos los elementos que tienen la clase 'fade-in'
const fadeElements = document.querySelectorAll('.fade-in');

// Función para agregar o quitar la clase 'visible' según si los elementos están en el viewport
function handleScroll() {
    fadeElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Escuchar el evento de scroll para activar el efecto
window.addEventListener('scroll', handleScroll);

// Llama a la función una vez al cargar la página
handleScroll();
