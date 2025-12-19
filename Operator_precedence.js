/*
Precedence from Highest to Lowest.


Operator            Description                                                     Associativity
------------------------------------------------------------------------------------------------------------------------
( )                 Parentheses (Highest precedence)                                left-to-right
**                  Exponentiation                                                   right-to-left
+x, -x, ~x          Unary plus/minus, Bitwise NOT                                    right-to-left
*  /  %             Multiplication / Division / Modulus                              left-to-right
+  -                Addition / Subtraction                                           left-to-right
------------------------------------------------------------------------------------------------------------------------
<<  >>  >>>         Bitwise shift left, right, zero-fill right                       left-to-right
&                   Bitwise AND                                                      left-to-right
^                   Bitwise XOR                                                      left-to-right
|                   Bitwise OR                                                       left-to-right
------------------------------------------------------------------------------------------------------------------------
<  <=  >  >=        Relational operators                                             left-to-right
==  !=              Loose equality operators                                         left-to-right
=== !==             Strict equality operators                                        left-to-right
------------------------------------------------------------------------------------------------------------------------
!                   Logical NOT                                                      right-to-left
&&                  Logical AND                                                      left-to-right
||                  Logical OR                                                       left-to-right
------------------------------------------------------------------------------------------------------------------------
?:                  Conditional (Ternary)                                           right-to-left
=                   Assignment operators (Lowest precedence)                        right-to-left
+=  -=
*=  /=  %=
<<= >>= >>>=
&&= ||= ??=
------------------------------------------------------------------------------------------------------------------------
*/

let a = 2;
let b = 3;
let c = 5;

// Arithmetic precedence
console.log(b - c / a);        // 3 - (5/2) = 0.5
console.log((b - c) / a);      // -1
console.log(Math.floor((b - c) / a)); // -1 (JS has no //)

// Exponentiation (right to left)
console.log(c ** b ** a);      // 5 ** (3 ** 2) = 1953125

// Division associativity
console.log(c / a / b);        // (5/2)/3 = 0.8333...
console.log(6 / 3 / 2);        // 1

// Bitwise shifts
console.log(200 >> 2 >> 3);    // ((200 >> 2) >> 3)

// Shift vs comparison
console.log(5 < 8 << 2);       // true → 8<<2 = 32 → 5 < 32

// Bitwise AND vs comparison
console.log(5 & 55 > 3);       
// > happens first → 55 > 3 = true → 5 & 1 = 1

// Logical NOT precedence
console.log(! ! true);         // true

// Assignment with comparison
a <<= 3 == 3;                  
// 3 == 3 → true → 1 → a <<= 1
console.log(a);                // 4

// Right-to-left assignment
let x = y = z = 7;
console.log(x, y, z);          // 7 7 7

// Chained comparison (IMPORTANT DIFFERENCE FROM PYTHON)
console.log(a > b > c);        
// a > b → false → 0 > c → false
