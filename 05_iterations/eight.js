const myNums = [1,2,3];

// const myTotal = myNums.reduce( function(acc, curr) {
//     return acc + curr;
// }, 0);

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0);

console.log(myTotal); // 6

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 3999
    },
    {
        itemname: "web dev course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0);
console.log(totalPrice); // 20996