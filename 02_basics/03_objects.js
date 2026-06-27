// Singleton 

//object literal(tarika of declaration object)
//Object.create

const JsUser = {
    name: "Shiksha",
    "full name": "Shiksha Meena",
    
    age: 20,
    location: "Vidisha",
    email: "shikshameena.con",
    isLonggedIn: false,
    lastLoginDays:["monday","Saturday"]
}

/*console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])


JsUser.email = "mennashiksha.com"
Object.freeze(JsUser)
JsUser.email = "shiksha.com"
console.log(JsUser);*/

JsUser.greeting  = function(){

    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());



