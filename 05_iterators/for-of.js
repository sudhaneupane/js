//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings="Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}

//Maps
const map=new Map()
map.set('NEP','Nepal')
map.set('FR','France')
map.set('IN','India')
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key ,value] of map) {
    // console.log(key, ':-',value);
}

const myObj={
    game1:'MobileLegend',
    game2:'PUBG'
}

// for (const [key,value] of myObj) {
//     console.log(key,":-",value);
// }