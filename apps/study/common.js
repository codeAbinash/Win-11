
/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function fs() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}



function openPage(i){
  //$('body').css('transform','translateX(-100vw)');
  setTimeout(() => {
      location.assign(i);
  }, 50);
}
function goBack(){
  //$('body').css('transform','translateX(100vw)');
  setTimeout(() => {
      window.history.back();
  }, 50);
}
