//if the value is undefined set value system
if(!(localStorage.darkModeEnabledMindScapes))
    localStorage.darkModeEnabledMindScapes = "Light Mode";

//localStorage.darkModeEnabledMindScapes = "";
var root = document.querySelector(":root");
//true - dark mode on
//false - dark mode off
//system - system dark/light
//if(localStorage.darkModeEnabledMindScapes=="true")
/*
*/
function applyTheme(){
    var currentTheme = localStorage.darkModeEnabledMindScapes;
    if(currentTheme=="Light Mode")
        applyLightTheme();
    else if(currentTheme=="Dark Mode")
        applyDarkTheme();
    else 
        applyLightTheme();
}

function applyDarkTheme(){
    root.style.setProperty('--main-theme-color', 'black');
    root.style.setProperty('--main-text-color', '#eee');
    root.style.setProperty('--card-color', '#111');
    root.style.setProperty('--theme-icon', 'invert(1)');
    root.style.setProperty('--shadow-color', '#ffffff44');
    root.style.setProperty('--color', '#4ea6fd');
    root.style.setProperty('--sub-text-color', '#aaa');
    root.style.setProperty('--sub-text-color2', '#aaa');
    root.style.setProperty('--backdrop', '#00000066');
    root.style.setProperty('--backdrop-light', '#00000088');
    root.style.setProperty('--backdrop-light2', '#000000aa');
    root.style.setProperty('--shadow-color-light', '#ffffff20');
    root.style.setProperty('--grid-border-color', '#555');
}
function applyLightTheme(){
    root.style.setProperty('--main-theme-color', 'white');
    root.style.setProperty('--main-text-color', 'black');
    root.style.setProperty('--card-color', 'white');
    root.style.setProperty('--theme-icon', 'invert(-1)');
    root.style.setProperty('--shadow-color', '#00000020');
    root.style.setProperty('--color', 'dodgerBlue');
    root.style.setProperty('--sub-text-color', '#777');
    root.style.setProperty('--sub-text-color2', '#aaa');
    root.style.setProperty('--backdrop', '#ffffff88');
    root.style.setProperty('--backdrop-light', '#ffffffaa');
    root.style.setProperty('--backdrop-light2', '#ffffffcc');
    root.style.setProperty('--shadow-color-light', '#eee');
    root.style.setProperty('--grid-border-color', '#ccc');
}
applyTheme();