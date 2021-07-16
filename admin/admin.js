import characters from '../characters.js';

// const form = document.getElementById('form');
export const CHARACTER = 'CHARACTER';

// grab all the form elements
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// // create form vairable 
//     const formData = new FormData(form);
//     console.log(formData.get('name'));

//     const newCharacter = {
//         id: Number(formData.get('id')),
//         name: formData.get('name'),
//         image: formData.get('image'),
//         description: formData.get('description'),
//         category: Number(formData.get('category')),
//         price: Number(formData.get('price'))
//     };
//     console.log(newCharacter);
// });

export function getCharacter(){
    let charStorage = localStorage.getItem(CHARACTER);
    if (!charStorage) {
        charStorage = JSON.stringify(characters);
        localStorage.setItem(CHARACTER, charStorage);
    }
    const parsedCharacter = JSON.parse(charStorage);
    return parsedCharacter;
}
