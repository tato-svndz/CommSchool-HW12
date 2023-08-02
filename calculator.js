// Declarations
let isNumberOne = false;
let isNumberTwo = false;
let isOperation = false;
let numOne;
let numTwo;

// Logic
while (isNumberOne == false) {
    numOne = prompt('Enter Number One:');
    if (isNaN(numOne) || numOne.trim() == '') {
        alert('Not a Number, Please Enter a Number!');
    } else {
        isNumberOne = true;
    }
}

while (isOperation == false) {
    let operation = prompt('Enter Operation:');
    switch (operation) {
        case '+':
            while (isNumberTwo == false) {
                numTwo = prompt('Enter Number Two:');
                if (isNaN(numTwo) || numTwo.trim() == '') {
                    alert('Not a Number, Please Enter a Number!');
                } else {
                    isNumberTwo = true;
                }
            }
             
        alert(+numOne + +numTwo);
        isOperation = true;
        break;
    
        case '-':
            while (isNumberTwo == false) {
                numTwo = prompt('Enter Number Two:');
                if (isNaN(numTwo) || numTwo.trim() == '') {
                    alert('Not a Number, Please Enter a Number!');
                } else {
                    isNumberTwo = true;
                }
            }
            
        alert(+numOne - +numTwo);
        isOperation = true;
        break
    
        case '*':
            while (isNumberTwo == false) {
                numTwo = prompt('Enter Number Two:');
                if (isNaN(numTwo) || numTwo.trim() == '') {
                    alert('Not a Number, Please Enter a Number!');
                } else {
                    isNumberTwo = true;
                }
            }
            
        alert(+numOne * +numTwo);
        isOperation = true;
        break;
    
        case '/':
            while (isNumberTwo == false) {
                numTwo = prompt('Enter Number Two:');
                if (isNaN(numTwo) || numTwo.trim() == '') {
                    alert('Not a Number, Please Enter a Number!');
                } else {
                    isNumberTwo = true;
                }
            }
            
        alert(+numOne / +numTwo);
        isOperation = true;
        break;
    
        default: 
        alert('Please Enter a Proper Operation Symbol!');
    }
}
