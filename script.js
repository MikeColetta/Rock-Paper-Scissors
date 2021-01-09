//Determines if user wants to play again
var playAgain = true

//Determines legal moves
var legalMove = ["R", "P","S"]

//Results
var wins = 0
var losses = 0
var ties = 0

while (playAgain) {

    //Ask player move
    var userMove = prompt("Choose R (Rock), P (Paper), or S (Scissors)!");
    var userMove = userMove.toUpperCase();
    console.log(userMove)

    /*EDIT: CAN YOU HAVE TWO IF STATEMENTS IN A ROW?
    if (userMove !== legalMove) {
        confirm ("Pick R (Rock), P (Paper), or S (Scissors)!");*/

    //If player hits cancel [ADD IF PLAYER DOESN'T TYPE R, P, OR S]
    if (!userMove) {
        alert ("Goodbye!");
    }

    else {
      
    //Get Comp Move
    var randIndex = Math.floor(Math.random() * legalMove.length)
    compMove = legalMove[randIndex];

    console.log(legalMove[randIndex]);

    //Get results and add up score
    result = getResultAndScore(userMove, compMove)

    //alert who won
    alert(result + " Computer chose " + compMove + "!")
    alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties)

    //todo: Play again?
    playAgain = confirm("Do you want to play again?")
}

}

function getResultAndScore(userMove,compMove) {
        if (userMove === "R") {
            if (compMove ==="S") {
                result = "You win!"
                wins++
            }
            
            else if (compMove === "P"){
                result = "You lose!"
                losses++
            }
            
            else {
                result = "You tie!"
                ties++
            }
        }
        
        else if (userMove === "P"){
            if (compMove ==="S") {
                result = "You lose!"
                losses++
            }
            
            else if (compMove === "P"){
                result = "You tie!"
                ties++
            }
            
            else {
                result = "You win!"
                wins++
            }
        }
        
        //User chooses scissors or at this point any other letter. Since this is not fixed yet.
        else {
            if (compMove ==="S") {
                result = "You tie!"
                ties++
            }
            
            else if (compMove === "P"){
                result = "You win!"
                wins++
            }
            
            else {
                result = "You lose!"
                losses++
            }
        }
    
    return result
}     