// Q1 : Write a program that grades students based on their marks.
let studentMarks=86;
let grade;
let grading=(studentMarks)=>{
    if(studentMarks>=90) grade='A';
    else if(studentMarks>=70 && studentMarks<90)grade='B';
    else if(studentMarks>=50 && studentMarks<70)grade='C';
    else grade='F';
}
grading(studentMarks);
console.log(grade);


// Q2 : Generate Numbers between any 2 given numbers

let num1=10;
let num2=35;
for(i=num1+1;i<=num2;i++){
    console.log(i);
}

// Q3: use a nested ternary operator to check that a number is positive , negative or zero. you have to print "positive" if the number is positive and similarly for negative and zero

let number=0;
let check=(number)=>{
    return (number<0)? "negative":((number===0)? "zero":"positive");
}
console.log(` variable number is ${check(number)} `);
number=-25;
console.log(` variable number is ${check(number)} `);
number=75;
console.log(` variable number is ${check(number)} `);

//Q4: describe the usage of comma opertor in js and provide an example

// Answer 
/*

Usage of the Comma Operator in JavaScript
The comma operator (,) in JavaScript evaluates each of its operands (from left to right) and returns the value of the last operand. This operator is typically used in
situations where multiple expressions need to be evaluated, but only the result of the last expression is needed.

# Key Points :- 
1) Evaluates Multiple Expressions: The comma operator allows multiple expressions to be evaluated in a single statement.
2) Returns the Last Expression: The result of the entire comma expression is the value of the last expression.
# Common Usage Scenarios
  ## For Loop:
It can be used to include multiple expressions in the initialization or increment section of a for loop.
 ##Side Effects:
To execute multiple expressions where the side effects of the earlier expressions are needed but only the result of the last expression is used.

*/
// Example 1: Using comma operator in a general context
let a = 10;
let b = 20;
let result = (a += 1, b += 2, a + b);  // Evaluates a += 1, b += 2, then a + b

console.log(result);  // Output: 33
// Explanation: a becomes 11, b becomes 22, then result is 11 + 22 = 33

// Example 2: Using comma operator in a for loop
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

/* Q5 : you're creating a basic login system. Make a login function with two things : ausername and a password .
 check if the username is "admin" and password is "12345". if they're both correct show "login successfully" if not show "invalid credentials" 
 
*/
let password="12345";
let userName="admin";
let checkLogIn=(username, password)=>{
    (userName=="admin" && password=="12345")? console.log("login successfully"): console.log("invalid credentials");
}
checkLogIn(userName,password);
password="58915666";
checkLogIn(userName,password);

/* Q6: you are working on  an e-commerce platform . write a js program that takes the payment method("credit","debit",or "paypal") as input and uses a switch statement 
to determine and print the processing fee associated with each payment method. for example , "credit " may have a processing fee of 2% "debit" 1.5% and "paypal" 3%.*/

let paymentMethod="credit";
let paymentCharges=(paymentMethod)=>{

    switch (paymentMethod) {
        case "credit": console.log("Processing fee for credit Payment : 2%");
            
            break;
        case "debit": console.log("Processing fee for debit Payment : 1.5%");
            break;
        case "paypal": console.log("Processing fee for paypal Payment : 3%");
            break;
        default:
            break;
    }
}
paymentCharges(paymentMethod);

/* Q7: You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".*/

let currentTemp=20;
let weatherCondition =(currentTemp)=>{
    (currentTemp>30)? console.log(`current weather condition is hot`):console.log(`current weather condition is moderate`);
}
weatherCondition(currentTemp);

/* Q8: Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.*/

let n=5;
let sum=0;
let i=1;
do{
    sum+=i;
    i++;
}while (i<=n);
console.log(`Sum of  n numbers : ${sum}`);