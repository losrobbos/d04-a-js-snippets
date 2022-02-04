// console.log( 0 + 1 ) // two numbers? AHA! => add them => 1
// console.log( "0" + 15 + 5 )  // one part of formula is a STRING? => JS concatenates stuff!
// console.log( "0" + (15 + 5) )  // one part of formula is a STRING? => JS concatenates stuff!

// "0" + "1" = > will produce: "01"

const strNumber = "15"
const number = 15

// console.log(  strNumber + number ) // => this produces => 1515
// console.log( parseInt( strNumber ) + number ) // => this produces = 30

// trimming stuff

const str = "hallo "
console.log(str, str.length)
console.log(str.trim(), str.trim().length)

const strWikipediaArticle = 
"     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi odit libero consequuntur, pariatur ut facere temporibus adipisci perspiciatis soluta minima eius distinctio, dicta accusantium eos magnam fuga. Maxime, possimus."

console.log( strWikipediaArticle )
console.log( strWikipediaArticle.trim() )