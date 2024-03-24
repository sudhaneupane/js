

function myName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("A");
}
// myName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

// const result=addTwoNum(3,7)

// console.log("Result",result);

// function addTwoNum(num1,num2){
//     // let result =num1+num2
//     // return result
//     return num1+num2
// }

// const result=addTwoNum(3,7)
// // console.log(result);

function loginMessage(userName="buddy"){
    // if(userName===undefined){
    //     console.log("please enter a name");
    //     return
    // }
    if(!userName){
        console.log("please enter a name");
        return
    }
    return `${userName} just logged in`
}

console.log(loginMessage());
