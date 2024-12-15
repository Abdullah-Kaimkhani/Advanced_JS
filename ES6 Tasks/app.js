// Global Scope

// Declare variables outside of any function or block
// var varVariable = 'This is a var variable';
// let letVariable = 'This is a let variable';
// const constVariable = 'This is a const variable';

// Log the variables to the console
// console.log(varVariable);    // This will work
// console.log(letVariable);    // This will work
// console.log(constVariable);  // This will work

// Check if they are globally accessible
// console.log(window.varVariable);  It is globally accessible
// console.log(window.letVariable);    It is not
// console.log(window.constVariable);   It is not


// Function Scope


// function exampleFunction() {
//     var varVariable = 'This is a var variable';
//     let letVariable = 'This is a let variable';
//     const constVariable = 'This is a const variable';

//     // These variables are accessible within the function
//     console.log('Inside the function:');
//     console.log(varVariable);    // 'This is a var variable'
//     console.log(letVariable);    // 'This is a let variable'
//     console.log(constVariable);  // 'This is a const variable'
//   }

//   // Try to log the variables outside the function
//   console.log('Outside the function:');
//   console.log(varVariable);    // ReferenceError: varVariable is not defined
//   console.log(letVariable);    // ReferenceError: letVariable is not defined
//   console.log(constVariable);  // ReferenceError: constVariable is not defined

// Call the function to see the variables inside it
//   exampleFunction();

// Var, let & const, these all are function-scoped variables.They will only be accessible inside a function.
// We can't access them outside of the function.


// Block Scope:


// if (true) {
//     var varVariable = 'This is a var variable';
//     let letVariable = 'This is a let variable';
//     const constVariable = 'This is a const variable';
//   }

//   // Try to log the variables outside the block
//   console.log('Outside the block:');
//   console.log(varVariable);    // 'This is a var variable' (accessible)
//   console.log(letVariable);    // ReferenceError: letVariable is not defined
//   console.log(constVariable);  // ReferenceError: constVariable is not defined

// varVariable is accessible outside the block because var is function-scoped or globally scoped, meaning it does not respect block scope.
// When declared inside a block, it is still accessible outside.
// letVariable and constVariable are block-scoped and therefore are not accessible outside the block.
// This is why we get ReferenceError when trying to log them outside the block.


// Hoisting with var:


// console.log(myVar); // Logs: undefined
// var myVar = 10;

// When you log a var variable before its declaration, it results in undefined due to hoisting.
// Variables declared with var are hoisted to the top of their scope but are not initialized.


// Hoisting with let and const:


// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
// let myLet = 10;

// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
// const myConst = 20;

// When you try to log a let or const variable before its declaration, you get a ReferenceError.
// This is because let and const are hoisted to the top of their scope but remain in the Temporal Dead Zone (TDZ) until their declaration is encountered.


// Re-declaration:


// var x = 10;
// var x = 20; // No error
// console.log(x); // Logs: 20


// let y = 30;
// let y = 40; // SyntaxError: Identifier 'y' has already been declared
// console.log(y);


// const z = 50;
// const z = 60; // SyntaxError: Identifier 'z' has already been declared
// console.log(z);


// Variables declared with var can be re-declared without any error.
// Variables declared with let or const cannot be re-declared within the same scope.


// Re-assignment:


// var x = 10; // Initial declaration and assignment
// x = 20;     // Re-assignment
// console.log(x); // Output: 20

// Variables declared with var can be re-assigned freely.

// let y = 30; // Initial declaration and assignment
// y = 40;     // Re-assignment
// console.log(y); // Output: 40

// Variables declared with let can also be re-assigned.

// const z = 50; // Initial declaration and assignment
// z = 60;       // Re-assignment attempt
// console.log(z); // This will not execute due to an error

// Variables declared with const cannot be re-assigned.
// If you try to reassign a const variable, you get a TypeError.



// Temporal Dead Zone (TDZ):


// {
//     console.log(a); // Attempting to access before declaration
//     let a = 10;     // Declaration
// }
// ReferenceError: Cannot access 'a' before initialization

// The variable a is hoisted but remains in the TDZ until the point of its declaration (let a = 10).
// Accessing it before its declaration is not allowed.


// {
//     console.log(b); // Attempting to access before declaration
//     const b = 20;   // Declaration
// }
// ReferenceError: Cannot access 'b' before initialization

// Similar to let, const is hoisted but stays in the TDZ until the declaration.
// const also requires an immediate initialization, but this isn't relevant until after the TDZ ends.




// When to use var, let, and const:

// function demoVar() {
//     if (true) {
//         var message = "This variable is function-scoped, not block-scoped.";
//     }
//     console.log(message); // Accessible here due to function scope
// }
// demoVar();


// function demoLet() {
//     let count = 0;  Initialized
//     for (let i = 0; i < 5; i++) {
//         count += i; // Can reassign value
//         console.log(`Inside loop: i = ${i}`);
//     }
// console.log(i); // Uncaught ReferenceError: i is not defined (block-scoped)
//     console.log(`Final count: ${count}`);
// }
// demoLet();


// function demoConst() {
//     const PI = 3.14159;  Constant value
//     console.log(`Value of PI: ${PI}`);
//     // PI = 3.14;  Uncaught TypeError: Assignment to constant variable

//     const person = { name: "Abdullah" };
//     person.name = "Kaimkhani";  Allowed: Properties of an object can be changed
//     console.log(`Updated person: ${person.name}`);
// }
// demoConst();




// String Interpolation:

// Create variables for first name and last name
// const firstName = "Abdullah";
// const lastName = "Kaimkhani";

// Use template literal to create full name
// const fullName = `${firstName} ${lastName}`;

// Log the full name to the console
// console.log(`The person's full name is: ${fullName}`);




