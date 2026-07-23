const myNums = [1,2,3,4,5,6,7,8,9,10]

/*const myTotal= myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval
},0)

console.log(myTotal);*/

const myTotal = myNums.reduce((acc,currval) => acc+currval,0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js cource",
        price: 2999
    },
    {
        itemName: "py cource",
        price: 1999
    },
    {
        itemName: "cpp cource",
        price: 3999
    },
    {
        itemName: "Ds cource",
        price: 12999
    },
]

const TotalPrice = shoppingCard.reduce((acc,item) => acc+item.price,0)

console.log(TotalPrice);