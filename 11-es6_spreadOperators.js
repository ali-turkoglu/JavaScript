let mid=[3,4];
let arr=[1,2,...mid,5,6];
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

let str='Hello';
var chars=[...str];
console.log(chars); // [ 'H', 'e', 'l', 'l', 'o' ] => every character

function fun(...theArgs){
  console.log(theArgs.length);
}
fun(); //0
fun(5); // 1
fun(4,6); // 2

function multiply(multiplier,...theArgs){
  return theArgs.map(element => multiplier * element);
}
let arry=multiply
console.log(multiply(2,4,5,8));
