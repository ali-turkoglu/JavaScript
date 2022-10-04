let map = new Map();
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

console.log(map.size);

console.log(map.get(1)); // num1

console.log(map.get('1')); // str1

// Map can use objects as keys
let student = {name:'Mike',age:20};
let visits = new Map();
visits.set(student,100); // exp: Mike visit the campus 100 times

// Map can use functions as keys
let fun = function(){console.log('Hello');};
visits.set(fun,'This is function');
console.log(visits.get(fun));

// chaining
let myCars = new Map();
myCars.set(1,'Honda')
      .set(2,'Toyota')
      .set(3,'BMW');

console.log(myCars.get(2));

// iteration - over keys
for(let car of myCars.keys()){
  console.log(car);
}

// iteration - over values
for(let value of myCars.values()){
  console.log(value);
}

//both
for(let value of myCars){
  console.log(value);
}

myCars.forEach((value,key) => {console.log(key+' = '+ value);})
