
// const students = [] // Alexander Li
const students = ["Tetiana", "Hamideh", "Rami", "Yamen", "Akram", "Rob", "Ahmed"] // Alexander Li

// array methods => find me position of item, so I dont need to know the fucking index
const robIndex = students.findIndex( student => {
  return student === "Rob"
})

console.log( "Hallo".charCodeAt(1) ) // char code == ASCII code

console.log( robIndex )
students.splice( robIndex, 1 ) // kill rob at index wherever it is!

console.log( students )
return



// Most important array methods
// students.find
// students.filter
// students.forEach
// students.map
// students.push
// students.pop
// students.splice

return

console.log( "Vorher: ", students )

// students.splice(-3, 1)

students.splice(0, 0, "Alaa")

console.log("Nachher:", students)

// Replace one item => reserve slot and fill it later
// delete students[2] // deletes item, but KEEPS the space in the array
// students[2] = "New one"

// replace in ONE step
students.splice(3, 1, "Marvin")

console.log( students )

// insert new buddy
students.splice(3, 0, "Nathalie") // insert Nathalie AT index 3 => push every dude further


// delete ONE item starting from position 2
// students.splice(2, 1) // splice => splice off => aussplittern => delete
// delete TWO items starting from position 0
// students.splice(0, 2) // splice => splice off => aussplittern => delete
console.log( "Nachher: ", students )
return

// add "Alexander Li"

// students[6] = "Alexander" // DONT DO THIS !
// students.push( "Alexander Li" )

// send an email to all these studs


// print all students
// !!! DONT DO THIS HERE EVER !!!
// console.log( students[0] )
// console.log( students[1] )
// console.log( students[2] )

// loop

const MAX_INDEX = students.length

for(let i=0; i< MAX_INDEX; i++ ) {
  // console.log( students[i] ) // grab student dynamically from array by index
  console.log("Sending email to " + students[i])
}

