// var keyword is global and function scoped
var x =1;

if (x===1) {
  var x=2;
  console.log(x); // 2
}
console.log(x);  // 2

//let is block scoped --> only visible in block in which is declared
let y =1;
if (y===1) {
  let y=2;
  console.log(y); // 2
}
console.log(y);  // 1

//The const keyword has all the properties that are the same as the let keyword,
// except the user cannot update it
const number = 10;
//number = 40; --> error
console.log(number);

// Template strings
let firstName='Mike';
let lastName='Smith';
console.log('My name is '+ firstName+' '+lastName);

console.log(`My name is ${firstName} ${lastName}, and nice to know you`);
