/*Primitives

7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

*/

const score = 100;
const scoreValue=100.3

const isLoggedIn=false
const temp=null
let userEmail=undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id);
console.log(id===anotherId);

const bigNumber=3254788954545784548545n
console.log(typeof bigNumber);

/*Reference(Non-Primitive)

Array,Objects,Functions

*/

const heroes=["spiderman","wonderwoman","superman","batman"]

let myObj={
    name: "Sudha",
    food:"Pizza",
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof id);


//***************************Stack and Heap********************************

/* Stack(Primitive)
    Heap(Non-Primitive)
    
*/

let myName="Sudha Neupane"
let anotherName=myName
anotherName="Sumi Pari"
console.log(anotherName)
console.log(myName);

let userOne={
    name:"Sudha Neupane",
    email:"sudha@gmail.com",
    phone:9854762454
}
console.log(userOne);

let userTwo=userOne
userTwo.email="user@gmail.com"
console.log(userTwo);