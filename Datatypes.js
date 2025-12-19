// Datatypes in javascript visit this link - https://www.javascripttutorial.net/javascript-data-types/

/* 
JavaScript Data Types
*/

// ================================================================
// 1. Primitive Data Types
// ================================================================
/*
Primitive data types store single values.
They are immutable and stored by value.
There are 7 primitive datatypes
*/

// ---------------------------------------------------------------
// 1. Number
// ---------------------------------------------------------------
let a = 10;
let b = 3.14;
let c = -25;
let d = Infinity;
let e = NaN;

console.log(a, b, c);  // 10, 3.14, -25
console.log(d);       // Infinity
console.log(e);       // NaN
console.log(typeof a); // number

// ---------------------------------------------------------------
// 2. String
// ---------------------------------------------------------------

/*
Can be written using '', "", or ``
*/

let s1 = "Hello";
let s2 = 'JavaScript';
let s3 = `Hello JS`;

console.log(s1, s2, s3); // Hello, JavaScript, Hello JS
console.log(typeof s1); // string

let name = "Harsh";
console.log(`My name is ${name}`); // My name is Harsh

// ---------------------------------------------------------------
// 3. Boolean
// ---------------------------------------------------------------
let t = true;
let f = false;

console.log(t, f); // true, false 
console.log(typeof t); // boolean

// ---------------------------------------------------------------
// 4. Undefined
// ---------------------------------------------------------------
let x;

console.log(x); // undefined
console.log(typeof x); // undefined

/*
1. Variable declared but NOT assigned
2. Default value of uninitialized variables
*/

// ---------------------------------------------------------------
// 5. Null
// ---------------------------------------------------------------
let y = null;

console.log(y); // null
console.log(typeof y);

/*
1. Represents intentional absence of value
2. typeof null → object (JS bug)
3. null is NOT same as undefined
*/

// ---------------------------------------------------------------
// 6. BigInt
// ---------------------------------------------------------------
let big = 123456789012345678901234567890n;

console.log(big); // 123456789012345678901234567890n
console.log(typeof big); //bigint

/*
1. Used for very large integers
2. Ends with 'n'
3. BigInt and Number are not same
*/

// ---------------------------------------------------------------
// 7. Symbol
// ---------------------------------------------------------------
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // true
console.log(typeof sym1); // symbol

/*
1. Always unique
2. Mainly used as object keys
3. Prevents name conflicts
*/

// ================================================================
// 2. Non-Primitive (Reference) Data Types
// ================================================================
/*
Non-primitive data types store multiple values.
They are stored by reference (memory address).
*/

// ---------------------------------------------------------------
// 1. Object
// ---------------------------------------------------------------
let student = {
    name: "Harsh",
    age: 21
};

console.log(student); // { name: 'Harsh', age: 21 }
console.log(typeof student); // object

/*
1. Stored as key-value pairs
2. Mutable
3. Compared by reference
*/

// ---------------------------------------------------------------
// 2. Array
// ---------------------------------------------------------------
let arr = [1, 2, 3, "JS", true];

console.log(arr); // [ 1, 2, 3, 'JS', true ]
console.log(typeof arr); // object

/*
1. Arrays are special objects
2. Can store mixed data types
3. Indexed from 0
*/

console.log(Array.isArray(arr)); // true

// ---------------------------------------------------------------
// 3. Function
// ---------------------------------------------------------------
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(typeof add); // function

/*
1. Functions are objects
2. Can be stored in variables
3. Can be passed as arguments
*/

// ---------------------------------------------------------------
// 4. Date
// ---------------------------------------------------------------
let today = new Date();

console.log(today); // 2025-12-18T19:30:45.123Z means 18 December 2025, 19:30:45 and 123 milliseconds (UTC time)
console.log(typeof today);

// ---------------------------------------------------------------
// Comparison
// ---------------------------------------------------------------

// Primitive
let p1 = 10;
let p2 = 10;
console.log(p1 === p2);   // true (value comparison)

// Non- Primitive
let o1 = {};
let o2 = {};
console.log(o1 === o2);   // false (reference comparison)

// ---------------------------------------------------------------
// List of Falsy values
// ---------------------------------------------------------------
/*
false
0
-0
"" (empty string)
null
undefined
NaN
*/

// ---------------------------------------------------------------
// Truthy values
// ---------------------------------------------------------------
/*
Everything except falsy values
*/
