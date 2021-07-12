var array = [70, 60, 60, 80, 90];
var sum = array.reduce(function(a,b){
    return a + b;
}, 0);
console.log(sum)