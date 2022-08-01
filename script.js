// variables
let playerSelection = "rock";
let computerSelection = "rock"
let round = 0;
let myScore = 0;
let comScore = 0;

//randomly generate rock, paper, scissors
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3); //generate number 0-2
  if (num == 0) {
    console.log(num);
    computerSelection = "rock";
  } else if (num == 1) {
    console.log(num);
    computerSelection = "paper";
  } else if (num == 2) {
    console.log(num);
    computerSelection = "scissor";
  }
}
computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  // tie game
  if (playerSelection == "rock" && computerSelection == "rock") {
    document.getElementById("phrase").innerHTML = "Tie game!";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    document.getElementById("phrase").innerHTML = "Tie game!";
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    document.getElementById("phrase").innerHTML = "Tie game!";
  }

  // win
  if (playerSelection == "rock" && computerSelection == "scissor") {
    document.getElementById("phrase").innerHTML = "You win! Rock beats scissor.";
    myScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("phrase").innerHTML = "You win! Paper beats rock.";
    myScore++;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    document.getElementById("phrase").innerHTML = "You win! Scissor beats paper.";
    myScore++;
  }

  // lose
  if (playerSelection == "rock" && computerSelection == "paper") {
    document.getElementById("phrase").innerHTML = "You lose! Paper beats rock.";
    comScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    document.getElementById("phrase").innerHTML = "You lose! Scissor beats paper.";
    comScore++;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    document.getElementById("phrase").innerHTML = "You lose! Rock beats scissor.";
    comScore++;
  }

  computerSelection = getComputerChoice();
}

function score() {
  if (myScore == 5) {

    // order
    myScore = 0;
    comScore = 0;
    round = 0;
    alert("You win!");
    document.getElementById("phrase") = "";
  } else if (comScore == 5) {

    // order
    myScore = 0;
    comScore = 0;
    round = 0;
    alert("You lost!");
    document.getElementById("phrase") = "";
  } else {
    return;
  }
}

console.log(playRound(playerSelection, computerSelection));

//get user choice of rock, paper, scissors
function selectRock() {
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);

  round++;
  document.getElementById("round").innerHTML = round;
  document.getElementById("myScore").innerHTML = myScore;
  document.getElementById("compScore").innerHTML = comScore;

  console.log(computerSelection);
  console.log(playerSelection);
  score();
}

function selectPaper() {
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);

  round++;
  document.getElementById("round").innerHTML = round;
  document.getElementById("myScore").innerHTML = myScore;
  document.getElementById("compScore").innerHTML = comScore;

  console.log(computerSelection);
  console.log(playerSelection);
  score();
}

function selectScissor() {
  playerSelection = "scissor";
  playRound(playerSelection, computerSelection);

  round++;
  document.getElementById("round").innerHTML = round;
  document.getElementById("myScore").innerHTML = myScore;
  document.getElementById("compScore").innerHTML = comScore;

  console.log(computerSelection);
  console.log(playerSelection);
  score();
}
