'use strict';

const keys = document.querySelectorAll('li');
let currentIndex;

const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const startShaking = () => {
    let newIndex;
    while (true) {
        newIndex = getRandomInteger(0, keys.length);
        if (newIndex !== currentIndex) {
            break;
        }
    }
    keys[newIndex].classList.add('shake');
    currentIndex = newIndex;
};

const stopShaking = () => {
  keys[currentIndex].classList.remove('shake');
};

startShaking();

function onKeyDown(evt) {
    if (evt.key === keys[currentIndex].dataset.code || evt.key === keys[currentIndex].textContent) {
        evt.preventDefault();
        stopShaking();
        setTimeout(startShaking, 300);
    }
}

document.addEventListener('keydown', onKeyDown);
