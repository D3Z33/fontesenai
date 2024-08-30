document.getElementById('mainButton').addEventListener('click', function() {
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

function downloadAndOpenPPT() {
    const link = document.getElementById('pptmDownloadLink');
    link.click();

    setTimeout(() => {
        window.open('Apresentasao-Ciber.pptm');
    }, 1000); 
}