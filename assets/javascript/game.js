//Array of possible choices for the random word
var words = ["Rainier", "Baker", "Adams", "Saint Helens", "Glacier", "Hood", "Three Sisters", "Denali", "Everest", "Lhotse"];

//Variables for wins and loses
var wins = 0, loses = 0, guessesLeft = 10;

var guesses = [];

//Getting the random word from the array above and saving it to the console for testing
var currentWord = ranWord();
//console.log(currentWord);

//Getting the hint for the current Word
getHint(currentWord);
currentWins();
currentGuessesLeft();
addToGuesses();

//Setting the initial underscores
var u = under(currentWord);
rewrite(u);

//On keypress event to record what key was pressed
document.onkeypress = function(event){
    var usr = event.which;
    //console.log(usr);
    usr = String.fromCharCode(usr);
    //console.log(usr);
    //userCheck(usr, currentWord, reveal)
    userCheck(usr, currentWord, u);
}

//Function to write the underscores initially and then replace with the letters guessed
function rewrite(currentWord){
    //document.getElementById("theWord").innerHTML = str;
    var word = "";
    for(var i = 0; i < currentWord.length; i++){

        word += currentWord.charAt(i) + "&nbsp";
    }
    //console.log(word);
    document.getElementById("theWord").innerHTML = word;
    //console.log(currentWord);

    //Checking if the game is won
    if(currentWord === this.currentWord){
        this.wins++;
        //console.log(wins);
        currentWins();
    }
}

//Setting the underscores of the unguessed word
function under(currentWord){
    var word = "";
    for (var i = 0; i < currentWord.length; i++){
        word += "_";
    }
    console.log(word);
    return word;
}

// array join
var test  = u;
var CW = makeArray(currentWord);
var newU = makeArray(u);

//Function to check if the user guess is any of the letters that are in the word
function userCheck(userGuess, currentWord, u){
    //console.log(CW);
    //console.log(newU);
    var inWord = false;
    for(var i = 0; i < currentWord.length; i++){
        if(userGuess == CW[i]){
            newU[i] = CW[i];
            test = arrStr(newU);
            inWord = true;
            //console.log(newU);  
            rewrite(test);
        }
    }
    if(inWord === false){
        guesses.push(userGuess);
        guessesLeft--;
        currentGuessesLeft();
        addToGuesses();
    }
}

//Makes a string into an array
function makeArray(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(arr.charAt(i));
    }
    return newArray;
}

//Changes the array back into a string
function arrStr(arr){
    var word = "";
    for(var i = 0; i < arr.length; i++){
        word += arr[i];
    }
    return word;
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
    }else if(currentWord === "Saint Helens"){
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

//DISPLAYING THE WINS LOSES AND THE LETTERS GUESSED FOR THE GAME
function currentWins(){
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

function currentLoses(){
    document.getElementById("loses").innerHTML = "Loses: " + loses;
}

function currentGuessesLeft(){
    document.getElementById("guessesRemaining").innerHTML = "Guesses Left: " + guessesLeft;
}

function addToGuesses(){
    var newGuesses = [];
    for(var i = 0; i < guesses.length; i++){
        newGuesses[i] = guesses[i] + " ";
    }
    //guesses.push(usr);
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + newGuesses;
}
//Show a picture of the Mountain when guessed correctly
//Show on a map where the Mountain is located
//Add more mountains
