
const names = ["Zayn", "Justin", "Ariana", "Taylor", "Harry"]

console.log(names.indexOf("Ariana"))

const removeElement = "Ariana"

const resultingArray = names.filter(el => el !== removeElement)

console.log(resultingArray)



//const index = names.findIndex(el => el === removeElement)
//const resultingArray = [...names.slice(0, index, ...names.slice(index + 4))]
//console.log(resultingArray)

