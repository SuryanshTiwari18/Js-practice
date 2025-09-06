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
console.log(loginUserMessage());

