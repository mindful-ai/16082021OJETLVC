// To print the prime numbers between a specific range

function checkprime(n){
    var prime = true;
    for(i = 2; i < n; i++){
        if(n % i == 0){
            prime = false;
        }
    }
    return prime;
}

// ---------------------------------------------------

var start = 100;
var end   = 200;
var primes = [];

for(i = start; i <= end; i++){
    if(checkprime(i) == true){
        primes.push(i);
    }
}

console.log('PRIMES : ', primes);