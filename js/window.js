var win = document.getElementById("window");
var winTitle = document.querySelector("#window header .app p");
var appIcon = document.querySelector("#window header .app .appIcon");
var frame = document.querySelector("#window iframe");
const closeWindow = ()=>{
    win.style.display = "none";
    frame.src = "apps/welcome.html"
}

var winVar = 1;
var winHeight = "60";
var winWidth = "50";
const maxMin = ()=>{
    if(winVar==1){
        win.style.height="100vh"
        win.style.width="100vw";
        win.style.borderRadius = "0";
    }   
    else if(winVar == -1){
        win.style.height=winHeight +"vh";
        win.style.width=winWidth + "vw";
        win.style.borderRadius = "8px";
    }
    winVar*=-1;
};
const openWin = (im,n,address,hei=60,wi=50,st=1)=>{
    appIcon.src = im;
    winTitle.innerHTML = n;
    win.style.display = "block";
    frame.src = address;
    winHeight = hei;
    winWidth = wi;
    win.style.height = hei + "vh";
    win.style.width =  wi + "vw";
    if(st==1){
        swStart();
    }
};

