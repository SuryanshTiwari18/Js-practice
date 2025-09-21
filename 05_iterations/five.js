const coding = ["js", "ruby", "python", "java", "c++"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//   console.log(item);
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    { lang: "js", type: "frontend" },
    { lang: "ruby", type: "backend" },
    { lang: "python", type: "backend" },
    { lang: "java", type: "fullstack" },
    { lang: "c++", type: "system" },
]

myCoding.forEach( (item) => {
    console.log(item.lang, item.type);
} )