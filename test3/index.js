const assert = require("chai").assert;

const positions = [
    { a: ["C", 2], b: ["D", 4], canAttack: true },
    { a: ["F", 7], b: ["E", 5], canAttack: true },
    { a: ["C", 2], b: ["A", 1], canAttack: true },
    { a: ["A", 6], b: ["B", 4], canAttack: true },
    { a: ["A", 6], b: ["B", 5] },
    { a: ["C", 2], b: ["C", 2] },
    { a: ["A", -1], b: ["B", 1] },
    { a: ["D", 4], b: ["E", 5] },
];

// implement this method to test if two knights threaten eachother
const canAttack = (a, b) => {
    x = Math.abs(a[0].charCodeAt(0) - b[0].charCodeAt(0));
    y = Math.abs(a[1] - b[1]);
    return x + y == 3 && x * y == 2 && a[0].charCodeAt(0) >= 'A'.charCodeAt(0) && a[0].charCodeAt(0) <= 'H'.charCodeAt(0) && b[0].charCodeAt(0) >= 'A'.charCodeAt(0) && b[0].charCodeAt(0) <= 'H'.charCodeAt(0) && a[1] >= 1 && a[1] <= 8 && b[1] >= 1 && b[1] <= 8;
}

positions.forEach(test => {
    try {
        assert.equal(canAttack(test.a, test.b), !!test.canAttack);
    } catch (e) {
        console.error("FAILED", test);
    }
});