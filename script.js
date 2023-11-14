function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
     switch(n) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
    }

    let playerScore = 0;
    let compScore = 0;
     

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'it\'s a tie';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
            (playerSelection == 'paper' && computerSelection == 'scissors') || 
            (playerSelection == 'scissors' && computerSelection == 'rock')) {
        compScore++;
        return 'you lost';
    }
    else if ((playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'scissors' && computerSelection == 'paper') || 
            (playerSelection == 'rock' && computerSelection == 'scissors')) {
        playerScore++;
        return 'you won';
    }
    else {
    return 'you typed in wrong value';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt('Rock, Paper, or Scissors?','')).toLowerCase();
        let computerSelection = getComputerChoice();
        
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        let overallScore = "Player " + playerScore + ' : ' + compScore + " Computer";
        console.log(overallScore);
    }
    if (playerScore > compScore) {
        console.log ('You Won The Game')
    }
    else if (playerScore < compScore) {
        console.log ('You Lost The Game')
    }
    else {
        console.log("It's A Tie");
    }
}

game();

