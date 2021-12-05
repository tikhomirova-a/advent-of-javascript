'use strict';

const pianoElement = document.querySelector('.piano');
const keys = pianoElement.querySelectorAll('a');
let counter = 1;

for (const key of keys) {
    key.dataset.keyNumber = `key-${counter}`;
    counter ++;
}
console.log(keys);
const onPianoKeyClick = (evt) => {
    const keyLink = evt.target.parentElement;
    if (keyLink.tagName.toLowerCase() === 'a') {
        evt.preventDefault();
        const audio = new Audio(`./audio/${keyLink.dataset.keyNumber}.mp3`);
        audio.play();
    }
};
pianoElement.addEventListener('click', onPianoKeyClick);
