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

// Cambiar entre tema claro y oscuro
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const themeText = document.getElementById("toggle-text");
    if (document.body.classList.contains("dark")) {
        themeText.textContent = "Modo Claro";
        document.getElementById("toggle-icon").src = "assets/icons/sun.svg"; // Cambia la imagen del ícono
    } else {
        themeText.textContent = "Modo Oscuro";
        document.getElementById("toggle-icon").src = "assets/icons/moon.svg"; // Cambia la imagen del ícono
    }
});

// Cambiar color de tema
document.querySelectorAll(".colors__item").forEach(item => {
    item.addEventListener("click", () => {
        const color = item.getAttribute("data-color");
        document.documentElement.style.setProperty('--primary-color', color);
    });
});

