// Funciones de la calculadora
function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculateResult() {
    let expression = document.getElementById('screen').value;
    try {
        document.getElementById('screen').value = eval(expression);
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}

// Función para alternar entre modo oscuro y modo claro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Cambiar el icono del botón
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';  // Icono para el modo claro
    } else {
        themeToggleBtn.textContent = '🌙';  // Icono para el modo oscuro
    }
});

// Establecer el tema inicial (modo claro por defecto)
if (!body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
}

