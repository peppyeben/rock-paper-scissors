


  let btns = document.querySelectorAll(".btn");
  let player = document.getElementById("player");
  let computer = document.getElementById("computer");
  let computerIcon = document.getElementById("computer-choice");
  
  let choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;
  
  player.innerHTML = playerScore;
  computer.innerHTML = computerScore;
  
  
  btns.forEach((btn) => {
    
    btn.addEventListener("click", () => {
      
      let playerChoice = btn.id;
      
      let randomChoice = choices[Math.floor(Math.random() * choices.length)];
      
      computerIcon.classList.values = `fa fa-hand-${randomChoice} fa-3x`;
      
      if (playerChoice == randomChoice) {
        
        computerIcon.classList.value = `fa fa-hand-${randomChoice} fa-3x draw`;
        
        computerScore += 0;
        playerScore += 0;
        
        player.innerHTML = playerScore;
        computer.innerHTML = computerScore;
        
      } else if ((playerChoice == "paper" && randomChoice == "scissors") || (playerChoice == "rock" && randomChoice == "paper") || (playerChoice == "scissors" && randomChoice == "rock")) {
        
        computerIcon.classList.value = `fa fa-hand-${randomChoice} fa-3x red`;
        
        computerIcon.classList.add("red");
        
        computerScore++;
        
        player.innerHTML = playerScore;
        computer.innerHTML = computerScore;
        
      } else if((playerChoice == "scissors" && randomChoice == "paper") || (playerChoice == "paper" && randomChoice == "rock") || (playerChoice == "rock" && randomChoice == "scissors")) {
        
        computerIcon.classList.value = `fa fa-hand-${randomChoice} fa-3x blue`;
        
        playerScore++;
        
        player.innerHTML = playerScore;
        computer.innerHTML = computerScore;
        
      }
      
    });
    
  });