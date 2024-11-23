// let a = 5;
// let b = 10;
// let c = 0;
// let d = -1;

// let result = (a < b) && (c !== 0) || (d < 0);
// console.log(result);


// let x = 3;
// let y = 7;
// let z = -2;

// let result = (x < 5 && y > 10) || (y === 7 && z < 0);
// console.log(result); // Short-circuiting occurs



// let x = 0;
// let y = 5;
// let z = 3;

// let check =  (x > 0 || y < z) && (z !== 3 || y === 5);
// console.log(check);

// ) {
//     console.log("Condition met");
// } else {
//     console.log("Condition not met");
// }


// function slowFunction() {
//     console.log("Slow function executed!");
//     return false;
// }

// let x = true;
// let y = false;

// let result = (x && slowFunction()) || y;
// console.log(result);



// let a = true;
// let b = false;
// let c = true;

// let result = (a || b) && (!c || b) ? 'Condition met' : (b || c) ? 'Fallback value' : 'Condition not met';
// console.log(result);


// let a = 10;
// let b = -5;
// let c = 0;
// let d = 3;
// let e = 1;

// let result = (a > b || c !== 0) && (d === 3 && e > 0) && !(b === 0);
// console.log(result);  // Evaluates based on the logical conditions



// let a = false;
// let b = true;

// function checkCondition() {
//     console.log("Function called!");
//     return true;
// }

// let result = a || (checkCondition() && b);
// console.log(result);


// let a = 5;
// let b = 10;
// let c = -2;
// let d = 3;
// let e = 0;

// let result = (a < b || (c > 0 && d < 10)) && (e === 0 || (a * b === 50 && c < 0)) || (d > e && !(c === 0));
// console.log(result);



// let x = 0;
// let y = 10;
// let z = 5;
// let w = -1;
// let v = 3;

// if ((x === 0 && y > 0 || z < 5) && (w !== 0 || v > 0) && !(z === 5)) {
//     console.log("All conditions passed!");
// } else {
//     console.log("Conditions failed!");
// }



// let a = 1;
// let b = 5;
// let c = 0;

// function checkA() {
//     console.log("Checking A...");
//     return a > 2;
// }

// function checkB() {
//     console.log("Checking B...");
//     return b < 10;
// }

// function checkC() {
//     console.log("Checking C...");
//     return c !== 0;
// }

// let result = checkA() && checkB() || checkC();
// console.log(result);



// let a = 5;
// let b = 0;
// let c = -10;
// let d = 7;

// if ((a > b || (c < 0 && d > 5)) && !(b === 0 || c === -10) && (d > a || b === 0)) {
//     console.log("Condition met!");
// } else {
//     console.log("Condition not met!");
// }



// let a = 3;
// let b = 8;
// let c = 5;

// function isGreaterThanFive(x) {
//     console.log("Checking greater than five");
//     return x > 5;
// }

// function isLessThanTen(x) {
//     console.log("Checking less than ten");
//     return x < 10;
// }

// let result = isGreaterThanFive(a) && isLessThanTen(b) || isGreaterThanFive(c);
// console.log(result);



// let x = 2;
// let y = 10;
// let z = 5;

// let result = ((x < 3 || z === 5) && !(y > 5) || (z < 10 && y > 5)) && (x !== 2 || y === 10);
// console.log(result);



// let x = 4;
// let y = 3;
// let z = 0;
// let w = 10;

// let result = (x > y || (z !== 0 && w === 10)) ? (y === 3 && z === 0) : (w > 5 || x < 10);
// console.log(result);



// function checkA() {
//     console.log("Checking A...");
//     return false;
// }

// function checkB() {
//     console.log("Checking B...");
//     return true;
// }

// let result = checkA() || checkB() ? "Passed" : "Failed";
// console.log(result);



// Default Parameters


// function sum(a = 10, b = 10){
//     console.log(a + b);
    
// }

// sum();



// rest Operator


// function sum(a, b, ...rest){

//     let num = 0;
//     for(let i=0; i<rest.length; i++){
//         num  += rest[i];
//     }
//     console.log(a + b + num);
    
// }
// sum(12,15,542,1185,1,2514,51,4,61,856,144,9,124,5,14,8,464,8,1,41,5689,61,64,56,1,84)



function bioData(a, b, ...rest) {
    console.log(rest.join());
    
    // let num = 0;
    // for (let i = 0; i < rest.length; i++) {
    //     num += rest[i];
    // }
    // Adding a space between all arguments
    console.log(a + " " + b + " " + rest.join(" "));                                 
}

bioData("Abdullah", "Kaimkhani", "Karachi", "Lahore");



// function bioData(a, b, ...rest) {
//     let num = 0;
//     for (let i = 0; i < rest.length; i++) {
//         num += rest[i];
//     }
    
//     // Join the arguments with spaces and then split them into an array
//     let fullString = [a, b, ...rest].join(" ");  // Join all arguments into a string
//     let splitArray = fullString.split(" ");       // Split the string back into an array by spaces
    
//     // Now log the result, you can still add the num at the end
//     console.log(splitArray.join(" ") + " " + num);  // Join array back with spaces and add num at the end
// }

// bioData("Abdullah", "Kaimkhani", "Karachi", "Lahore");
