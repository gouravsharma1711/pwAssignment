// Assignment 1
// Write a function sumAsync that takes two numbers as arguments and uses a callback to retum their sum after a delay of second
function sumAsync(a,b,callback){
    setTimeout(() => {
        callback(a+b)
    }, 2000);
}
sumAsync(10,5,(sum)=>{
    console.log(`sum : ${sum}`);
})