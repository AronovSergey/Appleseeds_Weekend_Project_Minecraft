const sidebarButtons = document.querySelectorAll('.sidebar__Button');
const closeButton = document.querySelector('.closeButton');
const axeButton = document.querySelector('.axe');
const pickaxeButton = document.querySelector('.pickaxe');
const shovelButton = document.querySelector('.shovel');
const sidebarElementsArr = document.querySelectorAll('.sidebar__elements')

sidebarButtons[0].addEventListener('click', () => {
    boardBluePrint = cloneMatrix(boardBluePrintArray[randomNumber % 3]);
    drawBoard();
    elementsStack.emptyStack();
    drawElementsStackDisplay();
});

sidebarButtons[1].addEventListener('click', () => {
    boardBluePrint = cloneMatrix(boardBluePrintArray[++randomNumber % 3]);
    drawBoard();
    elementsStack.emptyStack();
    drawElementsStackDisplay();
});

closeButton.addEventListener('click', () => {
    window.location.href = '../html/index.html';
});

axeButton.addEventListener('click', () => {
    removeStyleFromAllElements();
    removeStyleFromAllSidebarElements();
    treeGreen.classList.add("removable");
    treeBrown.classList.add("removable");
    toolType = axeButton;
    drawBoard();
});

pickaxeButton.addEventListener('click', () => {
    removeStyleFromAllElements();
    removeStyleFromAllSidebarElements();
    rock.classList.add("removable");
    toolType = pickaxeButton;
    drawBoard();
});

shovelButton.addEventListener('click', () => {
    removeStyleFromAllElements();
    removeStyleFromAllSidebarElements();
    fullLand.classList.add("removable");
    land.classList.add("removable");
    toolType = shovelButton;
    drawBoard();
});

function removeStyleFromAllElements() {
    treeGreen.classList.remove("removable");
    treeBrown.classList.remove("removable");
    rock.classList.remove("removable");
    fullLand.classList.remove("removable");
    land.classList.remove("removable");
    sky.classList.remove("removable");
};

function removeStyleFromAllSidebarElements(){
    sidebarElementsArr.forEach(element => {
        element.classList.remove("selected");
    });
};

function sidebarElementsAction() {
    removeStyleFromAllElements();
    removeStyleFromAllSidebarElements();
    this.classList.add("selected");
    sky.classList.add("removable");
    toolType = this;
    drawBoard();
}
