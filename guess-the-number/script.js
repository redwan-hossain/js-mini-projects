"use strict";

let numberDisplayBoxSelector = document.querySelector(".number");
let currentScoreSelector = document.querySelector(".guess");
let scoreSelector = document.querySelector(".score");
let randNum = randNumGenerator();
let gameScore = 20;
let highScore = 0;

function randNumGenerator() {
    return Math.trunc(Math.random() * 20) + 1;
}
const displayMsg = (msg) => {
    document.querySelector(".message").textContent = msg;
};
const updateScore = (score) => {
    scoreSelector.textContent = score;
};
const changeBgStyle = (styleValue) => {
    document.querySelector("body").style.backgroundColor = styleValue;
};

document.querySelector(".check").addEventListener("click", function () {
    const currentInputValue = Number(currentScoreSelector.value);

    if (!currentInputValue) {
        displayMsg("No Number!");
        numberDisplayBoxSelector.textContent = randNum;
    } else if (currentInputValue === randNum) {
        displayMsg("You Win.");
        changeBgStyle("#60b347");

        if (gameScore > highScore) {
            highScore = gameScore;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (currentInputValue !== randNum) {
        if (gameScore > 1) {
            displayMsg(currentInputValue > randNum ? "Too High!" : "Too Low!");
            --gameScore;
            updateScore(gameScore);
        } else {
            displayMsg("Game Over!");
            updateScore(0);
            changeBgStyle("#A25B5B");
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    gameScore = 20;
    scoreSelector.textContent = gameScore;
    currentScoreSelector.value = "";
    displayMsg("Start guessing...");
    numberDisplayBoxSelector.textContent = "?";
    randNum = randNumGenerator();
    changeBgStyle("#222");
});
