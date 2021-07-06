export function renderCharacter(character) {
    
    const characterLI = document.createElement('li');
    const characterH3 = document.createElement('h3');
    characterH3.textContent = character.name;

    const characterImg = document.createElement('img');
    characterImg.src = `./assets/${character.image}`;
    characterImg.alt = character.name;

    const characterSpan = document.createElement('span');
    characterSpan.textContent = `$${character.price}`;

    const characterCatagory = document.createElement('span');
    characterCatagory.textContent = `${character.category}`;

    const button = document.createElement('button');
    button.textContent = 'BUY ME';

    characterLI.appendChild(characterH3);
    characterLI.appendChild(characterImg);
    characterLI.appendChild(characterSpan);
    characterLI.appendChild(characterCatagory);
    characterLI.appendChild(button);

    return characterLI;

}