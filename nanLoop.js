let isNumber = false;
while (isNumber === false) {
    let num = prompt('Please Enter A Number:');
    if (num.trim() === '') {
        alert('Invalid Input. Please, Try Again!');
    } else if (isNaN(num)) {
        alert('Invalid Input. Please, Try Again!');
    } else {
        alert('Congrats, You Just Wrote: ' + num + '. Good Job!');
        isNumber = true; 
    }
}
