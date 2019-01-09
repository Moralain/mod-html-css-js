export function setMenu() {
// Smooth menu
(function() {

    'use strict';

   // Feature Test
   if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

       // Función que anima el scroll
       let smoothScroll = function (anchor, duration) {

           //  Calcular la distancia y la velocidad de desplazamiento del scroll
           let startLocation = window.pageYOffset;
           let endLocation = anchor.offsetTop;
           let distance = endLocation - startLocation;
           let increments = distance/(duration/16);
           let stopAnimation;

           // Desplazarse por la página en incremento y verificar si es el momento de detenerse
           let animateScroll = function () {
               window.scrollBy(0, increments);
               stopAnimation();
           };

           // Si se desplaza hacia abajo
           if ( increments >= 0 ) {
               // Detener la animación cuando llegue al punto de ancla o la parte inferior de la página
               stopAnimation = function () {
                   let travelled = window.pageYOffset;
                   if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                       clearInterval(runAnimation);
                   }
               };
           }
           // Si se desplaza hacia arriba
           else {
               // Detener la animación cuando llegue el punto de ancla o la parte superior de la página
               stopAnimation = function () {
                   let travelled = window.pageYOffset;
                   if ( travelled <= (endLocation || 0) ) {
                       clearInterval(runAnimation);
                   }
               };
           }

           // Bucle de la función de animación
           let runAnimation = setInterval(animateScroll, 16);
      
       };

       // Definir los enlaces del scroll
       let scrollToggle = document.querySelectorAll('a.scroll');

       // Para cada enlace del scroll
       [].forEach.call(scrollToggle, function (toggle) {

           // Cuando se hace clic en el enlace del scroll
           toggle.addEventListener('click', function(e) {

               // Prevenir el comportamiento predeterminado
               e.preventDefault();

               // Obtener enlace del punto de ancla y calcular la distancia desde la parte superior
               let dataID = toggle.getAttribute('href');
               let dataTarget = document.querySelector(dataID);
               let dataSpeed = toggle.getAttribute('data-speed');

               // Si el punto de ancla existe
               if (dataTarget) {
                   // Desplazarse hasta el punto de ancla
                   smoothScroll(dataTarget, dataSpeed || 500);
               }
           }, false);
       });
   }
})();
}