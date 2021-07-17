
import { getCharacter, CHARACTER } from '../storage-utils.js';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const newCharacter = {
        id: Number(formData.get('id')),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: Number(formData.get('price'))
    };
    console.log(newCharacter);
    const newCharacters = getCharacter();
    newCharacters.push(newCharacter);

    const stringCharacter = JSON.stringify(newCharacters);
    localStorage.setItem(CHARACTER, stringCharacter);

    window.location.replace('../');
});

