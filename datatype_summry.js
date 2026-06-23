// #Primitive Datatype

// 7 type : String , Number , Boolean , null , Undefined , Symbol , BigInt 

const score = 100
const scareValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 123443764573464n


// #ReferenceType or Non-PrimitiveDataType
// Array , Objects , Funtions 

const heros = ["shaktiman" , "nagraj" , "doga"];
let myobj = {
    name:"shiksha",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);