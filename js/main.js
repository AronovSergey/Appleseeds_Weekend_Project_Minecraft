/* 
    ***sky, cloud, rock, land, fullLand, treeGreen and treeBrown is global variable created in the "elements.js"

    ***ElementsStack is a class created at ElementsStack.js
*/


const board = document.querySelector('#board');

let boardBluePrintArray = 
[
    [
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 's', 's', 's', 'c', 'c', 'c', 's', 's'],
        ['s', 'c', 'c', 'c', 's', 's', 's', 's', 's', 's', 'c', 'c', 'c', 's', 's', 's', 'c', 'c', 'c', 's'],
        ['s', 's', 'c', 'c', 'c', 's', 's', 's', 's', 'c', 'c', 'c', 's', 's', 's', 's', 's', 'c', 'c', 's'],
        ['s', 's', 's', 'c', 'c', 'c', 's', 's', 's', 's', 'c', 's', 's', 's', 's', 's', 's', 's', 'c', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
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
    ],
    [
        ['s',   's',  's',  's',  's',  's',  's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s',  'tg', 'tg', 'tg', 'tg', 'tg',  's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s',  'tg', 'tg', 'tg', 'tg', 'tg',  's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['tg', 'tg', 'tg', 'tg', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 'c', 'c', 'c', 's', 's', 's', 's'],
        ['tg', 'tg', 'tg', 'tg', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 'c', 'c', 'c', 's', 's', 's', 's', 's'],
        ['tg', 'tg', 'tg', 'tg', 'tg', 'tg', 'tg', 's', 's', 's', 's', 'c', 'c', 'c', 's', 's', 's', 's', 's', 's'],
        ['tg', 'tg', 'tg', 'tg', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 'c', 'c'],
        ['s', 'tg', 'tg', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 'c', 'c', 's'],
        ['s', 'tg', 'tg', 'tg', 'tg', 'tg', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'tb', 'tb', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'tb', 'tb', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'tb', 'tb', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'tb', 'tb', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'tb', 'tb', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'tb', 'tb', 'tb', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
    ],
    [
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 'c', 's', 'c', 'c', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 'c', 's', 'c', 'c', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 's', 'c', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'c', 'c', 'c', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 's', 'r', 'r', 'r', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'r', 'r', 'tb', 'tb', 'tb', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'r', 'r', 'tb', 'tb', 'tb', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'r', 'r', 'tb', 'tb', 'tb', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'r', 'r', 'tb', 'tb', 'tb', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'r', 'r', 'tb', 'tb', 'tb', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['s', 's', 'r', 'r', 'tb', 'tb', 'tb', 'r', 'r', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
        ['l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
        ['fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl', 'fl'],
    ],
];

let randomNumber = Math.floor(Math.random() * 3);

let boardBluePrint = cloneMatrix(boardBluePrintArray[randomNumber]);

let toolType;

const elementsStack = new ElementsStack();

drawBoard();


function elementEventListener(e) {
    const i = this.getAttribute('indexI');
    const j = this.getAttribute('indexJ');
    // getting some element from board
    if(toolType.classList.contains('sidebar__tools')){
        if(this.classList.contains('removable')){
            elementsStack.push(boardBluePrint[i][j]);
            boardBluePrint[i][j] = 's';
            drawElementsStackDisplay();
            drawBoard();
        }
        else {
            toolType.classList.add('sidebar__tools-error-effect');
            setTimeout(() => {
                toolType.classList.remove('sidebar__tools-error-effect')
            }, 300);
        }
    }
    // putting an element in board
    else if(toolType.classList.contains('sidebar__elements')){
        if(this.classList.contains('removable')){
            boardBluePrint[i][j] = getClassShortcut(toolType.classList);

            if(toolType.getAttribute('type') === 'first')
                elementsStack.removeFirst;
            else if(toolType.getAttribute('type') === 'second')
                elementsStack.removeSecond;
            else
                elementsStack.removeThird;

            toolType = null;
            drawElementsStackDisplay();
            drawBoard();
        }
    }

    function getClassShortcut(list) {
        if(list.contains('full-land'))
            return 'fl';
        else if(list.contains('rock'))
            return 'r';
        else if(list.contains('tree-green'))
            return 'tg';
        else if(list.contains('tree-brown'))
            return 'tb';
    }
}

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

function drawElementsStackDisplay() {   
    const container = document.querySelector('.sidebar__elements-section');
    container.innerHTML = `<div class="sidebar__elements" type="first"></div>
    <div class="sidebar__elements" type="second"></div>
    <div class="sidebar__elements" type="third"></div>`;

    if(elementsStack.first){
        const firstElementDiv = document.querySelector('[type="first"]');
        firstElementDiv.classList.add(elementsStack.first);
        firstElementDiv.addEventListener('click', sidebarElementsAction);  
    }
    if(elementsStack.second){
        const secondElementDiv = document.querySelector('[type="second"]');
        secondElementDiv.classList.add(elementsStack.second);
        secondElementDiv.addEventListener('click', sidebarElementsAction); 
    }
    if(elementsStack.third){
        const thirdElementDiv = document.querySelector('[type="third"]');
        thirdElementDiv.classList.add(elementsStack.third);
        thirdElementDiv.addEventListener('click', sidebarElementsAction); 
    }
}

function cloneMatrix(matrix) {
    let newArray = [];

    for (let i = 0; i < matrix.length; i++)
        newArray[i] = matrix[i].slice();

    return newArray;
}