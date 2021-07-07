import { renderCharacter } from '../render-characters.js';
import { findById, calcItemTotal } from '../utils.js';

const test = QUnit.test;

test('Test that passes a product to a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = `<li><h3>Mario</h3><img src="./assets/mario.png" alt="Mario"><span>$99</span><span>Super Mario bros</span><button>BUY ME</button></li>`;
    
    const mario = {
        id: 'mario',
        name: 'Mario',
        image: 'mario.png',
        description: "It's a me, Mario!",
        category: 'Super Mario bros',
        price: 99.00
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCharacter(mario);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Test for two objects comparrison.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const mario = [{ id: 1, name: 'Mario' }, { id: 2, name: 'Data' }];
    const expected = { id: 1, name: 'Mario' };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(mario, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('test for calculation', (expect) => {
    //Arrange
    // Set up your arguments and expectations
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
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(mario, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
