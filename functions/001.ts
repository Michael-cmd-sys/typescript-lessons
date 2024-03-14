/**
 * Function types
 * 
 * 
 */


function greet(name: string):string{
    return `Hola ${name}!`;
}

console.log(greet("Michael"));

// Optional parameters of functions
function multiply(a:number, b:number, c?:number){
    if(typeof c !== "undefined") return a*b*c;
    return a*b;
}

// Rest parameters
function getTotal(...numbers:number[]):number{
    let total = 0;//type is implicitly declared aas number here 

    total = numbers.reduce((prev, curr) => prev + curr, 0);
    return total;
}

console.log(getTotal());
console.log(getTotal(1.3, 2.8, .9));
console.log(getTotal(10, 20, 30, 40, 50));

