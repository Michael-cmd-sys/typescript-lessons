/**
 * Class inheritances in typescript
 */

class _Person {
    constructor(private firstName:string, private lastName:string){
        this.firstName= firstName;
        this.lastName = lastName;
    }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string{
        return `I am ${this.getFullName()}.`;
    }
}

// Inheritance
class Employee extends _Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle:string
    ){
        super(firstName, lastName);
    }

    describe(): string {
        return `${super.describe()}\nI am a ${this.jobTitle}`;
    }
}

let e1 = new Employee("Michael", "Awuni", "Software developer");
console.log(e1.describe());