document.getElementById('mainButton').addEventListener('click', function() {
    // Adiciona a classe de efeito de fumaça e esconde o botão após a animação
    this.classList.add('smoke-effect');
    setTimeout(() => {
        this.classList.add('hidden');
    }, 2000); // Tempo da animação (2 segundos)

    // Exibe os outros botões
    document.getElementById('buttonContainer').classList.remove('hidden');
    document.getElementById('downloadButton').classList.remove('hidden');

    // Posiciona o botão de download aleatoriamente
    positionButtonRandomly(document.getElementById('downloadButton'));
});

function openUrl(buttonNumber) {    
    // URLs para os botões (o botão 5 é o verdadeiro download)
    const urls = [
        "https://google.com",
        "https://uol.com.br",
        "https://www.sp.senai.br",
        "https://linkedin.com",
        "https://github.com"
    ];

    if (buttonNumber === 5) {
        const link = document.getElementById('pptmDownloadLink');
        link.click();
    } else {
        // Mover o botão quando o usuário tenta clicar
        moveButtonRandomly(event.target);
    }
}

// Função para mover o botão aleatoriamente dentro do container
function moveButtonRandomly(button) {
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
    moveButtonRandomly(button);
}

// Mostrar a URL ao passar o mouse sobre os botões
document.querySelectorAll('#buttonContainer button').forEach((button, index) => {
    button.addEventListener('mouseover', function() {
        this.title = [
            "https://google.com",
            "https://uol.com.br",
            "https://www.sp.senai.br",
            "https://linkedin.com",
            "https://github.com"
        ][index];
    });
});

function downloadAndOpenPPT() {
    const link = document.getElementById('pptmDownloadLink');
    link.click();

    setTimeout(() => {
        window.open('Apresentasao-Ciber.pptm');
    }, 1000); 
}

