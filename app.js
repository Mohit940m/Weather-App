let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "yellow";
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate bot choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        if (userWin) {
            console.log("User wins!");
            msg.innerText = "You win";
            msg.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
        } else {
            console.log("Computer wins!");
            msg.innerText = "You Lose";
            msg.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
        }

        console.log("User Score: " + userScore);
        console.log("Computer Score: " + compScore);
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
