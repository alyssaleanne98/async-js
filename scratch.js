// How to use promises
    // Promises are the foundation of asynchronous programming in modern JS. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation. 

//fetch()API
    // A visual representation of a basic example using the fetch()API to make a GET request and handle the response. 

    // 1. initialize a fetch 
        //fetch('https://api.example.com/data')
        // initialize a fetch, provide the URL you want to fetch data from 
    // 2. Handle the Promise: 
        //fetch() returns a promise. You can use '.then() to handle the success and '.catch()' for errors. 
    // 3. Handle JSON data: 
        // if you are expecting JSON data, you need to convert the response to JSON. 
            // In what cases would you expect to use JSON data? For AJAX requests, data storage, API Endpoints.
            
    // 4. Putting it Together: 
        // this is a simple example that fetches data from an API, converts the response to JSON, and logs it to the console. 
    fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });