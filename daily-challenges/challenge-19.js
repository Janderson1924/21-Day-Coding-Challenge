/* INSTRUCTIONS
Your task is to write a function that will take in a list of data entries in the shape of an array of objects. The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays.

EXAMPLES
Input:

  const listOfReceivedData = [
    {type: "astro", data: "Saturn Data"},
    {type: "bio", data: "Space Potatoes"},
    {type: "physics", data: "Lagrange Points"},
    {type: "bio", data: "OMG Tardigrades"},
    {type: "physics", data: "Material reflectivity"},
    {type: "astro", data: "Mercury is not the hottest"},
  ]

Output:

  {
    "astro":  ["Saturn Data", "Mercury is not the hottest"],
    "bio": ["Space Potatoes", "OMG Tardigrades"],
    "physics": ["Lagrange Points", "Material reflectivity"],
  }


SOLUTION */
const organizeData = (receivedData) => {
  const organizedData = {
    'astro': [],
    'bio': [],
    'physics': []
  }
  receivedData.forEach((entry) =>
    entry.type === 'astro'
      ? organizedData.astro.push(entry.data)
      : entry.type === 'bio'
      ? organizedData.bio.push(entry.data)
      : entry.type === 'physics'
      ? organizedData.physics.push(entry.data)
      : null
  )
  return organizedData
}
