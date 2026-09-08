const expenses = [
    {
        id: 1,
        title: "Food",
        amount: 250,
        category: "Food"
    },
    {
        id: 2,
        title: "Bus",
        amount: 50,
        category: "Transport"
    },
    {
        id: 3,
        title: "Movie",
        amount: 300,
        category: "Entertainment"
    },
    {
        id: 4,
        title: "Groceries",
        amount: 800,
        category: "Food"
    }
];

console.log(expenses)

expenses.forEach(item => console.log(item.title))

const expensesAmt = expenses.map(item => item.amount);
console.log(expensesAmt)

expenses.forEach(item => {
    if (item.amount > 200) {
        console.log(item.title)
    }
})

const result = expenses.find(item => item.id === 3)
console.log(result)

const greaterThan2000 = expenses.some(item => item.amount > 1000);
console.log(greaterThan2000)

const greaterThan20 = expenses.every(item => item.amount > 20)
console.log(greaterThan20)

const foodExpenses = expenses.filter(item => {
    if (item.category === "Food") {
        return item.title
    }
});
console.log(foodExpenses);

const totalExpenses = expenses.reduce((total, item) => total + item.amount , 0)
console.log(totalExpenses)

const expenditureAmt = expenses.map(item => console.log(`${item.title} - ${item.amount}`))

function highestAmt(){
    let stri = expenses[0].title;
    let maxi = expenses[0].amount;
    for (let item of expenses){
        if(item.amount > maxi){
            maxi = item.amount
            stri = item.title
        }
    }
    return (`${stri} - ${maxi}`)
}

console.log(highestAmt())