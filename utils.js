export function findById(arrayItem, idItem) {
    for (let item of arrayItem) {
        if (item.id === idItem) {
            return item;
        }
    }
}
//  do i want arrayItem qty? idItem or total?
export function calcItemTotal(arrayItem, idItem) {
    let total = 0;
    for (let item of idItem) {
        const character = findById(arrayItem, item.id);
        total += character.price * item.qty;
    }
    return total;
}

