
// mit freundlichem Sponsoring von Marvin Luther King
function isPrime(zahl) {
  for (let i = 2; i < zahl; i++) {
    if (zahl % i === 0) {
      return false;
    }
  }
  return true;
}

// filtere prime numbers aus array

// first create an empty arra
const numbers = []

// count from 1 to 100
// and push each number into the array
for(let i=1; i<=100; i++) {
  numbers.push( i )
  // prime number => a number which can only be divided by 1 or itself
}

console.log( numbers )


// filter out prime numbers by using filter
const primeNumbers = numbers.filter( (number) => {
  // for each check it is a prime using marvins function
  return isPrime( number ) // true / false
})

console.log( primeNumbers )
