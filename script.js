const messages = [
    "Te amo muchisimo ❤️",
    "Gracias por estar en mi vida",
    "Eres mi persona favorita",
    "Juntos por siempre",
    "Tu y yo para siempre",
    "Tu sonrisa me ilumina",
    "Eres lo mejor que me ha pasado",
    "Cada momento contigo es magico",
    "Siempre pienso en ti",
    "Mi corazon es tuyo ❤️",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text bubble";  // Asegúrate que tu CSS use .text.bubble
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }
        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }

    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);

function actualizarContador() {
    const fechaInicio = new Date(2024, 5, 8); // Mes 5 = junio (0-based)
    const hoy = new Date();

    const diffMs = hoy - fechaInicio; // diferencia en ms
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const contador = document.getElementById("contador-dias");
    contador.innerText = `Llevamos juntos ${diffDias} días 💖`;
}

// Actualiza el contador al cargar y cada 1 hora (3600000 ms)
actualizarContador();
setInterval(actualizarContador, 3600000);
