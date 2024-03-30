//  Q.no 1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// let multidimensional = [];
//   multidimensional.push([]);
// console.log(multidimensional);


// // Q.no2 
// Declare and initialize a multidimensional array
// representing the following matrix:

// let multidimensional = [[1,3,5],[4,3,6],[3,5,2]]

// for(i =0;i< multidimensional.length;i++){
// let row = ""
//     for(j=0;j<multidimensional[i].length;j++){

//         row +=multidimensional[i][j] +"\t"
       
//     }
//     console.log(row);
// }


// Q.no 3 

// Write a program to print numeric counting from 1 to 10.

// for(i=1;i<=10;i++){
//     console.log(i+"\n")
// }



// Q.no 4 


// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// let multiTable =+prompt("tell table which you want to print");

// let tableLength = +prompt("put the length,10");

// for(i=1 ;i <=tableLength;i++){

// var table= (`${multiTable} * ${i} = ${multiTable*i}`)
// document.write(table +"<br>");
// }



// Q.no 5 

// Write a program to print items of the following array
// using for loop:
//  let  fruits = ["Apple","Banana","Melon",
//  "Orange"]



// for(i=0;i<fruits.length;i++){

//     document.write(fruits[i] +"<br>");

//     document.write(`the element at index ${i} is ${fruits[i]} <br>`);
// }



// Q.no 6 


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// let counting= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14];

// document.write(` COUNTING <br> ${counting} <br>`);


// document.write(`REVERSE <br> ${counting.reverse()} <br>`);


// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// document.write("Even")
// let evenNum = numbers.filter(num => num%2===0)

// document.write(evenNum)

// let oddNum = numbers.filter(num => num%2 !=0)

// document.write(`<br> Odd ${oddNum}`)


// let series = evenNum.join("K ")
// document.write(`<br> SERIES <br> ${series}`)




// Q.no 7 
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
//  this answer is not correct

// let items  = ["watermelon","apple pie", " orange","pineapple","strawberry","apple","banana"];

// let check = prompt(" check the fruit name in your list ");

// for(i = 0; i<items.length;i++){
// if(items[i]===check){
//     document.write("yes this fruite name is available in your list")
// }
// else {
//     Document.write("no this is not ")
// }
// }



// Q.no8


// Write a program to identify the largest number in the
// given array.
//  let arr = [24, 53, 78, 91, 12];

// let largest = arr[0];

// for(i = 0;i<arr.length;i++){

//     if(arr[i]>largest){

//         largest=arr[i]

//     }
// }

// document.write(`array items are = ${arr} <br>`)
 
// document.write(`largest is  = ${largest} <br>`)

//  Q.no 9 

// Write a program to print multiples of 5 ranging 1 to
// 100.


// for(i = 1;i<=100;i++){
// if(i%5==0){
//     console.log(i)
// }

// }