/**
 * Access modifiers change the visibilty of the properties and
 * methods of a class
 * 
 * similar to java and c++ access modifiers
 * private : limits visibilty to same class only
 * public : visibility outside and inside the class
 *          By default all class properties and methods get the public access modifier
 * protected: accessible within same class and subclasses only
 *            (Inherited classes are also able to access from this)
 * readonly: mark properties of a class as immutable.
 *           It's assignment can only occur in one of two places
 *           -In the property declaration
 *           -In the constructor of the same class
 */

class Person {
    protected refNumber: number;
    private firstName: string;
    private lastName: string;
    readonly birthDate: Date;

    constructor(stID: number, fn:string, ln:string, dob: Date){
        this.refNumber = stID;
        this.firstName = fn;
        this.lastName = ln;
        this.birthDate = dob;
    }

    getFullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let p1 = new Person(20950352, "Michael", "Awuni", new Date(2004,10, 29));
// console.log(p1.firstName) throws an error as firstNAme can't be accessed from here
// p1.birthDate = new Date() This also results in an error as it is a readonly property
console.log(p1);