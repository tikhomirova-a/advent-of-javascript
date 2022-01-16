const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#timeList');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const scoreWrapper = board.querySelector('#scoreWrapper');
const finalScore = scoreWrapper.querySelector('#score');
const resetBtn = board.querySelector('#reset');
let time = 0;
let score = 0;
let timerId;

startBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('time-btn')) {
        time = parseInt(evt.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('circle')) {
        score++;
        evt.target.remove();
        createRandomCircle();
    } else if (evt.target.classList.contains('reset')) {
        evt.preventDefault();
        resetGame();
    }
})

function startGame() {
    timerId = setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    clearInterval(timerId);
    board.lastChild.remove();
    finalScore.textContent = score;
    scoreWrapper.classList.remove('hide');
    resetBtn.classList.remove('hide');
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const color = getRandomColor();
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `${color}`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return `rgb(255,${getRandomNumber(0, 255)},${getRandomNumber(0, 255)})`;
}

function resetGame() {
    time = 0;
    score = 0;
    for (const screen of screens) {
        screen.classList.remove('up');
        scoreWrapper.classList.add('hide');
        resetBtn.classList.add('hide');
    }
    timeEl.parentElement.classList.remove('hide');
}
