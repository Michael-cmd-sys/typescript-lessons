// Typescript arrays

let skills: string[];
skills = ["Problem Solving", "Critical thinking", "Collaboration", "Software design", "Analytical"];

skills.push("Programming");

// storing an array of elements with mixed values
let scores: (string | number)[];

scores = ["Programming", 0.76, "Software Design", 0.64];

console.log(scores);

// Tuples are typescript's independent type for handling data in a specific order


let rgb: [string, string, string];
rgb=["red", "green", "blue"];

console.log(rgb);