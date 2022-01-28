
{/* <input type="text" name="wochentag" />  MO, DI, MI, DO, FR, SA, SO  */}

console.log()

// Alle Wochentage => ARRAY of strings
const wochentage = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]
// const numbers = [ 1, 1, 2, 4, 7, 8, 10 ] // Array of numbers

// random
const numWochentage = wochentage.length
const randomIndex = Math.floor( Math.random() * numWochentage  ) // 0..1
const wochentag = wochentage[ randomIndex ]

console.log( { wochentag } )

if( wochentag === "So" ) {
  console.log( "Heute ist Sonntag. Küche putzen oder Geld weg!" )
}
else if( wochentag == "Mo" ) {
  console.log("Heute ist Marwyn mit Bad dran!")
}
else if( wochentag == "Di") {
  console.log("Nathalie muss den Flur saugen!")
}
else {
  console.log( "Glück gehabt! Du bist noch nicht dran mit Putzen" )
}

console.log()
