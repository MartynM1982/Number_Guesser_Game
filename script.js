let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// This function will be called at the start of each new round in order to generate the new secret target number between 0 and 9.
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  };
// This function will be called each round to determine which guess is closest to the target number.
  const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
  }
  function compareGuesses(userNum, computerNum, targetNum) {
    if (userNum < 0 || userNum > 9) {
      alert('Number out of range!');
      return;
    }
    if (
      getAbsoluteDistance(targetNum, userNum) < getAbsoluteDistance(targetNum, computerNum) ||
      getAbsoluteDistance(targetNum, userNum) === getAbsoluteDistance(targetNum, computerNum)
    ) {
      return true;
    } else {
      return false;
    }
  }
// This function will be used to correctly increase the winner’s score after each round.
  const updateScore = function(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
  }
  
  const advanceRound = () => {
    currentRoundNumber++;
  }

