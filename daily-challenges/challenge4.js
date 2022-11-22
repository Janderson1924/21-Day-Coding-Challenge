/* INSTRUCTIONS
Opposites hm? In our daily lives, an opposite can mean multiple things, but in programming, it's different. Opposites can only be used when dealing with logical expressions or booleans. Knowing that the property inside our toggle is called isOn, we can infer that the value attached to it is either true, or false. Create a function that takes in a toggle object and will change the value of the property isOn between true and false and return the updated object. Using the function twice should revert the toggle back to its original value.

EXAMPLES
Input:
  const someToggle = {
    name:"toggleA",
    isOn:false
  }

Output:
  const someToggle = {
    name:"toggleA",
    isOn:true
  }

Input:
  // If ran twice
  const someToggle = {
    name:"toggleB",
    isOn:true
  }

Output:
  const someToggle = {
    name:"toggleB",
    isOn:true
  }


SOLUTION 1 */
const switchToggle = (toggle) => {
  if (toggle.isOn) {
    const toggle = {
      name: 'toggleA',
      isOn: false
    }
    return toggle
  } else {
    const toggle = {
      name: 'toggleA',
      isOn: true
    }
    return toggle
  }
}

// SOLUTION 2
const switchToggle = (toggle) => {
  toggle.isOn ? (toggle.isOn = false) : (toggle.isOn = true)
  return toggle
}
