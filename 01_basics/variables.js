const accountId = 12345
let accountEmail = "dummyeamil@gmail.com"
var accountPassword = "1111"
accountCity = "Lisbon"
let accountState; // undefined

// accountId = 54321
// Assignment to constant variable is not allowed
console.log(accountId);

accountEmail= "changed@gmail.com";
accountPassword= 2222;
accountCity= "Porto";

console.table([accountEmail,accountPassword,accountCity,accountState]);

/* 
use let instaed of var becaus of issue in bloock scope and functional scoope.

Function Scope (var): The variable is accessible throughout the entire function.
Block Scope (let, const): The variable is accessible only within the block where it is declared.
Using let and const (block scope) is preferred in modern JavaScript
 as it helps prevent unintended access to variables and reduces the chances of bugs.
*/
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (var is function-scoped)
}

function testLet() {
    if (true) {
        let y = 10;
    }
    console.log(y); // ReferenceError: y is not defined (let is block-scoped)
}

//testVar();
//testLet();

// 2nd Example
{
    let a = 10; // a is block-scoped to this block
    const b = 20; // b is also block-scoped to this block

    console.log(a); // 10
    console.log(b); // 20
}

console.log(a); // ReferenceError: a is not defined (a is not accessible outside the block)
console.log(b); // ReferenceError: b is not defined (b is not accessible outside the block)

