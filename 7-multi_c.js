// This JavaScript code will print "C is fun" n times, where n is the user input

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the number of times to print 'C is fun': ", (input) => {
    const n = parseInt(input, 10);
    for (let i = 1; i <= n; i++) {
        console.log("C is fun");
    }
    readline.close();
});