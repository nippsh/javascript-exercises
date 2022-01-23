const fibonacci = function(index) {
    if (index < 1) {
        return 'OOPS';
    }

    let first = 0, second = 1, next;
    for(let i = 1; i <= index; i++){
        next = first + second;
        first = second;
        second = next;
    }

    return first;
}

// Do not edit below this line
module.exports = fibonacci;
