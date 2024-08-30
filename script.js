document.addEventListener('DOMContentLoaded', function() {
    // Posiciona o botão principal em uma posição aleatória ao carregar a página
    positionButtonRandomly(document.getElementById('mainButton'));
});

document.getElementById('mainButton').addEventListener('click', function() {
    // Esconde o botão principal com efeito de fumaça
    this.classList.add('smoke-effect');
    setTimeout(() => {
        this.classList.add('hidden');
    }, 2000); // Tempo da animação (2 segundos)

    // Exibe os outros botões
    setTimeout(() => {
        document.getElementById('buttonContainer').classList.remove('hidden');
        // Posiciona o botão real de download aleatoriamente
        positionButtonRandomly(document.querySelector('.download-button'));
    }, 2000);
});

function openUrl(buttonNumber) {
    if (buttonNumber === 1) {
        const link = document.getElementById('pptmDownloadLink');
        link.click();
    }
}

// Função para mover o botão aleatoriamente dentro do container
function moveButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calcula novas posições aleatórias dentro do container
    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

// Função para posicionar o botão de download aleatoriamente ao abrir
function positionButtonRandomly(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calcula novas posições aleatórias dentro do container
    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

// Mostrar a URL ao passar o mouse sobre os botões
document.querySelectorAll('.fake-button').forEach((button) => {
    button.addEventListener('mouseover', function() {
        moveButton(button);
    });
});

function downloadAndOpenPPT() {
    const link = document.getElementById('pptmDownloadLink');
    link.click();

    setTimeout(() => {
        window.open('Apresentasao-Ciber.pptm');
    }, 1000); 
}