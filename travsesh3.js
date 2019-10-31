// challenge 1: add all numbers

// es5 solution - arguments object and for loop
function addAll() {
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// es6, spread and reduce
const addAll2 = (...args) => {
    // let total = 0;
    // arr.forEach(num => {
    //     total += num;
    // });
    // return total;

    return args.reduce((prev, curr) => prev + curr);
};

// sum all primes
const sumPrimes = upper => {
    let sum = 0;
    for (let i = 1; i <= upper; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
};
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

// seek & destroy
// remove from array whatever is in the following arguments, return the leftovers
// ...spread, filter, includes
const seekAndDestroy = (arr, ...seek) => {
    return arr.filter(val => !seek.includes(val));
};

// es5
function seekAndDestroy2(arr) {
    const args = Array.from(arguments);
    function filterArr(arr) {
        //return true if NOT in array
        return args.indexOf(arr) === -1;
    }
    return arr.filter(filterArr);
}
console.log(seekAndDestroy([2, 3, 4, 5, "hello"], 2, 4));
