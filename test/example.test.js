import { renderCharacter } from '../render-characters.js';
import { findById, calcItemTotal, renderTableRow } from '../utils.js';

const test = QUnit.test;

test('Test that passes a product to a function', (expect) => {

    const expected = `<li><h3>Mario</h3><img src="./assets/mario.png" alt="Mario"><span>$99</span><span>Super Mario bros</span><button>BUY ME</button></li>`;
    
    const mario = {
        id: 'mario',
        name: 'Mario',
        image: 'mario.png',
        description: "It's a me, Mario!",
        category: 'Super Mario bros',
        price: 99.00
    };

    const actual = renderCharacter(mario);

    expect.equal(actual.outerHTML, expected);
});

test('Test for two objects comparrison.', (expect) => {

    const mario = [{ id: 1, name: 'Mario' }, { id: 2, name: 'Data' }];
    const expected = { id: 1, name: 'Mario' };

    const actual = findById(mario, 1);

    expect.deepEqual(actual, expected);
});

test('test for calculation', (expect) => {

    const expected = 297;
    const mario = [{
        id: 1,
        name: 'Mario',
        image: 'mario.png',
        description: "It's a me, Mario!",
        category: 'Super Mario bros',
        price: 99.00
    }];

    const cart = [
        { id: 1, qty: 3 }
    ];

    const actual = calcItemTotal(mario, cart);

    expect.deepEqual(actual, expected);
});

test('test for DOM render', (expect) => {
    
    const mario = {
        id: 1,
        name: 'Mario',
        image: 'mario.png',
        description: "It's a me, Mario!",
        category: 'Super Mario bros',
        price: 99
    };

    const cart = 
        { id: 1, qty: 2 };
   
    const expected = `<tr><td>Mario</td><td>$99.00</td><td>2</td><td>$198.00</td></tr>`;

    const dom = renderTableRow(mario, cart);
    const actual = dom.outerHTML;

    expect.equal(actual, expected);
});