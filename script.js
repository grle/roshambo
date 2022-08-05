// variables
let playerSelection = "string";
let computerSelection = "string";
let round = 0;
let myScore = 0;
let comScore = 0;

//randomly generate rock, paper, scissors
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3); //generate number 0-2
  if (num == 0) {
    document.getElementById("computer-rock").style.color = "white";
    document.getElementById("computer-paper").style.color = "black";
    document.getElementById("computer-scissors").style.color = "black";
    document.getElementById("computer-selected").innerHTML = "Selected: Rock";
    return "rock";
  } else if (num == 1) {
    document.getElementById("computer-paper").style.color = "white";
    document.getElementById("computer-rock").style.color = "black";
    document.getElementById("computer-scissors").style.color = "black";
    document.getElementById("computer-selected").innerHTML = "Selected: Paper";
    return "paper";
  } else if (num == 2) {
    document.getElementById("computer-scissors").style.color = "white";
    document.getElementById("computer-rock").style.color = "black";
    document.getElementById("computer-paper").style.color = "black";
    document.getElementById("computer-selected").innerHTML = "Selected: Scissors";
    return "scissor";
  } else {
    console.log("error");
  }
}

function playRound(playerSelection, computerSelection) {
  // tie game
  if (playerSelection == "rock" && computerSelection == "rock") {
    document.getElementById("phrase").innerHTML = "Tie game";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    document.getElementById("phrase").innerHTML = "Tie game";
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    document.getElementById("phrase").innerHTML = "Tie game";
  }

  // win
  if (playerSelection == "rock" && computerSelection == "scissor") {
    document.getElementById("phrase").innerHTML = "You win: Rock beats scissor";
    myScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("phrase").innerHTML = "You win: Paper beats rock";
    myScore++;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    document.getElementById("phrase").innerHTML = "You win: Scissor beats paper";
    myScore++;
  }

  // lose
  if (playerSelection == "rock" && computerSelection == "paper") {
    document.getElementById("phrase").innerHTML = "You lose: Paper beats rock";
    comScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    document.getElementById("phrase").innerHTML = "You lose: Scissor beats paper";
    comScore++;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    document.getElementById("phrase").innerHTML = "You lose: Rock beats scissor";
    comScore++;
  }
}

function score() {
  if (myScore == 5) {
    myScore = 0;
    comScore = 0;
    round = 0;
    alert("You win!");
    document.getElementById("round").innerHTML = round;
    document.getElementById("myScore").innerHTML = myScore;
    document.getElementById("compScore").innerHTML = comScore;
    document.getElementById("phrase").innerHTML = " ";
    document.getElementById("computer-rock").style.color = "black";
    document.getElementById("computer-paper").style.color = "black";
    document.getElementById("computer-scissors").style.color = "black";
  } else if (comScore == 5) {
    myScore = 0;
    comScore = 0;
    round = 0;
    alert("You lost!");
    document.getElementById("round").innerHTML = round;
    document.getElementById("myScore").innerHTML = myScore;
    document.getElementById("compScore").innerHTML = comScore;
    document.getElementById("phrase").innerHTML = " ";
    document.getElementById("computer-rock").style.color = "black";
    document.getElementById("computer-paper").style.color = "black";
    document.getElementById("computer-scissors").style.color = "black";
  } else {
    return;
  }
}

//get user choice of rock, paper, scissors
function selectRock() {
  computerSelection = getComputerChoice();
  playerSelection = "rock";
  document.getElementById("player-selected").innerHTML = "Selected: Rock";
  console.log(computerSelection + " selected by computer");
  console.log(playerSelection + " selected by player");
  playRound(playerSelection, computerSelection);

  round++;
  document.getElementById("round").innerHTML = round;
  document.getElementById("myScore").innerHTML = myScore;
  document.getElementById("compScore").innerHTML = comScore;
  score();
}

function selectPaper() {
  computerSelection = getComputerChoice();
  playerSelection = "paper";
  document.getElementById("player-selected").innerHTML = "Selected: Paper";
  console.log(computerSelection + " selected by computer");
  console.log(playerSelection + " selected by player");
  playRound(playerSelection, computerSelection);

  round++;
  document.getElementById("round").innerHTML = round;
  document.getElementById("myScore").innerHTML = myScore;
  document.getElementById("compScore").innerHTML = comScore;
  score();
}

function selectScissor() {
  computerSelection = getComputerChoice();
  playerSelection = "scissor";
  document.getElementById("player-selected").innerHTML = "Selected: Scissors";
  console.log(computerSelection + " selected by computer");
  console.log(playerSelection + " selected by player");
  playRound(playerSelection, computerSelection);

  round++;
  document.getElementById("round").innerHTML = round;
  document.getElementById("myScore").innerHTML = myScore;
  document.getElementById("compScore").innerHTML = comScore;
  score();
}