// Multi-line Strings:

// Create a multi-line string using a template literal
// const address = `
// House no. L-92
// Block-15 fb area
// Karachi,
// Pakistan
// `;

// Log the multi-line string to the console
// console.log("Address:");
// console.log(address);





// Simple Expressions:


// Create variables for two numbers
// const num1 = 8;
// const num2 = 12;

// Use a template literal to include the sum in a string
// const sumMessage = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// Log the string to the console
// console.log(sumMessage);





// Function Calls:

// Create a function to calculate the product of two numbers
// function multiply(num1, num2) {
//     return num1 * num2;
// }

// Use a template literal to call the function and include the result in a string
// const num1 = 7;
// const num2 = 5;
// const productMessage = `The product of ${num1} and ${num2} is ${multiply(num1, num2)}.`;

// Log the result to the console
// console.log(productMessage);





// Creating a Tagged Template:

// Define a simple tag function
// function logTemplate(strings, ...values) {
// console.log("Template strings:", strings); // Logs the template strings
// console.log("Template values:", values);  // Logs the interpolated values
// }

// // Use the tag function with a template literal
// const name = "Abdullah Kaimkhani";
// const age = 20;
// logTemplate`My name is ${name}, and I am ${age} years old.`;





// Formatting:

// Define a tag function to format the template literal as uppercase
// function toUpperCaseTag(strings, ...values) {
//     // Combine the strings and values, then convert to uppercase
//     const result = strings.reduce((acc, str, i) => {
//         return acc + str + (values[i] || ""); // Append string and value
//     }, "");
//     return result.toUpperCase();
// }

// // Use the tag function with a template literal
// const name = "Abdullah Kaimkhani";
// const age = 20;
// const formattedString = toUpperCaseTag`My name is ${name} and I am ${age} years old.`;

// // Log the formatted result
// console.log(formattedString);





// Conditional Logic:

// Create a variable for the current hour
// const currentHour = new Date().getHours(); // Gets the current hour (0 to 23)

// // Use a template literal to display a message based on the time of day
// const greeting = `Good ${currentHour < 12 ? "morning" : "afternoon"}, it's ${currentHour} o'clock!`;

// // Log the message to the console
// console.log(greeting);





// Loops within Template Literals:


// Create an array of items (e.g., a shopping list)
// const shoppingList = ["Apples", "Bananas", "Carrots", "Eggs", "Milk"];

// // Use a template literal to generate an HTML list
// const htmlList = `
//   <ul>
//     ${shoppingList.map(item => `<li>${item}</li>`).join('')}
//   </ul>
// `;

// // Log the HTML list to the console
// console.log(htmlList);





// Escaping Backticks:

// Create a string that includes a backtick character using a template literal
// const message = `This is a backtick: \``;

// // Log the string to the console
// console.log(message);






// Nested Template Literals:

// Create a table with nested template literals

// const table = `
// <table border="1">
// <thead>
// <tr>
// <th>Header 1</th>
// <th>Header 2</th>
// </tr>
// </thead>
// <tbody>
// ${[1, 2, 3].map(row => `
//     <tr>
//         <td>Row ${row} - Cell 1</td>
//         <td>Row ${row} - Cell 2</td>
//     </tr>
// `).join('')}
// </tbody>
// </table>
// `;

// // Log the table to the console
// console.log(table);




// Simple Condition:

// let age = 20; // Assign any age value
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);





// Even or Odd:

// let number = 8;
// let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);





// Grade Evaluation:

// let score = 80;
// let grade = score >= 90 ? "A" :
//     score >= 80 ? "B" :
//         score >= 70 ? "C" :
//             score >= 60 ? "D" : "F";
// console.log(grade);





// Login Status:

// Using ternary operators

// let isLoggedIn = true;
// let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);


// Using logical operators

// let isLoggedIn = false;
// let statusMessage = isLoggedIn && "Welcome back!" || "Please log in";
// console.log(statusMessage);





// Discount Eligibility:

// let isMember = true;
// let purchaseAmount = 150;
// let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;
// console.log(`Discount: ${discount}`);




// Determine Max Value:


// function maxValue(a, b){
//     return (a > b) ? a : b;
// }
// let result = maxValue(10, 20);
// console.log(`The larger value is: ${result}`);





// Greeting Message:

// function greet(name){
//     if(name){
//         return `Hello ${name}`
//     }else{
//         return `Hello, guest!`;
//     }
// }

// // Calling the function with a name
// console.log(greet("Abdullah Kaimkhani"));  // Output: Hello, Abdullah Kaimkhani!

// // Calling the function without a name
// console.log(greet());  // Output: Hello, guest!






// Mapping Values:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const transformedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log(transformedNumbers);






// Filtering Values:

// const strings = ["apple", "bat", "grape", "kiwi", "pear", "orange"];
// const filteredStrings = strings.filter(str => str.length > 3 ? true : false);
// console.log(filteredStrings);






// Copying an Array:

// Create an array originalArray with some elements
// const originalArray = [1, 2, 3, 4, 5];

// // Use the spread operator to create a copy of originalArray called copiedArray
// const copiedArray = [...originalArray];

// // Log both arrays to the console
// console.log("Original Array:", originalArray);  // Output: [1, 2, 3, 4, 5]
// console.log("Copied Array:", copiedArray);      // Output: [1, 2, 3, 4, 5]

// // Verify that they are not the same reference
// console.log(originalArray === copiedArray);     // Output: false








// Merging Arrays:

// Create two arrays array1 and array2
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // Use the spread operator to create a new array mergedArray
// const mergedArray = [...array1, ...array2];

// // Log mergedArray to the console
// console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]








// Adding Elements to an Array:

