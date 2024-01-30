/**
 * Static methods and properties
 */

class Emp{
    private static headCount:number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string
    ){
        Emp.headCount++;
    }
    
    public static getHeadCount(){
        return Emp.headCount;
    }
    
}

let john = new Emp("John", "Ecklu", "CEO");
let kofi = new Emp("Kofi", "", "CTO");

console.log(Emp.getHeadCount());

/**
 * Abstract classes
 *      used to define common behaviours for derived calsses to extend. Cannot be instantiated directly.
 * 
 * An abstract method doen't include an implementation.
 *      It onlyl defines the signature of the method without including the method body
 *      Can only be implemented in a derived class
 */     

abstract class Empl{
    constructor(private name:string){
    }

    abstract getSalary(): number

    get fullName(): string{
        return `${this.name}.`;
    }

    compensationStatement():string{
        return `${this.name}: makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends Empl{
    constructor(name:string, private salary:number){
        super(name);
    }

    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Empl{
    constructor(name: string, private hours: number, private rate:number){
        super(name);
    }

    getSalary(): number {
        return this.hours * this.rate
    }
}

let lawrencia = new FullTimeEmployee("Lawrencia", 600);
let michael = new Contractor("Michael Awuni", 2, 200);

console.log(lawrencia.compensationStatement());
console.log(michael.compensationStatement())