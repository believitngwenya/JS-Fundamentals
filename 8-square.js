 
function printSquare() {
    const size = process.argv[2];
    if (!size || isNaN(size)) {
        console.log("Missing size");
        return;
    }
     
        for (let i = 0; i < size; i++) {
            let row = '';
            for (let j = 0; j < size; j++) {
                row += 'X';
            }
            console.log(row);
        }
    
}

printSquare();
