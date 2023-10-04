// Get references to the necessary HTML elements
const gameSection = document.getElementById('game');
const mainResultSection = document.getElementById('main-result');
const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const resultTextElement = document.getElementById('result-text');
const playAgainButton = document.getElementById("play-again-btn");
const replayButton = document.getElementById("replay-btn");
const winElement = document.querySelector('.win');
const loseElement = document.querySelector('.lose');
const tieElement = document.querySelector('.tie');
const outerCircle = document.querySelector('.outer');
const outerCircle1= document.querySelector('.outer1');
const userScoreElement = document.querySelector(".user-score");
const computerScoreElement = document.querySelector(".computer-score");



let userScore = localStorage.getItem("userScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;


// Function to get a random choice for the computer
function getComputerChoice() {
  const choices = ['rock', 'scissors', 'paper'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the game result
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

// Function to determine the Score Result
function updateScore(result) {
  if (result === "win") {
      userScore++;
  } else if (result === "lose") {
      computerScore++;
  }
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);

  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}


// Function to display the result and update the DOM
function displayResult(userChoice, computerChoice, result) {

userChoiceSpan.innerHTML = `
<div class = "choose ${userChoice}">
<img src = "./assets/icon-${userChoice}.png" alt="${userChoice}"/>
</div>
`;
setTimeout(() => {
computerChoiceSpan.innerHTML = `
<div class = "choose ${computerChoice}">
<img src = "./assets/icon-${computerChoice}.png" alt="${computerChoice}"/>
</div>
`;
//  the next button is add/remove
const nextButton = document.getElementById('next');
nextButton.style.display = 'none';


// the rue button shift if the user win
const rulesButton = document.querySelector('.rules-btn');


  if (result === 'win') {
    winElement.style.display = 'block';
    nextButton.style.display = 'block';
    rulesButton.style.transform = 'translateX(-120px)';
    playAgainButton.style.display = "block";
    outerCircle.style.display = "block";
    outerCircle1.style.display = "none"; 
    updateScore("win");
  } else if (result === 'lose') {
    loseElement.style.display = 'block';
    playAgainButton.style.display = "block";
    outerCircle1.style.display = "block";
    outerCircle.style.display = "none";
    updateScore("lose");
  } else {
    tieElement.style.display = 'block';
    replayButton.style.display = "block";
  }
}, 1000);

  // Show the main-result section and hide the game section
  gameSection.style.display = 'none';
  mainResultSection.style.display = 'block';
}

// Event listeners for the user's choice buttons
const userChoiceButtons = document.querySelectorAll('.choose-btn');

userChoiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the user's choice from the data-choose attribute
    const userChoice = button.getAttribute('data-choose');

    // Get the computer's choice
    const computerChoice = getComputerChoice();

    // Determine the game result
    const result = determineWinner(userChoice, computerChoice);

    // Display the result
    displayResult(userChoice, computerChoice, result);
  });
});

// Event listener for the "Play Again" button
playAgainButton.addEventListener('click', () => {
  // Reset the game by reloading the page
  window.location.reload(true);
});

userScoreElement.textContent = userScore;
computerScoreElement.textContent = computerScore;

























// -------------playagin button added after 1 sec.------

// Function to reset the game and show the "Play Again" button after a delay
function resetGameAndShowPlayAgain() {
  // const playAgainButton = document.querySelector('.play-again-btn');
  playAgainButton.style.display = 'none'; // Hide the button initially
  
  // Reload the page and show the "Play Again" button after a 1-second delay
  setTimeout(() => {
    playAgainButton.style.display = 'block'; // Show the button after the delay
  }, 1000); // 1000 milliseconds (1 second)
}

// Event listeners for the game section buttons
const gameButtons = document.querySelectorAll('.choose-btn');

gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Handle the game logic here
    
    // Call the resetGameAndShowPlayAgain function to reload and show the button after a delay
    resetGameAndShowPlayAgain();
  });
});

// Event listener for the "Play Again" button
// const playAgainButton = document.querySelector('.play-again-btn');
playAgainButton.addEventListener('click', () => {
  // Reset the game by reloading the page
  window.location.reload(true);
});






























// ------------This area is for the rules button ----------------

function toggleRules() {
    let ruleArea = document.getElementById("rule-area");
    if (ruleArea.style.display === "none" || ruleArea.style.display === "") {
      ruleArea.style.display = "block";
    } else {
      ruleArea.style.display = "none";
    }
  }
  
  function closeRules() {
    let ruleArea = document.getElementById("rule-area");
    ruleArea.style.display = "none";
  }
  