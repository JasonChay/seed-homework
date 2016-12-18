function isPrime(N){
  for (var i = 2; i <= N; i ++){
    if (N == 1){
      return "Not Prime";
    }
    else if (N == 2){
      return "Prime";
    }
    else if (N % i === 0){
      return "Not Prime";
    }
    else{
      return "Prime";
    }
  }
}
console.log(isPrime(5));
