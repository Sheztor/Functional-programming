function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Get the Fibonacci term to calculate
const limit = parseInt(process.argv[2]);

// Validate user input
if (isNaN(limit) || limit < 0) {
    console.log("Please enter a valid positive number.");
} else {
    console.log("Fibonacci sequence up to the " + limit + "th term:");
    for (let i = 0; i < limit; i++) {
        console.log(fibonacci(i));
    }
}
