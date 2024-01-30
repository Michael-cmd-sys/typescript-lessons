/**
 * Class getters and setters
 * 
 * 
 */


class Person_ {
    private _age = 1;
    private _firstName = "";
    private _lastName = "";

    public set age(age: number){
        if(age<=0||age > 150) throw new Error("Age is invalid!");

        this._age = age;
    }

    public set firstName(fn: string){
        if(!fn) throw new Error("Firstname cannot be blank!");

        this._firstName = fn;
    }

    public set lastName(ln: string){
        if(!ln) throw new Error("Lastname cannot be blank!");

        this._firstName = ln;
    }

    public get age(){
        return this._age;
    }

    public get firstName(){
        return this._firstName;
    }

    public get lastName(){
        return this._lastName;
    }

    public getFullName():string{
        return `${this._firstName} ${this._lastName}`;
    }
}

let p2 = new Person_()
p2.age = (new Date).getFullYear() - 2004;
p2.firstName = "Michael";
p2.lastName = "Awuni";

console.log(`My name is ${p2.getFullName()} and I am ${p2.age} years old`);