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

function play(playerSelection, computerSelection) {
    let outcome;
    
    switch (true) {
        case (playerSelection === "Scissors" && computerSelection === "Paper"): 
            outcome = [`You Win! ${playerSelection} cuts ${computerSelection}`, `won`]; /*Scissors cuts paper*/
            break;
        case (playerSelection === "Paper" && computerSelection === "Rock"):
            outcome = [`You Win! ${playerSelection} covers ${computerSelection}`, `won`]; /*Paper covers rock*/
            break
        case (playerSelection === "Rock" && computerSelection === "Lizard"):
            outcome = [`You Win! ${playerSelection} crushes ${computerSelection}`, `won`]; /*Rock crushes lizard*/
            break;
        case (playerSelection === "Lizard" && computerSelection === "Spock"):
            outcome = [`You Win! ${playerSelection} poisons ${computerSelection}`, `won`]; /*Lizard poisons Spock*/
            break;
        case (playerSelection === "Spock" && computerSelection === "Scissors"):
            outcome = [`You Win! ${playerSelection} smashes ${computerSelection}`, `won`]; /*Spock smashes scissors*/
            break;
        case (playerSelection === "Scissors" && computerSelection === "Lizard"):
            outcome = [`You Win! ${playerSelection} decapitates ${computerSelection}`, `won`]; /*Scissors decapitates lizard*/
            break;
        case (playerSelection === "Lizard" && computerSelection === "Paper"):
            outcome = [`You Win! ${playerSelection} eats ${computerSelection}`, `won`]; /*Lizard eats paper*/
            break;
        case (playerSelection === "Paper" && computerSelection === "Spock"):
            outcome = [`You Win! ${playerSelection} disproves ${computerSelection}`, `won`]; /*Paper disproves Spock*/
            break;
        case (playerSelection === "Spock" && computerSelection === "Rock"):
            outcome = [`You Win! ${playerSelection} vaporizes ${computerSelection}`, `won`]; /*Spock vaporizes rock*/
            break;
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
            outcome = [`You Win! ${playerSelection} crushes ${computerSelection}`, `won`]; /*Rock crushes scissors*/
            break;


        case (computerSelection === "Scissors" && playerSelection === "Paper"):
            outcome = [`You Lose! ${computerSelection} cuts ${playerSelection}`, `lost`]; /*Scissors cuts paper*/
            break;
        case (computerSelection === "Paper" && playerSelection === "Rock"):
            outcome = [`You Lose! ${computerSelection} covers ${playerSelection}`, `lost`]; /*Paper covers rock*/
            break;
        case (computerSelection === "Rock" && playerSelection === "Lizard"):
            outcome = [`You Lose! ${computerSelection} crushes ${playerSelection}`, `lost`]; /*Rock crushes lizard*/
            break;
        case (computerSelection === "Lizard" && playerSelection === "Spock"):
            outcome = [`You Lose! ${computerSelection} poisons ${playerSelection}`, `lost`]; /*Lizard poisons Spock*/
            break;
        case (computerSelection === "Spock" && playerSelection === "Scissors"):
            outcome = [`You Lose! ${computerSelection} smashes ${playerSelection}`, `lost`]; /*Spock smashes scissors*/
            break;
        case (computerSelection === "Scissors" && playerSelection === "Lizard"):
            outcome = [`You Lose! ${computerSelection} decapitates ${playerSelection}`, `lost`]; /*Scissors decapitates lizard*/
            break;
        case (computerSelection === "Lizard" && playerSelection === "Paper"):
            outcome = [`You Lose! ${computerSelection} eats ${playerSelection}`, `lost`]; /*Lizard eats paper*/
            break;
        case (computerSelection === "Paper" && playerSelection === "Spock"):
            outcome = [`You Lose! ${computerSelection} disproves ${playerSelection}`, `lost`]; /*Paper disproves Spock*/
            break;
        case (computerSelection === "Spock" && playerSelection === "Rock"):
            outcome = [`You Lose! ${computerSelection} vaporizes ${playerSelection}`, `lost`]; /*Spock vaporizes rock*/
            break;
        case (computerSelection === "Rock" && playerSelection === "Scissors"):
            outcome = [`You Lose! ${computerSelection} crushes ${playerSelection}`, `lost`]; /*Rock crushes scissors*/
            break;
            

        case (playerSelection === computerSelection):
            outcome = [`You Tied! ${playerSelection} ties with ${computerSelection}`, `tied`];
            break;
    }

    return outcome;
}


const buttons = Array.from(document.getElementsByClassName("human-button"));
const resultParagraph = document.getElementById("result");
const computerScore = document.getElementById("computer-score");
const yourScore = document.getElementById("your-score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = play(button.textContent, computerPlay())
        resultParagraph.textContent = result[0];
        if (result[1] === `won`){
            yourScore.textContent =  +yourScore.textContent + 1;
        } else if (result[1] === `lost`){
            computerScore.textContent =  +computerScore.textContent + 1;
        }
    });
});
