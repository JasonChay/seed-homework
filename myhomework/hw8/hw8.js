function isPrime(N){
  if (N < 1){
    return false;
  }
  else if (N === 1){
    return false;
  }
  else if (N === 2){
    return true;
  }
  else{
    for (var i = 2; i <= Math.sqrt(N); i++){
      if (N % i === 0){
        return false;
      }
    }
    return true;
  }
}

function reverse(arr){
  const length = arr.length
  var ex = []
  for (var i = 0; i < length; i++){
    ex.push(arr.pop());
  }
  return ex;
}
var a = [3,1,6,4,7];
console.log(reverse(a));

function pow(base, exp){
  var a = 1;
  for (var i = 1; i <= exp; i++){
    a*=base;
  }
  return a;
}

var a = [1,2,3,4];
var b = [1,2,3,4];
function deepCompare(arr_a, arr_b){
  if (arr_a.length !== arr_b.length){
    return false;
  }
  const length = arr_a.length;
  for (var i = 0; i < length; i++){
    if (arr_a[i] === arr_b[i]){
      return true;
    }
    else {
      return false;
    }
  }
}
