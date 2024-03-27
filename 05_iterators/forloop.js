//for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     // console.log(element);
// }

for (let i = 0; i <=10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop${j} and outer loop ${i}`);
        // console.log(i+ '*'+j+'='+i*j);
    }
}

let myArr=['Batman','Superman','Spiderman']
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

// for (let index = 0; index <=20; index++) {
//     const element = index;
//     if(index==5){
//         console.log("5 detected");
//         break
//     }
//     console.log(`value of index is ${index}`);
// }
for (let index = 0; index <=20; index++) {
    const element = index;
    if(index==5){
        console.log("5 detected");
        continue
    }
    console.log(`value of index is ${index}`);
}