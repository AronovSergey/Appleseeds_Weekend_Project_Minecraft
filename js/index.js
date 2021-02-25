const startButton = document.querySelectorAll('button')[0];
const howToPlayButton = document.querySelectorAll('button')[1];
const howToPlayCloseButton = document.querySelector('.how-to-play').lastElementChild;
const howToPlayContainer = document.querySelector('.how-to-play-container');

startButton.addEventListener('click', () => {
    window.location.href = '../html/main.html';
});

howToPlayButton.addEventListener('click', () => {
    howToPlayContainer.style.display = 'block';
});

howToPlayCloseButton.addEventListener('click', () => {
    howToPlayContainer.style.display = 'none';
});