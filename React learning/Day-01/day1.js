// 1. Reverse an array
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse())

// 2. Find even numbers
const numbers = [1, 4, 7, 10, 15, 20];
const evenNums = numbers.filter(each => each % 2 === 0)
console.log(evenNums)

// 3. Find the total
const prices = [100, 250, 50, 75];
const total = prices.reduce((price, sum) => price + sum, 0);
console.log(total)

// 4. Find the largest number
const nums = [10, 45, 23, 89, 12];
let maxi_num = nums[0]
for (let i of nums) {
    if (maxi_num < i) {
        maxi_num = i
    }
}
console.log(maxi_num)


// 5. Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// expected: { apple: 3, banana: 2, orange: 1 }
let fruitsCount = {}
fruits.map(each => {
    if (each in fruitsCount) { 
        fruitsCount[each] += 1;
    }else {
        fruitsCount[each] = 1;
    }
});
console.log(fruitsCount)

// 6. Fetch data from an API
// Use async/await and console.log the response.
const url = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try{    
    const response = await fetch(url)
    const jsonData = await response.json();
    console.log(jsonData);
    }
    catch(err){
        console.log(`error at MSG:${err}`)
    }
}

getUsers()