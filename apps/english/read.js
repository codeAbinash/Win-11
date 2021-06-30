var options = document.querySelector("#options");
var more = document.querySelector("#more");
var isMoreOpen = -1;
const clickedMore = ()=>{
    isMoreOpen*=-1;
    if(isMoreOpen==1)
        openMoreOptions();
    else
        closeMoreOptions();
}
function openMoreOptions(){
    options.style.top = "15px";
    more.src="icons/back.svg";
    more.style.transform="rotate(90deg)";
}
function closeMoreOptions(){
    options.style.top="calc(-400px - 140px + 15px + 50px)";
    more.src="icons/3dot.svg";
    more.style.transform="rotate(0deg)";
}
function switchFullScreen(){
    if((window.fullScreen) ||(window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        closeFullscreen();
        document.querySelector("#fullscreen").src="icons/fullscreenOn.svg";
    } else {
        openFullscreen();
        document.querySelector("#fullscreen").src="icons/fullscreenOff.svg";
    }
    clickedMore();
}


/*let switchDarkThemeRead = ()=>{

    isDarkModeEnabled*=-1;
    if(isDarkModeEnabled==1)
        applyLightTheme();
    else
        applyDarkTheme();
    
    applyTheme();
    clickedMore();
};
*/
let openFontSettingWindow = ()=>{
    $(".fontWindow").toggle();
    clickedMore();
};

$(".done").click(function () { 
    $(".fontWindow").hide();
});

let switchDarkThemeRead = ()=>{
    var darkStatus = localStorage.darkModeEnabledMindScapes;
    if(darkStatus=="Light Mode"){
        localStorage.darkModeEnabledMindScapes = "Dark Mode";
    }else if(darkStatus=="Dark Mode"){
        localStorage.darkModeEnabledMindScapes = "Light Mode";
    }
    applyTheme();
    clickedMore();
};

//localStorage.fontSizeMindScapes="";
//Set font storage light if it is opened for 1st time
if(!(localStorage.fontsMindScapes))
    localStorage.fontsMindScapes='qm';
document.querySelector(".mainText").style.fontFamily = localStorage.fontsMindScapes;
if(!(localStorage.fontSizeMindScapes))
    localStorage.fontSizeMindScapes="1";


function applyFont(type){
    document.querySelector(".mainText").style.fontFamily =localStorage.fontsMindScapes=type;
}

var fontSize=(val)=>{
    
    if(val=='+')
        if(Number(localStorage.fontSizeMindScapes)<2.95)
        localStorage.fontSizeMindScapes = Number(localStorage.fontSizeMindScapes) + 0.05;
    if(val=='-'){
        if(Number(localStorage.fontSizeMindScapes)>0.5)
        localStorage.fontSizeMindScapes = Number(localStorage.fontSizeMindScapes) - 0.05;
    }
    applyFontsSize();
}



let applyFontsSize =()=>{
    document.querySelector(".mainText").style.fontSize = localStorage.fontSizeMindScapes+"em";
    document.getElementById("fontSize").innerText= Number(localStorage.fontSizeMindScapes).toFixed(2);
}
applyFontsSize();




//Night mode
function readingMode(){
    $(".main").toggleClass("readingMode");
    clickedMore();
}




