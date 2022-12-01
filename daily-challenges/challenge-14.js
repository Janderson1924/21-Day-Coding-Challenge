/* INSTRUCTIONS
Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the isOn property to true for every switch in the list, and then return the updated array. You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled!

EXAMPLES
Input:

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

Output:

[
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:true
	},
]


SOLUTION */
const switchAllTogglesOn = (toggleList) => {
  for (const toggle of toggleList) {
    toggle.isOn ? toggle.isOn : (toggle.isOn = true)
  }
  return toggleList
}

// SOLUTION 2
const switchAllTogglesOn = (toggleList) => {
  toggleList.forEach((toggle) =>
    toggle.isOn ? toggle.isOn : (toggle.isOn = true)
  )
  return toggleList
}
