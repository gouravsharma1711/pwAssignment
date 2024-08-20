// Assignment 6
// Create a function fetch UserDataAndPosts that takes a user ID and fetches the user details and their posts using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are fetched. Return an object with user details and posts.
// API to be used
// For user: https://jsonplaceholder.typicode.com/users/$(userid) For post: https://jsonplaceholder.typicode.com/posts?userid=$(userid)
function UserDataAndPosts(UserId){
    let UserResponse=fetch("https://jsonplaceholder.typicode.com/users/$(userid)");
   return  UserResponse.then((User)=>User.json())
    .then((UserData)=>{
        return fetch("https://jsonplaceholder.typicode.com/posts?userid=$(userid)")
        .then((post)=>post.json())
        .then((postData)=>{UserData,postData})
    })
}
let mydata=UserDataAndPosts(5);
mydata.then((data)=>{
    console.log(data);
})