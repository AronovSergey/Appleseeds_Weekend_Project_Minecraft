/* 
    ***sky, cloud, rock, land, fullLand, treeGreen and treeBrown is global variable created in the "elements.js"

    ***elementEventListener is function located at mainButtonsActions.js
*/
const board = document.querySelector('#board');

let boardBluePrint = 
[
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 'c', 'c', 'c', 'c', 's', 's', 's', 's', 's', 'c', 'c', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 'c', 's', 's', 's', 's', 's', 's', 's', 'c', 's', 's', 'c', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 'c', 'c', 'c', 'c', 's', 's', 's', 's', 'c', 'c', 'c', 'c', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 'c', 's', 'c', 'c', 's', 'c', 's', 's', 'c', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 'c', 'c', 'c', 'c', 's', 'c', 'c', 's', 'c', 's', 's', 'c', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'tg', 'tg', 'tg'],
    ['s', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'tg', 'tg', 'tg'],
    ['s', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 'tg', 'tg', 'tg', 's', 's', 's', 'tg', 'tg', 'tg'],
    ['s', 's', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 'tg', 'tg', 'tg', 's', 's', 's', 's', 'tb', 's'],
    ['s', 's', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 'tg', 'tg', 'tg', 's', 's', 's', 's', 'tb', 's'],
    ['s', 's', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'tb', 's', 's', 'r', 's', 's', 'tb', 's'],
    ['s', 's', 'tb', 'r', 'r', 'r', 's', 's', 's', 's', 's', 's', 'tb', 's', 's', 'r', 'r', 's', 'tb', 's'],
    ['l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l'],
    ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
    ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
    ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
    ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
];

let toolType;

drawBoard();

function drawBoard() {
    board.innerHTML = "";

    for(let i = 0; i < 20; i++){
        for(let j = 0; j < 20; j++){
            switch (boardBluePrint[i][j]) {
                case 's':
                    const skyCopy = sky.cloneNode(true);
                    skyCopy.setAttribute('indexI', i);
                    skyCopy.setAttribute('indexJ', j);
                    skyCopy.addEventListener('click', elementEventListener);
                    board.appendChild(skyCopy);
                    break;
                case 'l':
                    const landCopy = land.cloneNode(true);
                    landCopy.setAttribute('indexI', i);
                    landCopy.setAttribute('indexJ', j);
                    landCopy.addEventListener('click', elementEventListener);
                    board.appendChild(landCopy);
                    break;
                case 'fl':
                    const fullLandCopy = fullLand.cloneNode(true);
                    fullLandCopy.setAttribute('indexI', i);
                    fullLandCopy.setAttribute('indexJ', j);
                    fullLandCopy.addEventListener('click', elementEventListener);
                    board.appendChild(fullLandCopy);
                    break;
                case 'c':
                    const cloudCopy = cloud.cloneNode(true);
                    cloudCopy.setAttribute('indexI', i);
                    cloudCopy.setAttribute('indexJ', j);
                    cloudCopy.addEventListener('click', elementEventListener);
                    board.appendChild(cloudCopy);
                    break;
                case 'r':
                    const rockCopy = rock.cloneNode(true);
                    rockCopy.setAttribute('indexI', i);
                    rockCopy.setAttribute('indexJ', j);
                    rockCopy.addEventListener('click', elementEventListener);
                    board.appendChild(rockCopy);
                    break;
                case 'tg':
                    const treeGreenCopy = treeGreen.cloneNode(true);
                    treeGreenCopy.setAttribute('indexI', i);
                    treeGreenCopy.setAttribute('indexJ', j);
                    treeGreenCopy.addEventListener('click', elementEventListener);
                    board.appendChild(treeGreenCopy);
                    break;
                case 'tb':
                    const treeBrownCopy = treeBrown.cloneNode(true);
                    treeBrownCopy.setAttribute('indexI', i);
                    treeBrownCopy.setAttribute('indexJ', j);
                    treeBrownCopy.addEventListener('click', elementEventListener);
                    board.appendChild(treeBrownCopy);
                    break;
                default:
                    console.log("Wrong element type")
                    break;
            }
        }
    }
}

function insertShape(board, Shape, x, y){

}

function elementEventListener(e) {
    if(this.classList.contains('removable')){
        const i = this.getAttribute('indexI');
        const j = this.getAttribute('indexJ');
        boardBluePrint[i][j] = 's';
        console.log(toolType);
        drawBoard();
    }
}