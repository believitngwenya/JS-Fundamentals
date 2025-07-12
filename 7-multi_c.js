// This JavaScript code will print "C is fun" n times, where n is the user input

let args = process.argv.slice(2);

if (args.length === 0 ||  isNaN(parseInt(args[0]))) {
  console.log("Missing number of occurrences");
} else {
  let n = parseInt(args[0]);
  for (let i = 0; i < n; i++) {
    console.log("C is fun");
  }
} 
