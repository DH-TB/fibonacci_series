function fibonacci_series(n) {

    return buildFibonacciArray(n);
}

function buildFibonacciArray(n) {
    var array = [];

    array.push(0);
    if (n >= 1) {
        array.push(1);
    }
    if (n >= 2) {
        array.push(1);
    }
    array = buildArray(array, n);

    return array;
}

function buildArray(array, n) {
    var sum, firstNum = 1, secondNum = 1;

    for (var i = 2; i < n; i++) {
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
        array.push(sum);
    }

    return array;
}

module.exports = fibonacci_series;
