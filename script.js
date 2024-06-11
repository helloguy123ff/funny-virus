

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

    const showAdditionalPopup = () => {
    setTimeout(() => {
        createPopup(window.innerWidth / 2, window.innerHeight / 2); // Cria um pop-up no centro da tela
    }, 500); // Aguarda 500 milissegundos após remover o pop-up anterior
};

    virusContainer.addEventListener("mouseover", () => {
        moveVirus();
    });
});

