function isPrime(N) {
  if (N === 1) {
    return false;
  }
  else if (N === 2) {
    return true;
  }
  else {
    for (var i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function listPrimes(L) {
  var primes = [];
  for (var i = 1; primes.length < L; i++) {
    if (isPrime(i) === true) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(listPrimes(100));
