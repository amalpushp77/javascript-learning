/* JavaScript Inbuilt Functions

1. console.log()
2. alert()
3. prompt()
4. confirm()
5. parseInt()
6. parseFloat()
7. Number()
8. String()
9. Boolean()
10. isNaN()
11. isFinite()
12. setTimeout()
13. setInterval()
14. clearTimeout()
15. clearInterval()
16. Math functions
17. Date functions
18. JSON functions
*/

// ================================================================
// 1. console.log()
// ================================================================
console.log("Hello JS");

/*
1. Prints output to console
*/

// ================================================================
// 2. alert()
// ================================================================
alert("Welcome");

/*
1. Displays message popup
2. Execution pauses until OK is clicked
*/

// ================================================================
// 3. prompt()
// ================================================================
let name = prompt("Enter your name");
console.log(name);

/*
1. Takes input from user
2. Always returns string or null
*/

// ================================================================
// 4. confirm()
// ================================================================
let result = confirm("Are you sure?");
console.log(result);

/*
1. Returns true or false
2. Used for confirmation dialogs
*/

// ================================================================
// 5. parseInt()
// ================================================================
console.log(parseInt("123"));
console.log(parseInt("123abc"));

/*
1. Converts string to integer
2. Stops parsing at first non-number
*/

// ================================================================
// 6. parseFloat()
// ================================================================
console.log(parseFloat("12.5"));

/*
1. Converts string to decimal number
*/

// ================================================================
// 7. Number()
// ================================================================
console.log(Number("123"));
console.log(Number(true));

/*
1. Converts value to number
2. Returns NaN if conversion fails
*/

// ================================================================
// 8. String()
// ================================================================
console.log(String(100));
console.log(String(true));

/*
1. Converts value to string
*/

// ================================================================
// 9. Boolean()
// ================================================================
console.log(Boolean(1));
console.log(Boolean(0));

/*
1. Converts value to boolean
2. 0, null, undefined, "" → false
*/

// ================================================================
// 10. isNaN()
// ================================================================
console.log(isNaN("JS"));
console.log(isNaN(10));

/*
1. Checks if value is NaN
2. Returns true or false
*/

// ================================================================
// 11. isFinite()
// ================================================================
console.log(isFinite(10));
console.log(isFinite(Infinity));

/*
1. Checks finite number
*/

// ================================================================
// 12. setTimeout()
// ================================================================
setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);

/*
1. Executes function after delay
2. Runs only once
*/

// ================================================================
// 13. setInterval()
// ================================================================
let id = setInterval(() => {
    console.log("Repeats");
}, 1000);

/*
1. Executes function repeatedly
*/

// ================================================================
// 14. clearTimeout()
// ================================================================
clearTimeout(id);

/*
1. Stops setTimeout
*/

// ================================================================
// 15. clearInterval()
// ================================================================
clearInterval(id);

/*
1. Stops setInterval
*/

// ================================================================
// 16. Math Functions
// ================================================================
console.log(Math.max(10, 20));
console.log(Math.min(5, 2));
console.log(Math.sqrt(25));
console.log(Math.random());

/*
1. Used for mathematical operations
2. Static methods only
*/

// ================================================================
// 17. Date Functions
// ================================================================
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());

/*
1. Works with date & time
*/

// ================================================================
// 18. JSON Functions
// ================================================================
let obj = { name: "Harsh" };

let jsonStr = JSON.stringify(obj);
let parsedObj = JSON.parse(jsonStr);

console.log(jsonStr);
console.log(parsedObj);

/*
1. Converts object ↔ JSON
*/
