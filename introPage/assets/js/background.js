const imageLength = 2;

function getRandomImage(length) {
    const target = document.querySelector('body');

    target.style.backgroundImage = `url(./assets/image/bg${length}.png)`;
}

function getRandomNumber() {
    return Math.floor(Math.random() * imageLength) + 1;
}

function init() {
    getRandomImage(getRandomNumber());
}

init();