
function factorial(n) {
    if (isNaN(n) || n < 0){
        return 1; // Return 1 for negative numbers or NaN
    } else if (n === 0 || n === 1) {
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}

console.log(factorial(parseInt(process.argv[2]))); // Calculate factorial of the second command line argument
// If no argument is provided, it will return 1 by default 