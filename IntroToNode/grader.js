function averageSum(scores){
    var total = 0;
    scores.forEach(function(score){
         total += score;
    })
    var avg =total/scores.length;
    return Math.round(avg);
}


var scores = [2, 4, 6, 8]
console.log(averageSum(scores));

var scores = [10, 20, 30, 40];
console.log(averageSum(scores));