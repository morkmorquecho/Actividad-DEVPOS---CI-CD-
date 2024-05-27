
document.addEventListener('DOMContentLoaded', function() {
  const formularioContainer = document.querySelector('.container');
  const body = document.body; 
// Obtener los botones
const btnEstiloAccesible = document.getElementById('estiloAccesible');
const btnEstiloNormal = document.getElementById('estiloNormal');

// Función para aplicar un fondo específico al contenedor del formulario
function cambiarFondo(color) {
  formularioContainer.style.background = color;
}

function cambiarTexto(color) {
    formularioContainer.style.color = color;
}

function cambiarbody(imagen) {
  body.style.background = `url('${imagen}') center center fixed`;
  body.style.backgroundSize = 'cover';
}

// Agregar event listeners a los botones para cambiar el fondo
btnEstiloAccesible.addEventListener('click', () => cambiarFondo('#000'));
btnEstiloNormal.addEventListener('click', () => cambiarFondo('#f9f6f1')); 

btnEstiloAccesible.addEventListener('click', () => cambiarTexto('#FFFFFF'));
btnEstiloNormal.addEventListener('click', () => cambiarTexto('#000'));

btnEstiloAccesible.addEventListener('click', () => cambiarbody('../source/4.jpg'));
btnEstiloNormal.addEventListener('click', () => cambiarbody('../source/2.jpg'));
});
