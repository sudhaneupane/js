//singleton

//object literals
const mySym=Symbol ("suda123")

const jsUser={
    name:"Sudha",
    "full Name":"Sudha Neupane",
    [mySym]:"sym123",
    age:45,
    location:"Kathmandu",
    email:"sudha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Sunday","Monday"],
}

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);

//override
jsUser.email="sudha12@gmail.com"

Object.freeze(jsUser)
jsUser.email="sudh123#"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello JS user");
}

jsUser.greetingTwo=function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());
