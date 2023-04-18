const toggleButton = document.getElementById("toggle-button"); 
const naviList = document.getElementById("navi-list"); 

console.log("toggle"); 
toggleButton.addEventListener("click", function () {
    console.log("menu clicked");
    naviList.classList.toggle("active"); 
})