// Create an array numbers with some elements
// const numbers = [2, 3, 4, 5];

// // Use the spread operator to add a new element at the beginning and at the end of the numbers array
// const updatedArray = [1, ...numbers, 6];

// // Log the updated array to the console
// console.log(updatedArray);  // Output: [1, 2, 3, 4, 5, 6]








// Copying an Object:

// Create an object originalObject with some key-value pairs
// const originalObject = { name: "Abdullah Kaimkhani", age: 20, city: "Karachi" };

// // Use the spread operator to create a copy of originalObject called copiedObject
// const copiedObject = { ...originalObject };

// // Log both objects to the console
// console.log("Original Object:", originalObject);  // Output: { name: "Abdullah Kaimkhani", age: 20, city: "Karachi" }
// console.log("Copied Object:", copiedObject);      // Output: { name: "Abdullah Kaimkhani", age: 20, city: "Karachi" }

// // Verify that they are not the same reference
// console.log(originalObject === copiedObject);     // Output: false









// Merging Objects:

// Create two objects object1 and object2 with some overlapping keys
// const object1 = { name: "Abdullah Kaimkhani", age: 20, city: "Karachi" };
// const object2 = { age: 30, city: "Lahore", country: "Pakistan" };

// // Use the spread operator to create a new object mergedObject
// const mergedObject = { ...object1, ...object2 };

// // Log mergedObject to the console
// console.log(mergedObject);  // Output: { name: "Abdullah Kaimkhani", age: 30, city: "Lahore", country: "Pakistan" }









// Updating Object Properties:

// Create an object user with properties name, age, and email
// const user = { name: "Abdullah Kaimkhani", age: 20, email: "abdullah@gmail.com" };

// // Use the spread operator to create a new object updatedUser
// const updatedUser = { ...user};
// updatedUser.email = "abdullahkk@gmail.com";
// updatedUser.address = "Street 123 Karachi"

// // Log the updatedUser object to the console
// console.log(updatedUser);
// Output: { name: "Abdullah Kaimkhani", age: 20, email: "abdullahkk@gmail.com", address: "Street 123 Karachi" }







// Passing Array Elements as Arguments:

// Create a function sum that returns the sum of three numbers
// function sum(a, b, c) {
//     return a + b + c;
// }

// // Create an array numbers with three elements
// const numbers = [4, 5, 6];

// // Use the spread operator to pass the elements of numbers as arguments to the sum function
// const result = sum(...numbers);

// // Log the result to the console
// console.log(result);  // Output: 15







// Combining Multiple Arrays:

// Create a function combineArrays that takes any number of arrays as arguments
// function combineArrays(...arrays) {
//     return [].concat(...arrays); // Spread the arrays into a single array
// }

// // Call the function with multiple arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const combinedArray = combineArrays(array1, array2, array3);

// // Log the result to the console
// console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]






// Rest Parameter with Spread Operator:

// Create a function multiply that takes a number and any number of additional arguments
// function multiply(multiplier, ...numbers) {
//     // Multiply each number in the array by the multiplier and return the results
//     return numbers.map(number => multiplier * number);
// }

// // Call the function with appropriate arguments
// const result = multiply(2, 3, 4, 5, 6);

// // Log the result to the console
// console.log(result); // Output: [6, 8, 10, 12]








// Spread Operator with Nested Structures:

// Create a nested array
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// // Use the spread operator to create a shallow copy
// const copiedArray = [...nestedArray];

// // Modify the inner arrays in the copied array
// copiedArray[0][0] = 99;

// // Log both the original and copied arrays
// console.log("Original Array:", nestedArray);
// // Output: Original Array: [[99, 2], [3, 4], [5, 6]]

// console.log("Copied Array:", copiedArray);
// Output: Copied Array: [[99, 2], [3, 4], [5, 6]]








// Sum Function:

// Create a function sum that uses the rest operator
// function sum(...numbers) {
//     // Use reduce to calculate the sum of all numbers
//     return numbers.reduce((total, num) => total + num, 0);
// }

// // Call the function with different numbers of arguments
// console.log(sum(1, 2, 3));          // Output: 6
// console.log(sum(10, 20, 30, 40));  // Output: 100
// console.log(sum(5));               // Output: 5
// console.log(sum());                // Output: 0







// Average Function:

// Create a function average that uses the rest operator
// function average(...numbers) {
//     // Check if no numbers are passed, return 0 to avoid division by zero
//     if (numbers.length === 0) return 0;

//     // Calculate the sum using reduce and divide by the number of elements
//     const sum = numbers.reduce((total, num) => total + num, 0);
//     return sum / numbers.length;
// }

// // Call the function with different numbers of arguments
// console.log(average(1, 2, 3));         // Output: 2
// console.log(average(10, 20, 30, 40)); // Output: 25
// console.log(average(5));              // Output: 5
// console.log(average());               // Output: 0 (no arguments)








// First and Rest:

// Create an array numbers with at least 5 elements
// const numbers = [10, 20, 30, 40, 50];

// // Use array destructuring with the rest operator
// const [first, ...rest] = numbers;

// // Log first and rest to the console
// console.log("First:", first);  // Output: First: 10
// console.log("Rest:", rest);    // Output: Rest: [20, 30, 40, 50]










// Skip and Rest:

// Create an array colors with at least 5 elements
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// // Use array destructuring with the rest operator to skip the first two elements
// const [, , ...remainingColors] = colors;

// // Log remainingColors to the console
// console.log("Remaining Colors:", remainingColors);  // Output: Remaining Colors: ['green', 'yellow', 'orange']











// Basic Destructuring:

// Create an object person with properties name, age, email, and address
// const person = {
//     name: 'Abdullah Kaimkhani',
//     age: 20,
//     email: 'abdullah@gmail.com',
//     address: '123 Main St Karachi'
// };

