
if(localStorage.darkVar)
    dark();
else 
    light();


var darkVar = !(localStorage.darkVar);
function swdark(){
    darkVar = !(darkVar);
    if(darkVar)
        light();
    else
       dark();
    spinIcon();
}
function light() {
    document.body.style.setProperty('--main-color','#6c63ff');
    document.body.style.setProperty('--theme-color','white');
    document.body.style.setProperty('--sub-text-color','#555');
    document.body.style.setProperty('--text-color','#000');
    document.body.style.setProperty('--icon-color','invert(-1)');
    document.body.style.setProperty('--color-opacity','0.1');
    //document.body.style.setProperty('--main-dark-icon','brightness(100%)');
    $(".darkTextOnOff").text("OFF");
    localStorage.darkVar="";
}
function dark(){
    document.body.style.setProperty('--main-color','#6c63ff');
    document.body.style.setProperty('--theme-color','#000');
    document.body.style.setProperty('--sub-text-color','#eee');
    document.body.style.setProperty('--text-color','#fff');
    document.body.style.setProperty('--icon-color','invert(1)');
    document.body.style.setProperty('--color-opacity','0.3');
    //document.body.style.setProperty('--main-dark-icon','brightness(150%)');
    $(".darkTextOnOff").text("ON");
    localStorage.darkVar="on";
}
rotateVar = 360;
function spinIcon(){
    $(".darkic").css("transform","rotate(" + rotateVar + "deg)");
    rotateVar+=360;
}

////////////////////////////////////////////////
//EXTRA DATA TO LOAD
setTimeout(() => {
    if(localStorage.darkVar)
    dark();
else 
    light();
}, 500);


