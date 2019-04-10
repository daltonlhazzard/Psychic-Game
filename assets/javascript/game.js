
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];



var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

document.onkeypress= function(keyclicked) {
    var guess = keyclicked.key;
    console.log(guess);
    if (guess===computerGuess) {
        wins++;
        alert("You Win!!");
    }
    else {
        guessesLeft--;
        losses++;
    }

   
    document.getElementById("wins").innerHTML = "Wins:"+ wins;
    document.getElementById("lose").innerHTML = "Losses:" + losses;
    document.getElementById("guessesLeft").innerHTML = "guessesLeft:" +guessesLeft;

    if (guessesLeft === 0){
        alert ("You Lose!!!!!!");
    }
}



