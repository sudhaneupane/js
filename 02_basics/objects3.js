const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor:"Sudha Neupane",
}

const {courseName}=course
console.log(courseName);

//destructure
const {courseInstructor:instructor}=course
console.log(instructor);

//JSON
// {
//    "name":"Sumi",
//     "coursename":"javascript",
//     "price":"free"
// }

[
    {},
    {},
    {}
]