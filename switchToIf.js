isNumber = true;
while (isNumber == true) {
    let browser = prompt('Enter Browser:');
    if (browser == null) {
        isNumber = false;
        alert('Cancelled');
    } else if (isNaN(browser)) {
    if (browser == 'Edge') {
        isNumber = false;
        alert("you've Got The Edge!");
    } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        isNumber = false;
        alert('Okay, We Support These Browsers Too');
    } else {
        isNumber = false;
        alert('We Hope That This Page Looks OK!');
    }
    } else {
        alert('Your Input is a Number, Please Enter a Name of a Browser!');
    }
}
