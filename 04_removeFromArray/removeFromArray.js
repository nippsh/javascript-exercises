const removeFromArray = function(array, ...args) {
    console.log(args);

    for (const arg of args){
        console.log(array.indexOf(arg));
        if (array.indexOf(arg) != -1){
            array.splice(array.indexOf(arg), 1);
        }
        console.log(array);
    }
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
