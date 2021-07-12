const fruitsArray = [{
    name: "apple",
    color: "red",
},{
    name: "grapes",
    color: "green",
},{
    name: "mango",
    color: "yellow",
}]

const fruits = fruitsArray.findIndex(function(fruit, fruits){
    console.log(fruitsArray)
    return fruit.color === "yellow"
    
})
console.log(fruits)