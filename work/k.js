// // let age = 21;
// // let name = "Ishaan";
// // let isStudent = true;
// // let result;
// // let data = null;
// // let bigNumber = 9007199254740991n;
// // let userId = Symbol("1");

// let user = {
//     age: age,
//     name: name,
//     isStudent: isStudent,
//     result: result,
//     data: data,
//     bigNumber: bigNumber,
//     id: userId
// };

// // console.log(user);
// // console.log("Symbol value:", userId);
// // console.log("Type of Symbol:", userId);


// // let age = 21;
// // let name = "Ishaan";
// // let nationality = indian;
// // let result;
// // let data = ;
// // let bigNumber = 9007199254740991n;
// // let userId = Symbol("1");

// // let user = {
// //     age: age,
// //     name: name,
// //     isStudent: isStudent,
// //     result: result,
// //     data: data,
// //     bigNumber: bigNumber,
// //     id: userId
// // };

// // console.log(user);
// // console.log("Symbol value:", userId);
// // console.log("Type of Symbol:", userId);


// // let a = Number(prompt("Enter first number: "));
// // let b = Number(prompt("Enter second number: "));
// // console.log("The sum is:", a + b);
// // console.log("The difference is:", a - b);
// // console.log("The product is:", a * b);
// // console.log("The quotient is:", a / b);
// // console.log("The remainder is:", a % b);
// // console.log("The power is:", a ** b);



// // const age=Number(prompt("Enter your age"))
// // const message=(age<18)?"ypu are eligible":"you are not eligible";
// // console.log(message);


// // const n1 =number(prompt("Enter a number: "));
// // const n2 =number(prompt("Enter another number: "));
// // let greater=(n1>n2) ? n1 : n2;
// // console.log("The greater number is:", greater);




// // avg percentage of 5 subjects
// // let sub1 =Number(prompt("Enter marks of subject 1: "));
// // let sub2 =Number(prompt("Enter marks of subject 2: "));
// // let sub3 =Number(prompt("Enter marks of subject 3: "));
// // let sub4 =Number(prompt("Enter marks of subject 4: "));
// // let sub5 =Number(prompt("Enter marks of subject 5: "));
// // let total = sub1 + sub2 + sub3 + sub4 + sub5;
// // let avg = total / 5;
// // let per = (total / 500) * 100;
// // console.log("Total marks:", total);
// // console.log("Average marks:", avg);
// // console.log("Percentage:", per + "%");


// // squareroot ,cube root  of a number
// // let num =Number(prompt("Enter a number: "));
// // let sqrt=num ** 0.5;
// // let cbrt=num ** (1/3);
// // console.log("Square root of", num, "is:", sqrt);
// // console.log("Cube root of", num, "is:", cbrt);


// // greatest and smallest of 3 numbers
// // let n1 =Number(prompt("Enter first number: "));
// // let n2 =Number(prompt("Enter second number: "));
// // let n3 =Number(prompt("Enter third number: "));
// // if (n1 >= n2 && n1 >= n3) {
// //     console.log("The greatest number is:", n1);
// // }
// // else if (n2 >= n1 && n2 >= n3) {
// //     console.log("The greatest number is:", n2);
// // }
// // else {
// //     console.log("The greatest number is:", n3);
// // }
// // if (n1 <= n2 && n1 <= n3) {
// //     console.log("The smallest number is:", n1);
// // }
// // else if (n2 <= n1 && n2 <= n3) {
// //     console.log("The smallest number is:", n2);
// // }
// // else {
// //     console.log("The smallest number is:", n3);
// // }


// // area and volume of rectangle
// // let length =Number(prompt("Enter length of rectangle: "));
// // let width =Number(prompt("Enter width of rectangle: "));
// // let height =Number(prompt("Enter height of rectangle: "));
// // let area = length * width;
// // let volume = length * width * height;
// // console.log("Area of rectangle is:", area);
// // console.log("Volume of rectangle is:", volume);

