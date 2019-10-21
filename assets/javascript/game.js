// document on load
$(document).ready(function () {

// computerNum variable 
var computerNum; 

// win counter variable 
var winCounter; 

// loss counter variable 
var lossCounter; 

// userNum variable 
var userNum; 

// button variables 
var button1; 
var button2; 
var button3; 
var button4; 

// user score

var userScore = 0; 

// reset game function 
function resetGame () {

    // generate computer number 
    function generateCompNum (min, max) {
        return computerNum = Math.floor(Math.random() * (max - min) + min);
    }
    generateCompNum(19, 121); 
    console.log("Computer Guess:" + computerNum); 

    //set innerHTML to computer number 

    $(".computerGuess").text(computerNum); 

    // generate new score for buttons
    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;

    console.log("button1: " + button1); 
    console.log("button2: " + button2); 
    console.log("button3: " + button3); 
    console.log("button4: " + button4); 

    // set button values to random value 
    $("input.button1").val(button1); 
    $("input.button2").val(button2); 
    $("input.button3").val(button3); 
    $("input.button4").val(button4); 
}

// DELETE Function call below 
resetGame(); 
    
// press enter to intiate game 
$(document).keyup(function(e) {

    var keyPressed = e.keyCode; 

    if (keyPressed == 13) {
    
        resetGame(); 
    
        $(".getStarted").hide(); 
    }

    $(".button1").on("click", function() {
        userScore += button1; 
        console.log("userScore updated "+ userScore);
        $("#yourScore").text(userScore); 
    }); 

    $(".button2").on("click", function() {
        userScore += button2; 
        $("#yourScore").text(userScore); 
    }); 

    $(".button3").on("click", function() {
        userScore += button3; 
        $("#yourScore").text(userScore); 
    }); 

    $(".button4").on("click", function() {
        userScore += button4; 
        $("#yourScore").text(userScore); 
    }); 

}); 


    // on click 
        // if button 1, then display innerhtml for value 
        // if button 2, then display innerhtml for value 
        // if button 3, then display innerhtml for value 
        // if button 4, then display innerhtml for value 

    // if user score equals computer game 
        // win  counter goes up by one
        // update win innerHTML  
        // call reset game (delay by two seconds)

    // if user score score passes computer game 
        // loss counter goes up by one
        // update loss innerHTML
        // call reset game (delay by two seconds)

    
    });  

