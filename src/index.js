const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array = [];
    for (i = 0; i < expr.length; i = i + 10) {
        const chunk = expr.slice(i, i + 10);
        array.push(chunk);
    }
    console.log(array)

    let array2 = [];
    for (let i in array) {
        for (let j = 0; j < array[i].length; j++) {
            let chunk2 = array[i].slice(j);
            if (array[i][j] === '*') {
                array2.push(chunk2);
                break;
            }
            if (array[i][j] === '1') {
                const chunk2 = array[i].slice(j);
                array2.push(chunk2);
                break;
            }
        }
    }
    console.log(array2)

    let array3 = [];
    for (let i in array2) {
        let ten = /10/gi;
        let eleven = /11/gi;
        let str = array2[i];
        let newstr = str.replace(ten, '.');
        let newstr2 = newstr.replace(eleven, '-');
        array3.push(newstr2);
    }
    console.log(array3)

    let result = array3.map(item => {
        if (item === '**********') {
            return ' ';
        } else {
            return MORSE_TABLE[item];
        }
    });
    return result.join('');
}

console.log(decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010"));

module.exports = {
    decode
}