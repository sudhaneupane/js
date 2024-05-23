const title = document.getElementById("title");
document.querySelector('input[type="password"]');

const myul = document.querySelector("ul");
myul.querySelector("li");
const turnGreen = document.querySelector("li");
turnGreen.style.backgroundColor = "Green";
turnGreen.style.color = "brown";
turnGreen.innerText = "five";

const allselectList = document.querySelectorAll("li");
allselectList[2].style.color = "blue";

const myh1 = document.querySelectorAll("h1");
myh1[0].style.color = "orange";

allselectList.forEach((li)=>{
    li.style.backgroundColor="purple"
})


//there is no loop in HTMLCollection
const tempClassList=document.getElementsByClassName('list-item')
// tempClassList.forEach((li)=>{
//     li.style.color="purple"
// })

//converting HTMLCollection in Array
const convertedArray=Array.from(tempClassList)
// Now we can use loop 
