
// 1. **Addition.**
// Schreiben Sie ein Programm, um die Zahlen 1 bis 20 zu addieren.

// EXPECTED OUTPUT = 1+2+3+4+5+...... + 20 => 210

// we need a loop, because we want to do something repeated (adding numbers)

// FOR LOOP => fast immer für ARRAYS

// 1...20

const START_ITEM = 1
const MAX_ITEM = 20 // constants are for configuring stuff ONCE

// const summe = 0 // constant => cannot be changed anymore!
let summe = 0 // let => CHANGABLE => we can change the content

// executes 20 times 
for (let i = START_ITEM; i <= MAX_ITEM; i++) {
  summe += i // add i to the summe variable 
  // summe = summe + i // this is doing the same as the line above 
}
// OUTPUT ??

console.log( "Aufgabe 1 result:", { summe } ) // { summe: 210 }
// console.log( { name: "Rob" })



// 2. **Es befinden sich i Bierflaschen an der Wand.**
// Schreiben Sie ein Programm, das ausgibt: "Es befindet sich 1 Bierflasche an der Wand." "Es befinden sich 2 Bierflaschen an der Wand", bis es fünf Flaschen sind.

// EXPECTED OUTPUT:
// "Es befindet sich 1 Bierflasche an der Wand."
// "Es befindet sich 2 Bierflasche an der Wand."
// "Es befindet sich 3 Bierflasche an der Wand."
// "Es befindet sich 4 Bierflasche an der Wand."
// "Es befindet sich 5 Bierflasche an der Wand."
// for loop => 1 .. i

for( let i=1; i<=5; i++) {
  // console.log( "Es befindet sich", i, "Bierflasche an der Wand." )
  // console.log( "Es befindet sich " + i + " Bierflasche an der Wand." )
  console.log( `Es befindet sich ${ i } Bierflasche an der Wand.` )
}


// let i = 0 // set the start value outside the loop => not used that often => practically never

for( let i = 0; i<5; i++ ) {
  console.log(i)
}