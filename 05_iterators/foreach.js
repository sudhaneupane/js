const coding=["js","java","c#","python","ruby","cpp"]

// coding.forEach( function(item){
//     console.log(item);
// })

coding.forEach((val)=>{
    // console.log(val);
})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})

/*
const codingsferv=["javascript","python","java","nodejs","react"]

const val=codingsferv.forEach((item)=>{
    console.log(item);
    return item
})

console.log(val); 
*/

//forEach donot return anything


const myNums=[1,2,3,4,5,6,7,8,8,10]
// const newnums=myNums.filter((num)=>num>4)
const newnums=myNums.filter((num)=>{
    return num>4        //must use return keyword here
})
console.log(newnums);


const books=[
    {title:'book one',genre:"fiction",publish:1981,edition:1982},
    {title:'book two',genre:"history",publish:1990,edition:1994},
    {title:'book three',genre:"non-fiction",publish:2001,edition:2005},
    {title:'book four',genre:"science",publish:2009,edition:2011},
    {title:'book five',genre:"fiction",publish:1997,edition:1998},
    {title:'book six',genre:"history",publish:2012,edition:2015},
    {title:'book seven',genre:"non-fiction",publish:2024,edition:2025},
]

// const userBooks=books.filter((bk)=>bk.genre=='history')
const userBooks=books.filter((bk)=>bk.publish>=2012 && bk.genre=='history')
console.log(userBooks);
