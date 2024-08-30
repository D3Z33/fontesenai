document.getElementById('mainButton').addEventListener('click', function() {
    // Adiciona a classe de efeito de fumaça
    this.classList.add('smoke-effect');
    
    // Esconde o botão após a animação terminar
    setTimeout(() => {
        this.classList.add('hidden');
    }, 2000); // Tempo da animação (2 segundos)

    // Exibe os outros botões
    document.getElementById('buttonContainer').classList.remove('hidden');

    // Posiciona o botão de download aleatoriamente na tela
    positionButtonRandomly(document.getElementById('downloadButton'));
    document.getElementById('downloadButton').classList.remove('hidden');
});

function openUrl(buttonNumber) {    
    // O botão 5 é o botão de download, outros se movem quando o mouse passa
    if (buttonNumber === 5) {
        const link = document.getElementById('pptmDownloadLink');
        link.click();
    }
}

// Função para mover os botões ao passar o mouse
document.querySelectorAll('#buttonContainer button').forEach((button, index) => {
    button.addEventListener('mouseover', function() {
        if (index + 1 !== 5) {  // Evita que o botão 5 se mova
            moveButtonRandomly(this);
        }
    });
});

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

function positionButtonRandomly(button) {
    // Posiciona o botão de download em um lugar aleatório ao carregar a página
    moveButtonRandomly(button);
}

function downloadAndOpenPPT() {
    const link = document.getElementById('pptmDownloadLink');
    link.click();

    setTimeout(() => {
        window.open('Apresentasao-Ciber.pptm');
    }, 1000); 
}
