import characters from './characters.js';
import { renderCharacter } from './render-characters.js';
import { addItemToCart } from './storage-utils.js';

const charactersUL = document.getElementById('characters');

for (let character of characters) {
    const characterLI = renderCharacter(character);
    charactersUL.appendChild(characterLI);
}

const addButtons = document.querySelectorAll('.add');
for (let btn of addButtons) {
    btn.addEventListener('click', (e) => {
        addItemToCart(Number(e.target.value));
    });
}


