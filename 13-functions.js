


// FUNCTION DECLARION

sayMyFirstName() // => this will WORK => because JS pushes all functions (not in variables!) to the top before executing the file
// sayMyLastName() // => this will NOT WORK because Javascript does not know variable sayMyLastName at this point

// HOISTING => hoist => push all global functions to the TOP of the script 
// normal named function
function sayMyFirstName() {
  console.log( "Rob")
}

// arrpw function
const sayMyLastName = () => {
  console.log( "Ristock")  
}


sayMyLastName()

