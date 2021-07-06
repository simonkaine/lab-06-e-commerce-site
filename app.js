import characters from './characters.js';
import { renderCharacter } from './render-characters.js';

const charactersUL = document.getElementById('characters');

for (let character of characters) {
    const characterLI = renderCharacter(character);
    charactersUL.appendChild(characterLI);
}



