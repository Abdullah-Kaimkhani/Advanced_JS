// Sync or async

// Promise

// There are 3 stages in Promise.
// 1- pending
// 2-fulfilled/resolve
// 3- reject

// let pro = new Promise((resolve, reject)=>{
//     let icecream = true;
//     if(icecream === true){
//         resolve("Promise resolved...")
//     }else{
//         reject("Promise rejected.")
//     }
// });

// pro
// .then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// });


// Multiplication Table Task

// let num = +prompt("Enter a number");
// let num1 = 5;

// if(num){
//     for(let i=1; i<=10; i++){
//         document.write(`${num} x ${i} = ${num*i} <br>`)
//     }
// }else{
//     for(let i=1; i<=10;i++){
//         document.write(`${num1} x ${i} = ${num1 *i} <br>`)
//     }
// }


// Multiplication Table Task using Promise()


// let num = +prompt("Enter a number");
// let num1 = 5;
// let pro = new Promise((resolve, reject)=>{
//     if(num){
//             resolve(num)
//     }else{
//                 reject(num1)
//             }
//         });

//         pro.then((num)=>{
           
            
//             for(i=1; i<=10; i++){
//                 document.write(`${num} x ${i} = ${num*i} <br>`)
//             }
            
//         }).catch((num1)=>{
            
            
//             for(i=1; i<=10; i++){
//                 document.write(`${num1} x ${i} = ${num1*i} <br>`)
//             }
            
//         })


// API

// let fetchData = new Promise((resolve, reject)=>{

//     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         return res.json()
//     }).then((res)=>{
//         resolve(res);
//     }).catch((err)=>{
//         reject(err);
//     })
// })
// fetchData.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err.message);
    
// })

// Async await

// let fetchData = async ()=> {
//     try{
//         let getData = await fetch('https://jsonplaceholder.typicode.com/posts');
//         let response = await getData.json();
//         console.log(response);
//     } catch (error){
//         console.log(error.message);
        
//     }
// }
// fetchData()


// Practice

// let arr = [{num:3}, {num:4}, {num:5}, {num:6}];
// let newArr = arr.reduce((a, b)=>{
//     return {num:a.num + b.num};
// })
// console.log(newArr);


// let arr = [{num:3}, {num:4}, {num:5}, {num:6}];
// let newArr = arr.reduce((a,b)=>{
//     return a + b.num;
// }, 10)
// console.log(newArr);



// var firstName = "Abdullah";
// let num1 = 50;

// {
//     var firstName = "Kaimkhani";
//     let num1 = 100;
//     console.log(firstName);
//     console.log(num1);
    
// }
// console.log(firstName);
// console.log(num1);


// var firstName = "Abdullah";
// let num1 = 50;

// if(true){
//     var firstName = "Kaimkhani";
//     let num1 = 100;
//  console.log(firstName);
//    console.log(num1);
// }

// console.log(firstName);
// console.log(num1);


// var firstName = "Abdullah";
// let num1 = 50;

// function sum(){
//     var firstName = "Kaimkhani";
//     let num1 = 100;
//  console.log(firstName);
//    console.log(num1);
// }
// sum()
// console.log(firstName);
// console.log(num1);
