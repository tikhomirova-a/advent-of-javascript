const board = document.querySelector('#board');
const COLORS = ['#ffffff', '#faeffb', '#f1d0f2', '#ecc1ee', '#e7b2ea', '#de93e1', '#d065d5', '#c646cc'];
const SQUARE_NUMBER = 500;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square);
}

function setColor(evt) {
    const element = evt.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(evt) {
    const element = evt.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
