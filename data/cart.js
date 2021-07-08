import { findById, calcItemTotal, renderTableRow, toUSD } from '../utils.js';
import characters from '../characters.js';
import { getCart, clearButton } from '../storage-utils.js';
// import { renderCharacter } from '../render-characters.js';

const tableBody = document.getElementById('tb-section01');

// const cart = [
//     { id: 1, qty: 1 },
//     { id: 2, qty: 1 },
//     { id: 3, qty: 1 },
//     { id: 4, qty: 1 },
//     { id: 5, qty: 1 },
//     { id: 6, qty: 1 },
//     { id: 7, qty: 1 }
// ];
function renderCart() {

    const cart = getCart();

    for (let item of cart) {
        const character = findById(characters, item.id);
        const tr = renderTableRow(character, item);
        tableBody.appendChild(tr);
    } 
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    
    const totalDom = document.getElementById('order-total');
    const total = calcItemTotal(characters, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    clearButton();
    onload.reload();
});





