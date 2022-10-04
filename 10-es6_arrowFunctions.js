//es5
let x1 = function(a){
  return a;
}

//es6
let x2 = a => a;


//if we do not have any parameters
//es5
let y1 = function(){
  console.log('Hello');
}

//es6
let y2 = () => {console.log('Hello');}

//if we have multiple parameters
let z = (a,b,c) => a+b+c;

//multiline arrow functions
let sum = (a,b) => {
  let result = a+b;
  return result;
}

//check streams, reduce, and filters in java
let total1 = arr => arr.reduce((a,b) => a+b);
let arr = [5,10,20];
console.log(total1(arr));
// starting point 0
//  0 +  5 = 5
//  5 + 10 = 15
// 15 + 20 = 35

// reduce has two parameters and we just pass one parameter above
// we can pass second parameter like below
let total2 = arr => arr.reduce(((a,b) => a+b),5);
let arr2 = [5,10,20];
console.log(total2(arr2));

// map() method: creates a new array with the results of calling a provided functions
// on every element in the calling array
const map1 = arr.map(x => x*2);
console.log(map1);

// for..of : creates a loop iterating over iterable objects
let myFruits = ['Apple','Orange','Banana'];
for(let value of myFruits){
  console.log(value); // print each element => collection of items
}

// for..in :
for (var value in myFruits) {
  console.log(value); // print index number => object properties
}
