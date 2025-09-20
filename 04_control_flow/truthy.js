const userEmail = []

if (userEmail) {
    console.log("You have an email")
}else{
    console.log("Please provide an email")
}

// falsy value

// false, 0, -0, 0n, "", null, undefined, NaN

//truthy values some surprising values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish coalescing operator (??)  - null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("I will drink ice tea") : console.log("I will drink water")