// // let age=Number(prompt("Enter your age: "));
// // if(age>=18){
// //     console.log("You are an adult.");
// // }
// // else{
// //     console.log("You are a minor.");
// // }

// // if else
// // let temp=Number(prompt("Enter the temperature: "));
// // if(temp>35){
// //     console.log("day is hot");
// // }
// // else if(temp>=20 && temp<=35){
// //     console.log("day is warm");
// // }
// // else{
// //     console.log("day is cold");
// // }


// let day=Number(prompt("Enter day of the week: "));
// switch(day){
//     case 1  :
//         console.log("Today is Monday"); 
//         break;
//     case 2:
//         console.log("Today is Tuesday");    
//         break;
//     case 3  :
//         console.log("Today is Wednesday");  
//         break;
//     case 4  :
//         console.log("Today is Thursday");  
//         break;  
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6  :
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// [9:59 am, 29/01/2026] Jaskirat Singh: // let a =Number(prompt("Enter your age: "));
// // if (a>60 ){
// //     console.log("You are eligible ");
// }
// else{
//     console.log("You are not eligible");
// }


// let char=prompt("Enter a character: ");
// if (char>='A' && char<='Z'){
//     console.log(char,"is an uppercase letter.");
// }
// else {
//     console.log(char,"is a lowercase letter.");
// }


// let num=Number(prompt("Enter your numbers: "));
// if (num>90){
//     console.log("Grade A");
// }
// else if (num>80){
//     console.log("Grade B");
// }
// else if (num>70){
//     console.log("Grade C");
// }
// else if (num>60){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }



// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += (2 + j * 2) + " ";
//     }
//     console.log(row.trim());
//   }



// let rows = 3;

// for (let i = 1; i <= rows; i++) {
//     let stars = "";
//     for (let j = 1; j <= i * 2; j++) {
//         stars += "* ";
//     }
//     console.log(stars);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(2 ** i);
// }


// for (let i = 1; i <= 5; i++) {
//     console.log(`3 x ${i} = ${3 * i}`);
// }


// let str=1;
// for(let i=1;i<=5;i++){
//     str=str*3;
//     let row="";
//     for (let j=1;j<=i;j++){
//        row+="*";
//     }
//     console.log(row);
// }

// for(let i=1;i<=7;i++){
//     let row=""; 
//     if(i<=4){
//     for (let j=1;j<=i;j++){
//          row+="*";
//         }
//     }
//     else{
//         for (let j=1;j<=8-i;j++){
//             row+="*";
//         }   
//     }
//     console.log(row);
// }


// let x = Number(prompt("Enter a number"));

// if (x < 0) {
//     console.log("* Left branch");
// }
// else if (x >= 0 && x < 10) {
//     console.log("* Middle-left branch");
// }
// else if (x >= 10 && x < 20) {
//     console.log("* Middle-right branch");
// }
// else {
//     console.log("* Right branch");
// }


// let n=Number(prompt("enter a number "));
// let i=1;
// let sum=0;
// while (i<=n){
//     sum+=i;
//     i++;
// }
// console.log("sum=",sum);


// let sum=0;
// for (let i=1;i<=30;i++){
//     if (i%2==0){
//         sum+=i;
//     }
// }
// console.log("Sum of even numbers up to 30:", sum);



// console.error("something went wrong");
// let students = {
//     { name: "raj", marks: 80},
//     { name: "raj", marks: 80}
// }
// console.table(students);
// console.warn("very low");
// console.log(10+5);



// let marks = {
//     math: Number(prompt("Math marks:")),
//     science: Number(prompt("Science marks:")),
//     english: Number(prompt("English marks:")),
//     computer: Number(prompt("Computer marks:")),
//     hindi: Number(prompt("Hindi marks:"))
// };

// let sum = 0, count = 0;

// for (let subject in marks) {
//     sum += marks[subject];
//     count++;
// }

// let percentage = sum / count;

// console.log("Percentage =", percentage);

