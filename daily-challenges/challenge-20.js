/* INSTRUCTIONS
Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true. Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.

EXAMPLES
Input:

  const speed = 40
  const missionData = {
    astro:["...","..."],
    bio:["..."],
    physics:["..."]
  }

  const checks = {
    maxSpeed:50,
    minSpeed:20,
    dataEntries:{
      astro:3,
      bio:1,
      physics:1
    }
  }

Output:

  false // Not the same amount of entries


SOLUTION */
const confirmReentryPlans = (speed, missionData, checks) => {
  if (speed > checks.maxSpeed || speed < checks.minSpeed) {
    return false
  } else if (checks.dataEntries.astro !== missionData.astro.length) {
    return false
  } else if (checks.dataEntries.bio !== missionData.bio.length) {
    return false
  } else if (checks.dataEntries.physics !== missionData.physics.length) {
    return false
  } else return true
}
