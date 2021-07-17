
import { renderCharacter } from './render-characters.js';
import { addItemToCart, getCharacter } from './storage-utils.js';

const charactersUL = document.getElementById('characters');

let characters = getCharacter();

for (let character of characters) {
    const characterLI = renderCharacter(character);
    charactersUL.appendChild(characterLI);
}

const addButtons = document.querySelectorAll('.add');

for (let btn of addButtons) {
    btn.addEventListener('click', (e) => {
        const buttonId = Number(e.target.value);
        addItemToCart(buttonId);
    });
}
