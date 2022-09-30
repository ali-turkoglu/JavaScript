// arithmetic

console.log(3+4*5/2);

//assigment
var x=5;
x+=5;
console.log(x);

//comparison --> all is the same with java, just === usage extra in javascript
var one =1;
var one_again=1;
var one_string='1';

console.log(one==one_again);     //true
console.log(one===one_again);   //true
console.log(one==one_string);   //true  --> same value even types are different
console.log(one===one_string);  //false --> types are different

//logical
console.log((5<2) && (2>=3)); //false
console.log((5<2) || (2>=3));//true
console.log(!(5==2));       //true
