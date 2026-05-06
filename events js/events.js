// let btn=document.querySelector("#btn");
// // btn.onclick =(e)=>{
// //    console.log(e)
// //    console.log(e.type)
// //    console.log(e.target)
// //    console.log(e.clientX,e.clientY)
// // }

// btn.addEventListener("click",function(e){
//     console.log("button was clicked 1");
 
// })
// btn.addEventListener("click",function(){
//     console.log("button was clicked 2");
// })
// const handeler3 =function(){
//     console.log("button was clicked 3");
// }
// btn.addEventListener("click",handeler3)
// btn.addEventListener("click",function(){
//     console.log("button was clicked 4");
// })

// btn.removeEventListener("click",handeler3)


let modeBtn =document.getElementById("#mode");
let  currMode="light" //dark
mode.addEventListener("click",()=>{
   if(currMode==="light"){
    currMode="dark";
    document.querySelector("body").style.backgroundColor="black";
   } else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";

   }
  

})