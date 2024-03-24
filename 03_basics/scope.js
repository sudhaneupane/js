// var c=300

//global scope
let a =200


//block scope
if(true){
    let a =10;
    const b=20
    console.log("inner",a);
}
 console.log(a);
// console.log(b);
// console.log(c);