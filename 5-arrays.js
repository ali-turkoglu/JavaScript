// creating array
var scores= new Array(); // empty
var numbers= new Array(10); // array with initial size 10
var myNumbers= new Array (8,9,3,2); // array with initial elements

var athletes= Array(3); //array with initial size 3
var signs= Array('Red'); // array with one element

var emptyArray=[]; //most usage way to create
var colors=['red','blue','green'];

//Accesing the array elements
console.log(colors); //print with square brackets
console.log(colors.toString());//print just element with comma
console.log(colors[0]);//red

//Basic operations on arrays
colors.push('purple'); // add element to end of an array
console.log(colors);

colors.unshift('white'); // add element to begining of an arrays
console.log(colors);

colors.pop(); // removes the last element
console.log(colors);

colors.shift(); // removes the fist elements
console.log(colors);

var index=colors.indexOf('blue');
console.log('index no of blue is :'+index);

colors.splice(0,1); // delete elements in arrays --> go index 0 and delete 1 items

colors.splice(2,0,'black');//inserts elements
//2--> starts position
//0--> delete 0 items(not delete)
//third,forth or so on are the new elements

var array=[1,32,2,43];
console.log(array.sort());//sort the elements of an array in place and returns the arrays
//it sorts first number, Capital letters, then small letters

//multidimensional Array is used in javascript, it is the same with java
var activities=[['work',3],['eat',2],['commute',7]];

console.log(activities[1][1]); // 2
