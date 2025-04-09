let userScore = 0;
let compScore = 0;
let userScorepara=document.querySelector("#user-score")
let compScorepara=document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("game was draw");
  msg.innerText ="Game Was Draw.Play again?"
  msg.style.backgroundColor="blue"

};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    // console.log("you Win");
    userScore++;
    userScorepara.innerText=userScore
    msg.innerText =`You Win! You ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor ="green"
  } else {
    // console.log("You lose");
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText=`You Lose? ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="red";
  }
};

const playGame = (userChoice) => {
  // console.log("user choice", userChoice);
  //Generate Computer Choice --> Modular
  const compChoice = genComputerChoice();
  // console.log("comp choice", compChoice);
  //Draw Game
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //  rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});
