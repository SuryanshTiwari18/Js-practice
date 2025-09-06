// var c = 300
let a  = 300
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "hitesh"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const userName = "hitesh"
    if(userName==="hitesh"){
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// +++++++++++++ intreresting ++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
