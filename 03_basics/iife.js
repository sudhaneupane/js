//immediately invoked function expression (IIFE)


// parenthesis before function to separate pollution from global scope
(function db(){
    //named IIFE
    console.log(`database connected`);

}) ();

((name)=>{
    console.log(`DB connected twice ${name}`);
})("Madhu")

