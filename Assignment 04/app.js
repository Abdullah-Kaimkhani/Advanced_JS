// Convert all elements to their string representation using map method

// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//         name: "John",
//         age: 25,
//         isStudent: false,
//         toString() {
//             return `Name: ${this.name}, Age: ${this.age}, IsStudent: ${this.isStudent}`;
//         },
//     },
//     false,
//     3.14,
//     "JavaScript is fun!",
// ];


// const stringArrays = arrays.map(element => String(element))
// console.log(stringArrays);


const arrays = [
    42,
    true,
    "Hello, World!",
    {
        name: "John",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];

// Filter only number elements
const numberElements = arrays.filter((e, i)=> typeof e === "number");
console.log(numberElements);


// Log each element's type using forEach
arrays.forEach((e, i)=>{
    console.log(`${e}, ${typeof e}`);
})


// Use reduce to sum up only numbers
const sumOfNumbers = arrays.reduce((sum, element) => {
    return typeof element === "number" ? sum + element : sum;
}, 0);
console.log(sumOfNumbers);




// Find the first boolean value
const firstBoolean = arrays.find((e, i)=> typeof e ==="boolean" );
console.log(firstBoolean);



// Find the index of the first object
const firstObjectIndex = arrays.findIndex((e, i)=> typeof e === "object" && !Array.isArray(e));
console.log(firstObjectIndex);




// Check if the array contains any numbers
const containsNumber = arrays.some((e, i)=> typeof e === "number");
console.log(containsNumber);




// Check if all elements are strings
const allStrings = arrays.every((e, i)=> typeof e === "string");
console.log(allStrings);
  