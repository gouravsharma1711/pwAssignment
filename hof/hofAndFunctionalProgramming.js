// 1) You are building an e-commerce website. Write a function that calculates the total price of a customer's order. You're given an array of items, each with a price property. Use the forEach method to iterate through the array and sum up the prices to get the total order amount.
const orderList =[
    {name:"Laptop",price:120000},
    {name:"Mobile",price :70000},
    {name:"Mobile Charger",price:1500},
    {name:"Laptop Charger",price:10500}
];
let sum=0;
orderList.forEach((items)=>sum+=items.price);
console.log(`sum : ${sum}`);

// 2. In this challenge, your task is to create a function that generates a random number and prints it to the console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2 - second delay between each number.
let randomNumber=()=>{
   let random= Math.floor((Math.random()*10)+1);
    console.log(random);
}
let printWithDelay=()=>{
    randomNumber();
    setInterval(randomNumber,2000);
}
printWithDelay();
//3. You are given an array of expense objects representing monthly expenses. Each object has properties, amount and category. Use the map method to create a new array that includes the calculated tax for each expense. Assume a tax rate of 10%
let expense=[
    {Amount:100,category:"Utilities"},
    {Amount:200,category:"Groceries"},
    {Amount:50,category:"Entertainment"}
];
let newExpenses=expense.map((expense)=>{
    let t=expense.Amount*0.1;
    return {...expense,tax:t};
});
console.log(newExpenses);
//4. Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries.
let filteredArray=expense.filter((expense)=>expense.category==="Groceries");
console.log(filteredArray);

//5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.
let totalAmount=expense.reduce((acc,currval)=>acc+currval.Amount,0);
console.log(`Total Amount : ${totalAmount}`);

/*6. You have a list of expenses, each with an amount and a category. Now, create a function named categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100,
 or "Low Expense otherwise. Afterward, this function along with the map method to generate a new array called categorizedExpenses, where each element represents the category for the corresponding expense in 
 the original list. Finally, print out the categorized Expenses array*/
 let categorizeExpense=(obj)=>{
    return (obj.Amount>100)? "High Expense" : "Low Expense";
 }
 let categorizedExpenses=expense.map((expense)=>categorizeExpense(expense));
 console.log(categorizedExpenses);

 // 7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3], Your task is to use the forEach method to iterate through each element in the array. During the iteration, double the value of each number. After completing the iteration, display the modified array.
 let modifiedArray=[];
 let originalNumbers=[2,5,8,10,3];
 originalNumbers.forEach((num)=>modifiedArray.push(num*2));
 console.log(modifiedArray);
 // 8 .Using the same array of numbers , use the forEach method to collect and store only even numbers in anew array.
 let evenNumberArray=[];
 originalNumbers.forEach((num)=>{
    if(num%2==0)evenNumberArray.push(num);
 })
 console.log(evenNumberArray);