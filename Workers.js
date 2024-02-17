// In programming, a "thread" is like a set of instructions that a computer program follows. When a program is single-threaded, it can only do one thing at a time. If a task takes a long time to complete, the whole program becomes unresponsive.
// To solve this, web workers are introduced. Workers allow you to run some tasks in a separate thread, so you can start a task, then continue with other tasks without making the whole program unresponsive. 

// to solve this issue, web workers are introduced. Workers allow you to run some tasks in a separate thread, so you can start a task, continue with other tasks without making the whole program unresponsive. This is useful for long-running operations.

// However, there is a concern with multiple threads accessing the same data, which can lead to unexpected changes and bugs. To prevent this, the main code and worker code in web workers don't have direct access to each other's data. They can only communicate by sending messages.

// there are three types of workers:
// dedicated workers
// shared workers 
// service workers


// Using web workers 
// We are going to use a worker to run the prime-number calculation, so our page stays responsive to user actions.


// creating a function to generate a specified nume of random prime nums
function generatePrimes(quota) {
    // helper function isPrime takes a num n as an input and checks if its a prime num.
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            // a for loop is used to iterate through values of c from 2 to the square root of n

            //inside the loop: 
            // if n is divisible by any number from 2 to the square root of n, its not a prime.
            if (n % c === 0) {
                // the condition checks if the remainder of the division (n % c) is equal to 0.
                // if it is, that means n is divisible evenly by c, indicating it's not a prime num.
                //the loop breaks, and the function returns false.
                return false;
            }
        }
        //if the loop completes without finding any divisors, the num is prime. 
        // the function returns true.
        return true;
    }

    // create an empty array to store prime numbers
    const primes = [];

    // define the maximum limit for random number generation
    const maximum = 1000000;

    // generate prime nums until reaching the specified quota 
    while (primes.length < quota) {
        // generate a random candidate num within the specified maxlimit
        const candidate = Math.floor(Math.random() * (maximum + 1));

        // check if the candidate is a prime num using the isPrime function
        if (isPrime(candidate)) {
            //it it's prime, add it to the array of primes
            primes.push(candidate);
        }
    }

    // return the array of generated prime nums
    return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    const primes = generatePrimes(quota);
    document.querySelector("#output").textContent =
        `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
        'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});

