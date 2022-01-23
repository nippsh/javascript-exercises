const caesar = function(str, shift) {
    if (shift === 0) {
        return str;
    }

    let cipher = '';
    const shiftSign = shift > 0 ? 1 : -1;
    const alphabetSize = 'z'.charCodeAt() - 'a'.charCodeAt() + 1;
    for (c of str){
        let wrap = false;
        const shiftedCharCode = c.charCodeAt() + (shift % alphabetSize)

        if (c >= 'a' && c <= 'z'){
            wrap = shiftedCharCode > 'z'.charCodeAt() || shiftedCharCode < 'a'.charCodeAt();
            cipher += String.fromCharCode(shiftedCharCode - (wrap ? shiftSign * (alphabetSize) : 0));
        } else if (c >= 'A' && c <= 'Z') {
            wrap = shiftedCharCode > 'Z'.charCodeAt() || shiftedCharCode < 'A'.charCodeAt();
            cipher += String.fromCharCode(shiftedCharCode - (wrap ? shiftSign * (alphabetSize) : 0));
        } else {
            cipher += c;
        }
    }

    return cipher;
};

// Do not edit below this line
module.exports = caesar;
