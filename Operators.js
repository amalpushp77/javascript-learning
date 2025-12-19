// Operators in javascript visit this link - https://www.javascripttutorial.net/

/* 1. Arithmetic operators
   2. Assignment operators
   3. Comparison operators
   4. Logical operators
   5. Identity (Equality) operators
   6. Conditional (Ternary) operator
   7. Type operators
   8. Bitwise operators
   9. Nullish coalescing
*/

// ---------------------------------------------------------------
// 1. Arithmetic operators
// ---------------------------------------------------------------
console.log(5 + 6);
console.log(5 - 9);
console.log(9 * 6);
console.log(8 / 2);
console.log(17 % 5);     // modulus
console.log(2 ** 3);     // power

let a = 5;
console.log(++a);        // pre-increment
console.log(a++);        // post-increment
console.log(--a);        // pre-decrement
console.log(a--);        // post-decrement

// ---------------------------------------------------------------
// Modulus (%) in detail
// ---------------------------------------------------------------

/*  1. 8%3 = 2
    2. 3%8 = 3 (always) (Numerator is less than Denominator, i.e Numerator is the remainder)
    3. -8%3 = 1 (Remainder when Numerator is negative) (can be used as negative remainder)
    4. 8%-3 = -1 (Remainder when Denominator is negative) 
    5. 3%-8 = -5 (simple subtract, 3-8=5)
    6. -3%8 = 5 (simple subtract, -3+8=5)
    7. 0%6 = 0 (0/6 = 0) (always)
    8. 6%0 = Error (ZeroDivisionError: integer division or modulo by zero) (always)
*/

// ---------------------------------------------------------------
// 2. Assignment operators
// ---------------------------------------------------------------

let b = 10;

b += 5;   // x = x + 5 → 15
b -= 3;   // x = x - 3 → 12
b *= 2;   // x = x * 2 → 24
b /= 4;   // x = x / 4 → 6
b **= 2;  // x = x ** 2 → 36
b %= 3;  // x = x % 3 → 1

// ---------------------------------------------------------------
// 2(a). Bitwise Assignment operators
// ---------------------------------------------------------------

/*  
Left Shift (<<=)

1. x <<= n  → shifts bits to left
2. equivalent to x * (2^n)
3. works only on 32-bit signed integers
*/

let c = 5; // 0101
c <<= 1; // After left shifting by 1 we get, 1010 → 10

/*  
What is the “sign bit”?

In 32-bit binary numbers:

0 → positive number
1 → negative number

The leftmost bit (MSB) is the sign bit.
If MSB is

0 → positive number
1 → negative number

*/

/*
Right Shift (<<=) – sign preserved

1. x >>= n → shift bits right by n positions
2. left side is filled with the SIGN BIT
3. Preserves sign
4. Positive → stays positive
   Negative → stays negative
5. Equivalent to Math.floor(x / 2^n)
*/

let d = 8; //  1000
d >>= 1; //  0100 → 4

/*
How negative numbers stored in js
let x = -8;

so to store it
1. 8 = 00001000
2. 1's complement of 8 = 11110111
3. Add 1 to the 1's complement = 11111000

so -8 = 11111000 (leftmost bit is 1)
*/

let e = -8; // 11111000
e >>= 1; // 11111100 (Right shift by 1 position) → -4

/* 
Zero-fill right shift (>>>=)

1. x >>>= n → shift bits right by n positions
2. fills left side with 0
3. Always produces a positive number
*/
let f = 8; //  1000
f >>>= 1; //  0100 → 4

let g = -8; //  11111000
g >>>= 1; //  01111100... (32-bit) → 2147483644

// ---------------------------------------------------------------
// 2(a). Bitwise Logical Assignment operators
// ---------------------------------------------------------------
let h = 5;   // 0101

//AND assignment (&=)
h &= 1;      // x = x && 1 → (0101) & (0001) → 0001 → 1

//OR assignment (|=)
h |= 2; // x = x | 2 → (0101) | (0010) → 0111 → 7

