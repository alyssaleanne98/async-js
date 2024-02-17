// How to implement a promise-based API 

// Generally, when you implement a promise-based API, you'll be wrapping an asynchronous operation, which might use events or plain callbacks, or a message-passing model. You'll arrange for Promise object to handle the success or failure of that operation properly.


    //Wrapping setTimeout()
    //setTimeout()API to implement our alarm() function. the setTimeout()

        // Wrapping setTimeout() 
        // We'll use the setTimeout()API to implement our alarm() function. It will take as arguments the name of the person to wake up and a delay in milliseconds to wait before waking the person up.

        //Wrapping setTimeout()
            // we will use the setTimeout() API to implement our alarm() function. The setTimeout()API takes as arguments a callback function and a delay, given in milliseconds. When setTimeout() is called, it starts a timer set to the given delay, and whent the time expires, it calls the given function. 

// The Promise() constructor 
    // our alarm() function will rturn a Promise that is fulfilled when the timer expires. It will pass a "wake up" message into the then() handler, and will reject the promise if the caller supplies a negative delay value. 

// Using the alarm()API
    // we can call alarm(), and on the returned promise call then() and catch() to set handlers for promise fulfillment and rejection. 

// Using async and await with the alarm()API
    // since alarm() returns a Promise, we can do everything with it that we could do with any other promises: promise chaining, Promise.all(), and async/await. 