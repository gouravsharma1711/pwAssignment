// Assignment 7
// Write a function fetch MultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the URLS concurrently. Return an array of responses.
// API to be used
// Change todo id for each API call
// https://jsonplaceholder.typicode.com/todos/1
async function fetchMultipleData(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      
      return data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; 
    }
  }
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];
  
  fetchMultipleData(urls).then(data => {
    console.log("Fetched data:", data);
  });
  