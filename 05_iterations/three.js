// for of

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World";

// for (const char of greetings) {
//     console.log(char);
// }

// Maps

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States of America');
map.set('FR', 'France');
// map.set('IN', 'India');

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'FIFA',
    'game3' : 'PUBG'
}

for(const [key, value] of Object.entries(myObj)) {
    console.log(key, value);
}