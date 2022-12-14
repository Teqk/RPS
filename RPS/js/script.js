// VARIABLES
const picks = [
    {
        id: 1,
        name: "Rock",
        image: "./img/rock.png"
    },
    {
        id: 2,
        name: "Paper",
        image: "./img/paper.png"
    },
    {
        id: 3,
        name: "Scissor",
        image: "./img/scissors.png"
    }]


let playerScore = document.querySelector(".playerScore")
let computerScore = document.querySelector(".computerScore")
let playerpickImg = document.querySelector("#playerpickImg")
let playerpickTxt = document.querySelector("#playerpickTxt")
let computerpickImg = document.querySelector("#computerpickImg")
let computerpickTxt = document.querySelector("#computerpickTxt")
let buttons = document.querySelectorAll(".btn")
let Score = [0, 0]
let randomNumber;



// EVENT LISTENERS
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "Rock") {
            playerpickImg.src = picks[0].image;
            playerpickTxt.textContent = picks[0].name;
        } else if (button.textContent === "Paper") {
            playerpickImg.src = picks[1].image;
            playerpickTxt.textContent = picks[1].name;
        } else if (button.textContent === "Scissor") {
            playerpickImg.src = picks[2].image;
            playerpickTxt.textContent = picks[2].name;
        }
        getComputerpick();
        console.log(Score);
    })
})


// FUNCTIONS
function getComputerpick() {
    computerpickImg.src = "./img/gif.gif"
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 3);
        computerpickImg.src = picks[randomNumber].image;
        computerpickTxt.textContent = picks[randomNumber].name;
        gameRules();
        playerScore.textContent = Score[0];
        computerScore.textContent = Score[1];
        whoWon();
    }, 1000);
}

function gameRules() {
    if (playerpickTxt.textContent === picks[0].name && computerCpickTxt.textContent === picks[1].name) {
        Score[1]++;
    } else if (playerpickTxt.textContent === picks[1].name && computerpickTxt.textContent === picks[2].name) {
        Score[1]++;
    } else if (playerpickTxt.textContent === picks[2].name && computerpickTxt.textContent === picks[0].name) {
        Score[1]++;
    } else if (playerpickTxt.textContent === computerpickTxt.textContent) {
        console.log("draw");
    } else {
        Score[0]++;
    }
}

function whoWon() {
    if (Score[0] === 10) {
        alert("you Win!")
        Score = [0, 0];
    } else if (Score[1] === 10) {
        alert("you Lose!")
        Score = [0, 0];
    }
}