// // Use object destructuring with the rest operator
// const { name, email, ...rest } = person;

// // Log the variables to the console
// console.log("Name:", name);         // Output: Name: Abdullah Kaimkhani
// console.log("Email:", email);       // Output: Email: abdullah@gmail.com
// console.log("Rest:", rest);         // Output: Rest: { age: 20, address: '123 Main St Karachi' }







// Nested Destructuring:

// Create an object student with properties id, name, grades, and info
// const student = {
//     id: 1,
//     name: 'Abdullah Kaimkhani',
//     grades: [90, 85, 88],
//     info: {
//         age: 20,
//         major: 'Computer Science'
//     }
// };

// // Use nested destructuring with the rest operator
// const { id, name, info: { major }, ...rest } = student;

// // Log the variables to the console
// console.log("ID:", id);             // Output: ID: 1
// console.log("Name:", name);         // Output: Name: Abdullah Kaimkhani
// console.log("Major:", major);       // Output: Major: Computer Science
// console.log("Rest:", rest);         // Output: Rest: { grades: [90, 85, 88] }











// Filter Even Numbers:

// Create a function filterEven that uses the rest operator
// function filterEven(...numbers) {
//     // Use the filter method to return only the even numbers
//     return numbers.filter(num => num % 2 === 0);
// }

// // Call the function with different numbers of arguments
// console.log(filterEven(1, 2, 3, 4, 5, 6));  // Output: [2, 4, 6]
// console.log(filterEven(10, 15, 20, 25));    // Output: [10, 20]
// console.log(filterEven(7, 13, 19));         // Output: []
// console.log(filterEven(4, 6, 8, 10));       // Output: [4, 6, 8, 10]






// Combine and Sort Arrays:

// Create a function combineAndSort that uses the rest operator to take any number of arrays
// function combineAndSort(...arrays) {
//     // Combine all arrays into one and sort them
//     return [].concat(...arrays).sort((a, b) => a - b); // Sorting in ascending order
// }

// // Call the function with different arrays and log the results
// console.log(combineAndSort([3, 1, 2], [5, 4], [8, 7, 6]));    // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(combineAndSort([10, 20, 30], [5, 15], [25]));      // Output: [5, 10, 15, 20, 25, 30]
// console.log(combineAndSort([9, 1, 5], [3, 7, 2]));             // Output: [1, 2, 3, 5, 7, 9]
// console.log(combineAndSort([30, 20], [10, 40], [50]));         // Output: [10, 20, 30, 40, 50]









// Basic Destructuring:

// Create an array
// const fruits = ["apple", "banana", "cherry"];

// // Use destructuring to assign array elements to variables
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// // Log the variables to the console
// console.log("First Fruit:", firstFruit); // Output: First Fruit: apple
// console.log("Second Fruit:", secondFruit); // Output: Second Fruit: banana
// console.log("Third Fruit:", thirdFruit); // Output: Third Fruit: cherry






// Skipping Elements:

// Create an array
// const colors = ["red", "green", "blue", "yellow"];

// // Use destructuring to assign the first and third elements, skipping the second
// const [primaryColor, , tertiaryColor] = colors;

// // Log the variables to the console
// console.log("Primary Color:", primaryColor); // Output: Primary Color: red
// console.log("Tertiary Color:", tertiaryColor); // Output: Tertiary Color: blue






// Rest Operator:

// Create an array
// const numbers = [1, 2, 3, 4, 5];

// // Use destructuring to assign the first element and the rest
// const [firstNumber, ...remainingNumbers] = numbers;

// // Log the variables to the console
// console.log("First Number:", firstNumber); // Output: First Number: 1
// console.log("Remaining Numbers:", remainingNumbers); // Output: Remaining Numbers: [2, 3, 4, 5]









// Basic Destructuring:

// Create an object
// const person = {
//     name: "Abdullah Kaimkhani",
//     age: 20,
//     city: "Karachi"
//   };

//   // Use destructuring to assign properties to variables
//   const { name, age, city } = person;

//   // Log the variables to the console
//   console.log("Name:", name); // Output: Name: Abdullah Kaimkhani
//   console.log("Age:", age);   // Output: Age: 20
//   console.log("City:", city); // Output: City: Karachi









// Renaming Variables:

// Create an object
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022
//   };

//   // Use destructuring to assign properties to renamed variables
//   const{make: carMake, model: carModel, year: carYear} = car;

//   // Log the variables to the console
// console.log("Car Make:", carMake);   // Output: Car Make: Toyota
// console.log("Car Model:", carModel); // Output: Car Model: Corolla
// console.log("Car Year:", carYear);   // Output: Car Year: 2022










// Default Values:

// Create an object
// const settings = {
//     theme: "dark",
//     // language: "urdu"
// };

// // Use destructuring to assign properties and provide a default value for language
// const { theme, language = "English" } = settings;

// // Log the variables to the console
// console.log("Theme:", theme);      // Output: Theme: dark
// console.log("Language:", language); // Output: Language: English









// Array of Arrays:

// Create an array of arrays
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// // Use nested destructuring to assign the first elements of each sub-array
// const[[a], [b], [c]] = nestedArray;

// // Log the variables to the console
// console.log("a:", a); // Output: a: 1
// console.log("b:", b); // Output: b: 3
// console.log("c:", c); // Output: c: 5









// Object within an Object:

// Create an object
// const profile = {
//     username: "Abdullah Kaimkhani",
//     details: {
//       email: "abdullah@gmail.com",
//       address: "123 Main Street Karachi"
//     }
//   };

// // Use nested destructuring to assign properties to variables
// const{username, details:{email, address}} = profile;

