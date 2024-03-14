// Simple example on typescript generic class

class Stack<T>{
    private elements: T[]= [];

    constructor(private size: number){
    }

    isEmpty():boolean{
        return this.elements.length === 0
    }

    isFull():boolean{
        return this.elements.length === this.size
    }

    push(element: T): void{
        if(this.isFull()) throw new Error("Stack overflow exception!!!");

        this.elements.push(element)
    }

    pop(){
        if(this.elements.length === 0) {
         throw new Error("Stack is empty!!!")
        }

        return this.elements.pop();
    }
}


function randBetween(low:number, high:number){
    return Math.floor(Math.random()*(high - low + 1) + low);
}

let nums = new Stack<number>(25);
// Uncommente this code to try the idea of generics
// while(!nums.isFull()){
//     let n = randBetween(1, 10);
//     console.log(`Pushed ${n} into the stack.`);
//     nums.push(n);
// }

// while(!nums.isEmpty()){
//     console.log(`Popped ${nums.pop()} out of the stack.`)
// }

let words = "The quick brown fox jumps over the lazy dog.".split(" ");

let wordStack = new Stack<string>(words.length);
words.forEach(el=>wordStack.push(el));

while(!wordStack.isEmpty()){
    console.log(wordStack.pop())
}