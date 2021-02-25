const howToPlayButton = document.querySelectorAll('button')[1];
const howToPlayCloseButton = document.querySelector('.how-to-play').lastElementChild;
const howToPlayContainer = document.querySelector('.how-to-play-container');

howToPlayButton.addEventListener('click', () => {
    howToPlayContainer.style.display = 'block';
});

howToPlayCloseButton.addEventListener('click', () => {
    howToPlayContainer.style.display = 'none';
});