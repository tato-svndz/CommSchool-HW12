function leapYear(year){
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    alert('Leap Year');
} else {
    alert('Not a Leap Year');
}
}
isNumber = false;
while (isNumber == false) {
    let year = prompt('Enter a Year');
    if (year == null){
        alert('Cancelled');
        isNumber = true;
    } else if (isNaN(year) || year.trim() == '') {
        alert('Not a Number. Please Enter a Numeric Value!');
    } else {
        leapYear(year);
        isNumber = true;
    }    
}