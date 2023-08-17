
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = '/login'; // Redirigir de vuelta a la página de inicio de sesión
        });
    }
});
