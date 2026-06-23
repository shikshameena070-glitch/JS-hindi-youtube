// Stack (Primitive) , Heap (Non-Primitive)

let myYouTube = "shikshameena.com"

let anotherName = myYouTube

anotherName = "chaiaurcode"

console.log(myYouTube);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@fgh"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);