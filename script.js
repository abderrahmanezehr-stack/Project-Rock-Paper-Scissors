
let getComputerChoice = function() {
    let choice = Math.floor(Math.random() * 3);
    if ( choice == 0 ) return "rock";
    else { if (choice == 1) return "scissors";
          else{ return "paper" ;}
     }
}
let getHumanChoice = function()
{
   const input = window.prompt("Enter your choice" , "Click Here");
   const choix = input.trim().toLowerCase();
   if( choix !== "rock" && choix !== "paper" && choix !== "scissors") 
    return getHumanChoice();
    else return choix;
}
let humanScore = 0 , computerScore = 0;
let playRound = function( humanChoice , computerChoice)
{
   if(humanChoice === computerChoice) console.log("Tie!");
   else switch (humanChoice) {  
   case "paper" : 
    if(computerChoice=== "scissors") { computerScore++;
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}. Human: ${humanScore} | Computer: ${computerScore}`);
      }

    else  {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. Human: ${humanScore} | Computer: ${computerScore}`);
    } break;
    case "scissors" : if(computerChoice === "rock") {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}. Human: ${humanScore} | Computer: ${computerScore}`);
    } else {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. Human: ${humanScore} | Computer: ${computerScore}`);
    }break;
    case "rock" : if(computerChoice === "paper") {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}. Human: ${humanScore} | Computer: ${computerScore}`);
    } else {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. Human: ${humanScore} | Computer: ${computerScore}`);
    }break;
    default : return null; }

}

let playGame = function(){
    let humanSelection  ;
    let computerSelection ;
    for(let i = 1 ; i < 4 ; i++) {
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
         playRound(humanSelection , computerSelection);
           }
         if(humanScore > computerScore) return console.log("You Win");
         else if(humanScore < computerScore) return console.log("computer wins!");
         else return console.log("No one Wins ??");
}
playGame();