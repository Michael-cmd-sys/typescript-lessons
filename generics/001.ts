/**
 * ++++++++++++GENERICS+++++++++++++++++++++++++++++++++++
 *  Allows you to write reusable and genralised form of functions,
 * classes and interfaces.
 * 
 * Assume we are creating a function that gets a random number 
 *  from a list of numbers, or random color from a list of 
 *  strings or random element form a list of elements
 * 
 * Writing a function for each is not very scalable or yet
 * very efficient and thus provides one basis for which 
 * typescript generics might come in handy
 * 
 * ADVANTAGES
 * -Leverages type checks at compile time
 * -Eliminate type castings
 * -Allow you to implement generic algorithms
 */

function getRandomElement<T>(items:T[]):T{
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 3, 2, 0, 6];//Type inference is done here
console.log(getRandomElement(numbers));

let colors = ["red", "yellow", "cyan", "magenta", "blue"];
console.log(getRandomElement(colors));

// Returning multiple types
function merge<U extends object, V extends object>(obj1: U, obj2:V):object{
    return {
        ...obj1,
        ...obj2
    }
}
// Implemented simple type constraint here
let result = merge(
    {
        name: "Michael Awuni",
        course: "BSc. Mathematics",
        school: "knust"
    },
    {
        name: "Michael Kofi Awuni",
        nationality: "Ghanaian",
        gender: "Male"
    }
)
console.log(result);