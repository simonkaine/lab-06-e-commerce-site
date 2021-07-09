export function findById(arrayItem, idItem) {
    for (let item of arrayItem) {
        if (item.id === idItem) {
            return item;
        }
    }
}

function calcLineTotal(quantity, price) {
    return quantity * price;
}

export function calcOrderTotal(arrayItem, idItem) {
    let total = 0;
    for (let item of idItem) {
        const character = findById(arrayItem, item.id);
        const lineTotal = calcLineTotal(item.qty, character.price);
        total += lineTotal;
    }
    return total;
}

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
