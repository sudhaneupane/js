// var c=300

//global scope
let a =200


//block scope
if(true){
    let a =10;
    const b=20
    //console.log("inner",a);
}
 // console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName="sudha"
    function two(){
        const website="youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const userName="makima"
    if (userName==="makima") {
        const website="  youtube"
        console.log(userName+website);
    }
    // console.log(website);
}

// console.log(userName);

//****************************************interesting****************** */

function addOne(num){
    return num+1
}
addOne(4)

const addTwo= function(num){
    return num +1
}
addTwo(8)