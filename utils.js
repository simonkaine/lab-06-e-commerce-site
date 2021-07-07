export function findById(arrayItem, idItem) {
    for (let item of arrayItem) {
        if (item.id === idItem) {
            return item;
        }
    }
}