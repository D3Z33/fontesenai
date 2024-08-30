document.addEventListener('DOMContentLoaded', function() {
    positionButtonRandomly(document.getElementById('mainButton'));
});

document.getElementById('mainButton').addEventListener('click', function() {
    this.classList.add('smoke-effect');
    setTimeout(() => {
        this.classList.add('hidden');
    }, 2000);

    setTimeout(() => {
        document.getElementById('buttonContainer').classList.remove('hidden');
        positionButtonRandomly(document.querySelector('.download-button'));
    }, 2000);
});

function openUrl(buttonNumber) {
    if (buttonNumber === 1) {
        const link = document.getElementById('pptmDownloadLink');
        link.click();
    }
}

function moveButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

function positionButtonRandomly(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

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