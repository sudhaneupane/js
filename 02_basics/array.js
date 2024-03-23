const myArr=[0,1,2,"batman",4,5]  //square bracket
console.log(myArr[3]);

const myArr2=new Array(1,5,7,6,75,45)  //parenthesis
console.log(myArr2[4]);


//array methods

myArr.push(6)
console.log(myArr);
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);


console.log(myArr.includes(6));
console.log(myArr.indexOf(2));
console.log(myArr);
const newArr3=myArr.join()
console.log(newArr3);

console.log("A",myArr);
const myna1=myArr.slice(1,3)
console.log(myna1);

myArr.unshift(12)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5)); 

console.log(myArr.indexOf(3)); 

console.log("B",myArr);
const myna2=myArr.splice(1,3)
console.log(myna2);

console.log("C",myArr);