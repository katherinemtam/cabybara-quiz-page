// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';

const test = QUnit.test;

test('should take in a string and return true if string is yes', (expect) => {
    const expected = true;
    const actual = isYes('yes');
    expect.equal(actual, expected, 'yes is true');
    expect.equal(isYes('yeahp'), true, 'yeahp is true');
    expect.equal(isYes('nope'), false, 'nope is false');
});