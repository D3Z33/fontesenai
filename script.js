document.getElementById('mainButton').addEventListener('click', function() {
    document.getElementById('buttonContainer').classList.remove('hidden');
    document.getElementById('downloadButton').classList.remove('hidden');
});

function openUrl(buttonNumber) {
    const urls = [
        "https://link-para-imagem1-no-github",
        "https://link-para-imagem2-no-github",
        "https://link-para-imagem3-no-github",
        "https://link-para-imagem4-no-github",
        "https://link-para-imagem5-no-github"
    ];

    window.open(urls[buttonNumber - 1], '_blank');
}

function downloadAndOpenPPT() {
    const pptUrl = "https://link-para-o-arquivo-pptm-no-github";
    const link = document.createElement('a');
    link.href = pptUrl;
    link.download = 'Simulacao.pptm';
    link.click();
    setTimeout(() => {
        window.open(pptUrl);
    }, 1000);
}
