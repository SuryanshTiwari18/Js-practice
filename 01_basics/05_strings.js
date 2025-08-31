const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hi-te-sh');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20youtuber"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));