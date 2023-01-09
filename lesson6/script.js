//const number = 3    //is constant, not changable 
//let number2 = 3     //can be changed directly
//var number3 = 3     //older version of 2015 - dont use
//number4 = 4         // global - cannot be accecced outside of the scope (other parts/different file)
       
//console.log(number2 + number) 
//const n = 3
//let n1 = 4
//console.log(n*2+n1*2)

//let string = "5"
//let string2 ="'6"
//console.log(string+string2) 

const firstName="Orr"
const surname="Farber"
const fullName= `${firstName} ${surname}`
const adress = "Tel Aviv"
const profession = "fullstuck"
const collageName= "CyberPro"
console.log(fullName) 

const description = `My name is ${firstName} ${surname} and i live in ${adress}. I study ${profession} in ${collageName}.`
console.log(description)

// block{} cannot be accessed from outside; 
//function{} what's inside the scope can be used, each function creates new scope;
//global; local

const x=8;
function myFunction() {
    const x=10
    console.log(x)
}
myFunction()
console.log (x)

//block
{
    const y=6;
    console.log (y)
}
const y=20;
console.log (y)

// practice
let price =0;
const kg = 12;
let veg="cucamber"
if(veg==="zukkini"){  //=== is cheking if equal ==is partly equal (string/number will be equal)
    price=5.9
}
else if(veg==="tomato" && (kg>10 || veg==="cucamber")){  // && is and; || is or 
    price=7
}
else{
    price=4
}
//price = kg>10?40:50 - like var if else
// price= kg>10 & 40  - like var if

console.log(price)

