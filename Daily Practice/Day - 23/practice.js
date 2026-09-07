function isEvenOrOdd(num) {
    let val = num % 2 === 0 ? "Even" : "Odd";
    console.log(val);
}

function findLargest(num1, num2) {
    let maxi = null;
    if (num1 > num2) {
        maxi = num1;
    } else {
        maxi = num2;
    }
    console.log(maxi);
}


function reverseString(word) {
    let revesed = "";
    let len = word.length

    for (let i = len - 1; i >= 0; i--) {
        revesed += word[i];
    }
    console.log(revesed)
}

function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    let len = word.length
    for (let i = len - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    console.log(count);
}

function sumArray(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i
    }
    console.log(`Sum of Array ${sum}`)
}
function sumArrayReduce(arr) {
    let ans = arr.reduce((sum, num) => sum += num)
    console.log(`Sum of Array using Reduce ${ans}`)
}


function findSmallest(arr) {
    let min = arr[0]
    for (let i of arr) {
        if (i < min) {
            min = i;
        }
    }
    console.log(`array of Minimum number ${min}`)
}


function countOccurrences(arr, num) {
    let count = 0
    for (let i of arr) {
        if (i === num) {
            count++;
        }
    }
    console.log(`in a array the ${num} appeared ${count}`);
}


function removeDuplicates(arr) {
    let unqset = [];
    arr.forEach(element => {
        if (!unqset.includes(element)) {
            unqset.push(element)
        }
    });
    console.log(unqset);
}
function isPalindrome(word) {

    let revesed = "";
    let len = word.length

    for (let i = len - 1; i >= 0; i--) {
        revesed += word[i];
    }
    
    console.log(revesed === word);
}

function fizzBuzzGame(){
    for(let i = 0; i <= 31; i++){
        if(i % 3 === 0 && i % 5 ==0){
            console.log("FizzBuzz")
        }
        else if(i % 5 ===0){
            console.log('Buzz');
        }else if(i % 3 ===0){
            console.log(`Fizz`);
        }else {
            console.log(i);
        }
    }
}

isEvenOrOdd(7);
isEvenOrOdd(12);
findLargest(10, 25);
reverseString("javascript");
reverseString("hello");
countVowels("javascript");
// 3

countVowels("hello world");
// 3
sumArray([1, 2, 3, 4, 5]);
// 15

sumArrayReduce([10, 20, 30]);
// 60
findSmallest([5, 2, 8, 1, 9]);
// 1
countOccurrences([1, 2, 2, 3, 2, 4], 2);
// 3

countOccurrences([5, 5, 1, 2, 5], 5);
// 3
removeDuplicates([1, 2, 2, 3, 3, 4]);
// [1, 2, 3, 4]

removeDuplicates(["a", "b", "a", "c", "b"]);
// ["a", "b", "c"]
isPalindrome("madam");
// true

isPalindrome("hello");
// false

isPalindrome("level");
// true
fizzBuzzGame()