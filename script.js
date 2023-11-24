let btn = document.querySelectorAll(".btn");
let roundCount = 0;
let ovrresult = document.querySelector('.overall-result');
let rndresult = document.querySelector('.round-result');

let start = document.querySelector(".start");
let gameres = document.querySelector('.game-result');

start.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    roundCount = 0;
    ovrresult.textContent = '';
    rndresult.textContent = '';
    gameres.textContent = '';

   start.textContent = 'Restart Game'
   btn.forEach((item) => {
       item.disabled = false;})
})

let playerScore = 0;
let compScore = 0;

btn.forEach((item) => {
    item.disabled = true;

    item.addEventListener('click', (e) => {
        let playerSelection = e.target.textContent.toLowerCase();
        let computerSelection = getComputerChoice();

        function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
     switch(n) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
        }
        
        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                roundCount +=1;
            return `It Was A Tie In Round # ${roundCount}`;
            }
            else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
                (playerSelection == 'paper' && computerSelection == 'scissors') || 
                (playerSelection == 'scissors' && computerSelection == 'rock')) {
            compScore +=1;
            roundCount +=1;          
            return `You Lost Round #${roundCount}`;
            }
            else if ((playerSelection == 'paper' && computerSelection == 'rock') || 
                (playerSelection == 'scissors' && computerSelection == 'paper') || 
                (playerSelection == 'rock' && computerSelection == 'scissors')) {
            playerScore +=1;
            roundCount +=1;
            return `You Won Round #${roundCount}`;
        }
        
         }

    rndresult.textContent = playRound(playerSelection, computerSelection);

    let overallScore = "Player " + playerScore + ' : ' + compScore + " Computer";

    ovrresult.textContent = overallScore;

    if (playerScore == 5 || compScore == 5){
        btn.forEach((item) => {
            item.disabled = true;})
            if (playerScore == 5) {
                gameres.textContent = 'You Won THE Game'
            }
            else gameres.textContent = 'You Lost THE Game'
     }
    }
    )
}
)







   
     



// function game() {
//         let playerSelection = (prompt('Rock, Paper, or Scissors?','')).toLowerCase();
//         let computerSelection = getComputerChoice();
        
//         console.log("You: " + playerSelection);
//         console.log("Computer: " + computerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//         let overallScore = "Player " + playerScore + ' : ' + compScore + " Computer";
//         console.log(overallScore);
//     }
//     if (playerScore > compScore) {
//         console.log ('You Won The Game')
//     }
//     else if (playerScore < compScore) {
//         console.log ('You Lost The Game')
//     }
//     else {
//         console.log("It's A Tie");
//     }


