// fetch("https://something.com").then().catch().finally()

const promiseOne=new Promise(function(resolve,reject){
// Do an async task
// DB calls, cryptography,network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

//then is connected with resolve
promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task two');
        resolve()
    },1000)
}).then(function(){
    console.log("async two resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({username:"sudha",email:"sudhaexample@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"nirmal",password:1457})
        }else{
            reject('error:something went wrong')
        }
    },1000)
   
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally((final)=>{
    console.log("finally executed");
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("timeout executed");
        let error=true
        if(error){
            resolve({username:"javascript",password:13245})
        0}
        else{
            reject("ERROR:something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const response=await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
} 
consumePromiseFive()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error);})
