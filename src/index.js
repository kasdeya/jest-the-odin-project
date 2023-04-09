function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

const calculator = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    substract: (num1, num2) => {
        return num1 - num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
};

function caesarCipher(string, shift) {
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
        let code = string[i].charCodeAt(0);
        if (code < 97 && code >= 65) {
            // caps
            encrypted += String.fromCharCode(((code - 64 + 26 + shift) % 26) + 64);
        } else if (code >= 97 && code <= 122) {
            // not caps
            encrypted += String.fromCharCode(((code - 96 + 26 + shift) % 26) + 96);
        } else {
            // anything else
            encrypted += string[i];
        }
    }
    return encrypted;
}

function analyzeArray(array) {
    object = {
        average: 0,
        min: array[0],
        max: array[0],
        length: array.length,
    };
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        object.average = array[i];
        if (object.min >= array[i]) {
            object.min = array[i];
        }
        if (object.max <= array[i]) {
            object.max = array[i];
        }
    }
    object.average = Math.floor(sum / object.length);
    return object;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
