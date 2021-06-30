/*Bug Fixed*/
/*let resize = (elem)=>{
    setTimeout(() => {
        elem.style.height = elem.scrollHeight;
    }, 10);
    alert(elem);
}*/
var notes = JSON.parse(localStorage.notesData);
var noteNo = localStorage.currentNote;
var title,text,align="left",headerText,newNoteIndex=1;
if(noteNo!="new"){
    noteNo = Number(noteNo);
    title = notes[noteNo].title; 
    text = notes[noteNo].note;
    align = notes[noteNo].align;
    headerText=getDateTime(new Date(notes[noteNo].date))+" | ";
    //Focus on The text
    document.querySelector("#note").focus();
}else{
    newNoteIndex=notes.length;
    document.querySelector("#title").focus();
}
let setAlignment =(a)=>{
    if(noteNo!="new"){
        notes[noteNo].align=a;
    }
    else{
        notes[newNoteIndex].align=a;
    }
    align=a;
    localStorage.notesData = JSON.stringify(notes);
    document.querySelector("#note").style.textAlign=a;;
}

let loadData = ()=>{
    var elemS = {
        title:document.querySelector("#title"),
        text:document.querySelector("#note"),
        header:document.querySelector(".timeContainer .time")
    }
    if(noteNo!="new"){
        //!Here Can be a bug noteNo=Number(noteNo);
        elemS.title.value=title;
        elemS.text.value=text;
        elemS.text.style.textAlign = align;
        elemS.header.innerText=headerText;
    }
};
loadData();

function input(){
    var title = document.querySelector("#title");
    var noteTxt = document.querySelector("#note");
    var details = document.querySelector("#details");
    var time = new Date();
    time = getDateTime(time);
    details.innerText = time + " | ";
    if(noteNo!="new"){
        notes[noteNo].title = title.value;
        notes[noteNo].note = noteTxt.value;
        notes[noteNo].date = new Date();
    }else{  
        var newNote = new Note(title.value,noteTxt.value,new Date(),align);
        notes[newNoteIndex]=newNote;
    }
    if(title.value.trim().length==0&&noteTxt.value.trim().length==0)
            deleteNote();

    localStorage.notesData = JSON.stringify(notes);
    checkCharacters();
}

function deleteNote(){
    if(noteNo!="new"){
        notes.splice(noteNo,1);
    }
    else{
        notes.splice(newNoteIndex,1);
    }
    localStorage.notesData = JSON.stringify(notes);
}

function confirmDelete() {
    var x = confirm("Sure, It will Delete This Note.");
    if(x){
        deleteNote();
        $d.openPage("back");
    }
}


function checkCharacters(){
    var title = document.querySelector("#title");
    var noteTxt = document.querySelector("#note");
    var details = document.querySelector("#details");
    var len = title.value.length+noteTxt.value.length;
    details.innerText+=" "+len+" Characters";
}
checkCharacters();