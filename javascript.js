function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}

function getPlayerChoice(){
    let choice = prompt("Choice Rock, Paper or Scissors").toLowerCase()
    return choice
}

function Round(PlayerSelection, ComputerSelection){
    //Player choice == Paper
    if(PlayerSelection === ComputerSelection){
        console.log("A tie!")
        return 2
    }

    if(PlayerSelection === "rock"){
        if(ComputerSelection === "scissors"){
            console.log("You win! Rock beats Scisssors!")
            return 0
        }
        else if(ComputerSelection === "paper"){
            console.log("You lose! Paper beats rock")
            return 1
        }
    }

    else if(PlayerSelection === "paper"){
        if(ComputerSelection === "rock"){
            console.log("You win! Rock beats Scisssors!")
            return 0
        }
        else if(ComputerSelection === "scissors"){
            console.log("You lose! Paper beats rock")
            return 1
        }
    }

    else if(PlayerSelection === "scissors"){
        if(ComputerSelection === "paper"){
            console.log("You win! Rock beats Scisssors!")
            return 0
        }
        else if(ComputerSelection === "rock"){
            console.log("You lose! Paper beats rock")
            return 1
        }
    }

    else{
        while(PlayerSelection != ("rock" || "paper" || "scissors")){
            PlayerSelection = prompt("I dont understand, try again! (Rock, Paper or Scissors)").toLowerCase()
            return Round(PlayerSelection, ComputerSelection)
        }
    }
}

function game(){
    let pc = 0
    let player = 0
    for(let i = 0; i < 5; i++){
        let winner = Round(getPlayerChoice(), getComputerChoice())
        if(winner === 0){
            player += 1
        }
        else if(winner === 1){
            pc += 1
        }
        else if(winner === 2){
            continue
        }
    }

    if(pc > player){
        return `You Lose! Computer ${pc} x ${player} Player`
    }
    else if(pc < player){
        return `You Win! Computer ${pc} x ${player} Player`
    }
    else if(pc === player){
        return `A tie! Computer ${pc} x ${player} Player`
    }
}

console.log(game())