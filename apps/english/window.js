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