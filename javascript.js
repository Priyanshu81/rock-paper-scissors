/*
make a function that randomly returns one of rock,paper,scissors as computer(also applying uppercase for absolute equality)
make a function that takes the input from the user(also applying uppercase here)
make a case-insensitive comparison function between the return values of these 2 values
return whether the computer or the computer won the round
*/
let n = prompt("How many rounds do you want to play?");

function getUserChoice(){
    /*let userChoice;
    userChoice = prompt("Enter your choice:");
    return userChoice.toUpperCase();*/  
    let userChoice;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            userChoice = button.class;
        });
    });
    return userChoice;
}

function getComputerChoice(){
    let randomValue;
    let randomInt = Math.floor(Math.random() * 3);
    switch(randomInt){
        case 0:
            randomValue = "Rock";
            break;
        case 1:
            randomValue = "Paper";
            break;
        case 2:
            randomValue = "Scissors";
            break;
    }
    console.log(`CPU: I choose ${randomValue}`);
    return randomValue.toUpperCase(); 
}

function getWinner(ComputerChoice, UserChoice){
    if(ComputerChoice === UserChoice){
        return "It's a tie";
    }
    
    if(UserChoice === "ROCK"){
        if(ComputerChoice === "PAPER"){
            return "You lost!";
        }
        if(ComputerChoice === "SCISSORS"){
            return "You won!!";
        }
    }

    if(UserChoice === "PAPER"){
        if(ComputerChoice === "SCISSORS"){
            return "You lost!";
        }
        if(ComputerChoice === "ROCK"){
            return "You won!!";
        }
    }

    if(UserChoice === "SCISSORS"){
        if(ComputerChoice === "ROCK"){
            return "You lost!";
        }
        if(ComputerChoice === "PAPER"){
            return "You won!!";
        }
    }
}

for(let i = 0;i<n;i++){
    let userchoice = null;
    userchoice = getUserChoice();
    if(!userchoice){
        console.log(getWinner(userchoice, getComputerChoice()));
    }
}