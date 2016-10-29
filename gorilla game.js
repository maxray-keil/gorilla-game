
var questions= [
 {
    "text":"An apology is a way to:",
    "choices":['hurt feelings','make things right after a mistake','pretend you care'],
    "correct_index":1,
    "rightimage": "images/gorilla0.jpg",
    "wrongimage": "images/gorillaw0.jpg",
    "sound":"sounds/q0.m4a"
},
 {
    "text":"A sincere apology is when:",
    "choices":['your are pretending', 'you mean it', 'all of these'],
    "correct_index":1,
    "rightimage": "images/gorilla1.jpg",
    "wrongimage": "images/gorillaw1.jpg",
    "sound":"sounds/q1.m4a"
 },
 {
    "text":"An insincere apology is when:",
    "choices":['youre funny', 'you dont mean it', 'both'],
    "correct_index":2,
    "rightimage": "images/gorilla2.jpg",
    "wrongimage": "images/gorillaw2.jpg",
    "sound":"sounds/q2.m4a"
 },
 {
    "text":"Apologies can be made",
    "choices":['both', 'in a letter', 'in person'],
    "correct_index":0,
    "rightimage": "images/gorilla3.jpg",
    "wrongimage": "images/gorillaw3.jpg",
    "sound":"sounds/q3.m4a"
 },
 {
    "text":"Some apologies also mean",
    "choices":['hurting feelings', 'you should lie', 'paying someone back'],
    "correct_index":2,
    "rightimage": "images/gorilla4.jpg",
    "wrongimage": "images/gorillaw4.jpg",
    "sound":"sounds/q4.m4a"
 },
 {
    "text":"Saying you are sorry can really help, if:",
    "choices":['you mean it', 'you do not care', 'you are faking it'],
    "correct_index":0,
    "rightimage": "images/gorilla5.jpg",
    "wrongimage": "images/gorillaw5.jpg",
    "sound":"sounds/q5.m4a"
 }
]

var score = 0;
i= 0;

var listQuestion = function(){  
     if (i<questions.length){
        var choices= questions[i].choices;
        document.getElementById("myDiv1").innerHTML = '<p>'+questions[i].text+'</p>';
        var choicesOutput=[];//new Array()
        for (var k=0; k<choices.length; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ='
                +' "questionchoice">'+choices[k]+'</p>');
       }
        document.getElementById("myDiv2").innerHTML =choicesOutput.join("");
        document.getElementById("myDiv3").innerHTML = 
        '<p><button onClick = "getRadioValue()">Check</button></p> <br>';
       document.getElementById("questionaudio").src= questions[i].sound;
       document.getElementById("questionaudio").play();
    }
    else {
        document.getElementById("myDiv1").innerHTML = "";
        document.getElementById("myDiv2").innerHTML = "";
        document.getElementById("myDiv3").innerHTML = "";

    }

    var rightimage= questions[i].rightimage;
    document.getElementById("myImg").src = rightimage;
};
var getRadioValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
            value = document.getElementsByName('questionchoice')[h].value;
            score++;
            break;
        }
    }
    if (h== questions[i].correct_index){
        document.getElementById("myDiv1").innerHTML = "That is Correct. "
        +"</br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>";
        document.getElementById("myImg").src = questions[i].rightimage;
        i++;
    }

    else {
        document.getElementById("myDiv1").innerHTML ="That is Incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent()'> T"
           +"ry again</button>"; 
           document.getElementById("myImg").src = questions[i].wrongimage;
        document.getElementById("questionaudio").src= "sounds/Bonk.mp3";
        document.getElementById("questionaudio").play();
    }

};
var whatIsScore = function(){
    return score; 
};
function loadContent(){
    document.getElementById("myDiv4").innerHTML="";
    listQuestion();
}

window.onload = listQuestion;

