/* INSTRUCTIONS
Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point. Each object contains the altitude in meters, and a time stamp in seconds.

EXAMPLES
Input:

const firstPosition = {
  time: 1637074462,
  altitude: 1100
}
const secondPosition = {
  time: 1637074558,
  altitude: 2200
}

Output:

11.5


SOLUTION */
const getAverageSpeed = (firstPosition, secondPosition) => {
  const altDifference = secondPosition.altitude - firstPosition.altitude
  const timeDifference = secondPosition.time - firstPosition.time
  const averageSpeed = Math.round((altDifference / timeDifference) * 10) / 10
  return averageSpeed
}
