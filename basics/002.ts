// Typescript object type

let employee:object;

employee = {
    name: "Michael Awuni",
    age: ((new Date).getFullYear() - 2004),
    jobTitle: "Researcher",
}

console.log(employee);

// Now this:
// employee = "Jaon Cloake" 
// will genearate an error as it is not of type 'object'
// Also if you try to access a property or method not defined
// in the employee object, an error occurs
// Example: console.log(employee.dob);

let course : {
    name: string;
    creditHours: number;
    difficulty: string;
} = {
    name : "Abstract Algebra",
    creditHours: 3,
    difficulty: "Normal"
}

console.log(course.name, course.creditHours);

// The 'object' type shouldn't be confused with the 'Object' type in js
// 'object' -> all non primitive values
// 'Object' -> functionality of all objects, 
// Eg. 'Object' has 'toString()' and 'valueOf()'