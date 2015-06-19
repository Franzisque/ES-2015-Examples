/**
 * spread operator function in ES 6
 * @param val1
 * @param val2
 * @param val3
 * @param val4
 */
function spreadFunction(val1, val2, val3, val4) {

    console.log(val1, val2, val3, val4); // 1 2 3 4

}

var array = [1, 2];
var array2 = [3, 4];

spreadFunction(...array, ...array2);
