function range(start,end,step){
  for (var arr = []; start <= end; start += step){
    arr.push(start);
  }
  return arr;
}
console.log(range(1,10,2));

function sum(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}
console.log(sum([1,2,3,4,5]));

console.log(sum(range(1,10)));
