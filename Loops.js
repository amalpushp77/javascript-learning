// Loops in JavaScript visit this link - https://www.w3schools.com/Js/js_loops.asp

/* Loops in JavaScript

1. for loop
2. while loop
3. do–while loop
4. for…of loop
5. for…in loop
6. break statement
7. continue statement
8. nested loops
9. Labels (Loop control statements)
10. Infinite loops
*/

// ================================================================
// 1. for loop
// ================================================================
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ================================================================
// 2. while loop
// ================================================================
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

/*
1. Condition is checked before loop runs
2. If condition is false initially, loop never executes
*/

// ================================================================
// 3. do–while loop
// ================================================================
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

/*
1. Loop body runs at least once
2. Condition checked after execution
*/

// ================================================================
// 4. for…of loop (ITERABLES)
// ================================================================
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

/*
1. Used for arrays, strings, maps, sets
2. Gives values directly
3. Cannot be used on plain objects
*/

// Example String
for (let ch of "JS") {
    console.log(ch);
}

// ================================================================
// 5. for…in loop (OBJECTS)
// ================================================================
let student = {
    name: "Harsh",
    age: 21
};

for (let key in student) {
    console.log(key, student[key]);
}

/*
1. Used for objects
2. Iterates over keys (properties)
3. Not recommended for arrays
*/

// ================================================================
// 6. break statement
// ================================================================
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break;
    }
    console.log(k);
}

// ================================================================
// 7. continue statement
// ================================================================
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue;
    }
    console.log(k);
}

// ================================================================
// 8. Nested loops
// ================================================================
for (let r = 1; r <= 2; r++) {
    for (let c = 1; c <= 3; c++) {
        console.log(r, c);
    }
}

/*
1. Loop inside another loop
2. Inner loop runs fully for each outer loop iteration
*/

// ================================================================
// 9. Labels (Loop Control Statements)
// ================================================================

/*
A label provides a name for a loop or a block.
*/

// ---------------------------------------------------------------
// Syntax 
// ---------------------------------------------------------------
/*
labelName: statement;

OR

labelName: {
    statements
}
*/

// ================================================================
// 9.1 Labeled break
// ================================================================
outerLoop:
for (let i = 1; i <= 3; i++) {
    innerLoop:
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop;
        }
        console.log("i =", i, "j =", j);
    }
}

/*
1. outerLoop is a label for the outer loop
2. break outerLoop exits both inner and outer loops
3. Control moves to the statement after the labeled loop
*/

// ================================================================
// 9.2 Labeled continue
// ================================================================
outer:
for (let i = 1; i <= 3; i++) {
    inner:
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue outer;
        }
        console.log("i =", i, "j =", j);
    }
}

/*
1. continue outer skips the current iteration of outer loop
2. Inner loop is skipped for that iteration
*/

// ================================================================
// 9.3 Label with block (non-loop)
// ================================================================
myBlock: {
    console.log("Start");
    break myBlock;
    console.log("End"); // never executed
}

/*
1. Labels can be used with code blocks
2. break exits the labeled block
3. continue cannot be used with blocks
*/

// ================================================================
// 10. Infinite loop (DANGEROUS)
// ================================================================
/*
while (true) {
    console.log("Infinite");
}
*/

/*
1. A loop runs for infinte times
*/
