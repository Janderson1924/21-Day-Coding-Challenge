/* INSTRUCTIONS
Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed. Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.

EXAMPLES
Input:

  const exampleEntries = [
    {
      temperature:0,
      weather:"sunny",
      windDirection: "NNE",
      windSpeed:24
    },
    {
      temperature:10,
      weather:"cloudy",
      windDirection: "NNE",
      windSpeed:9
    }
  ]

Output:

  17


SOLUTION */
const averageWindSpeed = (weatherEntries) => {
  const arrayOfSpeeds = []
  const getAllWindSpeeds = weatherEntries.forEach((entry) =>
    arrayOfSpeeds.push(entry.windSpeed)
  )
  const sumOfSpeeds = arrayOfSpeeds.reduce((partialSum, a) => partialSum + a, 0)
  const finalAverage = Math.round(sumOfSpeeds / arrayOfSpeeds.length)
  return finalAverage
}

// SOLUTION 2
const averageWindSpeed = (weatherEntries) => {
  let total = 0
  for (let i = 0; i < weatherEntries.length; i++) {
    total += weatherEntries[i].windSpeed
  }
  const finalAverage = Math.round(total / weatherEntries.length)
  return finalAverage
}
