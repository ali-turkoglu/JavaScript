function add(a,b){
  console.log('Total is: '+(a+b));
}

add(23,21);

function multiply(a,b){
  return (a*b);
}
console.log(multiply(23,2));

add(3,4,6);//ignore the rest

// overloading is not available in javascript

//=========================================================

//Functions are the first-class citizens in JS.
//You can pass functions to other functions as arguments
//You can return functions from other functions
//You can store functions in variables

var add2=add;
add2(44,33);

//Ananymous fuctions: function without name
var show=function(){
  console.log('This is a function');
}
show();

var divide=function(a,b){
  return a/b;
}
console.log(divide(20,5));

//Passing a function to another function
function sum(a,b) {
  return a+b;
}
function average(a,b,fn) {
  return fn(a,b)/2;
}
console.log(average(34,42,sum));

//Example
function cmToIn(length){
  return length/2.54;
}
function inToCm(length) {
  return length*2.54;
}
function convert(fn,length){
  return fn(length);
}
var inch=convert(cmToIn,10);
var cm=convert(inToCm,10);

//Callback functions: A callback is a function passed as an argument to another function
//A callback function can run after another function has finished
//js is a asyncronize language. it can be a problem running function. To solve this we use callback function, promises or async/await
