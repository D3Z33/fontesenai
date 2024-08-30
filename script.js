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
    const urls = [
        "https://google.com",
        "https://uol.com.br",
        "https://www.sp.senai.br",
        "https://linkedin.com",
        "https://github.com"
    ];

    window.open(urls[buttonNumber - 1], '_blank');
}

// Mostrar a URL ao passar o mouse sobre os botões
document.querySelectorAll('#buttonContainer button').forEach((button, index) => {
    button.addEventListener('mouseover', function() {
        this.title = urls[index];
    });
});

function downloadAndOpenPPT() {
    const link = document.getElementById('pptmDownloadLink');
    link.click();

    setTimeout(() => {
        window.open('Apresentasao-Ciber.pptm');
    }, 1000); 
}
