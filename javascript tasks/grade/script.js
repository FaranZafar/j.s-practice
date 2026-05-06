let input1= document.getElementById("number1")

function grade(){
    let num1 = Number(input1.value);
   
    if(num1>=80){
        alert("Your Grade is A");
    }
    else if(num1>=60){
       alert("your Grade is B");
    }
    else if(num1>=40){
        alert("your Grade is C");
    }
    else if(num1<40){
        alert("you are Fail");
    }
    else{
        alert("invalid information");
    }
}