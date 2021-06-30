$d = {};
$d.openPage = function(loc="back",type="left",time=200){
    switch (type) {
        case "top-right":
            document.body.style.transform="translateX(-100vw) translateY(100vh)";
            break;
        case "top-left":
            document.body.style.transform="translateX(100vw) translateY(100vh)";
            break;
        case "bottom-left":
            document.body.style.transform="translateX(-100vw) translateY(-100vh)";
            break;
        case "bottom-right":
            document.body.style.transform="translateX(100vw) translateY(-100vh)";
            break;
        case "bottom":
            document.body.style.transform="translateY(-100vh)";
            break;
        case "top":
            document.body.style.transform="translateY(100vh)";
            break;
        case "right":
            document.body.style.transform="translateX(-100vh)";
            break;
        case "left":
            document.body.style.transform="translateX(100vh)";
            break;
        default:
            break;
    }

    setTimeout(() => {
        if(loc=="back")
            window.history.back();
        else
            window.location.assign(loc);
    }, time);
}
function loaded(){
  document.body.style.opacity = "1";
}



function getDateTime(time){
  var date = new Date(time);
  var h = date.getHours();
  var m = date.getMinutes();
  var day = date.getDate();
  var mon = date.getMonth();
  var ap = "AM";
  if(h>=12){
      ap = "PM";
      h-=12;
  }
  if(h==0) h=12;
  return h+":"+checkZero(m)+" "+ap + " | "+day+" "+month(mon);
}
function checkZero(x){
  return (x>10)?x:"0"+x;
}
function month(x) { 
  var list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return list[x];
}

function loadAllData() {
  input();
}








/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}