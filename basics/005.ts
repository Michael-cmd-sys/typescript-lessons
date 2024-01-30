/**
 * Type aliases and string literal types
 * 
 * syntax for type aliases: type alias = 'existingType'
 * They allow you to create your own custom types
 * 
 * 
 * String literals allow you to define a type that accepts only one specified string literal
 */

type alnum = string | number;

let input: alnum;
input = "Hello John Nash";
console.log(input);
input = (new Date).getFullYear() - 2004;
console.log(input);
// However `input = {} or input = true` will throw an error

// String literal types
let click:"click";
click = "click";//valid
// click = "Hello" throws an error

let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown" | "mouseover";

mouseEvent = "click";
mouseEvent = "dblclick";
mouseEvent = "mouseup";
// mouseEvent = "scroll"; trows an error