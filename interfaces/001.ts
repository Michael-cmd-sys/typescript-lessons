/**
 * ####################INTERFACES##################################
 * They define contracts within code. They also provvide
 * explicit names for type checking
 */

interface Person {
    firstName: string;
    middleName?: string; 
    lastName: string;
}


function getFullName(person: Person): string{
    return `${person.firstName} ${person.lastName}`;
}

let daniel = {
    firstName: "Daniel",
    lastName: "Afriyie",
    middleName: "Koduah",
    age: (new Date()).getFullYear() - 2004
}

console.log(getFullName(daniel))

// Using interfaces with readonly properties
interface Member{
    readonly studentID: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    course: string;
}

let student: Member;

student = {
    studentID: 20950352,
    firstName: "Michael",
    middleName: "Kofi",
    lastName: "Awuni",
    course: "BSc. Mathematics"
}

// interfaces for function types
interface StringFormat{
    (str:string, isUpper: boolean): string;
}

let format:StringFormat;

format = function(str, isUpper){
    return isUpper ? str.toLocaleUpperCase(): str.toLocaleLowerCase();
}

// Also 
let lowerCase: StringFormat;

lowerCase = function(str){
    return str.toLowerCase();
}

console.log(lowerCase("Hola", false));//Notice that the second arg doen't generate an error


// Class types with interfaces
// From languages like Java and c++, interafaces are usu.
// Used to define a contract between unrelated classes

interface Json{
    toJson(): string
}

class Human implements Json {
    constructor(private firstName: string, private lastName: string){

    }

    toJson():string {
        return JSON.stringify(this);
    }
}

let human = new Human("Michael", "Awuni");
console.log(human.toJson());