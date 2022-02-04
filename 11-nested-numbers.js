
// NESTED loops with numbers
// for(let i=100; i<=1000; i = i + 100) {
//   console.log(i)
// }

const matrix = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
]

// outer loop to access OUTER array
for(let i=0; i<matrix.length; i++) {

  const arrChild = matrix[i] 
  // inner loop to access INNER array
  for(let j=0; j<arrChild.length; j++ ) {
    console.log( arrChild[j] )
  }
}


// for(let i=1; i<=2; i++) {
//   console.log(i + "0")
//   for(let j=1; j<=9; j++) {
//     console.log(i+""+j)
//   }
// }


