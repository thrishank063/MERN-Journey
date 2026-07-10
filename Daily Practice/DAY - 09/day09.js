// 'const greetings = (name) =>{
//     console.log(`Hello ${name}`);
// }

// greetings('Suchith');
// greetings("Thrishnak")

// const calculate = module.require("./calculator");
// const {add, sub} = calculate;

// console.log(add(6, 12));
// console.log(sub(19 , 13));

// // const {fun} = require('./calculator');
// // console.log(fun());

const hello = () =>{
    console.log(`Hello`)
}
function timer(){
    setTimeout(hello(), 10000);
}

timer();