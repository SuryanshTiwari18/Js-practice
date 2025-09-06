function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("i");
    console.log("s");
    console.log("e");
    console.log("n");
    console.log("b");
    console.log("e");
    console.log("r");
    console.log("g");
}

// sayMyName // reference
// sayMyName() //execution

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return (result);
    return num1 + num2;
}

const result = addTwoNumbers(5, 6)
// console.log(result);

function loginUserMessage(useranme = "Sam"){
    if(!useranme){
        console.log("Please enter a username");
        return
    }
    return `${useranme} just logged in`;
}
// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
