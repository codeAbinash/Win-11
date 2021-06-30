if(!localStorage.readingTime) localStorage.readingTime = JSON.stringify([0,0,0,0,0,0,0,0,0,0]);

var readingTime = JSON.parse(localStorage.readingTime);

if(localStorage.subjects){}else{
    localStorage.subjects = JSON.stringify(["Mathematics","Physics","Biology","Chemistry","Bengali","English","","","",""]);
}
//DELETE DATA IF THE DAY IS PASSED
/*var today = new Date();
var dateVar = (new Date(today.getFullYear(),today.getMonth(),today.getDate())).getTime();
if(!localStorage.validateToday) localStorage.validateToday = dateVar;
if(dateVar>parseInt(localStorage.validateToday)){
    localStorage.validateToday = dateVar;
    //DELETE TODAY,S DATA
    localStorage.readingTime = JSON.stringify([0,0,0,0,0,0,0,0,0,0]);
}
*/
setTimeout(() => {  
var subjects = JSON.parse(localStorage.subjects);
for (i=0;i<subjects.length;i++){
    var subject = subjects[i]
    if(subject){
        $(".main .d1 .glass2 .sub"+(i+1)+" p").text(subject);
        $(".main .d2 .subWin p:nth-child(" + (2+i)+")").html("<div onclick='selectSubject("+i+")'>"+subject+ "</div>");
    }else{
       $(".main .d1 .glass2 .sub"+(i+1)).hide();
       $(".main .d2 .subWin p:nth-child(" + (2+i)+")").hide();
       readingTime[i] = 0;
    }
}
}, 200);

/*START READING*/
function startReading(){
    dr.showWindow(".subWin");
    dr.showWindow(".d2 .none");
    setTimeout(function(){
        //book();
    },200);
}

//SELECT SUBJECTS
function selectSubject(i){
    setTimeout(() => {
        $(".subWin").hide();
        $(".d2 .none").hide();
        setTimeout(() => {
            book(); 
        }, 50); 
    }, 50);
    localStorage.lastWin = "book";
    localStorage.isReading = "yes";
    if(!localStorage.startupMusic) palyPause(0);
    readSubject(i);
//    var subjects = JSON.parse(localStorage.subjects);
}




/////////////////////////
//TIME CONTAINS ONLY TODAY'S READING TIME IN ARRAY
//FULL TIME CONTAINS FULL TIME OF READING

//if(!localStorage.fullReadingTime){localStorage.fullReadingTime = JSON.stringify([0,0,0,0,0,0,0,0,0,0])}
//var fullReadingTime = JSON.parse(localStorage.fullReadingTime);
/////////////////////////////////////////////////
////////////////////////////////////////////////


var subjects = JSON.parse(localStorage.subjects);
function readSubject(i){
    if(localStorage.isReading){
        var now = (new Date()).getTime();
        localStorage.startedReadingTime = now;
        localStorage.readingSubject = subjects[i];
        localStorage.readingSubjectNumber = i;
        document.getElementById("readingPlayPause").style.display="block";
        document.getElementById("readingSubject").innerText = subjects[i];
        showCountdown();
    }
    else{
        localStorage.startedReadingTime = "";
        localStorage.readingSubject = "";
        localStorage.readingSubjectNumber = "";
    }
}

function showCountdown() {
    //alert(123);
    if(localStorage.isReading){ 
        var now = (new Date()).getTime();
        var diff = now - Number(localStorage.startedReadingTime);
        var hour = (diff/(1000*60*60));
        var minute =  (hour - Math.floor(hour))*60;
        var second = Math.floor((minute - Math.floor(minute))*60);
        hour = Math.floor(hour);
        minute = Math.floor(minute);
        document.getElementById("second").innerText = addZero(second);
        document.getElementById("hourMinute").innerText = addZero(hour) + ":" + addZero(minute);
        setTimeout(() => {showCountdown();}, 1000);
    }
}

setTimeout(() => {
    if(localStorage.isReading){
        document.getElementById("readingSubject").innerText =localStorage.readingSubject;
        showCountdown();
    }else{
        document.getElementById("readingPlayPause").style.display="none";
    }
},200);


//readingTime[2]= 123;

