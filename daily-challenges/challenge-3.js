/* INSTRUCTIONS
Making sure that a value is within a specific range is a common task in programming. In this case, the structure given is a gauge object with a current value, a minimum and a maximum. If the current value is between the minimum and maximum, then everything is peachy, if not, we return a message saying that there is trouble. Your task is to create a function that will take the gauge object as a parameter, and will return true if the current value is between the minimum and maximum, and return false if the value is outside those.

EXAMPLES
Input:
  const exampleGauge = {
    current:0.4,
    min:0.1,
    max:0.9
  }

Output:
  true

Input:
  const exampleGauge = {
    current:1.4,
    min:0.1,
    max:0.4
  }

Output:
  false


SOLUTION */
const checkGaugeStatus = (gauge) => {
  if (gauge.current < gauge.max && gauge.current > gauge.min) {
    return true
  } else return false
}
