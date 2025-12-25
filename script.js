// ========================================
// CONFIGURACIÓN DE LOS REGALOS - ¡PERSONALIZA AQUÍ!
// ========================================
const gifts = {
    1: {
        message: "Bueno catita, aca andamos escribiendo unas cositas como regalito de navidad para vos, muchas gracias por todo lo que me has hecho hasta ahora, por lo feliz y contento que me haz hecho y por todo lo que quiero llegar a tener con vos",
        image: "fotos/foto.jpg" // Cambia por la ruta de tu foto
    },
    2: {
        message: "Gracias mi vid apor enseñarme lo que es ser amado y demostrarme la razon por la cual volver amar a alguien y ese alguien fuiste vos amor",
        image: "fotos/foto2.jpg"
    },
    3: {
        message: "Todavia no logro entender como alguien como yo tiene de pareja con una persona tan hermosa y perfecta como vos amor mio.",
        image: "fotos/foto3.jpg"
    },
    4: {
        message: "Y bueno sobre todo, llevamos ya una semana con vos y cada dia me doy cuenta de que sos la personita con la que quiero todo y algun dia la barrera de distancia se va a romper y vamos a hacer todo lo que nos prometimos juntos y disfrutar de cada momento",
        image: "fotos/foto4.jpg"
    },
    5: {
        message: "Gracias mi vida por hacerme el hombre mas feliz y por dejarme formar parte de tu vida, te amo mucho",
        image: "fotos/foto5.jpg"
    }
};

// ========================================
// FUNCIONES PRINCIPALES
// ========================================

// Función para abrir regalo
function openGift(giftNumber) {
    const gift = gifts[giftNumber];
    const modal = document.getElementById('giftModal');
    const giftImage = document.getElementById('giftImage');
    const giftMessage = document.getElementById('giftMessage');
    
    giftImage.src = gift.image;
    giftMessage.textContent = gift.message;
    
    modal.classList.remove('hidden');
    
    // Crear confetti
    createConfetti();
}

// Función para cerrar modal
function closeModal() {
    const modal = document.getElementById('giftModal');
    modal.classList.add('hidden');
    
    // Limpiar confetti
    const confettiContainer = document.getElementById('confetti');
    if (confettiContainer) {
        confettiContainer.innerHTML = '';
    }
}

// Cerrar modal al hacer clic fuera
document.getElementById('giftModal').addEventListener('click', (e) => {
    if (e.target.id === 'giftModal') {
        closeModal();
    }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========================================
// EFECTOS VISUALES
// ========================================

// Crear confetti cuando se abre un regalo
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    const colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#ff69b4', '#7b68ee', '#98fb98'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: 0;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: confettiFall ${Math.random() * 2 + 1}s ease-out forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        confettiContainer.appendChild(confetti);
    }
}

// Agregar estilos de animación para confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% { 
            opacity: 1; 
            transform: translateY(0) rotate(0deg) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translateY(200px) rotate(720deg) scale(0); 
        }
    }
    
    @keyframes sparkleAnim {
        0% { opacity: 1; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0.5) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Crear partículas de brillo aleatorias
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 15 + 8}px;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        pointer-events: none;
        animation: sparkleAnim 2s ease-out forwards;
        z-index: 0;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 2000);
}

// Crear sparkles periódicamente
setInterval(createSparkle, 800);

// ========================================
// INICIALIZACIÓN
// ========================================
console.log('🎄 ¡Feliz Navidad! - Página cargada correctamente');
console.log('💡 Tip: Personaliza los mensajes e imágenes en el objeto "gifts" del archivo script.js');
