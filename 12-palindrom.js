
const word = "ôllô" // ollah => hallo = ollah = false

// console.log( hallo[0] ) // aha! a string is also just an array!

// loop over a string
for(let i=0; i<word.length; i++) {
  console.log(word[i])
}

console.log("-----")

// REVERSE a word => simply be reversing the string ARRAY
let reverse = "" // "o" => "ol" => "oll" => "olla" => "ollah"
// count DOWN loop
for(let i= word.length-1; i>=0; i--) {
  // console.log( word[i] )
  reverse += word[i]
}

console.log( word )
console.log( reverse )

// CHECK : ist string == reverse string ?

// handles palindrome 
if( word === reverse ) {
  console.log(`Heyyy, ${word} is a palindrome!`)
}
// handles NOT palindrome
else {
  console.log(`Naaaah, ${word} is not a fuck*** palindrome! Try again`)
}
