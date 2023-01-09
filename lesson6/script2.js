// SANDWITCH FUNCTION
// function sandwitch(bread, spread1, spread2){
//     console.log(`I am making a ${spread1} ${spread2} sandwitch from ${bread} bread`)
// }
// sandwitch("white", "jelly", "peanut butter")

// 14.12.22
// console.log("Plant maize");
// setTimeout(function() {
//  console.log("Water plant")},0);
// console.log("Add fertilizer");


// const date = new Date()
// const day = date.getDate()
// const month = date.getMonth()+1
// const year = date.getFullYear()
// console.log(day+`/`+month+`/`+year)

// const h = date.getHours()
// const m = date.getMinutes()
// const s = date.getSeconds()
// console.log(h+`:`+m+`:`+s)

// OBJECTS
// const table= {
//     height: "1.5m",
//     width: "1m",
//     color: "white",
//     legs: 4
// } 
// // console.log(table)
// const chair= {
//     height: "1m",
//     width: "0.5m",
//     color: "black",
//     legs: 4
// } 
// // console.log(chair)

// const classroom = {
//     chairType: chair,
//     tableTypr: table,
// }

// classroom.students=21;
// console.log(classroom)
// console.log(table.color)
// let firstName = "Asaf"
// let lastName = "Artezinal"

// // const person1={
// //     firstName: firstName1,
// //     lastName: lastName1,
// //     fullName: function() {
// //         return this.firstName+` `+this.lastName
// // }
// // }

// const person1={
//     firstName: "b",
//     lastName: "h",
//     fullName: function() {
//         return firstName+ ` ` + lastName
// }
// }
// const person2={
//     firstName: "Orr",
//     lastName: "Farber",
//     fullName: function() {
//         return this.firstName+` `+this.lastName
// }
// }

// ARREYS
// console.log(person1.fullName())
// console.log(person2.fullName())

// const students = [
//     "Asaf", "Mark", "Lior"
// ]
// console.log(students[1])


// const students = [
//     // {name:"Orr", lastName:"Farber"},
//     // {name:"Lior", lastName:"Ronen"}
// ]
// // console.log(students[0].lastName);

// students.push("Asaf"+ " Ravid")
// students.push("Adam")
// students.push("Rom")
// console.log(students)

// LOOPS
// const a = [`maya`,`orr`,`morag`,`katya`]
// for (let i=0; i<a.length; i++){
//     // console.log(a[i])
//         // const name = a [i]
//         // console.log(name)
// }
// for (let name of a){
//     console.log(name)
// }
// console.log[a[0],a[1],a[2],a[3]]
// let i = 0
// // do { console.log(i); i++;}
// // while (i < 10);
// while (i<10){
//     console.log(i); i++
// }
// const lesson = {
//     name: "loops",
//     difficulty: "easy"
// }
// for (let name in lesson){
//     console.log(index+lesson[index])
// // }

// function convert (ils){
//     let usd= ils/3.4
//     console.log(ils)
//     }
// convert(10)

// function convert (usd){
//     let eur=1.06*usd 
//     console.log(eur)
//     }
// convert(10)

// function even(x){
//     if(x%2===0){
//         console.log(x, "even")}
//     else{
//         console.log(x,"not even")}}
// even(5)

// // PRIME NUMBER CACULATOR
// let y= 2;
// function prime(x){
//     const z= x%y;
//     while(x>y){
//     if(z!=0) {
//         y = y++;
//        return (x +" is prime")
//     }
//     else {
//        return (x + " isn't prime")
//        break;
//     }
// }
// }
// console.log(prime(4))

// function prime(x){
//     for(let y = 2; x>y; y++){
//         if((x%y)!=0){
//             return (x +" is prime")
//         }
//        else{
//         return (x +" isn't prime")
//         break;
//        }
//     }
// }
// console.log(prime(502293846))

// 6 Write a JavaScript conditional statement to sort three numbers on printing
// let x = 0
// let y = 3
// let z = 5
// function sort(x,y,z){
//     if (x>y && x>z){
//         if (y>z){
//             console.log(x +", " + y + ", " +z);
//         }
//         else{
//             console.log(x + ", " + z + ", " +y);
//         }
//     }
//     else if (y>x && y >z)
//     {
//         if (x>z){
//             console.log(y + ", " + x + ", " +z);
//         }
//         else{
//             console.log(y + ", " + z + ", " +x);
//         }
//     }
//     else if (z>x && z>y)
//     {
//         if (x>y){
//             console.log(z + ", " + x + ", " +y);}
//             else{
//                 console.log(z + ", " + y + ", " +x);
//             }
//         }        
//     }
//     sort(1,15,-2)
        
// let numbers = [1,8,9,6];
// numbers.sort(function(a, b){
//      return a - b
// }
// )
// console.log(numbers)

// 7
// for(let i=0; i<=15; i++){
//     if (i%4===0){
//         console.log(i+ ` divided by 4`)
//     }
//     else{
//         console.log(i)
//     }
// }

// 8
// for(let i=1; i<=100; i++){
//     if (i%3===0 && i%5!=0 ){
//         console.log(`Fizz`)
//     }
//     else if(i%5===0 && i%3!=0){
//         console.log(`Buzz`)
//     }
//     else if(i%5===0 && i%3===0){
//         console.log(`FizzBuzz`)
//     }
//     else{
//         console.log(i)
//     }
// }

// sum of all the odd numbers between 1-20

// let x = []
// for (let i=1; i<21; i=i+2 ) {
//   x.push(i)  
// }
// console.log(x)
// const sum = x.reduce(add, 0); 
// function add(accumulator, a) {
//     return accumulator + a;
//   }
//   console.log(sum); 

let sum = 0
for(let i=1; i<20; i=i+2){
    sum +=i 
}
console.log(sum)

// const students = []
// students.push("Asaf"+ " Ravid")
// students.push("Adam")
// students.push("Rom")
// console.log(students)

// LOOPS
// const a = [`maya`,`orr`,`morag`,`katya`]
// for (let i=0; i<a.length; i++){
//     // console.log(a[i])
//         // const name = a [i]
//         // console.log(name)
// }
// for (let name of a){
//     console.log(name)
// }


// const date = new Date()
// const day = date.getDate()
// const month = date.getMonth()+1
// const year = date.getFullYear()
// console.log(day+`/`+month+`/`+year)
