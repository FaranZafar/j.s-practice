console.log("Hello JavaScript");
alert("hallo Javascript");
document.writeln("hallo javascript");

document.writeln("Faran");
document.writeln("age:20");
document.writeln("Faisalabad");

console.log(5+10);
// single line comment
let a=10;
if(a%2==0){
   console.log("even number");
}else{
   console.log("odd number");
}
console.log(a);
let a=10;
var b=10;
const c=10;
a=20;
c=12;
console.log(c);
console.log(a)
console.log("JS is connected!");
alert("If you see this, the JS file is working!");
// 1. Select the elements from the DOM
const button = document.getElementById('calculateBtn');
const inputOne = document.getElementById('num1');
const inputTwo = document.getElementById('num2');
const resultDisplay = document.getElementById('result');

// 2. Define the operation
function performOperation() {
    // Get values from inputs (they come in as strings, so convert to Numbers)

   //  type casting
    const val1 = Number(inputOne.value);
    const val2 = Number(inputTwo.value);

    // Perform the operation
    const sum = val1 + val2;

    // 3. Show output back in the HTML
    resultDisplay.textContent = sum;
}

// 4. Attach the function to the button click
button.addEventListener('click', performOperation);

