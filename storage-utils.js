import { findById } from './utils.js';

export function getCart() { // What job is this performing again?
    const stringCart = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(stringCart);
    return cart;
}

export function addItemToCart(itemId) { // Go over this whole function..
    
    const cart = getCart();
    const item = findById(cart, itemId); // empty paramter itemID passed through?

    if (item) {
        item.qty += 1;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem); // walk through this push.
    }

    localStorage.setItem('CART', JSON.stringify(cart)); // How's this working again?
}

export function clearButton() {
    localStorage.removeItem('CART');
}