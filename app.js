//Trying flow to find required DOMs
// identify which is the selected button
//assign combinations for selected item and randomly generated
// display result.
/*
You      - Computer
rock     - rock;     //Tie
rock     - paper;    //Computer win
rock     - scissor;  //You win

paper    - rock;     //You win
paper    - paper;    //Tie
paper    - scissors; //Computer win

scissors - rock;     //Computer win
scissors - paper;    //You win
scissors - scissors  //Tie

        <div id="selected_option">
          <p id="user_selected">You selected: Rock</p>
          <p id="computer_selected:">Computer selected: Scissor</p>
          <h3 id="result_display">You won!</h3>
        </div>

*/
const container = document.getElementById("result_box");

const availableSelection = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};
let playerScore = 0;
let computerScore = 0;
function findWinner(playerSelected) {
  //getting inputs from html for
  const userSelected = document.querySelector("#user_selected");
  const compSelected = document.querySelector("#computer_selected");
  const resultDisplay = document.querySelector("#result_display");
  const scoreDisplay = document.querySelector("#score_display");
  const button = document.getElementById(playerSelected);
  button.classList.add("highlight");

  setTimeout(function () {
    button.classList.remove("highlight");
  }, 500);
  let result;
  removeCracker();
  const computerSelected = availableSelection[Math.ceil(Math.random() * 3)];
  if (playerSelected === computerSelected) {
    result = "Its a Tie!";
  } else if (
    (playerSelected === "Rock" && computerSelected === "Paper") ||
    (playerSelected === "Paper" && computerSelected === "Scissors") ||
    (playerSelected === "Scissors" && computerSelected === "Rock")
  ) {
    computerScore += 1;
    console.log(computerScore);
    result = "Computer Won!";
  } else {
    result = "You won!";
    playerScore += 1;
    addCracker();
  }
  //   userSelected.remove();
  userSelected.textContent = ` You selected : ${playerSelected}`;
  compSelected.textContent = ` Computer selected : ${computerSelected}`;

  resultDisplay.textContent = result;
  scoreDisplay.textContent = `Your score : ${playerScore}   Computer score : ${computerScore}`;
}

function removeCracker() {
  const crackerImg = container.querySelector("img");
  if (crackerImg !== null) crackerImg.remove();
}
function addCracker() {
  // Create a new <img> element
  const img = document.createElement("img");
  img.classList.add("cracker_img");
  // Set the 'src' attribute to the image URL
  img.src = "images/cracker.png"; // Replace with the actual image URL
  img.alt = "cracker blowing image"; // Alt text for the image
  // Append the new image to the div with id "imageContainer"
  container.appendChild(img);
}
