import { findById, calcOrderTotal, renderTableRow, toUSD } from '../utils.js';
import characters from '../characters.js';
import { getCart, clearButton } from '../storage-utils.js';

const tableBody = document.getElementById('tb-section01');
const placeOrderBtn = document.getElementById('place-order');
placeOrderBtn.disabled = false;

function renderCart() {

    const cart = getCart();

    for (let item of cart) {
        const character = findById(characters, item.id); // how to know what parameters to throw in when connected to item booger?
        const tr = renderTableRow(character, item); 
        tableBody.appendChild(tr);
    } 
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    
    const totalDom = document.getElementById('order-total');
    const total = calcOrderTotal(characters, cart);

    if (total <= 0) {
        placeOrderBtn.disabled = true;
    }
    totalDom.textContent = toUSD(total);
    
}
renderCart();

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    clearButton();
    location.reload();
});

placeOrderBtn.addEventListener('click', () => {
    const cart = getCart();
    const stringCart = JSON.stringify(cart, true, 2);
    const cartRender = calcOrderTotal(characters, cart);
    const cartTotal = toUSD(cartRender);
    alert(stringCart + `Your total is: ${cartTotal}`);
    clearButton();
    window.location.href = '../index.html';
});










