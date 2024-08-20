// 1. Create an arrow function called square that takes a number as an argument and returns its square. Use the arrow function to calculate the square of a given number and display the result.

let square=(number)=>Math.pow(number,2);
console.log(square(10));

// 2. The following is an array of 10 students ages:
// => const ages [19, 22, 10, 24, 20, 25, 26, 24, 25, 24] Sort the array and find the min and max age.

let ages=[19, 22, 10, 24, 20, 25, 26, 24, 25,24];
ages.sort();
console.log(ages);
console.log(`Min age in the array : ${Math.min(...ages)}`);
console.log(`Min age in the array : ${Math.max(...ages)}`);

// Find the median age (one middle item or two middle items divided by two)

let median=(ages)=>{
    let mid=Math.ceil(ages.length/2);
    return (ages.length%2==0)? (ages[mid]+ages[mid-1])/2:ages[mid];
}
console.log(`Median age : ${median(ages)}`);

// Find the average age (all items divided by number of items)

let totalsum=ages.reduce((acc,currval)=>{
    return acc+currval
},0);
let avg =totalsum/ages.length;
console.log(`Average of ages : ${avg} and round off value : ${Math.round(avg)}`);

// Find the range of the ages (max minus min)

console.log(`Ranges of ages : ${Math.max(...ages)-Math.min(...ages)}`);

// Compare the value of (min-average) and (max-average), use abs() method

let minDifference=Math.abs(ages[0]-avg);
let maxDifference=Math.abs(ages[ages.length-1]-avg);
console.log(`minDifference : ${minDifference} (round off value : ${Math.round(minDifference)}) and the maxDifference : ${maxDifference} (round off value : ${Math.round(maxDifference)})`);

// 3. Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.
let myMap=new Map();
myMap.set('Gourav',{
    email:"Gourav@123",
    age:20,
    location:"Delhi"

});
myMap.set('Ayushman',{
    email:"ayushmaan@123",
    age:19,
    location:"Delhi"
});
myMap.set('Harsh',{
    email:"harsh@123",
    age:19,
    location:"Delhi"
});

let getContact=(name)=>{
    return myMap.get(name);
}
console.log(getContact("Harsh"));
// 4.Create two objects persont and person2 with properties name and age. Create a function "introduce" that prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself using the introduce function.
let Person={
    name:"person1Name",
    age:26,
}
let person2={
    name:"person2Name",
    age:27
}
let introduce=function (){
    console.log(`Hello ,I'm ${this.name} and I'm ${this.age} year old`);

}
introduce.call(person2);
// 5. You are developing a program to manage a list of unique items. Write a Javascript program that uses a Set to store a collection of unique numbers. Use the Map object to associate each number with its square. Finally, print both the unique numbers and their corresponding squares.
const numbers = new Set([1, 2, 3, 4, 5]); // Unique numbers using Set
const numberSquares = new Map(); // Map to associate numbers with their squares

numbers.forEach(number => {
  numberSquares.set(number, number * number); 
});

console.log("Unique numbers and their squares:");
numberSquares.forEach((square, number) => {
  console.log(`Number: ${number}, Square: ${square}`);
});
// 6)Create a simple JavaScript function named displayinfo that takes two parameters (name and role) and logs a message.
function displayinfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
  }
  
  // Using call to invoke the function with specific arguments
  displayinfo.call(null, "Alice", "Developer");
  
  // Using apply to invoke the function with arguments passed as an array
  displayinfo.apply(null, ["Bob", "Designer"]);
  
  // Another function named greet
  function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  // Using bind to create a new function boundGreet with a specific context
  const person = { name: "Charlie" };
  const boundGreet = greet.bind(person);
  boundGreet();

// 7. Tasks:
// 7) Calculator object with methods and using call, apply, and bind
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    
    calculate: function(operation, a, b) {
      return this[operation](a, b);
    }
  };
  
  // Using call to perform an addition operation
  console.log("Addition using call:", calculator.calculate.call(calculator, 'add', 5, 3));
  
  // Using apply to perform a multiplication operation with arguments as an array
  console.log("Multiplication using apply:", calculator.calculate.apply(calculator, ['multiply', 4, 6]));
  
  // DiscountCalculator object and bind usage
  const discountCalculator = {
    discountPercentage: 10,
    applyDiscount(price) {
      return price - (price * this.discountPercentage / 100);
    }
  };
  
  // Using bind to create a new function calculateDiscount bound to discountCalculator object
  const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
  console.log("Price after discount:", calculateDiscount(200));