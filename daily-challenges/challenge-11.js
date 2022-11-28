/* INSTRUCTIONS
Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date property on the first platform with an empty date and then return the platform list. In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.

EXAMPLES
Input:

  const missionDate = "2021-12-12"
  const platformList = [
    {
      name:"Platform A",
      bookDate:"2021-12-11"
    },
    {
      name:"Platform B",
      bookDate:undefined
    },
    {
      name:"Platform C",
      bookDate:undefined
    },
  ]

Output:

  const platformList = [
    {
      name:"Platform A",
      bookDate:"2021-12-11"
    },
    {
      name:"Platform B",
      bookDate:"2021-12-12"
    },
    {
      name:"Platform C",
      bookDate:undefined
    },
  ]


SOLUTION */
const bookFreePlatform = (platformList, missionDate) => {
  let freeBookDate = platformList.find((platform) => !platform.bookDate)
  freeBookDate.bookDate = missionDate
  return platformList
}
