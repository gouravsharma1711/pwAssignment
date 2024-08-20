// Assignment 5
// Implement a function multiply WithCallback that takes an array of numbers and a callback function. The function should multiply each element of the array by 2 and pass the result to the callback.
let callback=(result)=>{
    console.log(result);
}
function multiplyWithCallback(array,callback){
    let result=array.map((element)=>(element*2));
    callback(result);
}
multiplyWithCallback([1,2,3,4,5,6],callback);