// // Log the variables to the console
// console.log("Username:", username); // Output: Username: Abdullah Kaimkhani
// console.log("Email:", email);       // Output: Email: abdullah@gmail.com
// console.log("Address:", address);   // Output: Address: 123 Main Street Karachi








// Mix of Arrays and Objects:

// Create an object
// const data = {
//     id: 101,
//     info: [
//       { name: "Alice" },
//       { age: 25 }
//     ]
//   };

//   // Use nested destructuring to assign id, name, and age to variables
//   const { 
//     id, 
//     info: [ { name }, { age } ] 
//   } = data;

//   // Log the variables to the console
//   console.log("ID:", id);    // Output: ID: 101
//   console.log("Name:", name); // Output: Name: Alice
//   console.log("Age:", age);   // Output: Age: 25










// Array Parameters:

// Create a function with destructured array parameters
// function printCoordinates([x, y]) {
//     console.log("x:", x);
//     console.log("y:", y);
//   }

//   // Call the function with different coordinates
//   printCoordinates([5, 10]); // Output: x: 5, y: 10
//   printCoordinates([20, 30]); // Output: x: 20, y: 30
//   printCoordinates([0, -15]); // Output: x: 0, y: -15








// Object Parameters:

// Create a function with destructured object parameters
// function displayUser({ name, age }) {
//     console.log("Name:", name);
//     console.log("Age:", age);
//   }

//   // Call the function with different user objects
//   displayUser({ name: "Abdullah", age: 30 }); // Output: Name: Abdullah, Age: 30
//   displayUser({ name: "Ali", age: 25 });   // Output: Name: Ali, Age: 25
//   displayUser({ name: "Ahmed", age: 40 }); // Output: Name: Ahmed, Age: 40







// List Property Names:

// Create an object
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
//   };

//   // Use Object.keys() to get an array of property names
//   const propertyNames = Object.keys(book);

//   // Log the array to the console
//   console.log(propertyNames); // Output: [ 'title', 'author', 'year' ]









// Count Properties:

// Create an object
// const student = {
//     name: "Abdullah Kaimkhani",
//     age: 20,
//     grade: "A",
//     school: "High School"
//   };

//   // Use Object.keys() to get an array of property names
//   const propertyNames = Object.keys(student);

//   // Determine the number of properties
//   const numberOfProperties = propertyNames.length;

//   // Log the number of properties to the console
//   console.log(numberOfProperties); // Output: 4








// Iterate Over Keys:

// Create an object
// const product = {
//     name: "Laptop",
//     price: 1200,
//     category: "Electronics"
//   };

//   // Use Object.keys() to get an array of property names
//   const propertyNames = Object.keys(product);

//   // Iterate over the property names and log each name and its corresponding value
//   propertyNames.forEach(key => {
//     console.log(`${key}: ${product[key]}`);
//   });








// List Property Values:

// Create an object
// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genre: "Sci-Fi"
//   };

//   // Use Object.values() to get an array of property values
//   const propertyValues = Object.values(movie);

//   // Log the array to the console
//   console.log(propertyValues); 
// Output: [ 'Inception', 'Christopher Nolan', 2010, 'Sci-Fi' ]









//   Sum Values:

// Create an object
// const scores = {
//     math: 85,
//     science: 90,
//     english: 78
//   };

//   // Use Object.values() to get an array of property values
//   const values = Object.values(scores);

//   // Calculate the sum of the values
//   const totalSum = values.reduce((sum, value) => sum + value, 0);

//   // Log the sum to the console
//   console.log(totalSum); // Output: 253











// Iterate Over Values:

// Create an object
// const user = {
//     username: "Abdullah Kaimkhani",
//     email: "abdullah@gmail.com",
//     location: "Karachi"
//   };

//   // Use Object.values() to get an array of property values
//   const values = Object.values(user);

//   // Iterate over the values and log each one
//   values.forEach(value => {
//     console.log(value);
//   });









// List Entries:

// Create an object
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022
//   };

//   // Use Object.entries() to get an array of key-value pairs
//   const entries = Object.entries(car);

//   // Log the array to the console
//   console.log(entries);
// Output: [ [ 'make', 'Toyota' ], [ 'model', 'Corolla' ], [ 'year', 2022 ] ]







//   Convert Object to Array:

// Create an object
// const person = {
//     firstName: "Abdullah",
//     lastName: "Kaimkhani",
//     age: 20
//   };

//   // Use Object.entries() to convert the person object into an array of key-value pairs
//   const entries = Object.entries(person);

//   // Log the array to the console
//   console.log(entries);
// Output: [ ['firstName', 'Abdullah'], ['lastName', 'Kaimkhani'], ['age', 20] ]











//   Iterate Over Entries:

// Create an object
// const settings = {
//     theme: "dark",
//     notifications: true,
//     privacy: "high"
//   };

//   // Use Object.entries() to get an array of key-value pairs
//   const entries = Object.entries(settings);

//   // Iterate over the key-value pairs and log each key and value
//   entries.forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });








// Filter Keys:

// Create an object
// const inventory = {
//     apples: 15,
//     bananas: 8,
//     oranges: 12,
//     grapes: 5
// };

// // Use Object.keys() and filter() to get an array of keys where the value is greater than 10
// const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);

// // Log the array to the console
// console.log(filteredKeys); // Output: ['apples', 'oranges']








// Transform Values:

// Step 1: Create an object with temperatures in Celsius
// const temperatures = {
//     morning: 20,
//     afternoon: 25,
//     evening: 18
// };

// // Step 2: Use Object.entries() to get an array of key-value pairs
// const entries = Object.entries(temperatures);

