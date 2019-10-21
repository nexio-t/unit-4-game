// document on load
$(document).ready(function () {

// computerNum variable 
var computerNum; 

// win counter variable 
var winCounter = 0; 

// loss counter variable 
var lossCounter = 0; 

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

    // clear user score 
    $(".score").empty(); 
}

// DELETE Function call below 
resetGame(); 
    

$(document).keyup(function(e) {

    var keyPressed = e.keyCode; 
    
    // press enter to intiate game 
    if (keyPressed == 13) {
    
        resetGame(); 
    
        $(".getStarted").hide(); 
    }

        // if button 1, calculate cumulative score then display innerhtml for value 
        $(".button1").on("click", function() {
            userScore += button1; 
            $("#yourScore").text(userScore); 
        }); 

        // if button 2, calculate cumulative score then display innerhtml for value 
        $(".button2").on("click", function() {
            userScore += button2; 
            $("#yourScore").text(userScore); 
        }); 

        // if button 3, calculate cumulative score then display innerhtml for value
        $(".button3").on("click", function() {
            userScore += button3; 
            $("#yourScore").text(userScore); 
        }); 

        // if button 4, calculate cumulative score then display innerhtml for value
        $(".button4").on("click", function() {
            userScore += button4; 
            $("#yourScore").text(userScore); 
        }); 

        // if user score equals computer game 

        $(".button").on("click", function() {
            if (userScore === computerNum) {

                // win  counter goes up by one
                winCounter++; 
    
                // update win innerHTML
                $("#winsCounter").text(winCounter); 
    
                // call reset game (delay by two seconds)
                setTimeout(function() { resetGame(); }, 1000);
            }; 
    
            if (userScore > computerNum) {
    
                // win  counter goes up by one
                lossCounter++; 
    
                // update win innerHTML
                $("#lossCounter").text(lossCounter); 
    
                // call reset game (delay by two seconds)
                setTimeout(function() { resetGame(); }, 1000);
            }; 
        }); 


      

}); 


        
        
         
         

    

    // if user score score passes computer game 
        // loss counter goes up by one
        // update loss innerHTML
        // call reset game (delay by two seconds)

    
    });  

