import characters from './characters.js';
import { renderCharacter } from './render-characters.js';
import { addItemToCart } from './storage-utils.js';

const charactersUL = document.getElementById('characters');

for (let character of characters) {
    const characterLI = renderCharacter(character);
    charactersUL.appendChild(characterLI);
}

const addButtons = document.querySelectorAll('.add');

for (let btn of addButtons) { // HOWS this work?
    btn.addEventListener('click', (e) => { // Why (e)?
        const buttonId = Number(e.target.value);
        addItemToCart(buttonId); // WHAT IS THIS?
    });
}
