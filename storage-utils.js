import { findById } from './utils.js';
import characters from './characters.js';

export const CHARACTER = 'CHARACTER';

export function getCharacter(){
    let charStorage = localStorage.getItem(CHARACTER);
    if (!charStorage) {
        charStorage = JSON.stringify(characters);
        localStorage.setItem(CHARACTER, charStorage);
    }
    const parsedCharacter = JSON.parse(charStorage);
    return parsedCharacter;
}

export function getCart() { 
    const stringCart = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(stringCart);
    return cart;
}

export function addItemToCart(itemId) { 
    
    const cart = getCart();
    const item = findById(cart, itemId);

    if (item) {
        item.qty += 1;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem); 
    }

    localStorage.setItem('CART', JSON.stringify(cart)); 
}

export function clearButton() {
    localStorage.removeItem('CART');
}