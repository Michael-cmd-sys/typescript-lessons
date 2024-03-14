// Simple statements to get started with typescript
/**
 * Primitive tpes in typescsript include
 * number
 * bigint
 * string
 * boolean
 * null
 * undefined
 * symbol
 */
let counter: number ; //explicitly defined a variable with type number
let age: number; //Same as above
let active: boolean; //explicitly defined variable as type boolean

// Arrays
let friends: string[]= ["Kenneth", "Samuel", "Enoch", "Asford", "Edmund", "William", "Glover", "Marvin", "Ebenezer", "Hamza", "Wilson", "Jaffar", "Donatus", "Prince", "Franklin", "Raymond"];

//explicitly defined the above to have an array of values of type string

console.log(friends[1], friends[0], friends[4])

//Objects
let person:{
    name: string;
    age: number
};
// Created a type blueprint for the object array
person = {
    name: "Christian",
    age: 15
}

console.log(person);


// Functions
let greeting:(name:string)=>string;//annotated a function and it's return type explicitly

greeting = function(name:string){
    return  `Hi ${name}!`;
}


console.log(greeting("Amigo"));