//if

// operator <,>,<=,>=,==,!=,!==,===

// const isUserLoggedIn=true
// const temp=26
// // if (2==="2") {
// //     //code
// //     console.log("hello");
// // }

// // if (false) {
// //     //wont execute
// // }

// // if (2!==3){
// //     console.log("true");
// // }

// if (temp===30) {
//     console.log("temperature is less than 30");
// }
// else{
//     console.log("temperature is greater than 30")
// }

// const score =200
// if(score==180){
//     console.log("youre good at programming");
// }
// else{
//     console.log("youre excellent in programming");
// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`The user have ${power} power`);
// }

//  const balance =1000
// // if (balance>500) {
// //     console.log("youre rich");
// // }
// // else {
// //     console.log("youre super rich");
// // }

// if(balance<500){
//     console.log("less than 500");
// }
// else if (balance<750) {
//     console.log("less than 750");
// }
// else if (balance<900) {
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
// }

const user=true
const debitCard=true
if(user && debitCard){
    console.log("allowed for shopping");
}

const fromGoogle=true
const fromEmail=false
if (fromEmail||fromGoogle) {
    console.log("you can log in");
}