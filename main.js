//  program selects the random number
//  user inputs the number then click GO button
//  user will have five tries. The count will be deduced every time they enter the wrong number.
//  if number entered by the user is out of range (1 - 100), output "Enter again". This will NOT deduct the count.
//  if the enters the same number which was already chosen previously, output "You can't enter the same number". This will NOT deduct the count. 
        /*  If the number entered by the user is smaller then random number
                output "Up!"

            If the number entered by the user is greater then random number
                output "Down!"

            If the number entered by the user is equal to the random number
                output "Correct!"
        */
//  When all five tries run out, the game ends. GO button gets disabled. 
//  When the user clicks RESET button, the game resets. 


let computerNum = 0;
let userInput = document.getElementById("userInput"); 
let playButton = document.getElementById("playButton");
let chancesArea = document.getElementById("chancesArea");
let chances = 5;
let resetButton = document.getElementById("resetButton");
let descriptionArea = document.getElementById("descriptionArea");
let history = [];
let gameOver = false;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = "";
});


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log(computerNum);
    gameOver = false;
}


function play() {
    userValue = userInput.value;

    if (userValue > 100 || userValue < 1) {
        descriptionArea.textContent = "Make sure the number is between 1 and 100";
        return;
    }

    if (history.includes(userValue)) {
        descriptionArea.textContent = "Already been entered. Choose a different number";
        return;
    }
    
    history.push(userValue);
    console.log(history);

    chances --;
    chancesArea.textContent = `Chances left: ${chances}`;
    console.log(chances);
    
    if (userValue < computerNum) {
        descriptionArea.textContent = "Up!";
    } else if (userValue > computerNum) {
        descriptionArea.textContent = "Down!"
    } else {
        descriptionArea.textContent = "Correct!"
        chancesArea.textContent = "Congratulation";
        gameOver = true;
    }

    if (chances < 1) {
        gameOver = true;
        descriptionArea.textContent = "Game Over";
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}


function reset() {
    pickRandomNum();
    chances = 5;
    playButton.disabled = false;
    userInput.value = "";
    descriptionArea.textContent = "Enter the number between 1 and 100";
    chancesArea.textContent = "Chances left: 5"
    history = [];
}


pickRandomNum();
        