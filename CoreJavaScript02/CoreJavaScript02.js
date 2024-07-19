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
let person={
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
// 6)Create a simple JavaScript function named displayinfo that takes two parameters (name and role) and logs a message.
    function displayinfo(name,role){
        console.log(`my name is ${name} and my role is ${role}`);
    }
    displayinfo("gourav","frontend engineer");
// # Use call to invoke the displayinfo function with specific arguments.
// # Use apply to invoke the displayinfo function with arguments passed as an array. 
// # Create another function named greet that logs a greeting with this context.
// # Use bind to create a new function boundGreet with a specific context and log the greeting.
// 7. Tasks:
// Create an object named calculator with methods add, subtract, and multiply.
// Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or 'multiply') and two numbers.
// Use call to perform an addition operation using the calculate method.
// Use apply to perform a multiplication operation using the calculate method with arguments as an array.
// Create another object named discountCalculator with a discount percentage property and a method applyDiscount.
// Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused.