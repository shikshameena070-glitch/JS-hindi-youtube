//de structuring of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shiksha"
}

//course.courseInstructor

//const{courseInstructor} = course
const{courseInstructor:instructor}=course // function creation
//console.log(courseInstructor);
console.log(instructor)//function call

/*const navbar = ({company}) =>{

}
navbar(company = "shiksha")*/

