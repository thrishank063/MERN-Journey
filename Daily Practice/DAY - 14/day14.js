let welcomeSectionEl = document.getElementById("welcomeSection");
let dashBoardSectionEl = document.getElementById("dashBoardSection");

function newNote(){
    welcomeSectionEl.style.display = "none";
    dashBoardSectionEl.style.display = "block";
}
function backToWelcome(){
    welcomeSectionEl.style.display = "block";
    dashBoardSectionEl.style.display = "none";
}