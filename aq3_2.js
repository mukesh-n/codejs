array = [70, 60, 60, 80, 90];

function calcAverage(array){
    var total = 0;
    var count = 0;

    array.forEach(function(item, index){
        total = total + item;
        count++;
    });
    return total / count;
}

console.log(clacAverage(array));