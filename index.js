// var arr1 = [1, 2, 3];
// console.log(arr1);
// var arr2 = new Array("1", "2", "3");
// console.log(arr2);

//? _______________________________________

//* push and pop methods

// var names = ['alina', 'yumna', 'tooba'];
// console.log(names);
// names.push('wajifa');
// console.log(names);
// names.pop()
// console.log(names);

//? _______________________________________

//* Valid Arrays

// var arr1 = [];
// var arr2 = [10];
// var arr3 = new Array(10, 20);
// var arr4 = new Array(10);
// var arr5 = [1, 2, "3", true, "name"];


//? Declare and initialize array and display in browser
// let arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write(`Qualifications:`)
// for(let i=0; i<arr.length; i++){
//     document.write(`<br>${i+1}) ${arr[i]}`);
// }


//? calculate how many times 'a' has appeared
// const arr = [1, 3, "a", "b", "f", ""];
// var count = 0;

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] === ""){
//         count++;
//     }
// }
// console.log("'a' appeared "+ count + " times");

//? Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume total marks are 500 for each student. Display score and percentages
// let std = ["Michael", "John", "Tony"];
// let score = [320, 230, 480];
// let perc = [];
// const total = 500;

// for(let i=0; i<std.length; i++){
//     perc.push((score[i] / total) * 100);
//     document.write(`Score of ${std[i]} is ${score[i]}. Percentage: ${perc[i]}% <br>`);
// }

//? Initialize an array with color names. 

//? (a) Display the array elements in your browser.
// let colors = ["red", "blue", "green"];
// document.write(`Original Array: <br> ${colors} <br>`);


//? (b) Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// let beginColor = prompt("Enter the color you want to add to the beginning").toLowerCase();
// colors.unshift(beginColor);
// document.write(`<br> Colors after adding colour to the beginning: <br> ${colors}<br>`);

//? (c) Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// let endColor = prompt("What color do want to add to the end of the array?").toLowerCase();
// colors.push(endColor);
// document.write(`<br> Colors after adding colour to the end: <br> ${colors}<br>`);

//? (d) Add two more colors to the beginning of the array. 
// colors.unshift("violet", "magenta");
// document.write(`<br> Colors after adding two more colours to the beginning: <br> ${colors}<br>`);

//? (e) Delete the first color in the array
// colors.shift();
// document.write(`<br> Colors after deleting first color: <br> ${colors}<br>`);

//? (f) Delete the last color in the array.
// colors.pop();
// document.write(`<br> Colors after deleting last color: <br> ${colors}<br>`);

//? (g) Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// var index_add = +prompt("Enter at which index you want to add color:");
// var color_add = prompt("Enter the color you want to add: ");
// colors.splice(index_add, 0, color_add);
// document.write(`<br> Colors after adding color at specific index: <br> ${colors}<br>`);

//? (h) Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. 
// var index_rem = +prompt("enter at which index you want to remove color:");
// var removeColors = +prompt("How many colors you want to remove?");
// colors.splice(index_rem, removeColors);
// document.write(`<br> Colors after removing color at specific index: <br> ${colors}<br>`);

