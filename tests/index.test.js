const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require('../src/index');

test('capitalizes one letter inputs', () => {
    expect(capitalize('a')).toBe('A');
});

test('capitalizes first letter in a word', () => {
    expect(capitalize('word')).toBe('Word');
});

test('capitalizes first letter in a word even with duplicate letters', () => {
    expect(capitalize('poop')).toBe('Poop');
});

test('capitalizes first letter even in a sentence', () => {
    expect(capitalize('programming is fun')).toBe('Programming is fun');
});

test('reverses 2 letter inputs', () => {
    expect(reverseString('ab')).toBe('ba');
});

test('reverses a full string', () => {
    expect(reverseString('string')).toBe('gnirts');
});

test('sums 2 numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
});
test('substracts 2 numbers', () => {
    expect(calculator.substract(4, 2)).toBe(2);
});
test('divides 2 numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3);
});
test('multiplies 2 numbers', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});

test('shifts the A-Z characters by the correct ammount', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('test', 2)).toBe('vguv');
});

test('it wraps after it hits z or Z', () => {
    expect(caesarCipher('z', 1)).toBe('a');
});

test('Works with capitalized letters too', () => {
    expect(caesarCipher('Z', 1)).toBe('A');
});

test('Works with capitalized words too', () => {
    expect(caesarCipher('Word', 1)).toBe('Xpse');
});

test('Works with sentences', () => {
    expect(caesarCipher('the odin project', 1)).toBe('uif pejo qspkfdu');
});

test('Works with sentences that have capitalized letters', () => {
    expect(caesarCipher('The Odin Project', 1)).toBe('Uif Pejo Qspkfdu');
});

test('Works with sentences that have numbers and special characters, punctuation', () => {
    expect(caesarCipher('The Odin, Project (28)', 1)).toBe('Uif Pejo, Qspkfdu (28)');
});

test('Gets the average, min, max and length of an array of numbers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('Gets the average, min, max and length of an array of numbers', () => {
    expect(analyzeArray([2, 9, 4, 5, 3, 7])).toStrictEqual({
        average: 5,
        min: 2,
        max: 9,
        length: 6,
    });
});

test('Gets the average, min, max and length of an array of numbers', () => {
    expect(analyzeArray([4, 9, 19, 20, 28, 539])).toStrictEqual({
        average: 103,
        min: 4,
        max: 539,
        length: 6,
    });
});
