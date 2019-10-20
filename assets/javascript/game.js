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

// reset game function 
function resetGame () {

    // generate computer number 
    function generateCompNum (min, max) {
        return computerNum = Math.floor(Math.random() * (max - min) + min);
    }
    generateCompNum(19, 121); 
    console.log(computerNum); 

    // generate new score for buttons
    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;
    console.log(button2); 

    
}

    
    // set inner HTML to computer number 
    // set inner HTML to all four butotns 

// press enter to intiate game 

    // call reset game function 

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

