var searchBox = document.querySelector("section .search");
var searchInput = document.querySelector("section .search input");
var nav = document.querySelector("body section .nav");
var header = document.querySelector("header");

function search(){
    searchBox.style.zIndex="1001";
    searchBox.style.top = "-0.1px";
    setTimeout(() => {
        searchInput.focus();
    },100);
    nav.style.bottom = "0px";
}
function reverseSearch(){
    searchBox.style.top = "-60px";
    setTimeout(() => {searchBox.style.zIndex="";}, 200);
    searchInput.blur();
    nav.style.bottom = "-61px";
}

function clicked(elem){
    elem.style.height="100vh";
    elem.style.width="95vw";
    elem.style.opacity="0";
    header.style.top="-70px";
}




var sun = document.getElementById("sun");
var rotateVar = 0;
sun.style.transition="0.7s linear transform";
//Get variable in 
var darkText = document.querySelector("#darkSwitchText");
darkText.innerHTML = localStorage.darkModeEnabledMindScapes;
let applyDarkThemeMain = ()=>{
    var darkStatus = localStorage.darkModeEnabledMindScapes;
    if(darkStatus=="Light Mode"){
        localStorage.darkModeEnabledMindScapes = "Dark Mode";
        darkText.innerHTML = "Dark Mode";
    }else if(darkStatus=="Dark Mode"){
        localStorage.darkModeEnabledMindScapes = "Light Mode";
        darkText.innerHTML = "Light Mode";
    }
    rotateVar+=360;
    applyTheme();
    sun.style.transform = `rotate(${rotateVar}deg)`;
};
