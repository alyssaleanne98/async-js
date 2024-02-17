// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
      generatePrimes(message.data.quota);
    }
  });
  
  // Generate primes (very inefficiently)
  function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
  }

  // remember that this runs as soon as the main script creates the worker. 

  // the first thing the worker does is start listening for messages from the main script. It does this using addEventListener(), which is a global function in a worker. Inside the message event handler, the data property of the event contains a copy of the argument passed from the main script. if the main script passed the generate command, we call generatePrimes(), passing in the quota value from the message event. 

  // the generatePrimes() function is just like the syncrhonous version, except instead of returning a value, we send a message to the main script when we are done. we use the postMessage() function for this, which like the addEventListener() is a global function in a worker.