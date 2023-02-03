"use strict";
let numberDisplayBoxSelector = document.querySelector(".number");
let highScoreSelector = document.querySelector(".highscore");
let currentScoreSelector = document.querySelector(".guess");
let checkBtnSelector = document.querySelector(".check");
let againBtnSelector = document.querySelector(".again");
let msgSelector = document.querySelector(".message");
let scoreSelector = document.querySelector(".score");
let bodySelector = document.querySelector("body");
let randNum = randNumGenerator();
let gameScore = 20;
let highScore = 0;
function randNumGenerator() {
    return Math.trunc(Math.random() * 20) + 1;
}
const displayMsg = (msg) => {
    msgSelector.textContent = msg;
};
const updateScore = (score) => {
    scoreSelector.textContent = score;
};
const changeBgStyle = (styleValue) => {
    bodySelector.style.backgroundColor = styleValue;
};
checkBtnSelector.addEventListener("click", function () {
    const currentInputValue = Number(currentScoreSelector.value);
    if (!currentInputValue) {
        displayMsg("No Number!");
        numberDisplayBoxSelector.textContent = String(randNum);
    }
    else if (currentInputValue === randNum) {
        displayMsg("You Win.");
        changeBgStyle("#60b347");
        if (gameScore > highScore) {
            highScore = gameScore;
            highScoreSelector.textContent = String(highScore);
        }
    }
    else if (currentInputValue !== randNum) {
        if (gameScore > 1) {
            displayMsg(currentInputValue > randNum ? "Too High!" : "Too Low!");
            --gameScore;
            updateScore(String(gameScore));
        }
        else {
            displayMsg("Game Over!");
            updateScore("0");
            changeBgStyle("#A25B5B");
        }
    }
});
againBtnSelector.addEventListener("click", function () {
    gameScore = 20;
    scoreSelector.textContent = String(gameScore);
    currentScoreSelector.value = "";
    displayMsg("Start guessing...");
    numberDisplayBoxSelector.textContent = "?";
    randNum = randNumGenerator();
    changeBgStyle("#222");
});
