const user = {
    username: "shiksha",
    price: 999,

    welcomrMessage: function(){
        console.log(`${this.username},Welcome To Website`);
        console.log(this)
    }
}

//user.welcomrMessage()
//user.username = "sam"
//user.welcomrMessage()

//console.log(this);

/*function chai(){
    let usernamen = "shiksha"
    console.log(this.username);
}
chai()*/

//const chai = function(){
  //  let username = "shiksha"
   // console.log(this.username);
//}


const chai = () => {
    let username = "shiksha"
    console.log(this.username);
}
//chai()


//implecite return
//const addTwo = (num1, num2) => {
 //   return num1 + num2
//}


//explecite return
//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "shiksha"})


console.log(addTwo(3,4))
