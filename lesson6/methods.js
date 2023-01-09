// string methods

// // // string length
// const txt = "hello world"
// const txtLength = txt.length
// console.log(txtLength)

// // string.replace - 1stdidn work
// let arr = ["avocado", "melon", "avocado", "squash"]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]; //יוצר משתנה נפרד
//     if (element === "avocado"){
//         element.replace("avocado", "banana")
//     }
//     console.log(arr[i])}
// 2nd
// const text = "hello name, how are you?"
// const replaceText = text.replace("?", "!")
// console.log(replaceText);

// toUpperCase()
// const text = "hello world"
// const uppercasedText = text.toUpperCase()
// console.log(uppercasedText)

// let text = "hello world"
// console.log(text[0].toUpperCase() + text.substring(1))

// trim() deleted the space _
// const username  = " Yonatan    "
// console.log(username.trim().length)

// // charAt()
// text = "hello world"
// console.log(text.charAt(6))
// text = "hello world"
// console.log(text.charCodeAt(0)) //ASCII

// slice()
// const str = "Table, Katana, Rock"
// const slicedStr = str.slice(7,13)
// console.log(slicedStr)

// split()
// const string = "hello world"
// const arrayFromString = string.split("") // space , etc
// console.log(arrayFromString)


// ARRAY METHODS 

//map (the value, the index) creates new arr 
// const arr = [1,2,3,4,5,6]
// const mappedArr = arr.map((x, index) => console.log(index))
// console.log(mappedArr)

// filter (to return relevant info)
// const arr = [1, 2, 3, 4, 5, 6];
// const filteredArr = arr.filter(element => element % 2 === 0);
// console.log(filteredArr);

// forEach()
// const arr = [1, 2, 3]
// arr.forEach(element => console.log(element))

// //includes
// const arr = [1,2,3,4,5,6,7,8, "3"]
// console.log(arr.includes(3 || "9"))

// find()
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 52]
// const found = arr.find(element => element>30);
// console.log(found)

// push()
// const arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// // pop() & shift() & unshift()
// const arr = [1,2,3]
// arr.pop()
// console.log(arr)
// const arr = [1,2,3]
// arr.shift()


// // indexOf() not exist :-1
// const arr = ["one", "two", "three", "four"]
// const iFinder = arr.indexOf("three")
// console.log(iFinder)



// OBJECT METHODS

// Object.keys()
// const obj = {
//     name: "charizard",
//     type: "water",
//     lvl: 20
// }
// console.log(Object.keys(obj))

// Object.values
// console.log(Object.values(obj))

// Object.enteries
// console.log(Object.entries(obj))



// JSON
// Json is used to storage information 
// its fast and the browser knows how to get info from it
// it's better for frontend
//needs to contain "", 
// cannot contain , if there's nothing after(ERROR)
//  no comments in json

// import Data from `./data.json` //??? how to










// 1. Predict the output of the following JS code?
// const arr = [10, 20, 30];
// arr.push(40);
// console.log(arr)

// const arr1 = [10, 20, 30];
// arr1 = [];
// console.log(arr1)

// const arr2 = [10, 20, 30];
// arr2[2] = 50;
// console.log(arr2) 

// 2. Predict the output of the following JavaScript code?
// console.log(+"Hello");

// 3.Predict the output of the following JavaScript code?
// let result = "";
// for (let i = 5; i > 0; i--) {
//  result = result + i;
// }
// console.log(result); 

// 4.Predict the output of the following JavaScript code?
// let a = 1.2;
// console.log(typeof a); 

// 5.Predict the output of the following JavaScript code?
// let x = 10;
// if (x) {
//  let x = 4;
// }
// console.log(x); 

// 5.Predict the output of the following JavaScript code?
// console.log(1 + 2 == 3);

// 6.Predict the output of the following JavaScript code?
// console.log(typeof typeof 1);

// 7. Write a function Return a Boolean if a number is divisible by 10
// function Bool (x){
//     if (x%0 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(Bool(11))

// let bool = (n) => {
//     return n%10 === 0 ? true : false;
// }
// console.log(bool(40))


// LOOPS & METHODS EXERC

// //1. sum of numbers in array function
// let arr = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

//2. array of strings -> array with volvs removed
// let arr=["hello world", "hola"];
// function remove(arr){
//     for (let i in arr){
//         arr[i]=arr[i].replace("o", "");
//         arr[i]=arr[i].replace("e", "");
//         arr[i]=arr[i].replace("o", "");
//     }
//     return arr
// }
// console.log(remove(arr)) 


//3. array of objects => sort by property 

// const books = [
//     { title: 'The Great Gatsby', pages: 180 },
//     { title: 'To Kill a Mockingbird', pages: 280 },
//     { title: 'Pride and Prejudice', pages: 150 }
//     ];
// function sortByProperty(books){
//     books.sort((a,b) => {
//         a.pages>b.pages? 1 : -1 }
//         )
//         return books
//     }
// console.log(sortByProperty(books))


