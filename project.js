// Pseudo Code
// 1. Deposit some money 
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Allow the user to play again 

const prompt = require("prompt-sync")()


const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount)
  
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log('Invalid deposit amount, try again') 
    } else {
      return numberDepositAmount
    }
  }
}
// while loop continues until the conditionals are met if user types an input that's not a number they will get the message that states invalid and they will get enter a deposit amount until the input is fulfilled properly which in this case a a positive number would need to be entered. (above function ^)


const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ")
    const numberOfLines = parseFloat(lines)
  
    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log('Invalid number of lines, try again') 
    } else {
      return numberOfLines
    }
  }
}


const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ")
    const numberBet = parseFloat(bet)
  
    if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log('Invalid bet, try again') 
    } else {
      return numberBet
    }
  }
}


let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)
//calling the function(s)