// Assignment 8
// Create a function racePromises that takes an array of promises and returns the result of the first promise that resolves or rejects Use Promise.race() to implement this
function racePromises(promises) {
    return Promise.race(promises);
  }
  const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved!'), 1000));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved!'), 500));
  const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected!'), 700));
  
  racePromises([promise1, promise2, promise3])
    .then((result) => {
      console.log("Race result:", result); 
    })
    .catch((error) => {
      console.error("Race error:", error); 
    });
  