// if (percentage > 90)
//     console.log("Excellent Performer");
// else if (percentage > 70)
//     console.log("Very Good Performer");
// else if (percentage > 50)
//     console.log("Good Performer");
// else if (percentage < 30)
//     console.log("Poor Performer");
// else
//     console.log("Average Performer");


// let arr=[10,20,5,15,30];
// let min=arr[0];
// let max=arr[0];  
// let sum=0;
// for (let value of arr){
//     sum+=value;
//     if (value<min){
//         min=value;
//     }
//     if (value>max){
//         max=value;
//     }
// }
// console.log("Minimum value:", min);
// console.log("Maximum value:", max);
// console.log("Sum of array values:", sum);



// let n=4;
// for (let i=1;i<=n;i++){
//     let row="";
//     for (let j=1;j<=2*i-1;j++){
//         if (j%2!=0){
//             row+=j+" ";
//         }
//     }

//     console.log(row);
// }



// let arr=[10,20,30,40,50];
// let target=Number(prompt("Enter a number to search:"));
// let foundIndex=-1;
// for (let i=0;i<arr.length;i++){
//     if (arr[i]===target){
//         foundIndex=i;
//         break;
//     }
// }
// if (foundIndex!==-1){
//     console.log("Element found at index:", foundIndex);
// }
// else{
//     console.log("Element not found in the array.");
// }



// function sumall(){
//     let total=0;
//     for (let i=0;i<arguments.length;i++){
//         total+=arguments[i];
//     }
//     console.log("Total:", total);
//     return total;
// }  
// let x=sumall(1,2,3,4,5);



// function sumall(...numbers){
//     let total=0;
//     for (let n of numbers){

//         total+=n;
//     }
//     console.log("Total:", total);
//     return total;
// }
// let x=sumall(1,2,3,4,5,6,7,8,9,10);




// function factorial(n){
//     if (n==0 || n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// let num=5;
// console.log("Factorial of", num, "is", factorial(num));



// function sumEven(n){
//     if (n===0){
//         return 2;
//     }
//     return 2*n+sumEven(n-1);
// }
// let n=5;
// console.log("Sum of first", n, "even numbers is", sumEven(n));



// function fibonacci(n){
//     if (n==0){
//         return 0;
//     }
//     else if (n==1){
//         return 1;
//     }
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// let n=9;
// console.log("Fibonacci series up to", n, ":");
// for (let i=0;i<n;i++){
//     console.log(fibonacci(i));
// }


// let sq = (x) => x*x;
// console.log(sq(5));




// let reverse = (num) => {
//     let rev = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         rev = rev * 10 + digit;
//         num = Math.floor(num / 10);
//     }   
//     return rev;
// };
// let number = Number(prompt("Enter a number:"));
// console.log("Reverse of", number, "is", reverse(number));


// let isPalindrome = (num) => {
//     let originalNum = num;
//     let rev = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         rev = rev * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     return originalNum === rev;

// };
// let number = Number(prompt("Enter a number:"));
// if (isPalindrome(number)) {
//     console.log(number, "is a palindrome number.");
// } else {
//     console.log(number, "is not a palindrome number.");
// }



// let arr=[1,2,3,4,5,6];
// let evenNumbers=arr.filter(num => num%2===0);
// return arr%2===0;
// console.log(evenNumbers);



// sorting 
// let arr=[5,2,9,1,5,6];
// arr.sort((a,b) => a-b);
// return a-b;
// console.log(arr);

// map 
// let arr=[1,2,3,4,5];
// let squared=arr.map(function(num){;
// return num*num;}); 
// console.log(squared);





// // reduce
// let arr=[1,2,3,4,5];
// let sum=arr.reduce(function(accumulator,currentValue){
// return accumulator+currentValue;},0);
// console.log(sum);





// filter value greater than 40 from array
// let arr=[40,30,50,36];
// let filtered=arr.filter(num => num>=40);
// console.log(filtered);






