///LOad From Local storage data
class Note{
    constructor(title,note,date,alignment){
        this.title = title;
        this.note = note;
        this.align = alignment;
        this.date = date;
    }
}
//Store Data for 1st time
//localStorage.notesData = "";
if(!localStorage.notesData){
    var note = new Note();
    var Notes = [note];
    localStorage.notesData=JSON.stringify(Notes);
}


var notes = JSON.parse(localStorage.notesData);
let sortByDate = ()=>{
    var len = notes.length;
    for(i=1;i<len;i++){
        for(j=1;j<len;j++){
            var di = new Date(notes[i].date).getTime();
            var dj = new Date(notes[j].date).getTime();
            if(di>dj){
                var tmp = notes[i];
                notes[i] = notes[j];
                notes[j] = tmp;
            }
            
        }
    }
    localStorage.notesData = JSON.stringify(notes);
}
sortByDate();
/*function saveToLocalStorage(x){
    localStorage.notesData = x;
}*/


//Insert All Data
let loadData = ()=>{
    var len = notes.length;
    if(len>1){
        for(i=1;i<len;i++){
            var mainContainer = document.querySelector("#notesContainer");
            var title = notes[i].title;
            var text = notes[i].note;
            var date = getDateTime(new Date(notes[i].date));
            mainContainer.innerHTML += 
            '<div class="note presss" onclick="openNote('+i+');">'+
               '<p class="title">'+title+'</p>'+
               '<p class="text">'+text+'</p>'+
               '<p class="date">'+date+'</p>'+
            '</div>'; 
        }
        document.querySelector("#searchBox").placeholder = "Search Your Notes ( "+(len-1)+" )";
    }
    else{
        document.querySelector(".notFound").style.display="flex";
        document.querySelector(".notes").style.display="none";
        //document.querySelector(".listGrid").style.visibility = "hidden";
    }

}
loadData();

function openNote(x){
    localStorage.currentNote = x;
    $d.openPage("edit.html","right");
}
function newNote(){
    localStorage.currentNote = "new";
    $d.openPage("edit.html","right");
}



///List Or Grid
//localStorage.listGrid = "list";
if(localStorage.listGrid=="list")
    list();
else if(localStorage.listGrid=="grid")
    grid();
else{
    list();
    localStorage.listGrid = "list";
}
function listGrid(){
    if(localStorage.listGrid == "grid"){
        list();
        localStorage.listGrid = "list";
    }
    else if(localStorage.listGrid = "list"){
        grid();
        localStorage.listGrid = "grid";
    }
}
function list(){
    var note = document.querySelectorAll("section .notes .note");
    var len = note.length;
    document.querySelector("header .listGrid").src="img/grid.svg";
    for(i=0;i<len;i++){
        note[i].style.width="calc(100% - 27px)";
    } 
}
function grid(){
    var note = document.querySelectorAll("section .notes .note");
    var len = note.length;
    document.querySelector("header .listGrid").src="img/list.svg";
    for(i=0;i<len;i++){
        note[i].style.width="calc(50% - 20px)";
    }
}


let search = (val)=>{
    val = val.toLowerCase().trim();
    var len = notes.length;
    var allNotesElements = document.querySelectorAll(".note");
    for(i=1;i<len;i++){
        var titleText = notes[i].title.toLowerCase();
        var text = notes[i].note.toLowerCase();
        //var dateText = notes[i].date.toLowerCase();
        if((titleText.search(val)==-1) && (text.search(val)==-1)/* && (dateText.search(val)==-1)*/){
            allNotesElements[i-1].style.display="none";
        }
        else{
            allNotesElements[i-1].style.display="flex";
        }
    }
}
