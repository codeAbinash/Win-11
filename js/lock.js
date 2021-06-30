var pass = document.querySelector("input");
pass.addEventListener("input", ()=>{
    if(pass.value==1234){
        window.location.assign("main.html");
      
    }
});