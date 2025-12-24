/* JavaScript Keywords

1. var
2. let
3. const
4. function
5. return
6. try / catch / finally
7. throw
8. class
9. this
10. new
11. typeof
12. instanceof
13. delete
14. in
15. void
16. yield
17. async / await
*/

// ================================================================
// 1. var
// ================================================================
var x = 10;
console.log(x);

/*
1. Function scoped
2. Can be redeclared
*/

// ================================================================
// 2. let
// ================================================================
let y = 20;
console.log(y);

/*
1. Block scoped
2. Cannot be redeclared in same scope
*/

// ================================================================
// 3. const
// ================================================================
const z = 30;
console.log(z);

/*
1. Block scoped
2. Cannot be reassigned
3. Must be initialized
*/

// ================================================================
// 4. function
// ================================================================
function greet() {
    console.log("Hello");
}

greet();

/*
1. Used to declare functions
2. Function declarations are hoisted
*/

// ================================================================
// 5. return
// ================================================================
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

/*
1. Returns value from function
2. Ends function execution
*/

// ================================================================
// 6. try / catch / finally
// ================================================================
try {
    let a = b;
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Always runs");
}

/*
1. Error handling
*/

// ================================================================
// 7. throw
// ================================================================
function checkAge(age) {
    if (age < 18) {
        throw "Not eligible";
    }
}

try {
    checkAge(15);
} catch (e) {
    console.log(e);
}

/*
1. Creates custom errors
*/

// ================================================================
// 8. class
// ================================================================
class Student {
    constructor(name) {
        this.name = name;
    }
}

let s = new Student("Harsh");
console.log(s.name);

/*
1. Blueprint for objects
*/

// ================================================================
// 9. this
// ================================================================
let obj = {
    value: 10,
    show() {
        console.log(this.value);
    }
};

obj.show();

/*
1. Refers to calling object
*/

// ================================================================
// 10. new
// ================================================================
let d = new Date();
console.log(d);

/*
1. Creates object from constructor
*/

// ================================================================
// 11. typeof
// ================================================================
console.log(typeof 10);
console.log(typeof "JS");

/*
1. Returns data type
*/

// ================================================================
// 12. instanceof
// ================================================================
console.log(d instanceof Date);

/*
1. Checks object type
*/

// ================================================================
// 13. delete
// ================================================================
let user = { name: "Harsh", age: 21 };
delete user.age;
console.log(user);

/*
1. Removes object property
*/

// ================================================================
// 14. in
// ================================================================
console.log("name" in user);

/*
1. Checks property existence
*/

// ================================================================
// 15. void
// ================================================================
void console.log("Hello");

/*
1. Evaluates expression and returns undefined
*/

// ================================================================
// 16. yield
// ================================================================
function* gen() {
    yield 1;
    yield 2;
}

for (let v of gen()) {
    console.log(v);
}

/*
1. Pauses generator function
*/

// ================================================================
// 17. async / await
// ================================================================
async function fetchData() {
    return "Data";
}

async function show() {
    let res = await fetchData();
    console.log(res);
}

show();

/*
1. Handles asynchronous code
*/

// ================================================================
// Keywords ONLY in TypeScript (NOT in JavaScript)
// ================================================================

/* 
interface
type
enum
implements
namespace
abstract
readonly
public / private / protected
unknown
never
*/