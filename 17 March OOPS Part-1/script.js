'use strict';
//  Method 01 : Constructor functions 
const Person = function (firstname, birthyear){
    //  so this is an constructor function and we can create multiple objects using this constructor function
    this.firstname= firstname;
    this.birthyear = birthyear; 
}

// creating an object using constructor function
const vivek = new Person("vivek",2004);
// behind the scenes 
// 1. a new {} empty object is created
// 2. the constructor function is called and the this keyword is set to the new empty object
// 3. the new object is linked to the prototype of the constructor function
// 4. the new object is returned from the constructor function
console.log(vivek);
// if we want to add methods to the constructor function then we can use prototype property of the constructor function
Person.prototype.calcAge = function(){
    console.log(2026-this.birthyear);
}
vivek.calcAge();
console.log(vivek.__proto__); // this will give us the prototype of the constructor function
console.log(vivek.__proto__.__proto__) // this will give us the prototype of the Object constructor function because the prototype of the constructor function is an object and all objects in javascript are linked to the Object constructor function
console.log(vivek.__proto__.__proto__.__proto__) // this will give us null because the prototype of the Object constructor function is null
console.log(vivek.prototype); // this will give us undefined because prototype is not a property of the object but it is a property of the constructor function
console.log(Person.prototype); // this will give us the prototype of the constructor function
// just like we add methods to the constructor functions we can also add the properties to the constructor functions using prototype property
Person.prototype.species = "Homo Sapiens";
console.log(vivek.species);
console.log(vivek.hasOwnProperty("species"));
console.log(vivek.hasOwnProperty("firstname"));

console.dir(Person.prototype);
console.log(Person.prototype);