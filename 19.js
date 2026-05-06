// variables are containers for storing data
//variable can be declared in four ways
//New Methode
//1- let    2- const
//older Method
//1- var    2-automaticaly

// examples of new Mathode for creating variables
let a=10;
let b=5;
let c=a+b;
console.log(c);

const x=2;
const y=5;
const z=x+y;
console.log(z);


//name of variables are called identifiers
//it must be descriptive
//names are case-sensitive
// reserved words are not used as name
// numbers are not allowed to be the first letter of the name
//(_) javascripts treat like a letter

let _name="Faran";
//semicoln at the end is optional

//($) javascript also deals a dollar sign to like a letter
let $name="Faran Zafar";
let $$$=2;
let $mony=200;
// typeof keyword is used to find the type of keyword
console.log(typeof _name);

// operators in js
// =,+,-,*,/,<,>,<=,>=,==
//assignment operator
//=,+=,-=,*=,/=,%=,**=
let assignmentop=3
// arithmatic operators
//+,-,*,/,**,%,++,--
//addition operator
let num1=12;
let num2=12;
let addop=num1+num2; //answer is 24
// multiplication operator is used to multiply numbers
let multiplicationop=num1*num2;  // answer is 144
//devision operator
let devisionop=num1*num2;  // answer is 1
//subtraction operator
let subop=num1*num2;  // answer is 0
//subtraction operator
let exponop=num1**num2;  // answer is 12**12
//mudulus operator
let muduloop=num1%num2;  // answer is reminder

//++ increment operator
//-- decrement operator

//comparison operator
//1 ==   equal value
 a==12
//2 === equal value and equal data type
a===12
//3 !=  not equal
a!=12
//4 !== not equal value and not equal to data type
a!==12
//5 >  greater than
a>12
//6 < less than
a<12
//7 >= greater than are equal
a>=12
//8 <= less than or  equal to
a<=12

//logical operators
//1 &&  and operator
a<=12 && a>=6
//2 ||  or operator
a<=12 || a>=6
//3 !   not operator
a<=12 != a>=6