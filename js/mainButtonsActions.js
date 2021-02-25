const resetButton = document.querySelector('.sidebar__resetButton');
const closeButton = document.querySelector('.closeButton');
const axeButton = document.querySelector('axe');

resetButton.addEventListener('click', () => {
    window.location.reload()
});

closeButton.addEventListener('click', () => {
    window.location.href = '../html/index.html';
});

axeButton.addEventListener('click', () => {
    type = 'axe';
});