// // Step 3: Use map() to convert Celsius to Fahrenheit
// const transformedEntries = entries.map(([key, value]) => {
//     const fahrenheit = (value * 9) / 5 + 32; // Celsius to Fahrenheit conversion
//     return [key, fahrenheit]; // Return the key with the converted value
//   });

//   // Step 4: Convert the transformed array back to an object
//   const transformedTemperatures = Object.fromEntries(transformedEntries);

//   // Step 5: Log the new object to the console
//   console.log(transformedTemperatures);







// Key-Value Swap:

// const roles = {
//     admin: 'Administrator',
//     editor: 'Content Editor',
//     viewer: 'Content Viewer'
// };

// const entries = Object.entries(roles);
// const swappedEntries = entries.map(([key, value]) => [value, key]);
// const swappedRoles = Object.fromEntries(swappedEntries);
// console.log(swappedRoles);






// Filter and Map:

// Step 1: Create an array of numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Step 2: Write a higher-order function filterAndMap
// function filterAndMap(array, filterFn, mapFn) {
//   const filtered = array.filter(filterFn); // Filter based on filterFn
//   const mapped = filtered.map(mapFn); // Map the filtered values using mapFn
//   return { filtered, mapped }; // Return both filtered and mapped results
// }

// // Step 3: Define the filter and map functions
// const isEven = (num) => num % 2 === 0; // Filters even numbers
// const isOdd = (num) => num % 2 !== 0; // Filters odd numbers
// const square = (num) => num * num;    // Squares a number

// // Step 4: Use the filterAndMap function
// const { filtered: evenNumbers, mapped: squaredOddNumbers } = filterAndMap(numbers, isOdd, square);

// // Step 5: Log the results
// console.log("Even Numbers:", numbers.filter(isEven)); // Log filtered even numbers
// console.log("Squared Odd Numbers:", squaredOddNumbers); // Log squared odd numbers







// Sort and Reduce:

// Step 1: Create the array "words".
// const words = ["apple", "banana", "cherry", "date"];

// // Step 2: Create the higher-order function "sortAndReduce".
// function sortAndReduce(array, sortFn, reduceFn) {
//   // Sort the array using the provided sort function.
//   const sortedArray = array.sort(sortFn);
//   // Reduce the sorted array using the provided reduce function.
//   return sortedArray.reduce(reduceFn);
// }

// // Step 3: Use the function to sort and concatenate the words.
// const result = sortAndReduce(
//   words,
//   (a, b) => a.localeCompare(b), // Sort function to sort alphabetically.
//   (acc, word) => acc + word    // Reduce function to concatenate.
// );

// // Step 4: Log the resulting string to the console.
// console.log(result);








// Simple Callback:

// Step 1: Define the greet function.
// function greet(name, callback) {
//   // Call the callback function with the greeting message.
//   const message = `Hello, ${name}!`;
//   callback(message);
// }

// // Step 2: Define the callback function printGreeting.
// function printGreeting(message) {
//   // Log the message to the console.
//   console.log(message);
// }

// // Step 3: Call the greet function with a name and the printGreeting callback.
// greet("Abdullah", printGreeting);







// Asynchronous Callback:

// Step 1: Define the fetchData function.
// function fetchData(callback) {
//   console.log("Fetching data...");
//   // Simulate a server request with setTimeout.
//   setTimeout(() => {
//     const data = { id: 1, name: "Sample Data" };
//     // Call the callback function with the fetched data.
//     callback(data);
//   }, 2000); // 2-second delay to simulate asynchronous operation.
// }

// // Step 2: Define the callback function displayData.
// function displayData(data) {
//   // Log the data to the console.
//   console.log("Data received:", data);
// }

// // Step 3: Call the fetchData function with the displayData callback.
// fetchData(displayData);








// Simple Arrow Function:

// Step 1: Convert the function to an arrow function.
// const add = (a, b) => a + b;

// // Step 2: Call the arrow function with arguments 3 and 5 and log the result.
// console.log(add(3, 5));







// Arrow Function with Array Methods:

// Step 1: Create an array numbers with values from 1 to 5.
// const numbers = [1, 2, 3, 4, 5];

// // Step 2: Use the map method and an arrow function to create a new array with each number squared.
// const squaredNumbers = numbers.map(num => num ** 2);

// // Step 3: Log the resulting array to the console.
// console.log(squaredNumbers);









// Variable Scope:

// Step 6: Write a function outer that declares a variable x and assigns it a value.
// function outer() {
//   const x = "I am scoped to outer";

//   // Step 7: Inside outer, write another function inner that logs x to the console.
//   function inner() {
//     console.log(x);
//   }

//   // Step 8: Call the inner function from within outer.
//   inner();
// }

// // Step 9: Call the outer function to see the result.
// outer();










// Closure:

// Step 1: Write a function createCounter that returns another function.
// function createCounter() {
//   let counter = 0;

//   // Step 2: The returned function increments and logs the counter variable.
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }

// // Step 3: Create two counters and demonstrate that they maintain independent state.
// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1(); // Logs: 1
// counter1(); // Logs: 2
// counter2(); // Logs: 1
// counter2(); // Logs: 2









// Simple Default Parameters:

// function greet(name, greeting = "Hello") {
//   console.log(greeting + ", " + name + "!");
// }

// // Calling the function with a custom greeting message
// greet("Abdullah", "Good morning");

// // Calling the function without a custom greeting (it will use the default "Hello")
// greet("Abdullah");








// Default Parameters with Other Arguments:

// function calculateArea(width = 10, height = 5) {
//   return width * height;
// }

// // Calling the function with custom arguments
// let area1 = calculateArea(15, 20);
// console.log("Area with custom dimensions: " + area1);

// // Calling the function without any arguments (uses default values)
// let area2 = calculateArea();
// console.log("Area with default dimensions: " + area2);









