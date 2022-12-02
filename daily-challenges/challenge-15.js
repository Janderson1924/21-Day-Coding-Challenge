/* INSTRUCTIONS
Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference. A part of the code has been written for you, and it is important that it stays the same for the tests to work out.

EXAMPLES
Input:

  const launchDate = "2021-12-12"
  const fakeToday = "2021-12-01"
  const missionName = "Moon visit"

Output:

  {
    missionName = "Moon visit",
    daysRemaining = 11
  }


SOLUTION */
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Don't alter this line! Part of Challenge.
  const parsedLaunchDate = new Date(launchDate)
  const timeDifference = Math.abs(today - parsedLaunchDate)
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
  const missionCountdown = {
    missionName,
    daysRemaining
  }
  return missionCountdown
}
