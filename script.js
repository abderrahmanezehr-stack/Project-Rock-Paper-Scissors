
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
   if(humanChoice === computerChoice) resault.textContent = `Tie! Computer score ${computerScore} | human ${humanScore}`;
   else switch (humanChoice) {  
   case "paper" : 
    if(computerChoice === "scissors") { computerScore++;
    resault.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}. Human: ${humanScore} | Computer: ${computerScore}`;
      }

    else  {
        humanScore++;
        resault.textContent =`You win! ${humanChoice} beats ${computerChoice}. Human: ${humanScore} | Computer: ${computerScore}`;
    } break;
    case "scissors" : if(computerChoice === "rock") {
        computerScore++;
        resault.textContent =`Computer wins! ${computerChoice} beats ${humanChoice}. Human: ${humanScore} | Computer: ${computerScore}`;
    } else {
        humanScore++;
        resault.textContent =`You win! ${humanChoice} beats ${computerChoice}. Human: ${humanScore} | Computer: ${computerScore}`;
    }break;
    case "rock" : if(computerChoice === "paper") {
        computerScore++;
        resault.textContent =`Computer wins! ${computerChoice} beats ${humanChoice}. Human: ${humanScore} | Computer: ${computerScore}`;
    } else {
        humanScore++;
        resault.textContent =`You win! ${humanChoice} beats ${computerChoice}. Human: ${humanScore} | Computer: ${computerScore}`;
    }break;
    default : return null;  }
    if( humanScore == 5 || computerScore == 5 ) {
         if(humanScore > computerScore)  resault.textContent = "You win !";
         else  resault.textContent = "PC one (definitly a skill issue)";
}
}
const btn = document.querySelector("#rock");
btn.addEventListener("click" , () => playRound("rock" , getComputerChoice()) );
const btn2 = document.querySelector("#paper");
btn2.addEventListener("click" , () => playRound("paper" , getComputerChoice()) );
const btn3 = document.querySelector("#scissors");
btn3.addEventListener("click" , () => playRound("scissors" , getComputerChoice()) );
const resault = document.querySelector("#h2");
