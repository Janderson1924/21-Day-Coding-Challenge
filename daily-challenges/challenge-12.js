/* INSTRUCTIONS
Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. The function will then parse a message from each object, add it to an array then return the built array. Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.

EXAMPLES
Input:

  const messages = [
    {origin:"MC", message:"Hello!"},
    {origin:"Shuttle", message:"Hey!"},
  ]

Output:

  [
    "MC: Hello!",
    "Shuttle: Hey!"
  ]


SOLUTION */
const parseTranscripts = (messages) => {
  const parsedMessageList = messages.map(
    (message) => `${message.origin}: ${message.message}`
  )
  return parsedMessageList
}
