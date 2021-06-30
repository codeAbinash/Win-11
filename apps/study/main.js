$(document).ready(() => {
    $("footer .home").click(() => {home();})
    $("footer .book").click(() => {book();});
    $("footer .time").click(() => {time();});
    $("footer .more").click(() => {more();});
 });

const main = ".main";
const d1 = ".main .d1";
const d2 = ".main .d2";
const d3 = ".main .d3";
const d4 = ".main .d4";
function home(){
    $(d1).css("left","0vw");
    $(d2).css("left","100vw");
    $(d3).css("left","200vw");
    $(d4).css("left","300vw");
    //$("footer .home .homed").css("stop-color","red");
    document.querySelector("footer .home").src="main/homeON.svg";
    document.querySelector("footer .book").src="main/book.svg";
    document.querySelector("footer .time").src="main/time.svg";
    document.querySelector("footer .more").src="main/more.svg";
    localStorage.lastWin="home";
}
function book(){
    $(d1).css("left","-100vw");
    $(d2).css("left","0vw");
    $(d3).css("left","100vw");
    $(d4).css("left","200vw");
    document.querySelector("footer .home").src="main/home.svg";
    document.querySelector("footer .book").src="main/bookON.svg";
    document.querySelector("footer .time").src="main/time.svg";
    document.querySelector("footer .more").src="main/more.svg";
    localStorage.lastWin="book";
}
function time(){
    $(d1).css("left","-200vw");
    $(d2).css("left","-100vw");
    $(d3).css("left","0vw");
    $(d4).css("left","100vw");
    document.querySelector("footer .home").src="main/home.svg";
    document.querySelector("footer .book").src="main/book.svg";
    document.querySelector("footer .time").src="main/timeON.svg";
    document.querySelector("footer .more").src="main/more.svg";
    localStorage.lastWin="time";
}
function more(){
    $(d1).css("left","-300vw");
    $(d2).css("left","-200vw");
    $(d3).css("left","-100vw");
    $(d4).css("left","0vw");
    document.querySelector("footer .home").src="main/home.svg";
    document.querySelector("footer .book").src="main/book.svg";
    document.querySelector("footer .time").src="main/time.svg";
    document.querySelector("footer .more").src="main/moreON.svg";
    localStorage.lastWin="more";
}


/*LIBRARY FUNCTIONS*/
var dr = {};
dr.showWindow = function(selector){
    selector = document.querySelectorAll(selector);
    for(i=0;i<selector.length;i++){
        selector[i].style.display="block";
    }
}
dr.hideWindow = function(selector){
    selector = document.querySelectorAll(selector);
    for(i=0;i<selector.length;i++){
        selector[i].style.display="none";
    }
}





/*MUSIC*/
$(".d2 .music").click(function(){
    dr.showWindow(".musicWin");
    dr.showWindow(".d2 .none");
});
$(".d2 .none").click(function(){
    dr.hideWindow(".musicWin");
    dr.hideWindow(".subWin");
    dr.hideWindow(".d2 .none");
    //document.getElementById("readingPlayPause").src="main/play.svg";
});
$("footer").click(function(){
    dr.hideWindow(".musicWin");
    dr.hideWindow(".subWin");
    dr.hideWindow(".d2 .none");
});

































//EXTRA FUNCTIONS
switch(localStorage.lastWin){
    case "more" : more();break;
    case "book" : book();break;
    case "time" : time();break;
    case "home" : home();break;
    default : home();
}















