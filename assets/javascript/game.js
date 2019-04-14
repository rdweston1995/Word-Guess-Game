//Array of possible choices for the random word
var words = ["Rainier", "Baker", "Adams", "Saint Helens", "Glacier", "Hood", "Three Sisters", "Denali", "Everest", "Lhotse"];

//Variables for wins and loses
var wins = 0, loses = 0, guessesLeft = 10;

var guesses = [];

var clicked = false;

//Getting the random word from the array above and saving it to the console for testing
var currentWord = ranWord();
//console.log(currentWord);

//Getting the hint for the current Word
getHint(currentWord);

//Setting up the Wins/Loses/Guesses
update();

//Setting the initial underscores
var u = under(currentWord);
rewrite(u);

//On keypress event to record what key was pressed
document.onkeypress = function(event){
    var usr = event.which;
    //console.log(usr);
    usr = String.fromCharCode(usr);
    //console.log(usr);
    userCheck(usr, currentWord, u);
}





//Function to write the underscores initially and then replace with the letters guessed
function rewrite(currentWord){

    var word = "";
    for(var i = 0; i < currentWord.length; i++){

        word += currentWord.charAt(i) + "&nbsp";
    }
    //console.log(word);
    document.getElementById("theWord").innerHTML = word;
    //console.log(currentWord);

    //Checking if the game is won
    if(currentWord === this.currentWord){
        wins++;
        update();

        revealImage(currentWord);
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


var test  = u;
var CW = makeArray(currentWord);
var newU = makeArray(u);

//Function to check if the user guess is any of the letters that are in the word
function userCheck(userGuess, currentWord, u){
    update();
    //console.log(CW);
    //console.log(newU);
    var inWord = false;
    for(var i = 0; i < currentWord.length; i++){
        if(userGuess == CW[i]){
            newU[i] = CW[i];
            test = arrStr(newU);
            inWord = true;
            guesses.push(userGuess);
            update();
            //console.log(newU);  
            rewrite(test);
        }
        
    }
    
    if(inWord === false){
        guesses.push(userGuess);
        guessesLeft--;
        if(guessesLeft === 0){
            loses++;

        }      
        update();
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

function update(){
    currentWins();
    currentLoses();
    currentGuessesLeft();
    addToGuesses();
}

//Function to pause the game on a loss or win and wait for the button to be pressed to continue the game
function resetGame(){
    guesses = [];
    guessesLeft = 10;
    currentWord = ranWord();
    getHint(currentWord);
    u = under(currentWord);
    rewrite(u);
    test = u;
    CW = makeArray(currentWord);
    newU = makeArray(u);
    console.log(currentWord);
}

function reset(){ 
    
    resetGame();
    update();
    removeImage();
    
}


//Showing images
function revealImage(currentWord){
    if(currentWord === "Rainier"){
        rainierImage();
    }else if(currentWord === "Saint Helens"){
        stHelenImage();
    }else if(currentWord === "Adams"){
        adamIamge();
    }else if(currentWord === "Glacier"){
        glacierImage();
    }else if(currentWord === "Baker"){
        bakerImage();
    }else if(currentWord === "Hood"){
        hoodImage();
    }else if(currentWord === "Three Sisters"){
        tsImage();
    }else if(currentWord === "Lhotse"){
        lhotseImage();
    }else if(currentWord === "Everest"){
        everestImage();
    }else if(currentWord === "Denali"){
        denaliImage();
    }
}

function removeImage(){
    document.getElementById("oldimg").removeAttribute("src");
    

    document.getElementById("mtnLocation").removeAttribute("src");
    
}

function rainierImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Rainier.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/RainierMap.jpg";  
    document.getElementById("location").appendChild(map);
}

function stHelenImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/StHelens.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/StHelensMap.jpg";
    document.getElementById("location").appendChild(map);
    
}

function adamIamge(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Adams.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/AdamsMap.jpg";
    document.getElementById("location").appendChild(map);
}

function glacierImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Glacier.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/GlacierMap.jpg";
    document.getElementById("location").appendChild(map);
}

function bakerImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Baker.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/BakerMap.jpg";
    document.getElementById("location").appendChild(map);
}

function hoodImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Hood.jpb";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/HoodMap.jpg";
    document.getElementById("location").appendChild(map);
}

function tsImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/ThreeSisters.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/HoodMap.jpg";
    document.getElementById("location").appendChild(map);
}

function lhotseImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Lhotse.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/LhotseMap.jpg";
    document.getElementById("location").appendChild(map);
}

function everestImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Everest.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/EverestMap.jpg";
    document.getElementById("location").appendChild(map);
}

function denaliImage(){
    var img = document.getElementById("oldimg");
    img.src = "assets/images/Denali.jpg";
    document.getElementById("pic").appendChild(img);

    var map = document.getElementById("mtnLocation");
    map.src = "assets/images/DenaliMap.jpg";
    document.getElementById("location").appendChild(map);
}


//Better picture of Everest
//Add more mountains
