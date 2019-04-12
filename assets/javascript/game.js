var words = ["Rainier", "Baker", "Adams", "Saint Helens", "Glacier", "Hood", "Three Sisters", "Denali", "Everest", "Shengrila"];

//console.log(ranWord());
var currentWord = ranWord();
//console.log(currentWord);

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

//document.getElementById("word").innerHTML = str;

//document.write(currentWord + "<br>");
//var STRI = document.createElement("div");

temp(currentWord);
//WORKING DO NOT DELETE
//var STR = document.createElement("div");
//STR.innerHTML = str;
//document.body.appendChild(STR);

//var STR = document.getElementById("theWord");
//STR.innerHTML = str;
//document.body.appendChild()
document.getElementById("theWord").innerHTML = str;



//document.write(str);


document.onkeypress = function(event){
    var usr = event.which;
    console.log(usr);
    usr = String.fromCharCode(usr);
    console.log(usr);
    userCheck(usr, currentWord, reveal)
}

//Function to write the underscores initially and then replace with the letters guessed
function rewrite(str){
    //STR.innerHTML = str;
    //document.body.appendChild(STR);
    document.getElementById("theWord").innerHTML = str;
}

function temp(currentWord){
    stri = "";
    //var STRI = document.createElement("div");
    
    for (i = 0; i < currentWord.length; i++){

        //document.write(currentWord.charAt(i) + " ");
        //console.log(currentWord.charAt(i) + " ");
        stri += currentWord.charAt(i) + " ";
        //STRI.innerHTML = stri;
    }
    console.log(stri);
    //STRI.innerHTML = stri;
    //document.write("<br>");
    //document.body.appendChild(STRI);
    document.write("<br>");
    
}


//Function to check if the user guess is any of the letters that are in the word
function userCheck(userGuess, currentWord, reveal){
    //var str = "";
    //For loop to run through the random word to check if the guessed letter appears in the word
    for(i = 0; i < currentWord.length; i++){
        if(userGuess === currentWord.charAt(i).toLowerCase()){
            reveal[i] = currentWord.charAt(i);
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



//Add hints to each mountain
//Show a picture of the Mountain when guessed correctly
//Show on a map where the Mountain is located
//Add more mountains
