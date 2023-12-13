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

  // Here is another example:

  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");

  // 1. we are calling the fetch()API and assigning the return value to the fetchPromise varaiable.
  // 2. immediately after, logging the fetchPromise variable. Why is this? This should output something like Promise { <state>: "pending"}, telling us that we have a promise object, and it has a state whose value is "pending." The "pending" state means that the fetch operation is stil going 

  //Catching Errors
    // how do we handle errors? the fetch()API can throw an error for many reasons and we are throwing an error ourselves if the server returned an error. 
    // to handle error handling, Promise objects provide a catch() method. this method is called when the asynchronous operation fails.

    // if you add catch() to the end of a promise chain, then it will be called when any of the asynchronous function calls fail. so you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle errors. 

    const fetchPromise = fetch(
        "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      
      fetchPromise
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data[0].name);
        })
        .catch((error) => {
          console.error(`Could not get products: ${error}`);
        });


        // Promise terminology 
            // PENDING: the promise has been created, and the asynchronous function its associated with has not succeeded or failed yet. This is the state your promise is in when its returned from a call to fetch(), and the request is still being made.
            // FULFILLED: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
            //rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called. 
            
            // NOTE: that what "succeeded" or "failed" means here is up to the API in question. For example, fetch() rejects the returned promise if (among other reasons) a network error prevented the request being sent, but fulfills the promise if the server sent a response, even if the response was an error like "404 not found" 


      