//if
const isUserLoggedIn = true;
const temperature = 41;

// if (temperature === 41){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// <, >, <=, >=, ==, ===, !=, !==

// const score = 200

// if(score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance <750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow user to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow user to login");
}