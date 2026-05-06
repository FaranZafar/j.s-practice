let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function largestnum() {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    if (num1 > num2) {
        alert("the largest num is " + num1);
    } else {
        alert("the largest num is " + num2);
    }
}