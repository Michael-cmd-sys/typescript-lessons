/**
 * ==========TYPE CASTING=========================
 * 
 * Again feeling a bit lazy to implement it in code 
 * Will do so later
 * 
 * Syntax: 
 *          let varName = <'type'>value
 *      or
 *          let varName = value as 'type'
 *      or 
 *          let varName: 'type' = value
 */




// Type assertions
//      Instructs the typescript compiler to treat a value as a specified type
function getNetPrice(price: number, discount: number, format:boolean): string|number{
    let netPrice = (1 - discount) * price;
    return format? `Ghs${netPrice.toFixed(2)}`: netPrice;
}

let netPrice = getNetPrice(100, 0.25, true) as string;//this is 
// a type assertation
console.log(netPrice)
// or
let net_price = <number>getNetPrice(120, 0.08, false);
// However the above isn't compatible with most libraries
// Like react and hence should only be used sparingly
console.log(net_price)
