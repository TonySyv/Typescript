// Object (plain JavaScript object)
const myObject = {
  name: "Alice",
  age: 30,
};

// Type (defining the shape of an object)
type PersonType = {
  name: string;
  age: number;
};

// Interface (defining a contract for object structure)
interface PersonInterface {
  name: string;
  age: number;
}

let person1: PersonType = { name: "Bob", age: 25 }; 
let person2: PersonInterface = { name: "Charlie", age: 35 }; 
// Class implementing an interface
class Employee implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
