//Array of possible choices for the random word
var words = ["Rainier", "Baker", "Adams", "Saint Helens", "Glacier", "Hood", "Three Sisters", "Denali", "Everest", "Lhotse"];

//
var currentWord = ranWord();
console.log(currentWord);

//Getting the hint for the current Word
getHint(currentWord);

var reveal = [];
for(i = 0; i < currentWord.length; i++){
    //document.write("_ ");
    if(currentWord[i] === " "){
        reveal.push("&nbsp&nbsp");
    }else{
        reveal.push("_ ");
    }
    //reveal.push("_ ");
}
//document.write(reveal);
var str = "";
for(i = 0; i < reveal.length; i++){
    //document.write(reveal[i]);
    str += reveal[i];
    //console.log(str);
}

console.log(str);
//document.write(str);
//document.getElementById("theWord").innerHTML = "fuck you";

//document.getElementById("word").innerHTML = str;

//document.write(currentWord + "<br>");
//var STRI = document.createElement("div");
//rewrite(str);
temp(currentWord);
//WORKING DO NOT DELETE
//var STR = document.createElement("div");
//STR.innerHTML = str;
//document.body.appendChild(STR);

//var STR = document.getElementById("theWord");
//STR.innerHTML = str;
//document.body.appendChild()
//document.getElementById("theWord").innerHTML = str;



//document.write(str);

//On keypress event to record what key was pressed
document.onkeypress = function(event){
    var usr = event.which;
    console.log(usr);
    usr = String.fromCharCode(usr);
    console.log(usr);
    //userCheck(usr, currentWord, reveal)
    userCheck(usr, currentWord, str);
}

//Function to write the underscores initially and then replace with the letters guessed
function rewrite(str){
    document.getElementById("theWord").innerHTML = str;
}

//I'm not sure what this does right now
function temp(currentWord){
    stri = "";

    for (i = 0; i < currentWord.length; i++){
        stri += currentWord.charAt(i) + " ";
    }
    console.log(stri);
    document.write("<br>");
}


//Function to check if the user guess is any of the letters that are in the word
function userCheck(userGuess, currentWord, reveal){
    //For loop to run through the random word to check if the guessed letter appears in the word
    for(i = 0; i < currentWord.length; i++){
        if(userGuess === currentWord.charAt(i).toLowerCase()){
            reveal[i] = currentWord.charAt(i);
            //reveal.charAt(i) = currentWord.charAt(i);
            //str = reveal;

            rewrite(reveal);
        }
    }
}

//Fucntion to get the random word that will be guessed
function ranWord(){
    var ran = Math.floor(Math.random() * words.length);
    return words[ran];
}

//DISPLAYING THE HINTS FOR THE GAME
function getHint(currentWord){
    if(currentWord === "Rainier"){
        rainierHint();
    }else if(currentWord === "Staint Helens"){
        stHelenHint();
    }else if(currentWord === "Adams"){
        adamsHint();
    }else if(currentWord === "Glacier"){
        glacierHint();
    }else if(currentWord === "Baker"){
        bakerHint();
    }else if(currentWord === "Hood"){
        hoodHint();
    }else if(currentWord === "Three Sisters"){
        tsHint();
    }else if(currentWord === "Denali"){
        denaliHint();
    }else if(currentWord === "Everest"){
        everestHint();
    }else if(currentWord === "Lhotse"){
        lhotseHint();
    }
}

function rainierHint(){
    hint = "Location: Washington, USA <br> Elevation: 14,411'" +
    "<br>Mountain Range: Cascade Range";
    document.getElementById("hints").innerHTML = hint;
}

function stHelenHint(){
    hint = "Location: Washington, USA <br> Elevation: 8,363'"+
    "<br>Mountain Range: Cascade Range";
    document.getElementById("hints").innerHTML = hint;
}

function adamsHint(){
    hint = "Location: Washington, USA <br> Elevation: 12,280'"+
    "<br>Mountain Range: Cascade Range";
    document.getElementById("hints").innerHTML = hint;
}

function glacierHint(){
    hint = "Location: Washington, USA <br> Elevation: 10,541'" + 
    "<br>Mountain Range: Casecade Range";
    document.getElementById("hints").innerHTML = hint;
}

function bakerHint(){
    hint = "Location: Washington, USA <br> Elevation: 10,781'" + 
    "<br>Mountain Range: Casecade Range";
    document.getElementById("hints").innerHTML = hint;
}

function hoodHint(){
    hint = "Location: Oregon, USA <br> Elevation: 11,250'" + 
    "<br>Mountain Range: Cascade Range";
    document.getElementById("hints").innerHTML = hint;
}

function tsHint(){
    hint = "Location: Oregon, USA <br> Elevation: 10,363'" + 
    "<br>Mountain Range: Casecade Range";
    document.getElementById("hints").innerHTML = hint;
}

function denaliHint(){
    hint = "Location: Alaska, USA <br> Elevation: 20,310'" + 
    "<br>Mountain Range: Alaska Range";
    document.getElementById("hints").innerHTML = hint;
}

function everestHint(){
    hint = "Location: Nepal <br> Elevation: 29,029'" +
    "<br>Mountain Range: Himalayas";
    document.getElementById("hints").innerHTML = hint;
}

function lhotseHint(){
    hint = "Location: Nepal <br> Elevation: 27,940'" + 
    "<br>Mountain Range: Himalayas";
    document.getElementById("hints").innerHTML = hint;
}




//Add hints to each mountain
//Show a picture of the Mountain when guessed correctly
//Show on a map where the Mountain is located
//Add more mountains
