let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the any type
const json = '{"x": 10, "y": 20}';
const cordinates: {x: number; y: number} = JSON.parse(json)
console.log(cordinates); //{"x": 10, "y": 20}

cordinates.x.toPrecision(3)

// 2) when we declare a variable on one line
// and initializate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;
//let foundWord = false (Better way)

for (let i = 0; i < words.length; i++) {
  if(words[i] == 'green'){
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let nunbers: number[] = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i =0; i < nunbers.length; i++){
  if(nunbers[i] > 0){
    numberAboveZero = nunbers[i];
  }
}

