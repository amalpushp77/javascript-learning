// Conditional Statements in JavaScript visit this link - https://www.javascripttutorial.net/

/* Conditional Statements in JavaScript

1. if statement
2. if–else statement
3. if–else if–else ladder
4. Nested if
5. switch statement
6. Ternary (Conditional) operator
*/

// ================================================================
// 1. if statement
// ================================================================
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}

/* 
Output : Eligible to vote
*/

// ================================================================
// 2. if–else statement
// ================================================================
let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


/* 
Output : Fail
*/

// ================================================================
// 3. if–else if–else ladder
// ================================================================
let score = 78;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

/* 
Output : Grade B
*/

// ================================================================
// 4. Nested if statement
// ================================================================
let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Wrong password");
    }
} else {
    console.log("Invalid username");
}

/* 
Output : Login Successful
*/

// ================================================================
// 5. switch statement
// ================================================================
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}

/* 
Output : Wednesday
*/

// ---------------------------------------------------------------
// switch WITHOUT break (fall-through)
// ---------------------------------------------------------------
let num = 2;

switch (num) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}

/*
Output:
Two
Three

Explanation: Without break, execution continues to next cases
*/

// ================================================================
// 6. Ternary (Conditional) operator
// ================================================================
let age2 = 16;

let result = (age2 >= 18) ? "Adult" : "Minor";
console.log(result);

/*
Output : Minor

Explanation:
1. Short form of if–else
2. Syntax: condition ? true_value : false_value
*/

// ---------------------------------------------------------------
// Nested ternary (NOT recommended for readability)
// ---------------------------------------------------------------
let n = 0;

let type = (n > 0) ? "Positive" : (n < 0) ? "Negative" : "Zero";
console.log(type);


/* 
Output : Zero
*/
