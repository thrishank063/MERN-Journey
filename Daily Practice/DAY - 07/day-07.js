let skills = ["HTML", "CSS", "JavaScript", "React"];

skills.forEach(function(eachSkill) {console.log(`I Know:` + eachSkill)})
skills.forEach((eachSkill) => console.log(eachSkill));

let student = {
    name: "Thrishank",
    age: 22,
    city:"Hyderabad",
    skills: skills,
    isLooking: true
};
student.college = "GNITC";
console.log(student);
let randomNum = Math.random();
const min =1;
const max = 100;
const answer = randomNum  
let final_answer = Math.round(answer *100)
console.log(randomNum);
console.log(answer)
console.log(final_answer)
