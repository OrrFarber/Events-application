//1. Write a JavaScript program to find the scope of a triangle where lengths of the three of its sides are 5, 6, 7.
// let side1=5;
// let height=6;
// console.log(5*6/2)

//2. Write a JavaScript program to calculate multiplication and division of two numbers 
// const x=8;
// const y=10
// const multiply = console.log(x*y)
// const devide = console.log(x/y)

//3. celsious to fahrenheit
// let cTemp= 30;
// let fTemp= cTemp*1.8+32;
// const temp = `f temp is ${fTemp}`
// console.log(temp);

//4. 2 numbers, print true if one/sum = 50
// let m=10
// let p=50
// let sum=50
// if(m===50 || p===50 || m+p===50 ){  
//     sum=true
// }
// else{
//     sum=false
// }
// console.log(sum)

//5. 2 numbers - of positive/negative
// const one=3
// const two=-2
// const number= one>0 & two<0? "true":"false" 
// console.log(number)

//6. converts a specified number to an array of digits

//7. accept two integers and display the larger
// const one=3
// const two=5
// const number= one>two? one:two
// console.log(number)

//8. 9. conditional statement to find the largest of 5 numbers
// a=5; b=6; c=-1; d=0; f=8
// if (a>b && a>c && a>d && a>f){
//     console.log(a)}
// else if (b>a && b>c && b>d && b>f){
//     console.log(b)}
// else if (c>a && c>b && c>d && c>f){
//     console.log(c);    }
// else if (d>a && d>c && d>b && d>f){
//     console.log(d);}
// else{
//     console.log(f);}

// 10.  Print “even” if the number is divisible by 2.
// let number = 101
// if (number%2 === 0){
//     console.log("even")}
// else{
//     console.log("odd")}

// 11. Check if input variable is a number or not
//ok no

//12. Function `findTriangleType()` finds the type of the triangle for given side values by using “==” and “&&"
// 1. Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// 2. Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// 3. Else “Scalene triangle.” since values of all sides are unequal.

// 13 Find check if a year is leap year or not
// Function `checkLeapYear()` find if the given year is a leap year or not by using %, !=, && and ||
// operators in JavaScript
// 1. If year is divisble by 4 and not divisble by 100 then print “leap year”.
// 2. Or if year is divisible by 400 then print “leap year”.
// 3. Else print “not a leap year”.
// let year = 2013;
// function checkLeapYear(x,y){
//     if(x%y===0 && x%100 !=0 || x%400===0){
//         console.log(x,"leap year")}
//     else{
//         console.log(x,"not leap year")}}
// checkLeapYear(2013,4);
// checkLeapYear(2014,4);
// checkLeapYear(2015,4);
// checkLeapYear(2016,4);
// ternari

// let year = 2014
// function checkLeapYear(year){
// year % 4 ===0 && year % 100 !=0 || year % 400 ===0? 
// console.log(year + " leap year") : 
// console.log(year + " not leap year")}
// checkLeapYear(year)

// 14 Print “S grade” if marks is between 90 and 100.

// 15. Find number of days in a given month
// Function `findDaysInMonth()` finds the number of days in a given month of a year.
// 1. If month is outside the range of 1 and 12 print “Invalid month”.
// 2. If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// 3. Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// 4. Else print “31 days”



// 16 Write a code that takes the base and height of a triangle and prints its area.

// 17 a valid triangle is a triangle that the sum of it angles is 180 , write a code print whether the triangle is
// valid or not , define a 3 different angles;

// SWITCH (IF/ELSE IF) IN A FUNCTION
// let switchNumber = "four"
// switch (switchNumber) {
//     case 1 :
//     switchNumber = "one" 
//     break
// }
// console.log(switchNumber)

// function switchFunction(x){
//     switch(x){
//         case "triangle":
//         console.log("3")
//         break
//         case "square":
//         case "rec":
//         console.log("4")
//         break
//         default: console.log("no")
//         break
// }}
// switchFunction("triangle")
// switchFunction("square")
// switchFunction("rec")
// switchFunction("4")

// SANDWITCH FUNCTION
// function sandwitch(bread, spread1, spread2){
//     console.log(`I am making a ${spread1} ${spread2} sandwitch from ${bread} bread`)
// }
// sandwitch("white", "jelly", "peanut butter")

// ADD TEN
// let numcer = 0
// function addTen(x){
//     numcer=x+10
//     console.log(numcer)
// }
// addTen(10)
// addTen(20)
// addTen(13)
// addTen(23)

//ADD COUNTER
// let counter=0;
// function addToCounter(){
//     counter ++ 
//     console.log(counter)
// }
// addToCounter()
// addToCounter()

// function addTen(number){
//     // return number+10
// }
// const newNumber=addTen(10)
// console.log(newNumber, addTen(8))

// QUIZ 1
// let x= 8
// function number (x){
//     return x
//     }
//     console.log(number(x))

// israeli to greorian dates

