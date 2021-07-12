
const newTo= [{
    title: "buy bread",
    isDone: false,
}, {
    title: "go to gym",
    isDone: false,
}, {
    title: "go to office",
    isDone: true,
}]


const index = newTodos.findIndex(function(todos, index){
    return todos.title === "go to gym"
})
console.log(index);