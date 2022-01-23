const palindromes = function (str) {
    let cleanStr = '';

    for (c of str) {
        if (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z'){
            cleanStr += c.toLowerCase();
        }
    }

    return cleanStr === cleanStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
