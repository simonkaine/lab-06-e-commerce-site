export function findById(arrayItem, idItem) {
    for (let item of arrayItem) {
        if (item.id === idItem) {
            return item;
        }
    }
}

export function calcLineTotal(quantity, price) {
    return quantity * price;
}

export function calcItemTotal(arrayItem, idItem) {
    let total = 0;
    for (let item of idItem) {
        const character = findById(arrayItem, item.id);
        total += character.price * item.qty;
    }
    return total;
}

// export function calcOrderTotal(cartArray, productsArray) {
//     let grandTotal = 0;
//     for (let item of cartArray) {
//         const totalCharacters = findById(item.id, productsArray);
//         const CalcLineTotal = calcItemTotal(totalCharacters, item.id);
//         grandTotal += CalcLineTotal.price * item.qty;
//     }
//     return grandTotal;
// }

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(arrayItem, idItem){

    const tableRow = document.createElement('tr');

    const tableDataName = document.createElement('td');
    tableDataName.textContent = arrayItem.name;
    tableRow.appendChild(tableDataName);
    
    const tableDataPrice = document.createElement('td');
    tableDataPrice.textContent = toUSD(arrayItem.price);
    tableRow.appendChild(tableDataPrice);
    
    const tableDataQty = document.createElement('td');
    tableDataQty.textContent = idItem.qty;
    tableRow.appendChild(tableDataQty);

    const tableDataTotal = document.createElement('td');
    const total = arrayItem.price * idItem.qty;
    tableDataTotal.textContent = toUSD(total);
    tableRow.appendChild(tableDataTotal);

    return tableRow;

}
