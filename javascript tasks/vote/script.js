let input1 = document.getElementById("age");
 
function vote(){
     let num1 = Number(input1.value);
     if(num1>=18){
        alert("you are Eligible for Vote")
     }
     else if(num1<18){
        alert("you are not Eligible For Vote")
     }
     else{
      alert("invalid information");
     }
}