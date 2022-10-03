var person={
  firstName:'Mike',
  lastName:'Smith'
}   // curly braces represent the objects

console.log(person);
console.log(person.firstName);

// if property contains space, place it inside quotes
var address={
  'building no':3443,
  street:'Jones Branch',
  state:'VA'
}
console.log(address['building no']);
console.log(address['state']);
console.log(address.state);

//Adding a new property
person.age=30;
console.log(person);

//Delete a property
delete person.age;
console.log(person);

//Checking if property exists with in keyword
console.log('street' in address);

//Itering over properties of an object
var course={
  name:'JS Training',
  url:'www.google.com',
  subject:['es5','es6','js','ts']
}
for(var key in course){
  console.log(key);
  console.log(key+':'+course[key]);
  }

//Example
var myHonda={
  color:'red',
  wheels:4,
  engine:{
    cylinders:4,
    size:2.2
  },
  hp:[300,500,100]
}
console.log(myHonda.engine.size);
console.log(myHonda.hp[2]);

var car={
  make:'Honda',
  model:'Civic',
  year:2000,
  color:'red',
  mileage:74000,
  started:false,
  start:function(){
    this.started=true;
  },
  drive:function(){

    if (this.started) {
      console.log('It is running');
    }else{
      console.log('You need to start the engine first');
    }
  }
}
car.start();
car.drive();

// Ready objects --> Global js objects: string,number,boolean,date,math,regex
//
