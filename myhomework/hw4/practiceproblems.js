var Size = 10;
var randNums = [];
for (var i = 0; i < Size; i++){
  randNums.push(Math.random());
}

function maxArray(randNums){
  var max = -Infinity;
  for (var i = 0; i < Size; i++){
    max = Math.max(randNums[i],max);
  }
  return max;
}
console.log(maxArray(randNums));

function minArray(randNums){
  var min = Infinity;
  for (var i = 0; i < Size; i++){
    min = Math.min(randNums[i],min);
  }
  return min;
}
console.log(minArray(randNums))

function range(randNums){
  var max = -Infinity;
  var min = Infinity;
  for (var i = 0; i < Size; i++){
    max = Math.max(randNums[i],max);
    min = Math.min(randNums[i],min);
  }
  return max-min;
}
console.log(range(randNums));

function mean(randNums){
  var sum = 0;
  for (var i = 0; i < Size; i++){
    var sum += randNums[i];
    }
  }
  return sum/Size;
}
console.log(mean(randNums));

function median(randNums){

}
