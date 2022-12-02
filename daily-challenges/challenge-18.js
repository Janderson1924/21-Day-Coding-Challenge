/* INSTRUCTIONS
Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes. There is always two lunch choices, and always an odd number of astronauts!

EXAMPLES
Input:

  const listOfChoices = [
    "Chicken Dinner",
    "Chicken Dinner",
    "Chicken Dinner",
    "Ice Cream Sandwich",
    "Ice Cream Sandwich"
  ]

Output:

  Chicken Dinner


SOLUTION */
const chooseLunchWinner = (listOfChoices) => {
  let votes = {}
  for (const choice of listOfChoices) {
    votes[choice] = votes[choice] ? votes[choice] + 1 : 1
  }
  for (const winner of Object.keys(votes)) {
    if (votes[winner] > listOfChoices.length / 2) {
      return winner
    }
  }
}