// // SWITCH (IF/ELSE IF) IN A FUNCTION
// function switchFunction(x){
//     switch(x){
//         case "Kislev":
//             console.log("December")
//             break
//         case "Tevet":
//             console.log("January")
//             break
//         case "Shevat":
//             console.log("Feburary")
//             break
//         case "Adar":
//                 console.log("March")
//                 break
//         case "Nisan":
//             console.log("April")
//             break
//         case "Iyyar":
//             console.log("May")
//             break
//         case "Sivan":
//             console.log("June")
//             break
//         case "Shvat":
//             console.log("July")
//             break
//         case "Tammuz":
//             console.log("August")
//             break
//         case "Av":
//             console.log("September")
//             break
//         case "Elul":
//             console.log("October")
//             break
//         case "Tishrei":
//             console.log("November")
//             break
// }}
// switchFunction("Tishrei")
// switchFunction("Elul")
// switchFunction("Av")
// switchFunction("Tevet")

// Function `findDaysInMonth()` finds the number of days in a given month of a year.
// 1. If month is outside the range of 1 and 12 print “Invalid month”.
// 2. If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// 3. Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// 4. Else print “31 days”

// function findDaysInMonth(x){
//         switch(x){
//             case "Feburary":
//                 console.log("29 days")
//                 break
//             case "April":
//             case "June":
//             case "September":
//             case "November":
//                 console.log("30 days")
//             break
//             case "January":
//             case "March":
//             case "May":
//             case "July":
//             case "August":
//             case "October":
//             case "December":            
//                 console.log("31 days")
//             break            
//             default: console.log("not a month") 
// }}
// findDaysInMonth("July")


// function switchFunction(x,oprt,y){
//     switch(oprt){
//         case "*":
//             console.log(x*y)
//         break
//         case "/":
//             console.log(x/y)
//         break
//         case "+":
//             console.log(x+y)
//         break
//         case "-":
//             console.log(x-y)
//         break
//     }
// }
// switchFunction(5,"*",3)
// switchFunction(4,"/",2)
// switchFunction(4,"+",1)
// switchFunction(8,"-",1)

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

// students.push("Asaf"+ " Ravid")              //adds object to arrey
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
// // console.log[a[0],a[1],a[2],a[3]]
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
// }

// //for of is arrey, for in is object.
// const arrey = [1,2,3,4,5,6,7,8,9,10]
// for (const indexValue of arrey){            //runs over all the arrey
//     console.log(indexValue)                 // prints arrey
// }

//2 -  for in
// const object = {
//     num1:1,num2:2,num3:3,num4:4,num5:5,num6:6,num7:7,num8:8,num8:8,num9:9,num10:10
// }
// for (const key in object){

//     console.log(object[key])        //it will be undefiend with . cuz arrey is []
// }

// 3. Write a JavaScript for loop that will iterate from 0
// to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to
// the screen.

// const arrey=[1,2,3,4,5,6,7,8,9,0,11,12,13,14,15]
// let sum=0
// for(let x=0; x<arrey.length; x++){
//     if (arrey[x]%2!==0) {
//         console.log(arrey[x])
//         sum =sum+arrey[x];
//     }
//     console.log(sum)
// }

// let sum = 0
// for (let x = 1; x <=20; x++){
//     if (x%2!==0){
//         sum=sum+x;
//     }
// }
// console.log(sum)

// function pyramide (x){
//     let string = ""
//         for (let index = 1; index <=x; index++) {
//         // const element = array[index];
//         string=string+index
//         console.log(string)
//     }
// }
// pyramide(8)

// Write a JS code to find the number of digits in a number

// function digits_count(n) {
//     let count = 0;
//     if (n >= 1) ++count;
  
//     while (n / 10 >= 1) {
//       n /= 10;
//       ++count;
//     }
//       return count;
//   }
  
//   console.log(digits_count(12112));
  
//   console.log(digits_count(457));

// 7. Write a JS code to find the largest number in an array
// function largest(arrey) {  
//         let max = arrey[0]; 
//         for (let i = 1; i < arrey.length; i++) {
//         	if (arrey[i] > max) 
//         		max = arrey[i]; 
//         } 
//         return max; 
//     } 

//     let arr = [1, 8, 4, 9, 5, 19];
//     console.log(largest(arr));  



// 8. Write a JS code to print the Fibonacci series for a
// given value of N
// example:
// fibonacci(8)
// Output:
// //0 1 1 2 3 5 8 13

function fibonacci(num){
    let n1=0;
    let n2=1;
    let next=0;
    for (let i = 1; i < num; i++) {
        if(i<=1){
            next=i;
            console.log(n1)
        }
        else{
            next = n1 + n2;
            n1=n2;
            n2=next;
            console.log(n2)
        }
    }
}
fibonacci(12)

// 9. Write a JS code to find N value in the Fibonacci series
// for a given number


// //"Element 13 is present in index 7"
// findFibonacci(144) output:
// //"Element 144 is present in index 12"
// 10. Bonus: Write a JS code for binary search algorithm