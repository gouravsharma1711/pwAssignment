// Assignment 2
// Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
// "Data fetched successfuly."
function getData(){
    return new Promise((resolve,reject)=>{
        let error=true;
        if(!error){
            setTimeout(()=>{
                console.log("Promise Resolved");
                resolve({user:"Gourav",location:"Delhi"});
            },2000);
        }else{
            reject(new Error('Promise Not Resolve'));
        }
        
    })
}
getData().then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error : ",error);
})