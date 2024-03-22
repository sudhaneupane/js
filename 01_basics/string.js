const name="Miraa"
const repoCount=20
// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName=new String('Genshin-Impact')

console.log(gameName);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('b'));

console.log(gameName.__proto__);

const newString=gameName.substring(0,4)
console.log(newString);

const anotherGameName=gameName.slice(-6,5)
console.log(anotherGameName);

const newName="         Sudha           "
console.log(newName);
console.log(newName.trim());

const url="https://sudha.com/sudha%20neupane"

console.log(url.replace('%20','_'));

console.log(url.includes('sudha'))

console.log(gameName.split('/'));