function computerPlay() {
    let value = Math.random()*100;
    let option;
    if (value <= 33) { 
        option = "Rock";
    } else if (value > 33 && value < 66) {
        option = "Paper";
    } else { 
        option = "Scissors";
    }
    return option;
}

function cleanInput(word) {
    let lowercaseWord = word.toLowerCase();
    let firstLetter = lowercaseWord.charAt(0);
    let uppercaseFirstLetter = firstLetter.toUpperCase();

    console.log(lowercaseWord.replace(firstLetter, uppercaseFirstLetter));
    return lowercaseWord.replace(firstLetter, uppercaseFirstLetter);
}

function play(playerSelection, computerSelection) {
    let outcome;
    
    switch (true) {
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            outcome = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case (playerSelection === "Scissors" && computerSelection === "Rock"):
        case (playerSelection === "Rock" && computerSelection === "Paper"):
        case (playerSelection === "Paper" && computerSelection === "Scissors"):
            outcome = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case (playerSelection === computerSelection):
            outcome = `You Tied! ${playerSelection} ties with ${computerSelection}`;
            break;
        default:
            console.log("Oh no, something went horribly wrong!");
    }

    return outcome;
}

function game(){
    for (let i = 1 ; i <= 5 ; i++){ 
        console.log(`Round ${i}:`);

        let playerSelection = cleanInput(prompt("Enter your choice:"));
        while (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") { 
            playerSelection = cleanInput(prompt("Incorrect choice. Enter a valid choice:"));
        } 
        let computerSelection = computerPlay();
        

        console.log(`You chose: ${playerSelection}.\nThe computer chose: ${computerSelection}.`);

        let result = play(playerSelection, computerSelection);
        
        console.log(result);
    }
}