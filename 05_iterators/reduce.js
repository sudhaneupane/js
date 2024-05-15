const myNums=[1,2,3,4,6]

// const myTotal=myNums.reduce((accumulator,currentValue)=>{
//     console.log(`acc:${accumulator} , current:${currentValue}`);
//     return accumulator+currentValue},3)
// console.log(`Total value is: ${myTotal}`);

const myTotal=myNums.reduce(function (accumulator,currentValue){
    console.log(`accumulator:${accumulator}\t\tcurrent value:${currentValue}`);
    return accumulator+currentValue
},0)
console.log('total',myTotal);

const shoppingCart=[
    {
        itemName:'js course',
        price:1500
    },
    {
        itemName:'java course',
        price:20000
    },
    {
        itemName:'mobile dev course',
        price:40000
    },
    {
        itemName:'py course',
        price:20000
    }
]

const buyPrice=shoppingCart.reduce((acc,item)=>{
    return  acc+item.price
},0)
console.log('The total is :',buyPrice);


