// ----------------------------------JavaScript Object -----------------------
//function expression
const person1 = {
    firstName: "Thrishank",
    lastName:"Gaddam",
    age: 22,
    isEmployed: false,
    sayHello: function(){console.log(`Hi! I am ${this.firstName}!`)},
    eat:function(){console.log(`I am eating tasty Mutton`)},
    run:function(){console.log(this)},
}


//Arrow function
const person2 ={
    firstName:"Suchith",
    lastName:"Aku",
    age: 20,
    isEmployed: true,
    sayHello: () => console.log(`Hi! I am ${person2.firstName}!`),
    eat:() => console.log(`I am eating Chicken`),
    run: () => console.log(this),
}

// ---------------------------CONSTRUCTORS-----------------------------------------

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = () => console.log(`I drive this ${this.model} car`)
}
let car1 = new Car("ford", "Mustang", 2024, "red");
// -----------------------------CLASS------------------------------------------------------

class Product{
    constructor(name, price){
        this.name = name, 
        this.price = price
    }
    displayProduct(){
        console.log(this.name );
        console.log(this.price);
    }
    calculatetotal(){
        return console.log(this.price + this.price * 0.05);
    }
}

const tShirt = new Product("t-shirt", 300);
const underware = new Product("Underware", 500);
underware.calculatetotal();

// --------------------------------------------static-----------------------------------
class User {
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getuserCount(){
        console.log(`ther are this many user ${User.userCount}`)
    }
    sayhello(){
        console.log(`Hello my username ${this.username}`);
    }
}

const user1 = new User("Thrishank");
const user2 = new User("Suchith");
const user3 = new User("Srinivas Goud");
// User.getuserCount();


// --------------------------INHERITANCE------------------------------------------------
class Animal{
    alive = true
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }    
}
class Rabbit extends Animal{
    name = "Rabbit"
    run(){
        console.log(`this ${this.name} is running`);
    }
}
const rabbit1 = new Rabbit();
