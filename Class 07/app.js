// Define a simple tag function
// function logTemplate(strings, ...values) {
//     console.log("Template strings:", strings); // Logs the template strings
//     console.log("Template values:", values);  // Logs the interpolated values
// }

// // Use the tag function with a template literal
// const name = "Abdullah Kaimkhani";
// const age = 25;
// logTemplate`My name is ${name}, and I am ${age} years old.`;








// // Define a tag function to format the template literal as uppercase
// function toUpperCaseTag(strings, ...values) {
//     // Combine the strings and values, then convert to uppercase
//     const result = strings.reduce((acc, str, i) => {
//         return acc + str + (values[i] || ""); // Append string and value
//     }, "");
//     return result.toUpperCase();
// }

// // Use the tag function with a template literal
// const name = "Alice";
// const age = 25;
// const formattedString = toUpperCaseTag`My name is ${name} and I am ${age} years old.`;

// // Log the formatted result
// console.log(formattedString);




// function constructor

// function Student(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
//     }
// }
//     const std1 = new Student("Abdullah Kaimkhani", 19);
//     console.log(std1);
// std1.sayHello();



// class constructor

// class Student {
//     constructor() {
//         this.name = "Abdullah Kaimkhani";
//         this.age = 19;
//     }
//     sayHello = () => {
//     return (`Hello, my name is ${this.name} and I am ${this.age}`)
// };
// }

// const std1 = new Student();
// console.log(std1);
// console.log(std1.sayHello());


// Inheritance

// class Student {
//     constructor() {
//         this.name = "Abdullah Kaimkhani";
//         this.age = 19;
//     }
// }

// class School extends Student {
//     constructor(){
//         super();
//         this.name = "Abdullah Kaimkhani";
//         this.age = 19;
//         this.name = "ABC School";
//         this.students = [];
//     }
// }
// const school1 = new School();
// console.log(school1);


// ES5 - Commonjs
// ES6 - Modulejs

// const greet = () =>{
//     console.log("Hello, World!");
// }

// let name = "Abdullah Kaimkhani";

// export default greet;
// export {greet, name};






// News App
const input = document.getElementById('inputField')
const cardDiv = document.getElementById('card-section')

let search = () => {

    const API_KEY = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=c0d019045c294c61a8f4da4335fdeb28`;
    fetch(API_KEY)
    .then(response => response.json())
    .then((data)=>{
        data.articles.map((e, i)=>{
            console.log(e);
            cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${e.urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
        })
    }) 
    .catch((err)=>{
        console.log(err);
        
    })   
}




