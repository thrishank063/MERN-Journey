const mainContainer = document.getElementById("mainContainer");
const themeChangeBtn = document.getElementById("themeChange");

themeChangeBtn.addEventListener("click", changeTheme)
function changeTheme(){
    mainContainer.classList.toggle('darkmode');

}