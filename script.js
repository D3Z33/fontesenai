document.getElementById('mainButton').addEventListener('click', function() {
    document.getElementById('buttonContainer').classList.remove('hidden');
    document.getElementById('downloadButton').classList.remove('hidden');
});

function openUrl(buttonNumber) {    
    const urls = [
        "https://google.com",
        "https://uol.com.br",
        "https://https://www.sp.senai.br",
        "https://linkedin.com",
        "https://github.com"
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
