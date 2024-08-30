document.getElementById('mainButton').addEventListener('click', function() {
    // Adiciona a classe de efeito de fumaça
    this.classList.add('smoke-effect');
    
    // Esconde o botão após a animação terminar
    setTimeout(() => {
        this.classList.add('hidden');
    }, 2000); // Tempo da animação (2 segundos)

    // Exibe os outros botões
    document.getElementById('buttonContainer').classList.remove('hidden');
    document.getElementById('downloadButton').classList.remove('hidden');
});

function openUrl(buttonNumber) {    
    if (buttonNumber === 5) {
        // Se for o botão 5, faz o download do arquivo
        const link = document.getElementById('pptmDownloadLink');
        link.click();
    } else {
        // Todos os outros botões se movem quando o mouse passa
        const button = document.getElementById(`button${buttonNumber}`);
        button.classList.add('moving-button');

        // Remove a classe de movimento após a animação para permitir movimentos repetidos
        setTimeout(() => {
            button.classList.remove('moving-button');
        }, 500);
    }
}

// Adiciona o comportamento de movimento para todos os botões exceto o 5
document.querySelectorAll('#buttonContainer button').forEach((button, index) => {
    button.addEventListener('mouseover', function() {
        if (index + 1 !== 5) {  // Evita que o botão 5 se mova
            this.classList.add('moving-button');
        }
    });
});

// Mostrar a URL ao passar o mouse sobre os botões (opcional)
document.querySelectorAll('#buttonContainer button').forEach((button, index) => {
    button.title = "Download Aqui";
});

function downloadAndOpenPPT() {
    const link = document.getElementById('pptmDownloadLink');
    link.click();

    setTimeout(() => {
        window.open('Apresentasao-Ciber.pptm');
    }, 1000); 
}