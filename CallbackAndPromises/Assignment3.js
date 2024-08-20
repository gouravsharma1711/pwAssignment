// Assignment 3
// Write an asynchronous function fetch Data that uses the Fetch API to retrieve data from a given URL and retums the parsed JSON response.
// API to be used
// https://jsonplaceholder.typicode.com/todos/1

async function fetchData(url){
    const response=await fetch(url);
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    const myJsonResponse= await response.json();
    return myJsonResponse;
    
}
const url="https://jsonplaceholder.typicode.com/todos/1";
fetchData(url)
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log("Error : ",error.message);
})





