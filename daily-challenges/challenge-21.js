/* INSTRUCTIONS
Your last (!) task is to write a function that will take in an array of exchanged messages and an array of organized data. The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, missionData with the missionData object. Each message should be parsed using the same structure as the first challenge.

EXAMPLES
Input:

 const exchanges = [
   {origin:"MC", message:"So how is it out there?"},
   {origin:"Shuttle", message:"Oh it's pretty nice!"},
   {origin:"MC", message:"Did you like the challenges?"},
 ]

 const missionData = {
   astro:["...","..."],
   bio:["..."],
   physics:["..."]
 }

Output:

 {
   transcript:
   [
     "MC: So how is it out there?",
     "Shuttle: Oh it's pretty nice!",
     "MC: Did you like the challenges?"
   ],
   missionData:{
     astro:["...","..."],
     bio:["..."],
     physics:["..."]
   }
 }


Add parseMessage function from first challenge! */
const parseMessage = (origin, message) => {
  const parsedMessage = `${origin}: ${message}`
  return parsedMessage
}

// SOLUTION
const parseMissionSummary = (exchanges, missionData) => {
  const missionSummary = {
    transcript: [],
    missionData: {
      astro: missionData.astro,
      bio: missionData.bio,
      physics: missionData.physics
    }
  }
  for (const exchange of exchanges) {
    const parsedMessage = parseMessage(exchange.origin, exchange.message)
    missionSummary.transcript.push(parsedMessage)
  }
  return missionSummary
}