// 4.  returns new string with characters revert //?????not solved
// let str = "hello"
// function reverseString(str) {
//     return str.split("").reverse("").join("");
// }
// console.log(reverseString(str));

// 5. arr -> squr
let arr = [1,2,3,4,5,6]
function square (arr){
    for (let i = 0; i < array.length; i++) {
        const sqr = arr(i => i*i )
       }
       console.log(sqr)
}
square(arr)


// +++++++++++++++++ METHODS EXERCISE ++++++++++++

// +++++++++++++++++ 1 DONE ++++++++++++++++++
// method hello -> hll
// const text = "hello"
// const removeVowels = text.replace("hello", "hll")
// console.log(removeVowels);

//  +++++++++++++++++ 2 DONE ++++++++++++++++++
// // sum function 
// const arr = [1,2,3,4,5,6];
// // const reduced = arr.reduce((a,b)=>(a+b))
// // console.log(reduced);

//  +++++++++++++++++ 3 DONE ++++++++++++++++++
// // average of numbers
// const average = arr.reduce((a,b)=>(a+b))/arr.length;
// console.log(average);

//  +++++++++++++++++ 4 DONE ++++++++++++++++++
// string reverse order(split->reverse->join)
// let string = "hello"
// let arr = string.split(""); arr.reverse();
// console.log(arr.join(``))

// +++++++++++++++++ 5 DONE ++++++++++++++++++
// array -> array of the squares of those numbers (map + arrow)
// const arr = [1,2,3,4,5,6,7];
//     const mapped = arr.map(i => i*i ); //Math.pow(i,2)
//     console.log(mapped);

// // +++++++++++++++++ 6 DONE ++++++++++++++++++
// string -> string replace (a,z)
// let string = ("I am an Armadillo");
// function AtoZ(string) {
//     for (let i in string) {
//         string = string.replace("a","z")
//     }
//     return string
// }
// console.log(AtoZ(string))

// +++++++++++++++++ 7 DONE ++++++++++++++++++
// string => array words of strig:
// let string = ("hello world i am Armadillo"); 
// let arr = string.split(" ");
// console.log(arr);

// +++++++++++++++++ 8 DONE ++++++++++++++++++
// string =>sort by length
// let string = ("hello world I am Armadillo"); 
// let arr = string.split(" ");
// arr.sort((a,b)=>(a.length - b.length));
// console.log(arr)

// +++++++++++++++++ 9 DONE ++++++++++++++++++
//string capitalize:
// let text = "hello";
// console.log(text[0].toUpperCase() + text.substring(1))

// +++++++++++++++++ 10 DONE ++++++++++++++++++
// array - returns min value:
// let arr = [12,4,5,8,-1]
// let min = arr.reduce((a,b)=>Math.min(a,b))
// console.log(min)

// +++++++++++++++++ 11 DONE ++++++++++++++++++
// array -> string:
// let arr = ["hello", "world"];
// let string = arr.join(``+" "+``);
// console.log(string);

// +++++++++++++++++ 12 DONE ++++++++++++++++++
// array - 2nd largest number
// let arr = [12,4,5,8,-1]
// let max = arr.reduce((a,b)=>Math.max(a,b)); 
// console.log(arr[1]);

// +++++++++++++++++ 13 DONE ++++++++++++++++++
// let arr = [12,4,5,10,-5]
// let sum = arr.reduce((a,b)=>(a+b));
// console.log(sum)

// +++++++++++++++++ 14 DONE ++++++++++++++++++
//  string - array of words with even length
// arrOfAllWords("hi world") //output ["hi"]
// use split +filter

// let string = "hi world wow!"
// const items = string.split(' ');
// function findEvenLengthStrings(items) {
//     const evenString = items.filter(item => item.length % 2 === 0)
//     return evenString
//   }
// console.log(findEvenLengthStrings(items))

// +++++++++++++++++++++ 15. Hard +++++++++++++++++++++++++++
//  Write a function that takes in an array of strings and
// returns an array of the strings sorted in alphabetical order, with
// the exception of words that begin with the letter "z", which
// should be placed at the end of the array.
// withoutZ(["hello", "world", "zero", "one"]) //output
// ["hello", "one","zero", "world"]
// Use the sort method to accomplish this

// let array = ['hello', 'one', 'zero','world', 'apple']
// function withoutZ(array){
//     array.sort();
//     let myz = []
//     let mynotz =[]
//     let indexPlace;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].substring(0, 1) == 'z'){
//             myz.push(array[i])
//             indexPlace = i;
//         } else {
//             mynotz.push(array[i])
//         }
//       }
//     //   mynotz.splice((array.length/2),myz.length-1,myz[0])
//         mynotz.join();
     
//       const alphabetical =  mynotz;
//     return alphabetical
// }
// console.log(withoutZ(array))


// +++++++++++ 7 BOOM +++++++++++

// function sevenBoom (){
//     for (let i = 1; i <=35 ; i++) {
//         if (i%7 === 0){
//             console.log('Boom')
//         }


