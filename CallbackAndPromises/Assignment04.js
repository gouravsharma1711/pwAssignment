// Assignment 4
// Writo an asynchronous function fetchData that uses the Fotch API to retrieve data from a given URL (https:// jsonplaceholder.typicode.com/tedes/1) and returns the parsed JSON response.
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

