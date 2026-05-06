function hello(){
    // alert("Hello Javascript");
    // console.log("hallo Javascript");
    // document.writeln("Hallo Javascript");
    let name="Faran";
    let age=19;
    alert(`my name is ${name} and I am ${age} year old.`);

}
// function sum(a,b){
//     alert(`Sum  is ${a+b}`);
// }

function welcome(){
    alert("welcome to Javascript");
}
function greet(name){
    alert(`Hello ${name}`);
}
function countCharacters() {

    var text = document.getElementById("textInput").value;
    var length = text.length;

    document.getElementById("count").innerHTML = length;

}

function sum(){
    let number1=parseInt(document.getElementById("num1").value);
    let number2=parseInt(document.getElementById("num2").value);
    let sum=number1+number2;
    document.getElementById("answer").innerHTML=sum;
}
function togglePassword(){

     let pass=document.getElementById("password");
     if(pass.type==="password"){
        pass.type="text";
     }else{
        pass.type="password";
     }
}

function generateNumber(){

    let num = Math.floor(Math.random() * 10) + 1;

    document.getElementById("result").innerHTML = num;

}
