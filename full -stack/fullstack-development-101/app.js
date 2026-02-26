// var a = undefined;
// console.log(a);
// var a = 40;

// let user = {
//   username: "Ulugbek",
//   age: 30,
// };

// console.log(
//   {
//     username: "Ulugbel",
//   } ==
//     {
//       username: "Ulugbel",
//     }
// );

// let number = 1234;
// let reverse = 0;

// while (number > 0) {
//   let digit = number % 10;
//   number = Math.floor(number / 10);
//   reverse = reverse * 10 + digit;
// }

// console.log(reverse);

// task 1.1

// let number = Number(prompt("Enter the Number"));
// let count = 0;
// while (number > 0) {
//   number = Math.floor(number / 10);
//   count++;
// }

// console.log(count);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

const user = {
  username: "Ulugbek",
  age: 30,
  country: "Uzbekistan",
};

const keys = Object.keys(user);
const values = Object.values(user);

for (const key in user) {
  const element = user[key];
  console.log(element);
}

// 2:Getting started with Javascript
// ---CHallenge 1---
// console.log("5" + 5);        
// console.log("5" - 5);        
// console.log("5" * "2");      
// console.log("10" / 2);       
// console.log(5 + true);       
// console.log("10" - true);    
// console.log("5" + true);     
// console.log(5 + null);       
// console.log(5 + undefined);  

// // ---Challenge 2---
// // 1
// let num = Number("200") + 50;
// console.log(num);
// // 2
// let str = String(25) + " years old";
// console.log(str); 
// // 3
// console.log(Boolean("false")); 
// // 4
// console.log("10" - true);

// ---










































// Control statements
// 1
// let num1 = 15;
// let num2 = 30;

// if (num1 > num2) {
//     console.log("The largest is: " + num1);
// } else {
//     console.log("The largest is: " + num2);
// }

// // 2
// let x = 3, y = -7, z = 2;

// if (x * y * z > 0) {
//     alert("The sign is +");
// } else if (x * y * z < 0) {
//     alert("The sign is -");
// } else {
//     alert("The result is 0");
// }

// // 3
// let a = 0, b = -1, c = 4;

// if (a > b && a > c) {
//     if (b > c) { alert(a + ", " + b + ", " + c); }
//     else { alert(a + ", " + c + ", " + b); }
// } else if (b > a && b > c) {
//     if (a > c) { alert(b + ", " + a + ", " + c); }
//     else { alert(b + ", " + c + ", " + a); }
// } else {
//     if (a > b) { alert(c + ", " + a + ", " + b); }
//     else { alert(c + ", " + b + ", " + a); }
// }

// // 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// // 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// // 6
// console.log("Armstrong numbers:");
// for (let i = 100; i <= 999; i++) {
//     // Split the number into digits
//     let digits = i.toString().split("");
//     let d1 = Number(digits[0]);
//     let d2 = Number(digits[1]);
//     let d3 = Number(digits[2]);

//     // Check if the sum of cubes equals the number
//     if (Math.pow(d1, 3) + Math.pow(d2, 3) + Math.pow(d3, 3) === i) {
//         console.log(i); // This will find 153, 370, 371, 407
//     }
// }


// // 7
// // 1. Data Setup
// const students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];

// // 2. Compute Average
// let totalMarks = 0;
// for (let i = 0; i < students.length; i++) {
//     totalMarks += students[i].marks;
// }
// let average = totalMarks / students.length;

// console.log("Average Grade: " + average);

// // 3. Determine Grade based on Range
// if (average < 60) {
//     console.log("Grade: F");
// } else if (average < 70) {
//     console.log("Grade: D");
// } else if (average < 80) {
//     console.log("Grade: C");
// } else if (average < 90) {
//     console.log("Grade: B");
// } else if (average < 100) {
//     console.log("Grade: A");
// }
// console.log("5" + 5);
// let limit=10;
// let evens=0;
// let odds=0;

// for( let i=0; i<=limit; i++){
//     if (i%2==0){
//         evens++;
//     }
//     else {
//         odds++;
//     }
// }
// console.log("Evens :", evens, "Odds :", odds);

// for(let i=0; i<10; i++){
//     console.log(i);
// }
// let i=0;
// while (i<10){
//     console.log(i);
//     i++;
// }
// let j=0;
// do {
//     console.log(j);
//     j++;
//  } while (j<10);

// const user = {

// }
// 1
// // let a = 5;
// let b = 9;

// if (a > b) {
//     console.log("Largest is: " + a);
// } else {
//     console.log("Largest is: " + b);
// }

// // 2
// let x=3;
// let y=-7;
// let z=2;

// let product = x*y*z;

// if(product>0){
//     console.log("The sign is +");
// } else{
//     console.log("The sign is -");
// }

// // 3
// let g = 0;
// let p = -1;
// let c = 4;

// let numbers = [g,p, c];
// numbers.sort(function(x, y) {
//     return y - x;
// });

// console.log(numbers.join(", "));


// // 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// // 5














// ===================================================================
//  2.26.2026
// ===================================================================

// function



// let handleClick = () => {};

// (function () {});



// function outer (){
//     let count=0;
//     return function 
// }


// Challenge 1
function greet(name) {
    return "Hello," +name + "!";
}
// const greet = function(name){
//     return "Hello,"+name+"!";
// }
// const greet = (name) => {
//     return "Hello ," + name + "!";
// };

// const greet = name => "Hello,"+name + "!";


// Challenge 2
function isPrime(n){
    if(n<=1) return false;

    for (let i=2; i<=Math.sqrt(n); i++){
       if(n%i===0){
        return false;
       }
    }
    return true;
} 

// Challenge 3
function countDigits(n){
    return Math.abs(n).toString().length;
}
   
function countDigits(n){
    n=Math.abs(n);
    let count = 0;
    
    if (n===0) return 1;

    while (n>0){
        count++;
        n=Math.floor(n/10);
    }
    return count;
}
 console.log(isPrime(11));
 console.log(countDigits(0));


// Challenge 4
function isPalindrome(n){
    let original =n;
    let reversed =0;

    while(n>0){
        let digit = n%10;
        reversed = reversed*10+digit;
        n=Math.floor(n/10);
    }
    return original ===reversed;
}

console.log(isPalindrome(12321));

// Challenge 5
function isArmstrong(n){
    let original =n;
    let digits=n.toString().length;
    let sum=0;

    while (n>0){
        let digit =n%10;
        sum+= digit**digits;
        n=Math.floor(n/10);
    }
    return sum===original;
}
console.log(isArmstrong(153))

// Challenge 6
function createCounter(start){
    let count=start;

    return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        getCount(){
            return count;
        }
    };
}

// Challenge 7
function orderFood(){
    let name
}



