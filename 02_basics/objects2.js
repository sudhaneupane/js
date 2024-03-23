const User={}

User.id="124abc"
User.name="Suresh"
User.isLoggedIn=false
//const User=new Object()
//console.log(User);

const regUser={
    name:"Supriya",
    age:32,
    gender:"female",
    email:"supriya@gmail.com",
    fullname:{
        userfullName:{
            firstName:"Supriya",
            lastName:"Tamang",
        }
       
    }

}
//console.log(regUser);

const myObj1={1:"a",2:"b"}
const myObj2={3:"c",4:"d"}
// const myObj3={myObj1,myObj2}
// const myObj3=Object.assign(myObj1,myObj2)

const myObj3={...myObj1,...myObj2}
console.log(myObj3);
