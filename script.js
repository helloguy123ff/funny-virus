document.addEventListener("DOMContentLoaded", () => {
    const virusContainer = document.getElementById("virus-container");
    const virus = document.getElementById("virus");
    const messages = [
        "Haha! Gotcha!",
        "I'm a funny virus!",
        "Just kidding!",
        "Don't worry, I'm harmless!",
        "Got you again!",
        "Boo!",
    ];

    const moveVirus = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const x = Math.random() * (screenWidth - virusContainer.offsetWidth);
        const y = Math.random() * (screenHeight - virusContainer.offsetHeight);

        virusContainer.style.transform = `translate(${x}px, ${y}px)`;

        if (Math.random() < 0.3) {
            createPopup(x, y);
        }
    };

    const createPopup = (x, y) => {
        const popup = document.createElement("div");
        popup.className = "pop-up";
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
        popup.innerText = getRandomMessage();
        document.body.appendChild(popup);

        setTimeout(() => {
            document.body.removeChild(popup);
        }, 3000);
    };

    const getRandomMessage = () => {
        return messages[Math.floor(Math.random() * messages.length)];
    };

    setInterval(moveVirus, 2000);

    virusContainer.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede a propagação do evento para que não seja detectado como um clique na janela
        moveVirus(); // Mova o vírus aleatoriamente quando for clicado
        document.body.style.cursor = "url('virus.png'), auto"; // Defina o cursor como a imagem do vírus
    });

    document.body.addEventListener("click", () => {
        document.body.style.cursor = "default"; // Restaura o cursor padrão quando o corpo é clicado
    });

    document.body.addEventListener("mousemove", (e) => {
        virusContainer.style.left = `${e.clientX - virusContainer.offsetWidth / 2}px`; // Centra o vírus na posição do cursor horizontalmente
        virusContainer.style.top = `${e.clientY - virusContainer.offsetHeight / 2}px`; // Centra o vírus na posição do cursor verticalmente
    });
});

