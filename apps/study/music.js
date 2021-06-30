//On Load the page set the music in the localStorage
var musicData = {};
musicData.name = [
    "Waltz of the Flowers Tchaikovsky",
    "Countryside - woods - bird - Giswil, Switzerland.",
    "Nature park ambience - Lynn Canyon - medium waterfall - medium close perspective - light activity - Vancouver.",
    "Quiet street ambience - Summer night slum atmosphere with many crickets.",
    "Colombian Caribbean coast - Moderate waves washing on beach, far perspective (2).",
    " Rain - summer rain - forest - under the tree - subtle birds - stereo.",
    "Wood burning stove fire hiss"
];
musicData.description = [
    "The \"Waltz of the Flowers\" (1892) is a piece of orchestral music from the second act of The Nutcracker, a ballet composed by Tchaikovsky.",
    "Countryside - woods - bird - Giswil, Switzerland.",
    "Nature park ambience - Lynn Canyon - medium waterfall - medium close perspective - light activity - Vancouver.",
    "Quiet street ambience - Summer night slum atmosphere with many crickets.",
    "Colombian Caribbean coast - Moderate waves washing on beach, far perspective (2).",
    " Rain - summer rain - forest - under the tree - subtle birds - stereo.",
    "Wood burning stove fire hiss"
];

if(!localStorage.currentMusic) localStorage.currentMusic = "0";
if(!localStorage.currentMusicTime) localStorage.currentMusicTime = 0;
function setMusicDesc(){
   $(".d2 .musicWin .content #musicName").text(musicData.name[localStorage.currentMusic]);
   $(".d2 .musicWin .content #musicDesc").text(musicData.description[localStorage.currentMusic]);
}


var music = document.getElementById("m1");
music.setAttribute('src', "music/"+localStorage.currentMusic+".mp3");
music.currentTime = localStorage.currentMusicTime;

//MUSIC CONTROL
var isPlaying = false;
function palyPause(x){
    isPlaying = !(isPlaying);
    if(isPlaying){
        //x.src="main/pause.svg";
        document.getElementById("playPauseButton").src="main/pause.svg";
        document.getElementById("musicIcon").src="main/musicOn.svg";
        music.play();
    }else{
        //x.src = "main/play.svg";
        document.getElementById("playPauseButton").src="main/play.svg";
        document.getElementById("musicIcon").src="main/musicOff.svg";
        music.pause();
    }
    if(x==0){
        isPlaying=true;
        music.play();
        document.getElementById("playPauseButton").src="main/pause.svg";
        document.getElementById("musicIcon").src="main/musicOn.svg";
    }
    if(x==1){
        isPlaying=true;
        music.pause();
        document.getElementById("playPauseButton").src="main/play.svg";
        document.getElementById("musicIcon").src="main/musicOff.svg";
        isPlaying = false;
    }
    //x.src = "main/".concat((isPlaying)?"pause.svg":"play.svg");
}

var mn = 7 // Numbers f music
function prev(elem){
    var x = localStorage.currentMusic;
    if(--x<0) x=(mn+7)%mn;
    localStorage.currentMusic = x;
    music.setAttribute('src', "music/"+x+".mp3");
    palyPause(0);
    setMusicDesc();

}
function next(elem){
    var x = localStorage.currentMusic;
    x=++x%mn;
    localStorage.currentMusic = x;
    music.setAttribute('src', "music/"+x+".mp3");
    palyPause(0);
    setMusicDesc();

}




function musicSliderChange(value){
    music.currentTime = music.duration*value/100;
}




//Set the slider
var slider = document.getElementById("musicRange");
function setSlider(){
    var time = Math.floor((music.currentTime/music.duration)*100);
    slider.value = time;
    if(music.ended){
        if(localStorage.repeatMusic==1) music.play();
        if(localStorage.repeatMusic==2) next();
        if(localStorage.repeatMusic == 0){
            isPlaying = false;
            document.getElementById("playPauseButton").src="main/play.svg";
            document.getElementById("musicIcon").src="main/musicOff.svg";
        }
    }
    localStorage.currentMusicTime = music.currentTime;
    setTimeout(setSlider, 1000);
}
setSlider();





//MUSIC SETTINGS
var rMusic = localStorage.repeatMusic;
if(!localStorage.repeatMusic){localStorage.repeatMusic=2}
function repeatMusic(){
    rMusic=++rMusic%3;
    localStorage.repeatMusic = rMusic;
    setRepeatMusicData();
}



function setRepeatMusicData(){
    switch(parseInt(localStorage.repeatMusic)){
        case 0 : $("#repeatMusicIndc").text("NO REPEAT");break;
        case 1 : $("#repeatMusicIndc").text("REPEAT ONE");break;
        case 2 : $("#repeatMusicIndc").text("REPEAT ALL");break;
        default : alert("Something Went Wrong. Try Restarting The browser");
    }   
}



///////////////////////////////////////////////////////////
///////STARTUP MUSIC SETTINGS

var startupMusicVar = localStorage.startupMusic;
setTimeout(() => {
    if(startupMusicVar)
        document.getElementById("startUpMusic").innerText = "OFF";
    else
        document.getElementById("startUpMusic").innerText = "ON";
}, 500);
function startupMusic(){ 
    startupMusicVar = !(startupMusicVar);
    if(startupMusicVar){
        document.getElementById("startUpMusic").innerText = "OFF";
        localStorage.startupMusic = "OK";
    }else{
        document.getElementById("startUpMusic").innerText = "ON";
        localStorage.startupMusic = "";
    }
}
      



//////////////////////////////////////////////////////
$(document).ready(function(){
    setRepeatMusicData();
    setMusicDesc();
});

