// Obtener el elemento del botón "Volver"
const btnVolver = document.getElementById('btnVolver');

// Agregar un evento de clic al botón "Volver"
btnVolver.addEventListener('click', () => {
    window.location.href = '/login/views/login/index.php';
});