
const name = "Marwyn Schuffold"

const firstname = name.substring(0, 6)
// const lastname = name.substring(7, 16) // grab lastname
const lastname = name.substring(7) // grab all from index 7 till the end

// const lastChar = name.substring(7, 3)
const lastNameBySlice = name.slice(-9)

console.log( name.includes("wyn") ) // this will give true, because "wyn" is in string
console.log( name.includes("Obi wan") ) // this will give false, because Obi wan is not in string


console.log( { firstname } )
console.log( { lastname })
console.log( { lastNameBySlice })