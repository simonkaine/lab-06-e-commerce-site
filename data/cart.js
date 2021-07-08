import { findById, calcItemTotal, renderTableRow, toUSD } from '../utils.js';
import characters from '../characters.js';
import { getCart, getCart } from '../storage-utils.js';

const getCart = getCart()
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

for (let item of cart) {
    const character = findById(characters, item.id);
    const tr = renderTableRow(character, item);
    tableBody.appendChild(tr);
} 

const totalDom = document.getElementById('order-total');
const total = calcItemTotal(characters, cart);
totalDom.textContent = toUSD(total);
