// NESTED info
const students = [
  // "Alaa", "Hamideh" // flat ARRAY
  { name: "Alaa", hobbies: [ 'Coding', 'Procrastinating' ] }, // more info for each item!
  { name: "Rami", hobbies: [ 'Schwimmen', "Coding", "Fishing" ] }, // more info for each item!
]

// console.log( students )

// looping through nested array
for(let i=0; i<students.length; i++) {
  let student = students[i]
  console.log( student.name )

  // loop for NESTED array (child array)
  for(let j=0; j< student.hobbies.length; j++ ) {
    console.log( "--", student.hobbies[j] )
  }
}


// const pizzas = [
//   "Hawaii", "Funghi"
// ]


const pizzas = [
  { name: "Hawaii", price: 5.99, image: "http://images.com/hawaii" },
  { name: "Funghi", price: 6.99, image: "http://images.com/funghi" },
]