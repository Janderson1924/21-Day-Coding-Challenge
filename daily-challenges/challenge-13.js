/* INSTRUCTIONS
Your task is to write a function that will take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true. The method the evaluate the gauge is the same as the third challenge. You may take your function, get inspired by it, or start from scratch in this challenge.

EXAMPLES
Input:

  const gaugeList = [
    {
      current:0.4,
      min:0.1,
      max:0.9
    },
    {
      current:1.2,
      min:0.1,
      max:0.6
    }
  ]

Output:

  false


SOLUTION */
const checkAllGauges = (gaugeList) => {
  let isWithinSpec = false
  gaugeList.forEach((gauge) =>
    gauge.current < gauge.max && gauge.current > gauge.min
      ? (isWithinSpec = true)
      : (isWithinSpec = false)
  )
  return isWithinSpec
}

// SOLUTION 2
const checkAllGauges = (gaugeList) => {
  let isWithinSpec = false
  for (const gauge of gaugeList) {
    if (gauge.current < gauge.max && gauge.current > gauge.min) {
      isWithinSpec = true
    } else isWithinSpec = false
  }
  return isWithinSpec
}
