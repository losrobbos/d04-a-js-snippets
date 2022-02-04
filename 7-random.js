// Alle Wochentage => ARRAY of strings
const wochentage = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]

const numWochentage = wochentage.length
const randomIndex = Math.floor( Math.random() * numWochentage  ) // 0...6
// const index = Math.round( Math.random() * numWochentage - 1 ) // 0...6

console.log( { randomIndex } )

console.log( wochentage[ randomIndex ] )

// ACCESS array elements by index
// console.log(wochentage[0])
// console.log(wochentage[1])
// console.log(wochentage[2])
// console.log(wochentage[3])
// console.log(wochentage[4])
// console.log(wochentage[5])
// console.log(wochentage[6])