function stopReading(){
    home();
    var i = parseInt(localStorage.readingSubjectNumber);
    document.getElementById("readingPlayPause").style.display="none";
    document.getElementById("readingSubject").innerText ="...";
    document.getElementById("hourMinute").innerText = "00:00";
    document.getElementById("second").innerText = "00";
    localStorage.isReading = "";
    palyPause(1);
    var diff = (new Date).getTime() - parseInt(localStorage.startedReadingTime);
    readingTime[i] += diff;
    localStorage.readingTime = JSON.stringify(readingTime);
    //alert(localStorage.readingTime);
}



/////LOAD GRAPH DATA
////////////////////
////////////////////
function setRanges() { 
    setTimeout(() => {
        var ranges = document.querySelectorAll(".main .d1 .glass2 .sub .container .content");
        var max = readingTime.reduce(function(a, b) {return Math.max(a, b);});
        
        for(i=0;i<readingTime.length;i++){
            ranges[i].style.width= ((readingTime[i]/max)*100) + "%";
            /*if(readingTime[i] == 0){
                readingTime[i];
            }*/
        }

        showTotalTimes();
    }, 300);
    setTimeout(setRanges,3000);
}
setRanges();
 
function showTotalTimes(){
    var totalTime = 0;
    for(i=0;i<readingTime.length;i++)
        totalTime+=readingTime[i];
    $(".d1 .glass .todayTime").text(returnHourMin(totalTime,"long"));
    
}


///SHOW quotes
var quotes = [
    "“Fail often so you can succeed sooner.”",
    "One day, all your hard work will pay off.",
    "The earlier you start working on something, the earlier you will see results.",
    "Life is short. Live it. Fear is natural. Face it. Memory is powerful. Use it.",
    "Do what is right, not what is easy.",
    "You don’t have to be great to start. But you have to start to be great.",
    "“Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.”",
    "“Don’t stop until you’re proud.”",
    "“Work as hard as you can and then be happy in the knowledge you couldn’t have done any more.”",
    "“Work hard in silence. Let success make the noise.”",
    "“Winners will fail over and over again until they succeed.”",
    "“Be stronger than your excuses.”",
    "“Be so good they can’t ignore you.”",
    "“If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.”",
    "“Successful people are not gifted. They just work hard, then succeed on purpose.”",
    "“If your dreams don’t scare you, they aren’t big enough.”",
    "“If you can believe it, your mind can achieve it.”",
    "“The distance between dreams and reality is called action.”",
    "“The thing about motivated people chasing their dream is they look crazy to lazy people.”",
    "“The goal is to die with memories not dreams.”",
    "“If you can imagine it, you can achieve it. If you can dream it, you can become it.”",
    "“So many of our dreams at first seem impossible, then they seem improbable, and then, when we summon the will, they soon become inevitable.”",
    "“If you have self-esteem, you give yourself the audacity to dream big.”",
    "“The people who are crazy enough to believe they can change the world are the ones who do.”",
    "“How can you move onto the next chapter of your life if you keep rereading the last one?”",
    "“Fail often so you can succeed sooner.”",
    "“Behind every successful person, there are a lot of unsuccessful years.”",
    "“Nothing you do now can change the past. But I promise you, everything you do now will determine your future.”",
    "“Today a reader. Tomorrow a leader.”",
    "“When you talk, you are only repeating what you already know. But if you listen, you may learn something new.”",
    "“The person you will be in 5 years is based on the books you read and the people you surround yourself with today.”",
    "“Genius is 1% inspiration and 99% perspiration. Accordingly, a genius is often merely a talented person who has done all of his or her homework.”",
    "“The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.”"
];
var ran = Math.floor(Math.random()*quotes.length);
$(".d1 .quote").text(quotes[ran]);




function returnHourMin(i,type){
    i/=1000;
    var hour = i/(60*60);
    var minute = parseInt((hour - parseInt(hour))*60);
    hour = parseInt(hour);
    switch(type){
        case "long" : return(hour + "hour " + minute + "min");
        case "short" : return(hour + "h " + minute + "m");
        case ":" : return(addZero(hour) + ":" + addZero(minute));
        default : alert("ERR fn returnHourMin");
    }
}

function addZero(x){
    if(x>=10) return x;
    else return "0"+x;
}