//XOR assignment (^=)
h ^= 3; // x = x ^ 3 → (0101) ^ (0011) → 0110 → 6

/*
Logical AND assignment (&&=)

RULE:
- If x is truthy → assign RHS
- If x is falsy  → x remains unchanged
*/

let i = true;
i &&= 10;    // 10

let j = false;
j &&= 10;    // false

let k = 1;
k &&= 10;    // 10

let l = 0;
l &&= 10;    // 0

let m = undefined;
m &&= 10;    // undefined

/*
Logical OR assignment (||=)

RULE:
- If x is falsy → assign RHS
- If x is truthy → x remains unchanged
*/

let n = 0;
n ||= 20;    // 20

let o = "";
o ||= "Hi";  // "Hi"

let p = 5;
p ||= 20;    // 5

let q = null;
q ||= 20;    // 20

// ---------------------------------------------------------------
// 3. Comparison operators
// ---------------------------------------------------------------

/*
Loose Equality

RULE:
- Converts values to the same type before comparing
- Only checks VALUE, not TYPE

Important Cases :

1. Number == String
   5 == "5" → true   ("5" is converted to 5)

2. Boolean comparison
   true == 1  → true
   false == 0 → true

3. null and undefined (SPECIAL CASE)
   null == undefined → true
   null == 0 → false
   undefined == 0 → false

4. Empty string
   "" == 0 → true
   "" == false → true

5. Objects
   [] == 0 → true
   [] == "" → true
   {} == {} → false (different references)

*/
console.log(5 == "5");     // true

/*
Strict Equality

RULE:
- Compares both VALUE and TYPE
- No type conversion
- Most recommended operator

Important Case :

1. Same value + same type → true
   5 === 5 → true

2. Same value + different type → false
   5 === "5" → false

3. Special values
   null === undefined → false
   NaN === NaN → false (SPECIAL CASE)

*/
console.log(5 === "5");    // false

/*
Loose Inequality

RULE:
- Opposite of ==
- Type conversion happens

Important Case

1. 5 != "5" → false
2. true != 1 → false
3. null != undefined → false
4. "" != 0 → false
*/
console.log(5 != "5"); // false

/*
Strict Inequality

RULE:
- Opposite of ===
- Checks type + value
*/
console.log(5 !== "5"); // true

console.log(6 > 5); // true
console.log(6 < 5); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// ---------------------------------------------------------------
// 4. Logical operators
// ---------------------------------------------------------------

console.log(true && false);  // false
console.log(true || false);  // True
console.log(!true);  //  False

// ---------------------------------------------------------------
// 5. Identity / Equality operators
// ---------------------------------------------------------------
let r = 10;
let s = 10;
console.log(r === s);   // value + type

let obj1 = {};
let obj2 = {};
let obj3 = obj1;
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// ---------------------------------------------------------------
// 6. Conditional (Ternary) operator
// ---------------------------------------------------------------
let age = 18;
let result = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(result); // Eligible

// ---------------------------------------------------------------
// 7. Type operators
// ---------------------------------------------------------------
console.log(typeof 10); // number
console.log(typeof "JS"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);    // object (JS bug)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // functon

// ---------------------------------------------------------------
// 8. Bitwise operators
// ---------------------------------------------------------------

// AND
console.log(5 & 1);     // 1

// OR
console.log(5 | 1);     // 5

//XOR
console.log(5 ^ 1);     // 4

//Negation
console.log(~5);        // 10

// ---------------------------------------------------------------
// 9. Nullish coalescing operator
// ---------------------------------------------------------------

/*
RULE:
- Assign RHS ONLY if x is null or undefined
- Does NOT trigger for 0, false, ""
*/

let t = null;
t ??= 30;    // 30

let u = undefined;
u ??= 30;    // 30

let v = 0;
v ??= 30;    // 0

let w = false;
w ??= 30;    // false

let x = "";
x ??= 30;    // ""
