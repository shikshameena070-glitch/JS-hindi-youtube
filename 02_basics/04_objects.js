const tinderUser = new Object() // [singletone]
//const tinderUser = {} [non songletone]

tinderUser.id = "123abc"
tinderUser.name = "shiksha"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regulerUser = {
    emil:"Some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"shiksha",
            lastname:"meena"
        }
    }
}
//console.log(regulerUser.fullname.userfullname.)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = {obj1,obj2}
//console.log(obj3);
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3)

const users = [
    {
        id:1,
        email:"shiksha@.com"
    }
]
//users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogged'))
