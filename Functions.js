// Function statements in javascript visit this link - https://www.javascripttutorial.net/javascript-function/

/* Functions in JavaScript

1. Function Declaration
2. Function Expression
3. Arrow Function
4. Anonymous Function
5. IIFE (Immediately Invoked Function Expression)
6. Parameters & Arguments
7. Default Parameters
8. Rest Parameters
9. Callback Functions
10. Higher Order Functions
*/

// ================================================================
// 1. Function Declaration
// ================================================================
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

/*
1. Defined using function keyword
2. Hoisted (can be used before declaration)
*/

// ================================================================
// 2. Function Expression
// ================================================================
let subtract = function (a, b) {
    return a - b;
};

console.log(subtract(5, 2));

/*
1. Stored in a variable
2. Not hoisted
*/

// ================================================================
// 3. Arrow Function
// ================================================================
let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(2, 4));

/*
1. Shorter syntax
3. Cannot be used as constructor
*/

// Short arrow function
let square = x => x * x;
console.log(square(5));

// ================================================================
// 4. Anonymous Function
// ================================================================
setTimeout(function () {
    console.log("Hello JS");
}, 1000);

/*
1. Function without a name
2. Mostly used as callbacks
*/

// ================================================================
// 5. IIFE (Immediately Invoked Function Expression)
// ================================================================
(function () {
    console.log("IIFE executed");
})();

/*
1. Executes immediately
2. Avoids global scope 
*/

// ================================================================
// 6. Parameters & Arguments
// ================================================================
function greet(name) {
    console.log("Hello", name);
}

greet("Harsh");

/*
1. Parameters → variables in function definition
2. Arguments → actual values passed
*/

// ================================================================
// 7. Default Parameters
// ================================================================
function power(base, exp = 2) {
    return base ** exp;
}

console.log(power(5));
console.log(power(5, 3));

/*
1. Default value used if argument not passed
*/

// ================================================================
// 8. Rest Parameters
// ================================================================
function sum(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(sum(1, 2, 3, 4));

/*
1. Collects multiple arguments into array
2. Must be the last parameter
*/

// ================================================================
// 9. Callback Functions
// ================================================================
function processData(data, callback) {
    callback(data);
}

processData(10, function (x) {
    console.log(x * 2);
});

/*
1. Function passed as argument
2. Used in async operations
*/

// ================================================================
// 10. Higher Order Functions
// ================================================================
function operation(a, b, fn) {
    return fn(a, b);
}

console.log(operation(3, 4, add));

/*
1. Accepts function as argument
2. Or returns a function
*/
