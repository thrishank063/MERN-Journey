let skills = ['HTML', 'CSS', 'JavaScript'];
let skillInputEl = document.getElementById("skillInput");
let addSkillBtnEl = document.getElementById("addSkillBtn");
let skillListEl = document.getElementById("skillList");

function displaySkills() {
    skillListEl.innerHTML = "";
    for (eachskill of skills) {
        let li = document.createElement('li');
        li.textContent = eachskill;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function(){
            skills.splice(indexedDB,1);
            displaySkills();
        }
        li.appendChild(deleteBtn);
        skillListEl.appendChild(li);
    }
}
addSkillBtnEl.addEventListener("click", function () {
    if (skillInputEl.value !== "") {
        skills.push(skillInputEl.value)
        skillInputEl.value="";
        displaySkills();
    }
});
displaySkills()
