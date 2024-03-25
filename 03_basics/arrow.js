const user={
    username:"sudha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username="ramesh"
// user.welcomeMessage()

// console.log(this);

// function samosa(){
//     let username="santosh"
//     console.log(this.username);
// }
// samosa()

// const user1=()=>{
//     let username="sapana"
//     console.log(this.username);
// }
// user1()


// explicit return
// const addOnly=(num1,num2)=>{
//     return num1+num2
// }

//implicit return
const addOnly=(num1,num2)=> (num1+num2)

console.log(addOnly(7,8));

const arr=[2,5,7,8,9,4]

arr.forEach(()=>{})

arr.forEach()
