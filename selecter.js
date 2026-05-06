//----------------------crudRule practice-------------------------
//-------------------create/selector----------------------------
// document.getElementsByClassName("web")[0].innerHTML="javascript class"
// document.getElementsByTagName("h1")[0].innerHTML="javascript"
// document.getElementById("dev").innerHTML="welcome to javascript class."

//----------------queryselecterAll-----------------------
// document.querySelectorAll("#dev")[0].innerHTML="js class"
//----------------queryselecter-----------------------
// document.querySelector("h1").innerHTML="javascript class"
//--------------------update------------------------------
//------------------innertext---------------------------
// document.getElementById("dev").innerText="wellcome <h1>js</h1>"
//---------------------inner html------------------------------
// document.getElementById("dev").innerHTML="wellcome <h1>js</h1>"
//---------------------attribute and setattribute------------------------
// document.querySelector(".web").setAttribute("title","hallo world!")
//-------------------remove attribute-----------------
// document.querySelector(".web").removeAttribute("id");
//---------------------hasattribute------------------
  // let a =document.querySelector(".web").hasAttribute("title");
  // console.log(a);
  //-----------------image changes------------------

  // function onbulb(){
  //   document.getElementById("box1").src ="on.jpeg";
  // }
  // function offbulb(){
  //   document.getElementById("box1").src ="off.jpeg";
  // }
  //---------------------------------------------------------
  //--------------  add kerna---------------------
  // let main = document.getElementById("main")
  // let newelement= document.createElement("h1");
  // newelement.innerText="hello world";
  // document.getElementById("main").appendChild(newelement);

  //---------------remove element---------------
  // let remove=document.getElementById("remove")
  // main.removeChild(remove);

  //----------------classlist-----------
  // main.classList.add("bgcolor")
  // main.classList.remove("bgcolor")
  // main.classList.toggle("bgcolor")
  //-------------------------------------
  // main.style.backgroundColor="red";
  //=-----------------event listener-------------------
  // document.getElementById("btn").addEventListener("click",function(){
  //   alert("button clicked");
  // })
  // document.getElementById("btn").addEventListener("dblclick",function(){
  //   alert("button clicked");
  // })
  // document.getElementById("btn").addEventListener("contextmanu",function(){
  //   alert("button clicked");
  // })


  //---------------------set timeout----------------------------
  // console.log("code before setTimeout");
  // setTimeout(function(){
  //   console.log("inside")
  // },2000)

  //--------------------setinterval function------------------------
  //   console.log("code before setTimeout");
  // setInterval(function(){
  //   alert("inside")
  // },2000)

  //---------------- clearinterval  -------------------------
  // if (count ==5){
  //   clearInterval(interval)
  // }