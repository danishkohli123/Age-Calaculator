function result() {
    let value1 = document.getElementById('input').value;
    let current = new Date();
    let presentYear = current.getFullYear();
    // console.log(presentYear);
    let previous = new Date(value1);
    let previousYear = previous.getFullYear();
    console.log(previousYear);
    let result = presentYear - previousYear
    // console.log(result);
    return result;
}

function AgeCalculator() {
    let value1 = document.getElementById('input').value;
    if (value1 == '') {
        alert('Please enter your birthday date');
    } else if (isSelectedDateIsFutureDate()) {
        document.getElementById('h2').innerHTML = `Your age is -1 Years old`;
    } else {
        let age = result();
        document.getElementById('h2').innerHTML = `Your age is ${age} Years old`;
    }
}
function isSelectedDateIsFutureDate() {
    let value1 = document.getElementById('input').value;
    let current = new Date();
    // console.log(current);
    let future = new Date(value1);
    // console.log(future);
    let result = current - future
    // console.log(result);
    return result < 0 ? true : false;
}









