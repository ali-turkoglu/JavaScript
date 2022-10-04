// creating a class and objects
class Car{} // it is created
// there is no access modifier in javascript.
const honda = new Car();
console.log(honda instanceof Car); // true

// constructor is the mechanism able to instanciate your object values
class Student{
  constructor(id,name){
    this.id =id;
    this.name=name;
  }

  study(){
    console.log(`${this.name} is studying`);
  }

  static doHomework(){
    console.log(`${this.name} is doing homework`);
  }

}

let s1 = new Student(1,'Mike');
console.log(`Student : ${s1.id} ${s1.name}`);

s1.study();

//Static
Student.doHomework();

// static variable
Student.age = 20;
console.log(Student);

// inheritance
class Animal{
  constructor(name){
    this.name=name;
  }

  eat(){
    console.log(`Animal is eating`);
  }
}

class Dog extends Animal{
  constructor(name,age){
    super(name);
    this.age=age;
  }
}

const d= new Dog('Puppy',4);
console.log(d);

d.eat();