// Square Numbers:

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Use map to create a new array where each number is squared
// const squaredNumbers = numbers.map(num => num * num);

// // Log the resulting array to the console
// console.log(squaredNumbers);









// Convert to Uppercase:

// Original array of words
// const words = ["apple", "banana", "cherry"];

// // Use map to create a new array where each word is converted to uppercase
// const uppercaseWords = words.map(word => word.toUpperCase());

// // Log the resulting array to the console
// console.log(uppercaseWords);









// Filter Even Numbers:

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Use filter to create a new array containing only even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// // Log the resulting array to the console
// console.log(evenNumbers);








// Filter Long Words:

// Original array of words
// const words = ["apple", "banana", "cherry", "date"];

// // Use filter to create a new array containing only words with more than 5 characters
// const longWords = words.filter(word => word.length > 5);

// // Log the resulting array to the console
// console.log(longWords);








// Log Numbers:

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Use forEach to log each number to the console
// numbers.forEach(num => console.log(num));









// Log Word Lengths:

// Original array of words
// const words = ["apple", "banana", "cherry"];

// // Use forEach to log the length of each word to the console
// words.forEach(word => console.log(word.length));








// Sum of Numbers:

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Use reduce to calculate the sum of the numbers
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // Log the result to the console
// console.log(sum);








// Concatenate Strings:

// Original array of words
// const words = ["Hello", "world", "this", "is", "JavaScript"];

// // Use reduce to concatenate all the words into a single string with spaces
// const sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);

// // Log the result to the console
// console.log(sentence);








// Check for Even Number:

// Original array of numbers
// const numbers = [1, 3, 5, 7, 8];

// // Use some to check if there is at least one even number in the array
// const hasEvenNumber = numbers.some(num => num % 2 === 0);

// // Log the result to the console
// console.log(hasEvenNumber);








// Check for Long Word:

// Original array of words
// const words = ["apple", "banana", "cherry", "date"];

// // Use some to check if there is at least one word with more than 5 characters
// const hasLongWord = words.some(word => word.length > 5);

// // Log the result to the console
// console.log(hasLongWord);








// Check All Even Numbers:

// Create an array of numbers
// const numbers = [2, 4, 6, 8, 10];

// // Use every() to check if all numbers are even
// const areAllEven = numbers.every(num => num % 2 === 0);

// // Log the result to the console
// console.log(areAllEven); // It should log true since all numbers are even







// Check All Long Words:

// Create an array of words
// const words = ["elephant", "giraffe", "hippopotamus"];

// // Use every() to check if all words have more than 5 characters
// const allLongWords = words.every(word => word.length > 5);

// // Log the result to the console
// console.log(allLongWords); // It should log true since all words have more than 5 characters









// Find First Even Number:

// Create an array of numbers
// const numbers = [1, 3, 5, 7, 8];

// // Use find() to get the first even number
// const firstEven = numbers.find(num => num % 2 === 0);

// // Log the result to the console
// console.log(firstEven); // It should log 8 since it's the first even number in the array









// Find Long Word:

// Create an array of words
// const words = ["apple", "banana", "cherry", "date"];

// // Use find() to get the first word with more than 5 characters
// const longWord = words.find(word => word.length > 5);

// // Log the result to the console
// console.log(longWord); // It should log "banana" since it's the first word with more than 5 characters









// Find Index of First Even Number:

// Create an array of numbers
// const numbers = [1, 3, 5, 7, 8];

// // Use findIndex() to get the index of the first even number
// const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0);

// // Log the result to the console
// console.log(indexOfFirstEven); // It should log 4 since 8 is the first even number and its index is 4









// Find Index of Long Word:

// Create an array of words
// const words = ["apple", "banana", "cherry", "date"];

// // Use findIndex() to get the index of the first word with more than 5 characters
// const indexOfLongWord = words.findIndex(word => word.length > 5);

// // Log the result to the console
// console.log(indexOfLongWord); // It should log 1 since "banana" is the first word with more than 5 characters, and its index is 1








// Simple Promise:

// Define the delay function
// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms); // Resolves after the specified number of milliseconds
//     });
//   }
  
//   // Use the delay function to log "Hello, world!" after a delay of 2 seconds
//   delay(2000).then(() => {
//     console.log("Hello, world!");
//   });








// Promise Chain:

// Define the fetchData function that returns a promise
// function fetchData() {
//     return new Promise(resolve => {
//       const data = { message: "Hello, this is the data!" }; // Example data
//       resolve(data); // Resolving the promise with the data
//     });
//   }
  
//   // Chain a .then() to fetchData to log the data to the console
//   fetchData().then(data => {
//     console.log(data); // Logs the resolved data
//   });








// Error Handling:

// Define the fetchUserData function that returns a promise
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       const userData = { name: "John", age: 30 }; // Example user data
  
//       // Check if age is missing
//       if (!userData.age) {
//         reject(new Error("Age is missing from user data"));
//       } else {
//         resolve(userData); // Resolve the promise with user data
//       }
//     });
//   }
  
//   // Use the .then() method to handle resolved data and .catch() to handle errors
//   fetchUserData()
//     .then(user => {
//       console.log(user); // Logs user data if everything is fine
//     })
//     .catch(error => {
//       console.log("Error:", error.message); // Logs the error message if there's an issue
//     });
  






// Simulate Network Request:

// Define the getWeather function that simulates a network request
// function getWeather(success = true) {
//     return new Promise((resolve, reject) => {
//       // Simulate a network request with setTimeout
//       setTimeout(() => {
//         if (success) {
//           // Simulate successful response with weather data
//           const weatherData = { temperature: 25, condition: "Sunny" };
//           resolve(weatherData); // Resolving with weather data
//         } else {
//           // Simulate an error scenario
//           reject(new Error("Failed to fetch weather data"));
//         }
//       }, 1000); // 1 second delay
//     });
//   }
  
