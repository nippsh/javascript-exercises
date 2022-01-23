const sumAll = function(start, stop) {
    if (typeof(start) != 'number' || typeof(stop) != 'number') {
        return 'ERROR';
    } else if (start < 0 || stop < 0){
        return 'ERROR';
    }

    if (start > stop) {
        [start, stop] = [stop, start];
    }

    let sum = 0;
    for (start; start <= stop; start++){
        sum += start;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
