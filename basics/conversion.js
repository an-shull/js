let score = "69abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"69" => 69
// "69" => NaN
// true => 1, false => 0

let isLoggedIn = 1

let bool = Boolean(isLoggedIn)
console.log(bool)
 

// Operatios =>

let value = 3
let negval = -value
console.log(negval)

// pre,post

let x = 3;
const y = x++;

console.log(x,y);
// Expected output: x:4, y:3 // returns the val before inc

let a = 3;
const b = ++a;
console.log(a,b);
// Expected output: a:4, b:4 //returns the val after inc