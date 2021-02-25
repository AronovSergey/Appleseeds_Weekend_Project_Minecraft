/* 
    sky, cloud, rock, land, fullLand, treeGreen and treeBrown is global variable created in the "elements.js"
*/
const board = document.querySelector('#board');

let boardBluePrint = 
[
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 'c', 'c', 'c', 'c', 's', 's', 's', 's', 's', 'c', 'c', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 'c', 's', 's', 's', 's', 's', 's', 's', 'c', 's', 's', 'c', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 'c', 'c', 'c', 'c', 's', 's', 's', 's', 'c', 'c', 'c', 'c', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 'c', 's', 'c', 'c', 's', 'c', 's', 's', 'c', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 'c', 'c', 'c', 'c', 's', 'c', 'c', 's', 'c', 's', 's', 'c', 's', 's', 's', 's'],
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

drawBoard();

function drawBoard() {
    board.innerHTML = "";

    for(let i = 0; i < 20; i++){
        for(let j = 0; j < 20; j++){
            switch (boardBluePrint[i][j]) {
                case 's':
                    board.appendChild(sky.cloneNode(true));
                    break;
                case 'l':
                    board.appendChild(land.cloneNode(true));
                    break;
                case 'fl':
                    board.appendChild(fullLand.cloneNode(true));
                    break;
                case 'c':
                    board.appendChild(cloud.cloneNode(true));
                    break;
                case 'r':
                    board.appendChild(rock.cloneNode(true));
                    break;
                case 'tg':
                    board.appendChild(treeGreen.cloneNode(true));
                    break;
                case 'tb':
                    board.appendChild(treeBrown.cloneNode(true));
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