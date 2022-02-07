
console.log()

console.log("Willkommen: Hallo Dudes")

let undso = "Ich bin undso"
const undosweiter = "Ich bin undsoweiter"

// Console.log is a FUNCTION ! => erkennt man immer an den runden Klammern ()
console.log() // create empty line

// 1) Basic String operations
console.log( "Hello " + undso + " und hier gehts weiter " + undosweiter )
console.log( `Hello ${undso} und hier gehts weiter ${undosweiter}`)
console.log( undso, undosweiter )

console.log( undso.concat(undosweiter) ) // => undso + undsoweiter = undsoundsoweiter

const somethingNew = "Hallo" + 20 
const somethingElse =  1+2 //"1" + "2"

console.log( { somethingElse } )


// 2) Math

// Method = Function

const numby = 1.4 // 2

const numbyRounded = Math.round( numby ) // call a function, execute a function. numby = parameter / argument
console.log( { numbyRounded } ) // {} = geschweifte Klammern => curly braces

const numbyFloored = Math.floor( numby ) // floor rounds to the floor => DOWN => example: 1.5 => 1
console.log( { numbyFloored } ) // => 1

const numbyCeiled = Math.ceil( numby ) // ceil rounds to the ceiling => UP => example: 1.5 => 2
console.log( { numbyCeiled })

const aLotOfDigits = 1.4555555 // => 1.46
const roundedTo2Digits = aLotOfDigits.toFixed(2) // creates a string
console.log( { roundedTo2Digits } )

// parseFloat converts string to NUMBER (with digits) => so we can calculate with that sh*t
const result = 10 + parseFloat( roundedTo2Digits ) // 10 + 1.46 => 11.46
console.log( { result } )

// const numbyRandom = Math.random()  // Generates something between: 0..1
const numbyRandom = Math.round( Math.random() * 10)  // Generates something between: 1..10
console.log( { numbyRandom } )


// Integer & Float
const parsedInt = parseInt( "10.8aaaa" ) // parseInt does NOT round at all, it just plucks out the first whole number
const parsedFloat = parseFloat( "1.4" )

console.log( { parsedInt }) // Integer => FULL / Whole Numbers 1,2,3,100
console.log( { parsedFloat }) // FLOAT => Floating numbers with digits after comma, 1.45, 2.88777

console.log()
