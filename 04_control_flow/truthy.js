const userEmail=[]
if (userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

/*falsy value

false, 0, -0, BigInt, "", null, undefined, NaN

*/

/*truthy value 

"0", "false", " ", [], {}, function(){}

*/

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

// Nullish Coalescing Operator(??):null undefined

let val1;
// val1 = 5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 17
val1=null ?? 10 ?? 15

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceCream=100
iceCream <= 80 ? console.log("less than 80"):console.log("more than 80");