//   // Simulate success case
//   getWeather(true)
//     .then(data => {
//       console.log("Weather data received:", data); // Logs the weather data if success
//     })
//     .catch(error => {
//       console.log("Error:", error.message); // Logs the error message if there is an issue
//     });
  
//   // Simulate error case
//   getWeather(false)
//     .then(data => {
//       console.log("Weather data received:", data); // This will not run in case of an error
//     })
//     .catch(error => {
//       console.log("Error:", error.message); // Logs the error message
//     });








// Simple async Function:

// Define the delay function (from Task 1)
// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms); // Resolves after the specified number of milliseconds
//     });
//   }
  
//   // Define the async function sayHello
//   async function sayHello() {
//     // Wait for the delay function to complete (2 seconds delay)
//     await delay(2000); // Wait for 2 seconds
//     console.log("Hello, world!"); // Log "Hello, world!" after the delay
//   }
  
//   // Call the async function
//   sayHello();










// Fetch Data with async/await:

// Assuming fetchUserData is defined as follows (from Task 2)
// async function fetchUserData(userId) {
//     const response = await fetch(`https://api.example.com/users/${userId}`);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data for user with ID ${userId}`);
//     }
//     const data = await response.json();
//     return data;
//   }
  
//   // The async function that uses await to fetch user data
//   async function getUserData(userId) {
//     try {
//       const userData = await fetchUserData(userId);
//       console.log('User Data:', userData);  // Log the fetched data
//     } catch (error) {
//       console.error('Error fetching user data:', error.message);  // Handle error
//     }
//   }
  
//   // Example usage
//   getUserData(1);  // Call with a userId












// Fetch and Process Data:

// Simulate the fetchUser function that returns a promise resolving with user data
// function fetchUser(userId) {
//     return new Promise((resolve, reject) => {
//       // Simulating an API call with setTimeout
//       setTimeout(() => {
//         const user = { id: userId, name: "Abdullah Kaimkhani", age: 20 }; // Example user data
//         resolve(user); // Resolves with the user data
//       }, 1000); // Simulate network delay of 1 second
//     });
//   }
  
//   // Simulate the fetchPosts function that returns a promise resolving with an array of posts
//   function fetchPosts(userId) {
//     return new Promise((resolve, reject) => {
//       // Simulating an API call with setTimeout
//       setTimeout(() => {
//         const posts = [
//           { id: 1, title: "First Post", content: "This is the first post." },
//           { id: 2, title: "Second Post", content: "This is the second post." }
//         ]; // Example posts
//         resolve(posts); // Resolves with the posts data
//       }, 1500); // Simulate network delay of 1.5 seconds
//     });
//   }
  
//   // The async function that uses await to fetch user data and their posts
//   async function getUserAndPosts(userId) {
//     try {
//       const user = await fetchUser(userId); // Fetch user data
//       console.log("User Data:", user); // Log user data
  
//       const posts = await fetchPosts(userId); // Fetch posts for the user
//       console.log("User's Posts:", posts); // Log posts data
//     } catch (error) {
//       console.error("Error fetching data:", error.message); // Handle any errors
//     }
//   }
  
//   // Example usage
//   getUserAndPosts(1); // Call the function with a userId










// Error Handling in async/await:

// Modified fetchUser function that rejects the promise if user data is not found
// function fetchUser(userId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate a scenario where the user is not found (e.g., invalid userId)
//         if (userId !== 1) { // Assuming 1 is the valid userId for demonstration
//           reject(new Error("User not found!"));
//         } else {
//           const user = { id: userId, name: "Abdullah Kaimkhani", age: 20 }; // Example user data
//           resolve(user); // Resolves with the user data
//         }
//       }, 1000); // Simulate network delay of 1 second
//     });
//   }
  
//   // Async function that uses await to call fetchUser and handles errors
//   async function getUserInfo(userId) {
//     try {
//       const user = await fetchUser(userId); // Attempt to fetch user data
//       console.log("User Data:", user); // Log user data if successful
//     } catch (error) {
//       console.error("Error fetching user data:", error.message); // Handle any errors (e.g., user not found)
//     }
//   }
  
//   // Example usage
//   getUserInfo(1); // This will log user data for userId 1
//   getUserInfo(2); // This will log "Error fetching user data: User not found!" since userId 2 is invalid











// Simulate API Calls:

// Simulate an API call with a random delay
// function apiCall() {
//     return new Promise((resolve, reject) => {
//       // Generate a random delay between 1 and 3 seconds
//       const delay = Math.random() * 2000 + 1000; // Random delay between 1000ms (1s) and 3000ms (3s)
      
//       // Simulate a successful response or error
//       setTimeout(() => {
//         // Randomly decide whether the API call succeeds or fails (50% chance of failure)
//         if (Math.random() > 0.7) {
//           reject(new Error("API call failed!"));  // Simulate a failure
//         } else {
//           resolve({ data: `Data fetched at ${new Date().toLocaleTimeString()}` }); // Simulate a successful response
//         }
//       }, delay);
//     });
//   }
  
//   // Async function that calls apiCall three times in sequence
//   async function getData() {
//     try {
//       // Call apiCall three times and log the result after each call
//       const result1 = await apiCall();
//       console.log("First API Call:", result1);
  
//       const result2 = await apiCall();
//       console.log("Second API Call:", result2);
  
//       const result3 = await apiCall();
//       console.log("Third API Call:", result3);
//     } catch (error) {
//       console.error("Error during API calls:", error.message); // Handle any errors
//     }
//   }
  
//   // Example usage
//   getData();
  




                                                // THE END
  
  
  
  



































































