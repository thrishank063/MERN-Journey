import {hello, sum} from './day13export.js';
console.log(hello);
try{
    console.loag(sum(3,2))
}catch(error){
    console.error(`Check the syntax`)
}
finally{
    console.log("Welcome to my world")
}
