
// callback = a function that is passed as an argument
//              to another function 
hello();
goodbye();

function hello(){
    setTimeout(function(){
        console.log("Hello");
    },1000)
    
}
function goodbye(){
    console.log("Good Bye!");
}

sum(displayPage, 1 ,5);

function sum(callback, x , y){
    let result = x + y;
    callback(result);
}

function displayPage(result) {
    console.log(result);
}

// ---------------------------------------------------------------------------------------
// forEach() = method used to iterate over th elements
                // of an array and apply a specified function (callback)
                // to each Element

                // array.forEach(callback)
 let numbers = [1, 2, 3, 4, 5, 6, 7];

 function display(element){
    // console.log(element);
 }

 numbers.forEach((num) => display(num));
 //--------------------map-------------------------------
numbers = numbers.map((num) => num*num);
console.log(numbers);
// -----------------------------filter-----------------------------
let evenNums = numbers.filter((num) => num % 2 ==0);
console.log(evenNums);
const sqr = (num) => (num * num);
console.log(sqr(4));
